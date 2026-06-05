"use client";
import { motion } from "framer-motion";
import { Factory, Wrench, HardHat, Zap, Wind, Building2, ChevronDown } from "lucide-react";
import { useState } from "react";
import Globe3D from "../Globe3D";

const services = [
  { icon: Factory,   title: "Industry 5.0",                        color: "#f5a623", items: ["System Integrations", "IO-Link", "Automation", "IoT", "Intelligent Maintenance", "Robotics", "AI & Software Systems", "Vision Systems"] },
  { icon: Wrench,    title: "Complete Machinery Installation",      color: "#fbbf24", items: ["Floor construction for machinery assembly", "Pipe installations", "Electrical installations & transformers", "Mechanical, electrical & pneumatic connections"] },
  { icon: HardHat,   title: "Mining",                               color: "#d97706", items: ["Mine Ventilation Systems", "Dewatering & Pumping", "Major Component Rebuilds", "Integrated Maintenance", "Mineral Processing Plants", "Energy Efficiency", "Carbon Footprint Reduction", "Mining Machinery"] },
  { icon: Zap,       title: "Energy Solutions for Business",        color: "#f59e0b", items: ["Renewable energy integration", "Solar & wind systems", "Energy efficiency audits", "Carbon footprint reduction", "Decarbonization strategies"] },
  { icon: Wind,      title: "HVAC",                                  color: "#f5a623", items: ["Industrial HVAC design & installation", "Climate control systems", "Maintenance & optimization", "Energy-efficient solutions"] },
  { icon: Building2, title: "Facility Services",                    color: "#fbbf24", items: ["Facility management", "Infrastructure maintenance", "Safety & compliance", "Operations support"] },
];

function ServiceCard({ s, i }: { s: typeof services[0]; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.08, duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
      className="card-hover group cursor-pointer p-5 rounded-2xl border border-[#1e1e1e] bg-[#0d0d0d]"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
          style={{ background: `${s.color}12`, border: `1px solid ${s.color}25` }}>
          <s.icon size={20} style={{ color: s.color }} />
        </div>
        <div className={`w-6 h-6 rounded-full border border-[#2a2a2a] flex items-center justify-center transition-all duration-300 ${open ? "bg-[#f5a623]/10 border-[#f5a623]/40 rotate-180" : ""}`}>
          <ChevronDown size={12} className={open ? "text-[#f5a623]" : "text-slate-600"} />
        </div>
      </div>
      <h3 className="text-white font-black text-sm mb-1 group-hover:text-[#f5a623] transition-colors">{s.title}</h3>
      {!open && <p className="text-slate-700 text-xs">{s.items.length} specializations</p>}
      <div className={`overflow-hidden transition-all duration-500 ${open ? "max-h-64 mt-2" : "max-h-0"}`}>
        <ul className="space-y-1.5">
          {s.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs text-slate-400">
              <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: s.color }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function PageServices({ onNavigate }: { onNavigate: (i: number) => void; currentPage: number; totalPages: number }) {
  return (
    <div className="relative w-full h-full flex items-center overflow-y-auto page-scroll bg-[#080808]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623]/20 to-transparent" />

      {/* Globe decorativo de fondo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-30 pointer-events-none hidden lg:block">
        <Globe3D size={560} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-10 w-full relative">
        {/* Header + Globe lado a lado en desktop */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 mb-7 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#f5a623]/20 bg-[#f5a623]/5 text-[#f5a623] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Experts in <span className="gradient-text">automation</span>
              <br />& technology solutions
            </h2>
            <p className="text-slate-500 text-sm mt-3 max-w-md">
              Integrated solutions across Mexico & USA — from Industry 5.0 to renewable energy.
            </p>
          </motion.div>

          {/* Globe visible en tablet/desktop junto al header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:flex justify-center lg:flex-shrink-0"
          >
            <Globe3D size={220} />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
          {services.map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-6 sm:mt-8"
        >
          <button
            onClick={() => onNavigate(3)}
            className="btn-shine px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#f5a623] text-black font-black uppercase tracking-widest text-xs sm:text-sm hover:bg-[#fbbf24] transition-all shadow-lg shadow-[#f5a623]/20"
          >
            See Our Work →
          </button>
        </motion.div>
      </div>
    </div>
  );
}
