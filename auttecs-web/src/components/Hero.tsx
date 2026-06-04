"use client";
import { ArrowRight, MapPin, ChevronDown } from "lucide-react";
import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center dot-bg overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 70%)" }} />
        {/* Decorative gears */}
        <svg className="absolute -top-16 -right-16 opacity-5 gear-spin" width="300" height="300" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="20" fill="#f5a623" />
          <circle cx="50" cy="50" r="12" fill="#080808" />
          {Array.from({ length: 10 }).map((_, i) => {
            const a = (i * 360) / 10;
            const r = (a * Math.PI) / 180;
            const x = 50 + 30 * Math.cos(r);
            const y = 50 + 30 * Math.sin(r);
            return <rect key={i} x={x - 5} y={y - 6} width={10} height={12} rx={2} fill="#f5a623" transform={`rotate(${a}, ${x}, ${y})`} />;
          })}
        </svg>
        <svg className="absolute -bottom-20 -left-20 opacity-5 gear-spin-reverse" width="250" height="250" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="20" fill="#f5a623" />
          <circle cx="50" cy="50" r="12" fill="#080808" />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * 360) / 8;
            const r = (a * Math.PI) / 180;
            const x = 50 + 30 * Math.cos(r);
            const y = 50 + 30 * Math.sin(r);
            return <rect key={i} x={x - 5} y={y - 6} width={10} height={12} rx={2} fill="#f5a623" transform={`rotate(${a}, ${x}, ${y})`} />;
          })}
        </svg>
        {/* Horizontal lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623]/10 to-transparent" />
        <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623]/8 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="animate-slide-left inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f5a623]/30 bg-[#f5a623]/5 text-[#f5a623] text-xs font-semibold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] pulse-dot" />
            Automation & Technology Solutions
          </div>

          {/* Headline */}
          <div className="animate-slide-left delay-100">
            <h1 className="text-6xl md:text-7xl font-black text-white leading-[0.95] tracking-tight">
              INDUSTRY
            </h1>
            <h1 className="text-6xl md:text-7xl font-black leading-[0.95] tracking-tight shimmer-text">
              5.0
            </h1>
          </div>

          {/* Description */}
          <div className="animate-slide-left delay-200 space-y-3">
            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
              We deliver <span className="text-[#f5a623] font-semibold">end-to-end integrated engineering projects</span>,
              covering all phases from concept development through operation.
            </p>
            <p className="text-slate-500 text-base leading-relaxed max-w-xl">
              Integrating advanced automation, renewable energy systems, and Industry 5.0 technologies
              to optimize asset performance in{" "}
              <span className="text-[#f5a623]">mining</span> and{" "}
              <span className="text-[#f5a623]">heavy industry</span>.
            </p>
          </div>

          {/* CTA */}
          <div className="animate-slide-left delay-300 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="btn-shine group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#f5a623] text-black font-black uppercase tracking-widest text-sm hover:bg-[#fbbf24] transition-all duration-300 shadow-xl shadow-[#f5a623]/25 hover:shadow-[#f5a623]/40 hover:scale-105"
            >
              Schedule Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#333] text-slate-400 font-semibold hover:border-[#f5a623]/50 hover:text-white transition-all duration-300 text-sm uppercase tracking-widest"
            >
              Our Services
              <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
          </div>

          {/* Meta */}
          <div className="animate-slide-left delay-400 flex items-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-1.5">
              <MapPin size={13} className="text-[#f5a623]" />
              México & USA
            </div>
            <span className="w-1 h-1 rounded-full bg-[#333]" />
            <span className="text-[#f5a623]/60">Industry 5.0 Partner</span>
          </div>

          {/* Stats row */}
          <div className="animate-slide-left delay-500 grid grid-cols-3 gap-4 pt-4 border-t border-[#1a1a1a]">
            {[
              { num: "35%", label: "Cost Reduction" },
              { num: "99.8%", label: "Uptime SLA" },
              { num: "2x", label: "Faster Deployment" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-black gradient-text">{s.num}</div>
                <div className="text-xs text-slate-600 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="animate-slide-right delay-200 flex justify-center lg:justify-end">
          <DashboardMockup />
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-[#f5a623] transition-colors group">
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
