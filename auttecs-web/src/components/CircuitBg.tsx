// @ts-nocheck
"use client";
import { useEffect, useRef } from "react";

interface CNode { x: number; y: number; active: boolean; }
interface Edge { a: CNode; b: CNode; progress: number; speed: number; pulse: number; }

export default function CircuitBg() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Build a grid of nodes
    const COLS = 14, ROWS = 8;
    const nodes: CNode[] = [];

    const rebuild = () => {
      nodes.length = 0;
      const w = canvas.width, h = canvas.height;
      const gx = w / COLS, gy = h / ROWS;
      for (let r = 0; r <= ROWS; r++) {
        for (let c = 0; c <= COLS; c++) {
          const jx = (Math.random() - 0.5) * gx * 0.4;
          const jy = (Math.random() - 0.5) * gy * 0.4;
          nodes.push({
            x: c * gx + jx,
            y: r * gy + jy,
            active: Math.random() > 0.35,
          });
        }
      }
    };
    rebuild();
    window.addEventListener("resize", rebuild);

    // Connect nearby active nodes (PCB-style: only horizontal/vertical)
    const buildEdges = (): Edge[] => {
      const edges: Edge[] = [];
      const active = nodes.filter(n => n.active);
      active.forEach(a => {
        active.forEach(b => {
          if (a === b) return;
          const dx = Math.abs(a.x - b.x), dy = Math.abs(a.y - b.y);
          if (dx < canvas.width / COLS * 1.8 && dy < canvas.height / ROWS * 1.8) {
            if (Math.random() > 0.6) {
              edges.push({ a, b, progress: Math.random(), speed: 0.003 + Math.random() * 0.004, pulse: Math.random() });
            }
          }
        });
      });
      return edges.slice(0, 60);
    };

    let edges = buildEdges();
    window.addEventListener("resize", () => { edges = buildEdges(); });

    let raf: number;
    let t = 0;

    const draw = () => {
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Draw edges (circuit traces)
      edges.forEach(e => {
        e.progress = (e.progress + e.speed) % 1;

        const mx = (e.a.x + e.b.x) / 2;
        // PCB-style: go horizontal then vertical
        ctx.beginPath();
        ctx.moveTo(e.a.x, e.a.y);
        ctx.lineTo(mx, e.a.y);
        ctx.lineTo(mx, e.b.y);
        ctx.lineTo(e.b.x, e.b.y);
        ctx.strokeStyle = "rgba(245,166,35,0.08)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Traveling signal dot
        const totalLen = Math.abs(e.b.x - e.a.x) + Math.abs(e.b.y - e.a.y);
        if (totalLen < 10) return;
        const p = e.progress;
        let sx: number, sy: number;
        const seg1 = Math.abs(mx - e.a.x) / totalLen;
        const seg2 = Math.abs(e.b.y - e.a.y) / totalLen;
        if (p < seg1) {
          sx = e.a.x + (mx - e.a.x) * (p / seg1);
          sy = e.a.y;
        } else if (p < seg1 + seg2) {
          sx = mx;
          sy = e.a.y + (e.b.y - e.a.y) * ((p - seg1) / seg2);
        } else {
          sx = mx + (e.b.x - mx) * ((p - seg1 - seg2) / (1 - seg1 - seg2));
          sy = e.b.y;
        }

        // Glow
        const grd = ctx.createRadialGradient(sx, sy, 0, sx, sy, 6);
        grd.addColorStop(0, "rgba(245,166,35,0.9)");
        grd.addColorStop(1, "transparent");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(sx, sy, 6, 0, Math.PI * 2);
        ctx.fill();

        // Dot
        ctx.fillStyle = "rgba(255,220,100,1)";
        ctx.beginPath();
        ctx.arc(sx, sy, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw nodes
      nodes.filter(n => n.active).forEach(n => {
        const pulse = 0.5 + 0.5 * Math.sin(t * 0.02 + n.x * 0.01);
        ctx.fillStyle = `rgba(245,166,35,${0.2 + pulse * 0.25})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Small square pad (PCB style)
        ctx.strokeStyle = `rgba(245,166,35,${0.15 + pulse * 0.1})`;
        ctx.lineWidth = 0.8;
        ctx.strokeRect(n.x - 4, n.y - 4, 8, 8);
      });

      t++;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", rebuild);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}
