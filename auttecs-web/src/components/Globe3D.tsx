// @ts-nocheck
"use client";
import { useEffect, useRef } from "react";

const NODES = [
  { lat: 40.7,  lon: -74.0  }, // New York
  { lat: 19.4,  lon: -99.1  }, // Mexico City
  { lat: 29.8,  lon: -95.4  }, // Houston
  { lat: 51.5,  lon: -0.1   }, // London
  { lat: 48.8,  lon: 2.3    }, // Paris
  { lat: 52.5,  lon: 13.4   }, // Berlin
  { lat: 35.7,  lon: 139.7  }, // Tokyo
  { lat: 1.35,  lon: 103.8  }, // Singapore
  { lat: 31.2,  lon: 121.5  }, // Shanghai
  { lat: -33.9, lon: 18.4   }, // Cape Town
  { lat: -23.5, lon: -46.6  }, // São Paulo
  { lat: 55.7,  lon: 37.6   }, // Moscow
  { lat: 37.8,  lon: -122.4 }, // San Francisco
  { lat: 25.2,  lon: 55.3   }, // Dubai
  { lat: -34.6, lon: -58.4  }, // Buenos Aires
];

// Pairs to draw arcs between
const ARCS = [
  [0, 1], [0, 3], [1, 10], [1, 12],
  [3, 4], [4, 5], [5, 11], [2, 12],
  [6, 8], [7, 8], [7, 13], [9, 3],
  [14, 10], [11, 5], [13, 7],
];

function toRad(d: number) { return d * Math.PI / 180; }

function project(lat: number, lon: number, rotY: number) {
  const la = toRad(lat);
  const lo = toRad(lon) + rotY;
  return {
    x: Math.cos(la) * Math.sin(lo),
    y: -Math.sin(la),
    z: Math.cos(la) * Math.cos(lo),
  };
}

function arcPoints(a: { lat: number; lon: number }, b: { lat: number; lon: number }, rotY: number, steps = 40) {
  const pts = [];
  for (let t = 0; t <= 1; t += 1 / steps) {
    // Spherical linear interpolation (slerp)
    const la = toRad(a.lat + (b.lat - a.lat) * t);
    const lo = toRad(a.lon + (b.lon - a.lon) * t) + rotY;
    // Lift arc above surface
    const lift = 1 + 0.12 * Math.sin(Math.PI * t);
    pts.push({
      x: Math.cos(la) * Math.sin(lo) * lift,
      y: -Math.sin(la) * lift,
      z: Math.cos(la) * Math.cos(lo) * lift,
    });
  }
  return pts;
}

export default function Globe3D({ size = 420 }: { size?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width  = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const R  = size * 0.40;

    let angle = 0;
    let raf: number;
    // Pulsing animation for nodes
    let pulse = 0;

    function draw() {
      ctx.clearRect(0, 0, size, size);

      // ── Atmosphere glow ───────────────────────────────────────
      const atm = ctx.createRadialGradient(cx, cy, R * 0.7, cx, cy, R * 1.25);
      atm.addColorStop(0, "rgba(245,166,35,0.04)");
      atm.addColorStop(0.6, "rgba(245,166,35,0.08)");
      atm.addColorStop(1, "transparent");
      ctx.fillStyle = atm;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.25, 0, Math.PI * 2);
      ctx.fill();

      // ── Latitude lines ────────────────────────────────────────
      for (let lat = -80; lat <= 80; lat += 20) {
        ctx.beginPath();
        let pen = false;
        for (let lon = 0; lon <= 362; lon += 2) {
          const p = project(lat, lon, angle);
          if (p.z < 0) { pen = false; continue; }
          const sx = cx + p.x * R, sy = cy + p.y * R;
          pen ? ctx.lineTo(sx, sy) : ctx.moveTo(sx, sy);
          pen = true;
        }
        const a = Math.abs(lat) === 0 ? 0.25 : 0.12;
        ctx.strokeStyle = `rgba(245,166,35,${a})`;
        ctx.lineWidth = lat === 0 ? 0.8 : 0.5;
        ctx.stroke();
      }

      // ── Longitude lines ───────────────────────────────────────
      for (let lon = 0; lon < 360; lon += 20) {
        ctx.beginPath();
        let pen = false;
        for (let lat = -90; lat <= 90; lat += 2) {
          const p = project(lat, lon, angle);
          if (p.z < 0) { pen = false; continue; }
          const sx = cx + p.x * R, sy = cy + p.y * R;
          pen ? ctx.lineTo(sx, sy) : ctx.moveTo(sx, sy);
          pen = true;
        }
        ctx.strokeStyle = "rgba(245,166,35,0.10)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // ── Arcs between nodes ────────────────────────────────────
      ARCS.forEach(([ai, bi]) => {
        const pts = arcPoints(NODES[ai], NODES[bi], angle);
        const visible = pts.filter(p => p.z > 0);
        if (visible.length < 2) return;

        ctx.beginPath();
        let pen = false;
        pts.forEach(p => {
          if (p.z <= 0) { pen = false; return; }
          const sx = cx + p.x * R, sy = cy + p.y * R;
          pen ? ctx.lineTo(sx, sy) : ctx.moveTo(sx, sy);
          pen = true;
        });

        // Animated dash offset
        ctx.setLineDash([4, 6]);
        ctx.lineDashOffset = -pulse * 0.3;
        ctx.strokeStyle = "rgba(245,166,35,0.35)";
        ctx.lineWidth = 0.8;
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // ── Nodes ─────────────────────────────────────────────────
      NODES.forEach(node => {
        const p = project(node.lat, node.lon, angle);
        if (p.z < 0.05) return;
        const sx = cx + p.x * R;
        const sy = cy + p.y * R;
        const alpha = Math.min(1, p.z * 1.5);
        const pulseFactor = 1 + 0.3 * Math.sin(pulse * 0.05 + node.lon * 0.02);

        // Outer glow ring (pulsing)
        const glowR = 7 * pulseFactor;
        const grd = ctx.createRadialGradient(sx, sy, 0, sx, sy, glowR * 2);
        grd.addColorStop(0, `rgba(245,166,35,${alpha * 0.6})`);
        grd.addColorStop(1, "transparent");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(sx, sy, glowR * 2, 0, Math.PI * 2);
        ctx.fill();

        // Dot
        ctx.fillStyle = `rgba(245,166,35,${alpha})`;
        ctx.beginPath();
        ctx.arc(sx, sy, 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Inner bright center
        ctx.fillStyle = `rgba(255,220,100,${alpha * 0.9})`;
        ctx.beginPath();
        ctx.arc(sx, sy, 1, 0, Math.PI * 2);
        ctx.fill();
      });

      // ── Outer crisp ring ──────────────────────────────────────
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(245,166,35,0.18)";
      ctx.lineWidth = 1;
      ctx.stroke();

      angle += 0.004;
      pulse += 1;
      raf = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(raf);
  }, [size]);

  return (
    <canvas
      ref={ref}
      style={{ width: size, height: size, display: "block" }}
    />
  );
}
