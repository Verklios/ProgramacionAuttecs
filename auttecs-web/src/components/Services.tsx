"use client";
import { Factory, Wrench, HardHat, Zap, Wind, Building2, ChevronDown } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Factory,
    title: "Industry 5.0",
    color: "#f5a623",
    items: ["System Integrations", "IO-Link", "Automation", "Internet of Things (IoT)", "Intelligent Maintenance", "Robotics", "AI & Software Application Systems", "Vision Systems"],
  },
  {
    icon: Wrench,
    title: "Complete Machinery Installation",
    color: "#fbbf24",
    items: ["Construction of floors for machinery assembly", "Pipe installations", "Electrical installations & transformers", "Mechanical, electrical, and pneumatic connections"],
  },
  {
    icon: HardHat,
    title: "Mining",
    color: "#d97706",
    items: ["Mine Ventilation Systems", "Dewatering and Pumping Systems", "Major Component Rebuilds", "Integrated Maintenance Projects", "Mineral Processing Plants", "Energy Efficiency Solutions", "Carbon Footprint Reduction", "Mining Machinery"],
  },
  {
    icon: Zap,
    title: "Energy Solutions for Business",
    color: "#f59e0b",
    items: ["Renewable energy integration", "Solar & wind systems", "Energy efficiency audits", "Carbon footprint reduction", "Decarbonization strategies"],
  },
  {
    icon: Wind,
    title: "HVAC",
    color: "#f5a623",
    items: ["Industrial HVAC design & installation", "Climate control systems", "Maintenance & optimization", "Energy-efficient solutions"],
  },
  {
    icon: Building2,
    title: "Facility Services",
    color: "#fbbf24",
    items: ["Facility management", "Infrastructure maintenance", "Safety & compliance", "Operations support"],
  },
];

function ServiceCard({ s, index }: { s: typeof services[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="card-hover group cursor-pointer p-6 rounded-2xl border border-[#1e1e1e] bg-[#0d0d0d] transition-all duration-400"
      style={{ animationDelay: `${index * 0.08}s` }}
      onClick={() => setOpen(!open)}
    >
      {/* Icon + arrow */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-400 group-hover:scale-110 group-hover:rotate-3"
          style={{ background: `${s.color}12`, border: `1px solid ${s.color}25` }}
        >
          <s.icon size={24} style={{ color: s.color }} />
        </div>
        <div
          className={`w-7 h-7 rounded-full border border-[#2a2a2a] flex items-center justify-center transition-all duration-300 ${open ? "bg-[#f5a623]/10 border-[#f5a623]/40 rotate-180" : ""}`}
        >
          <ChevronDown size={14} className={`transition-colors ${open ? "text-[#f5a623]" : "text-slate-600"}`} />
        </div>
      </div>

      <h3 className="text-white font-black text-base mb-2 tracking-tight group-hover:text-[#f5a623] transition-colors duration-300">
        {s.title}
      </h3>

      {!open && (
        <p className="text-slate-600 text-xs">{s.items.length} specializations — click to expand</p>
      )}

      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-96 mt-3" : "max-h-0"}`}>
        <ul className="space-y-2">
          {s.items.map((item, i) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-slate-400"
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
            >
              <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: s.color }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#080808] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f5a623]/20 bg-[#f5a623]/5 text-[#f5a623] text-xs font-bold uppercase tracking-widest">
            Our Services
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Experts in automation{" "}
            <br />
            <span className="gradient-text">& technology solutions</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            From concept to operation — integrating Industry 5.0 technologies across every project phase.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
