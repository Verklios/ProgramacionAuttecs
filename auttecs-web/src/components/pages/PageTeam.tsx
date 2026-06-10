"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Wrench, Cpu, Zap, HardHat } from "lucide-react";

const departments = [
  {
    id: "mro",
    name: "MRO",
    full: "Maintenance, Repair & Operations",
    color: "#f5a623",
    icon: Wrench,
    photo: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    description: "Elite team specialized in preventive and corrective maintenance for heavy industry. We keep your operations running at peak performance.",
    specialties: ["Predictive Maintenance", "Component Rebuilds", "Emergency Response"],
    members: "12 specialists",
  },
  {
    id: "automation",
    name: "Automation",
    full: "Industry 5.0 & Smart Systems",
    color: "#fbbf24",
    icon: Cpu,
    photo: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
    description: "Our automation engineers design and deploy cutting-edge Industry 5.0 solutions, from IoT integration to AI-powered vision systems.",
    specialties: ["PLC & SCADA Systems", "Robotics & Vision", "IoT Integration"],
    members: "9 engineers",
  },
  {
    id: "energy",
    name: "Energy",
    full: "Renewable Energy & Decarbonization",
    color: "#d97706",
    icon: Zap,
    photo: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    description: "Specialists in renewable energy integration and carbon footprint reduction. We design solar, wind and hybrid systems for industrial facilities.",
    specialties: ["Solar & Wind Systems", "Energy Audits", "Carbon Reduction"],
    members: "7 specialists",
  },
  {
    id: "projects",
    name: "Projects",
    full: "Engineering & Project Management",
    color: "#f59e0b",
    icon: HardHat,
    photo: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    description: "End-to-end project execution from concept to commissioning. Our project managers ensure on-time, on-budget delivery across Mexico and USA.",
    specialties: ["Turnkey Projects", "Civil & Electrical Works", "Commissioning"],
    members: "15 professionals",
  },
];

function FlipCard({ dept, i, onContact }: { dept: typeof departments[0]; i: number; onContact: () => void }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = dept.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1, duration: 0.6 }}
      className="relative cursor-pointer"
      style={{ perspective: "1000px", height: "420px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative w-full h-full transition-all duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ── FRONT ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden border border-[#2a2a2a]"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Photo background */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={dept.photo}
            alt={dept.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
          {/* Gold tint overlay */}
          <div className="absolute inset-0 opacity-20" style={{ background: `linear-gradient(135deg, ${dept.color}40, transparent)` }} />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            {/* Top badge */}
            <div className="flex justify-between items-start">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: `${dept.color}20`, border: `1px solid ${dept.color}50` }}>
                <Icon size={20} style={{ color: dept.color }} />
              </div>
              <div className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                style={{ background: `${dept.color}20`, color: dept.color, border: `1px solid ${dept.color}40` }}>
                {dept.members}
              </div>
            </div>

            {/* Bottom text */}
            <div>
              <h3 className="text-4xl font-black text-white mb-1 tracking-tight">{dept.name}</h3>
              <p className="text-slate-400 text-sm mb-4">{dept.full}</p>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
                style={{ color: dept.color }}>
                <span>View Department</span>
                <ArrowRight size={12} />
              </div>
            </div>
          </div>

          {/* Gold border on hover hint */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent hover:border-[#f5a623]/30 transition-all duration-300 pointer-events-none" />
        </div>

        {/* ── BACK ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden border flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "#0a0a0a",
            borderColor: `${dept.color}40`,
          }}
        >
          {/* Top color bar */}
          <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${dept.color}, transparent)` }} />

          <div className="flex flex-col flex-1 p-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${dept.color}15`, border: `1px solid ${dept.color}30` }}>
                <Icon size={22} style={{ color: dept.color }} />
              </div>
              <div>
                <h3 className="text-white font-black text-xl leading-tight">{dept.name}</h3>
                <p className="text-xs font-medium" style={{ color: dept.color }}>{dept.full}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed mb-5">{dept.description}</p>

            {/* Specialties */}
            <div className="space-y-2 mb-6">
              {dept.specialties.map((s) => (
                <div key={s} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: dept.color }} />
                  <span className="text-slate-300 text-sm">{s}</span>
                </div>
              ))}
            </div>

            {/* Members pill */}
            <div className="mt-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4"
                style={{ background: `${dept.color}10`, color: dept.color, border: `1px solid ${dept.color}25` }}>
                {dept.members}
              </div>

              <button
                onClick={(e) => { e.stopPropagation(); onContact(); }}
                className="w-full py-3 rounded-xl font-black text-sm uppercase tracking-widest text-black transition-all hover:scale-[1.02]"
                style={{ background: dept.color }}
              >
                Contact This Team →
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PageTeam({ onNavigate }: { onNavigate: (i: number) => void; currentPage: number; totalPages: number }) {
  return (
    <div className="relative w-full h-full flex items-center overflow-y-auto page-scroll bg-[#080808]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623]/20 to-transparent" />
      <div className="absolute inset-0 dot-bg pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-10 w-full relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-[#f5a623]/20 bg-[#f5a623]/5 text-[#f5a623] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3">
            Our Team
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            The experts <span className="gradient-text">behind the work</span>
          </h2>
          <p className="text-slate-500 text-sm mt-3">Click any card to meet the department</p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {departments.map((dept, i) => (
            <FlipCard
              key={dept.id}
              dept={dept}
              i={i}
              onContact={() => onNavigate(5)}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <button
            onClick={() => onNavigate(5)}
            className="btn-shine px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#f5a623] text-black font-black uppercase tracking-widest text-xs sm:text-sm hover:bg-[#fbbf24] transition-all shadow-lg shadow-[#f5a623]/20"
          >
            Contact Us →
          </button>
        </motion.div>
      </div>
    </div>
  );
}
