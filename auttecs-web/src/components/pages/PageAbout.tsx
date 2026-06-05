"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CircuitBg from "../CircuitBg";

const values = [
  { name: "Integrity",         desc: "Always doing the right thing.",                  color: "#f5a623" },
  { name: "Audacity",          desc: "Transforming the impossible into opportunities.", color: "#fbbf24" },
  { name: "Effort & Tenacity", desc: "Perseverance to achieve our goals.",             color: "#d97706" },
  { name: "Respect",           desc: "We value every job and every team member.",      color: "#f59e0b" },
  { name: "Flexibility",       desc: "We proactively adapt to change.",                color: "#f5a623" },
];

const stats = [
  { value: 12,   suffix: "+", label: "Years of\nexperience",    color: "#f5a623" },
  { value: 300,  suffix: "+", label: "Projects\ncompleted",     color: "#fbbf24" },
  { value: 80,   suffix: "+", label: "Clients\nserved",         color: "#d97706" },
  { value: 2,    suffix: "",  label: "Countries\nMéxico & USA", color: "#f59e0b" },
];

function AnimatedStat({ value, suffix, label, color, delay }: {
  value: number; suffix: string; label: string; color: string; delay: number;
}) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const steps = 60;
        const duration = 1600;
        let i = 0;
        const timer = setInterval(() => {
          i++;
          setCount(Math.round((i / steps) * value));
          if (i >= steps) clearInterval(timer);
        }, duration / steps);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="relative p-4 sm:p-5 rounded-2xl border border-[#1e1e1e] bg-[#0a0a0a] text-center group overflow-hidden"
    >
      {/* Corner accent */}
      <div className="absolute top-0 left-0 w-8 h-8 rounded-br-2xl"
        style={{ background: `linear-gradient(135deg, ${color}20, transparent)` }} />
      <div className="absolute top-0 left-0 w-px h-6" style={{ background: color, opacity: 0.5 }} />
      <div className="absolute top-0 left-0 h-px w-6" style={{ background: color, opacity: 0.5 }} />

      <div className="text-3xl sm:text-4xl font-black tabular-nums leading-none mb-1"
        style={{ color }}>
        {count}{suffix}
      </div>
      <div className="text-slate-500 text-[10px] sm:text-xs font-medium uppercase tracking-wider leading-tight whitespace-pre-line">
        {label}
      </div>
    </motion.div>
  );
}

export default function PageAbout({ onNavigate }: { onNavigate: (i: number) => void; currentPage: number; totalPages: number }) {
  return (
    <div className="relative w-full h-full flex items-center overflow-y-auto page-scroll bg-[#050505]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623]/30 to-transparent" />

      {/* Circuit board background */}
      <CircuitBg />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-10 w-full relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-[#f5a623]/20 bg-[#f5a623]/5 text-[#f5a623] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3">
            About Us
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Work for you is our{" "}
            <span className="gradient-text">reason for existing</span>
          </h2>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-6">
          {stats.map((s, i) => (
            <AnimatedStat key={s.label} {...s} delay={i * 0.1} />
          ))}
        </div>

        {/* Mission + Vision */}
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          {[
            { letter: "M", title: "Mission", color: "#f5a623",
              text: "To offer our customers the best solutions, services, and products through continuous improvement. We apply advanced technology while developing and innovating products and processes." },
            { letter: "V", title: "Vision",  color: "#d97706",
              text: "To be an integrated company with efficient management, focused on people and their comprehensive development. Fully committed to the growth and success of our clients." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              className="card-hover p-4 sm:p-5 rounded-2xl border border-[#1e1e1e] bg-[#0a0a0a]/80 backdrop-blur-sm flex gap-4"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                <span className="font-black text-lg sm:text-xl" style={{ color: item.color }}>{item.letter}</span>
              </div>
              <div>
                <h3 className="text-white text-lg font-black mb-1">{item.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-6">
          {values.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
              className="card-hover p-3 sm:p-4 rounded-2xl border border-[#1e1e1e] bg-[#0a0a0a]/80 backdrop-blur-sm text-center group"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform"
                style={{ background: `${v.color}12`, border: `1px solid ${v.color}25` }}>
                <span className="text-xs sm:text-sm font-black" style={{ color: v.color }}>{v.name[0]}</span>
              </div>
              <h4 className="text-white font-bold text-[10px] sm:text-xs mb-0.5 leading-tight">{v.name}</h4>
              <p className="text-slate-600 text-[9px] sm:text-xs leading-relaxed hidden sm:block">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center"
        >
          <button
            onClick={() => onNavigate(2)}
            className="btn-shine px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#f5a623] text-black font-black uppercase tracking-widest text-xs sm:text-sm hover:bg-[#fbbf24] transition-all shadow-lg shadow-[#f5a623]/20"
          >
            See Our Services →
          </button>
        </motion.div>
      </div>
    </div>
  );
}
