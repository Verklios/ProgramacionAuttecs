"use client";
import { ArrowRight, CheckCircle } from "lucide-react";
import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center grid-bg overflow-hidden pt-20">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4b4]/6 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0891b2]/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4b4]/30 bg-[#00d4b4]/5 text-[#00d4b4] text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d4b4] pulse-dot" />
            AI Transformation Partner
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            Sistemas{" "}
            <br />
            inteligentes{" "}
            <br />
            que{" "}
            <span className="gradient-text text-glow">recortan</span>
            <br />
            <span className="gradient-text text-glow">fricción operativa.</span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
            Diseñamos e implementamos automatización, software e IA aplicada
            para que tu empresa opere con menos errores, más trazabilidad y
            decisiones más rápidas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#00d4b4] text-[#030b14] font-semibold hover:bg-[#00b89c] transition-all duration-200 shadow-lg shadow-[#00d4b4]/25 hover:shadow-[#00d4b4]/40 hover:scale-105"
            >
              Agendar diagnóstico estratégico
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="flex flex-wrap gap-6">
            {["Diagnóstico sin costo", "Roadmap en 7 días hábiles", "Implementación por etapas"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-400">
                <CheckCircle size={14} className="text-[#00d4b4]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right – Dashboard */}
        <div className="flex justify-center lg:justify-end">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
