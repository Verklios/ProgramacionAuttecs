"use client";
import { Zap, BarChart2, Brain, Link2, Shield, Workflow } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Automatización",
    description:
      "Tareas repetitivas convertidas en flujos auto-ejecutados. Cero errores manuales, máxima velocidad.",
    color: "#00d4b4",
  },
  {
    icon: BarChart2,
    title: "Dashboards",
    description:
      "Visibilidad en tiempo real para dirección. KPIs accionables que reemplazan reportes en Excel.",
    color: "#0891b2",
  },
  {
    icon: Brain,
    title: "IA Aplicada",
    description:
      "Modelos de lenguaje y predicción integrados en tus procesos. Decisiones asistidas por datos.",
    color: "#8b5cf6",
  },
  {
    icon: Link2,
    title: "Integraciones",
    description:
      "Conectamos Excel, ERPs, CRMs y APIs. Tu stack actual comunica con flujo continuo.",
    color: "#f59e0b",
  },
  {
    icon: Workflow,
    title: "Flujos Digitales",
    description:
      "Rediseñamos procesos operativos en flujos digitales trazables, auditables y escalables.",
    color: "#10b981",
  },
  {
    icon: Shield,
    title: "Consultoría Estratégica",
    description:
      "Diagnóstico, roadmap y acompañamiento en tu transformación digital. Sin burocracia.",
    color: "#ef4444",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1a2d4a] bg-[#0a1628] text-[#00d4b4] text-sm font-medium">
            Nuestros servicios
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Todo lo que tu empresa{" "}
            <span className="gradient-text">necesita para escalar</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            No vendemos tecnología por vender. Implementamos lo que mueve la aguja en tu operación.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="card-hover p-6 rounded-2xl border border-[#1a2d4a] bg-[#0a1628] group cursor-pointer"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}
              >
                <s.icon size={22} style={{ color: s.color }} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
