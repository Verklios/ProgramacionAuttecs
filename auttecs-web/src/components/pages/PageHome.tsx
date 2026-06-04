"use client";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import AuttecsLogo from "../AuttecsLogo";
import DashboardMockup from "../DashboardMockup";

const containerVariants = {
  animate: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function PageHome({ onNavigate }: { onNavigate: (i: number) => void; currentPage: number; totalPages: number }) {
  return (
    <div className="relative w-full h-full flex items-center dot-bg overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,166,35,0.07) 0%, transparent 70%)" }} />

      {/* Decorative gear watermarks */}
      <div className="absolute -top-20 -right-20 opacity-[0.04] gear-spin pointer-events-none">
        <AuttecsLogo size={300} />
      </div>
      <div className="absolute -bottom-24 -left-24 opacity-[0.04] gear-spin-reverse pointer-events-none">
        <AuttecsLogo size={240} />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="space-y-7"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f5a623]/25 bg-[#f5a623]/5 text-[#f5a623] text-xs font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] pulse-dot" />
              Automation & Technology Solutions
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-7xl md:text-8xl font-black text-white leading-[0.9] tracking-tight">
              INDUSTRY
            </h1>
            <h1 className="text-7xl md:text-8xl font-black leading-[0.9] tracking-tight shimmer-text">
              5.0
            </h1>
          </motion.div>

          <motion.p variants={itemVariants} className="text-slate-400 text-lg leading-relaxed max-w-lg">
            End-to-end integrated engineering projects — from concept to operation.
            Advanced automation, renewable energy & Industry 5.0 for{" "}
            <span className="text-[#f5a623]">mining</span> and{" "}
            <span className="text-[#f5a623]">heavy industry</span>.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate(4)}
              className="btn-shine group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#f5a623] text-black font-black uppercase tracking-widest text-sm hover:bg-[#fbbf24] transition-all duration-300 shadow-xl shadow-[#f5a623]/25 hover:scale-105"
            >
              Schedule Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate(2)}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#333] text-slate-400 font-semibold hover:border-[#f5a623]/40 hover:text-white transition-all duration-300 text-sm uppercase tracking-widest"
            >
              Our Services
              <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-4 border-t border-[#1a1a1a]">
            {[
              { num: "35%", label: "Cost Reduction" },
              { num: "99.8%", label: "Uptime SLA" },
              { num: "2×", label: "Faster Deployment" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-black gradient-text">{s.num}</div>
                <div className="text-xs text-slate-600 mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-2 text-slate-600 text-sm">
            <MapPin size={13} className="text-[#f5a623]" />
            México & USA
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" as const }}
          className="hidden lg:flex justify-end"
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </div>
  );
}
