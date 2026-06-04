const cases = [
  {
    industry: "Manufactura",
    challenge: "Reportes de producción manuales tardaban 3 horas diarias",
    solution: "Dashboard en tiempo real conectado a ERP + alertas automáticas",
    result: "3h ahorradas/día · 0 errores de captura",
    color: "#00d4b4",
  },
  {
    industry: "Distribución",
    challenge: "Coordinación de rutas y facturas por WhatsApp generaba caos",
    solution: "Bot inteligente + sincronización automática con sistema de facturación",
    result: "40% menos tiempo de coordinación · trazabilidad total",
    color: "#0891b2",
  },
  {
    industry: "Servicios profesionales",
    challenge: "Seguimiento de clientes disperso entre email, Excel y Notion",
    solution: "CRM automatizado con flujos de seguimiento y recordatorios por IA",
    result: "2× más oportunidades seguidas · 30% más conversión",
    color: "#8b5cf6",
  },
  {
    industry: "Retail",
    challenge: "Inventario desincronizado causaba quiebres de stock y pérdidas",
    solution: "Integración ERP-POS con predicción de demanda por IA",
    result: "−60% quiebres de stock · reorden automático",
    color: "#f59e0b",
  },
];

export default function UseCases() {
  return (
    <section id="casos" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1a2d4a] bg-[#0a1628] text-[#00d4b4] text-sm font-medium">
            Casos de uso
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Problemas reales,{" "}
            <span className="gradient-text">soluciones que funcionan</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            No prometemos transformación digital. Entregamos sistemas que operan desde el primer sprint.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {cases.map((c) => (
            <div
              key={c.industry}
              className="card-hover p-6 rounded-2xl border border-[#1a2d4a] bg-[#0a1628] group"
            >
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ background: `${c.color}15`, color: c.color, border: `1px solid ${c.color}30` }}
              >
                {c.industry}
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Problema</div>
                  <p className="text-slate-300 text-sm">{c.challenge}</p>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Solución</div>
                  <p className="text-slate-300 text-sm">{c.solution}</p>
                </div>
                <div
                  className="mt-4 p-3 rounded-xl text-sm font-semibold"
                  style={{ background: `${c.color}10`, color: c.color, border: `1px solid ${c.color}20` }}
                >
                  ✓ {c.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
