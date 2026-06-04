// SVG recreation of the real Auttecs logo:
// Yellow/gold gear with dark gray inner circle and industrial press silhouette
export default function AuttecsLogo({ size = 44, spin = false }: { size?: number; spin?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={spin ? "gear-spin" : ""}
      style={{ flexShrink: 0 }}
    >
      <defs>
        <radialGradient id="gearGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="60%" stopColor="#f5a623" />
          <stop offset="100%" stopColor="#d97706" />
        </radialGradient>
        <radialGradient id="innerGrad" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#555" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        <radialGradient id="ringGrad" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#666" />
          <stop offset="100%" stopColor="#222" />
        </radialGradient>
      </defs>

      {/* ── GEAR BODY ── */}
      {/* Gear teeth — 12 teeth evenly spaced */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 360) / 12;
        const rad = (angle * Math.PI) / 180;
        const cx = 100 + 78 * Math.cos(rad);
        const cy = 100 + 78 * Math.sin(rad);
        return (
          <rect
            key={i}
            x={cx - 11}
            y={cy - 15}
            width={22}
            height={30}
            rx={5}
            fill="url(#gearGrad)"
            transform={`rotate(${angle}, ${cx}, ${cy})`}
          />
        );
      })}

      {/* Main gear disk */}
      <circle cx="100" cy="100" r="68" fill="url(#gearGrad)" />

      {/* ── INNER RING (dark gray) ── */}
      <circle cx="100" cy="100" r="62" fill="url(#ringGrad)" />
      <circle cx="100" cy="100" r="57" fill="url(#innerGrad)" />

      {/* ── INDUSTRIAL PRESS SILHOUETTE ── */}
      {/* Top motor/body */}
      <rect x="84" y="58" width="32" height="20" rx="3" fill="#3a3a3a" />
      {/* Connector block */}
      <rect x="89" y="78" width="22" height="10" rx="2" fill="#4a4a4a" />
      {/* Press arm / ram */}
      <rect x="93" y="88" width="14" height="28" rx="2" fill="#555" />
      {/* Press head / foot */}
      <rect x="85" y="116" width="30" height="8" rx="2" fill="#3a3a3a" />
      {/* Base platform (trapezoid via polygon) */}
      <polygon points="76,124 124,124 118,148 82,148" fill="#404040" />
      {/* Base feet */}
      <rect x="78" y="144" width="16" height="6" rx="2" fill="#333" />
      <rect x="106" y="144" width="16" height="6" rx="2" fill="#333" />
    </svg>
  );
}
