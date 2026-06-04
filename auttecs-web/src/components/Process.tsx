const steps = [
  {
    num: "01",
    title: "Diagnóstico estratégico",
    description:
      "Analizamos tus procesos operativos, detectamos cuellos de botella y oportunidades de automatización. Sin costo.",
    duration: "1–2 días",
  },
  {
    num: "02",
    title: "Roadmap priorizado",
    description:
      "Entregamos un plan de implementación por etapas con ROI estimado, tecnologías recomendadas y timeline.",
    duration: "7 días hábiles",
  },
  {
    num: "03",
    title: "Desarrollo e implementación",
    description:
      "Construimos las soluciones en sprints cortos. Empezamos por el módulo de mayor impacto para ver resultados rápido.",
    duration: "2–6 semanas",
  },
  {
    num: "04",
    title: "Medición y optimización",
    description:
      "Dashboards en vivo para medir el impacto real. Iteramos y expandimos los flujos según lo que funciona.",
    duration: "Continuo",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 bg-[#06101e] relative">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1a2d4a] bg-[#0a1628] text-[#00d4b4] text-sm font-medium">
            Cómo trabajamos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Del diagnóstico a{" "}
            <span className="gradient-text">resultados medibles</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.num} className="relative group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#1a2d4a] to-transparent z-0" />
              )}
              <div className="card-hover p-6 rounded-2xl border border-[#1a2d4a] bg-[#0a1628] h-full relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00d4b4]/10 to-[#0891b2]/10 border border-[#00d4b4]/20 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold gradient-text">{s.num}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{s.description}</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00d4b4]/10 border border-[#00d4b4]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00d4b4]" />
                  <span className="text-[#00d4b4] text-xs font-medium">{s.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
