"use client";
import { Factory, Wrench, HardHat, Zap, Wind, Building2, ChevronDown } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Factory,
    title: "Industry 5.0",
    color: "#00d4b4",
    items: [
      "System Integrations",
      "IO-Link",
      "Automation",
      "Internet of Things (IoT)",
      "Intelligent Maintenance",
      "Robotics",
      "AI & Software Application Systems",
      "Vision Systems",
    ],
  },
  {
    icon: Wrench,
    title: "Complete Machinery Installation Projects",
    color: "#0891b2",
    items: [
      "Construction of floors for machinery assembly",
      "Pipe installations",
      "Electrical installations & transformers",
      "Mechanical, electrical, and pneumatic connections",
    ],
  },
  {
    icon: HardHat,
    title: "Mining",
    color: "#f59e0b",
    items: [
      "Mine Ventilation Systems",
      "Dewatering and Pumping Systems",
      "Major Component Rebuilds",
      "Integrated Maintenance Projects",
      "Mineral Processing Plants",
      "Energy Efficiency Solutions",
      "Carbon Footprint Reduction",
      "Mining Machinery",
    ],
  },
  {
    icon: Zap,
    title: "Energy Solutions for Business",
    color: "#10b981",
    items: [
      "Renewable energy integration",
      "Solar & wind systems",
      "Energy efficiency audits",
      "Carbon footprint reduction",
      "Decarbonization strategies",
    ],
  },
  {
    icon: Wind,
    title: "HVAC",
    color: "#8b5cf6",
    items: [
      "Industrial HVAC design & installation",
      "Climate control systems",
      "Maintenance & optimization",
      "Energy-efficient solutions",
    ],
  },
  {
    icon: Building2,
    title: "Facility Services",
    color: "#ef4444",
    items: [
      "Facility management",
      "Infrastructure maintenance",
      "Safety & compliance",
      "Operations support",
    ],
  },
];

function ServiceCard({ s }: { s: typeof services[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="card-hover p-6 rounded-2xl border border-[#1a2d4a] bg-[#0a1628] group cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}
        >
          <s.icon size={22} style={{ color: s.color }} />
        </div>
        <ChevronDown
          size={16}
          className={`text-slate-500 mt-1 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </div>
      <h3 className="text-white font-semibold text-base mb-3">{s.title}</h3>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}
      >
        <ul className="space-y-1.5 mt-2">
          {s.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: s.color }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
      {!open && (
        <p className="text-slate-500 text-xs mt-1">{s.items.length} specializations — click to expand</p>
      )}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1a2d4a] bg-[#0a1628] text-[#00d4b4] text-sm font-medium">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            You have arrived at the experts in{" "}
            <span className="gradient-text">automation and technology solutions</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From concept to operation — we integrate advanced automation, renewable energy,
            and Industry 5.0 technologies across every project phase.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <ServiceCard key={s.title} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
