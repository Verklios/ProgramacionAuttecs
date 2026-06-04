"use client";
import { motion } from "framer-motion";

const values = [
  { name: "Integrity",          desc: "Always doing the right thing.",                             color: "#f5a623" },
  { name: "Audacity",           desc: "Transforming the impossible into opportunities.",            color: "#fbbf24" },
  { name: "Effort & Tenacity",  desc: "Perseverance to achieve our goals.",                       color: "#d97706" },
  { name: "Respect",            desc: "We value every job and every team member.",                 color: "#f59e0b" },
  { name: "Flexibility",        desc: "We proactively adapt to change.",                           color: "#f5a623" },
];


export default function PageAbout({ onNavigate }: { onNavigate: (i: number) => void; currentPage: number; totalPages: number }) {
  return (
    <div className="relative w-full h-full flex items-center overflow-y-auto bg-[#050505]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623]/30 to-transparent" />
      <div className="absolute inset-0 grid-bg" />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 w-full relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f5a623]/20 bg-[#f5a623]/5 text-[#f5a623] text-xs font-bold uppercase tracking-widest mb-4">
            About Us
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
            Work for you is our{" "}
            <span className="gradient-text">reason for existing</span>
          </h2>
        </motion.div>

        {/* Mission + Vision */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { letter: "M", title: "Mission", color: "#f5a623",
              text: "To offer our customers the best solutions, services, and products through continuous improvement. We apply advanced technology while developing and innovating products and processes." },
            { letter: "V", title: "Vision", color: "#d97706",
              text: "To be an integrated company with efficient management, focused on people and their comprehensive development. Fully committed to the growth and success of our clients." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.65, ease: "easeOut" as const }}
              className="card-hover p-6 rounded-2xl border border-[#1e1e1e] bg-[#0d0d0d] flex gap-4"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                <span className="font-black text-xl" style={{ color: item.color }}>{item.letter}</span>
              </div>
              <div>
                <h3 className="text-white text-xl font-black mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Welcome strip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8 p-6 rounded-2xl border border-[#f5a623]/15 bg-[#f5a623]/5 text-center"
        >
          <p className="text-slate-300 leading-relaxed">
            At <span className="text-[#f5a623] font-bold">AUTTECS</span>, we specialize in cutting-edge automation and technology solutions —
            enhancing efficiency through{" "}
            <span className="text-[#f5a623]">vision systems</span>,{" "}
            <span className="text-[#f5a623]">Manufacturing 5.0</span>, and{" "}
            <span className="text-[#f5a623]">autonomous mobility</span>.
          </p>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {values.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (i + 2) * 0.1, duration: 0.65, ease: "easeOut" as const }}
              className="card-hover p-4 rounded-2xl border border-[#1e1e1e] bg-[#0d0d0d] text-center group"
            >
              <div className="w-10 h-10 rounded-xl mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform"
                style={{ background: `${v.color}12`, border: `1px solid ${v.color}25` }}>
                <span className="text-sm font-black" style={{ color: v.color }}>{v.name[0]}</span>
              </div>
              <h4 className="text-white font-bold text-xs mb-1">{v.name}</h4>
              <p className="text-slate-600 text-xs leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8"
        >
          <button
            onClick={() => onNavigate(2)}
            className="btn-shine px-8 py-3 rounded-full bg-[#f5a623] text-black font-black uppercase tracking-widest text-sm hover:bg-[#fbbf24] transition-all shadow-lg shadow-[#f5a623]/20"
          >
            See Our Services →
          </button>
        </motion.div>
      </div>
    </div>
  );
}
