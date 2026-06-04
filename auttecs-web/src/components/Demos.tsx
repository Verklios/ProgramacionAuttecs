"use client";
import { Play, ArrowRight } from "lucide-react";

const demos = [
  {
    title: "Automatización de facturación",
    description: "Orden recibida → factura generada → enviada al cliente en segundos.",
    tag: "Finanzas · ERP",
    color: "#00d4b4",
  },
  {
    title: "CRM con seguimiento por IA",
    description: "Lead entra → flujo automático de nurturing → alerta al vendedor en el momento correcto.",
    tag: "Ventas · CRM",
    color: "#0891b2",
  },
  {
    title: "Dashboard operativo en vivo",
    description: "Producción, inventario y envíos en una sola pantalla actualizada en tiempo real.",
    tag: "Operaciones",
    color: "#8b5cf6",
  },
];

export default function Demos() {
  return (
    <section id="demos" className="py-24 bg-[#06101e] relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1a2d4a] bg-[#0a1628] text-[#00d4b4] text-sm font-medium">
            Demos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Míralo{" "}
            <span className="gradient-text">antes de decidir</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Demos en vivo de los sistemas más solicitados. Sin registro, sin compromiso.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {demos.map((d) => (
            <div
              key={d.title}
              className="card-hover p-6 rounded-2xl border border-[#1a2d4a] bg-[#0a1628] group cursor-pointer"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${d.color}15`, border: `1px solid ${d.color}30` }}
              >
                <Play size={20} style={{ color: d.color }} />
              </div>
              <div
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium mb-3"
                style={{ background: `${d.color}10`, color: d.color }}
              >
                {d.tag}
              </div>
              <h3 className="text-white font-semibold mb-2">{d.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{d.description}</p>
              <div className="mt-4 flex items-center gap-1 text-[#00d4b4] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Ver demo <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#00d4b4]/40 text-[#00d4b4] font-semibold hover:bg-[#00d4b4]/10 transition-all duration-200"
          >
            Solicitar demo personalizado <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
