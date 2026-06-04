"use client";
import { useEffect, useState } from "react";
import { TrendingUp, Package, Clock, AlertTriangle, CheckCircle, Zap } from "lucide-react";

function AnimatedNumber({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(timer); }
      else setVal(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target]);
  return <span>{prefix}{val.toLocaleString("es-MX")}{suffix}</span>;
}

const automationLogs = [
  { icon: CheckCircle, text: "Orden #4821 → factura emitida automáticamente", delay: 0 },
  { icon: CheckCircle, text: "WhatsApp cliente → ticket creado en CRM", delay: 600 },
  { icon: CheckCircle, text: "Excel inventario → sincronizado con sistema", delay: 1200 },
  { icon: CheckCircle, text: "Alerta: stock bajo en SKU-204", delay: 1800 },
];

export default function DashboardMockup() {
  const [visible, setVisible] = useState([false, false, false, false]);

  useEffect(() => {
    automationLogs.forEach((_, i) => {
      setTimeout(() => {
        setVisible((prev) => { const n = [...prev]; n[i] = true; return n; });
      }, 800 + _.delay);
    });
  }, []);

  return (
    <div className="relative w-full max-w-[620px] animate-float">
      {/* Browser chrome */}
      <div className="rounded-2xl border border-[#1a2d4a] bg-[#0a1628] shadow-2xl shadow-black/60 overflow-hidden glow-teal">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#1a2d4a] bg-[#06101e]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-slate-500 font-mono">auttecs.app / dashboard</span>
          <div className="flex items-center gap-1.5 text-xs text-[#00d4b4]">
            <span className="w-2 h-2 rounded-full bg-[#00d4b4] pulse-dot inline-block" />
            En vivo
          </div>
        </div>

        <div className="p-4 space-y-3">
          {/* KPI cards */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "VENTAS HOY", value: 184520, prefix: "$", icon: TrendingUp, delta: "+12.4%" },
              { label: "ÓRDENES ACTIVAS", value: 247, prefix: "", icon: Package, delta: "+8" },
              { label: "TIEMPO AHORRADO", value: 62, prefix: "", suffix: "h", icon: Clock, delta: "esta semana" },
            ].map((kpi) => (
              <div key={kpi.label} className="bg-[#06101e] rounded-xl p-3 border border-[#1a2d4a]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] text-slate-500 font-medium uppercase tracking-wider">{kpi.label}</span>
                  <kpi.icon size={12} className="text-[#00d4b4]" />
                </div>
                <div className="text-lg font-bold text-white leading-tight">
                  <AnimatedNumber target={kpi.value} prefix={kpi.prefix} suffix={kpi.suffix ?? ""} />
                </div>
                <div className="text-[10px] text-[#00d4b4] mt-0.5">{kpi.delta}</div>
              </div>
            ))}
          </div>

          {/* Chart + Orders */}
          <div className="grid grid-cols-2 gap-2">
            {/* Mini chart */}
            <div className="bg-[#06101e] rounded-xl p-3 border border-[#1a2d4a]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-slate-400">Ventas · últimos 14 días</span>
                <span className="text-[10px] text-[#00d4b4] font-semibold">+22% MoM</span>
              </div>
              <svg viewBox="0 0 200 60" className="w-full h-12">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00d4b4" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#00d4b4" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,50 C20,48 30,42 50,38 C70,34 80,30 100,22 C120,14 140,18 160,10 C170,6 180,4 200,2"
                  fill="none"
                  stroke="#00d4b4"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M0,50 C20,48 30,42 50,38 C70,34 80,30 100,22 C120,14 140,18 160,10 C170,6 180,4 200,2 L200,60 L0,60 Z"
                  fill="url(#chartGrad)"
                />
              </svg>
            </div>

            {/* Orders by status */}
            <div className="bg-[#06101e] rounded-xl p-3 border border-[#1a2d4a]">
              <span className="text-[10px] text-slate-400 block mb-2">Órdenes por estatus</span>
              {[
                { label: "En producción", value: 64, pct: 85, color: "#00d4b4" },
                { label: "Listas para envío", value: 38, pct: 55, color: "#0891b2" },
                { label: "En revisión", value: 22, pct: 35, color: "#f59e0b" },
                { label: "Retrasadas", value: 7, pct: 12, color: "#ef4444" },
              ].map((row) => (
                <div key={row.label} className="mb-1.5">
                  <div className="flex justify-between text-[9px] text-slate-400 mb-0.5">
                    <span>{row.label}</span><span>{row.value}</span>
                  </div>
                  <div className="h-1 rounded-full bg-[#1a2d4a]">
                    <div
                      className="h-1 rounded-full transition-all duration-1000"
                      style={{ width: `${row.pct}%`, background: row.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Automation log + Alert */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#06101e] rounded-xl p-3 border border-[#1a2d4a]">
              <div className="flex items-center gap-1.5 mb-2">
                <Zap size={11} className="text-[#00d4b4]" />
                <span className="text-[10px] text-slate-400">Automatizaciones ejecutadas</span>
                <span className="ml-auto text-[10px] text-slate-500">hoy · 184</span>
              </div>
              <div className="space-y-1.5">
                {automationLogs.map((log, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-1.5 transition-all duration-500 ${
                      visible[i] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                    }`}
                  >
                    <log.icon size={9} className="text-[#00d4b4] mt-0.5 flex-shrink-0" />
                    <span className="text-[9px] text-slate-400 leading-tight">{log.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0d1f0d] rounded-xl p-3 border border-[#f59e0b]/30">
              <div className="flex items-center gap-1.5 mb-2">
                <AlertTriangle size={11} className="text-[#f59e0b]" />
                <span className="text-[10px] text-[#f59e0b] font-semibold">Alertas inteligentes</span>
              </div>
              <p className="text-[9px] text-slate-300 mb-1">3 órdenes con retraso &gt; 48h</p>
              <p className="text-[9px] text-slate-400">Predicción IA: cuello de botella en empaque</p>
              <button className="mt-2 text-[9px] text-[#00d4b4] flex items-center gap-0.5 hover:underline">
                Ver detalle ↗
              </button>
            </div>
          </div>
        </div>

        {/* Bottom AI bar */}
        <div className="mx-4 mb-4 flex items-center gap-2 bg-[#06101e] border border-[#1a2d4a] rounded-xl px-3 py-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#00d4b4] to-[#0891b2] flex items-center justify-center flex-shrink-0">
            <Zap size={12} className="text-[#030b14]" />
          </div>
          <div>
            <div className="text-[9px] text-slate-500">Auttecs IA</div>
            <div className="text-[10px] text-white font-medium">Resumen ejecutivo listo</div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -top-4 -right-4 bg-[#0a1628] border border-[#00d4b4]/30 rounded-xl px-3 py-2 shadow-xl">
        <div className="text-[10px] text-slate-400">Procesos automatizados</div>
        <div className="text-lg font-bold text-[#00d4b4]">+2,400</div>
      </div>
      <div className="absolute -bottom-4 -left-4 bg-[#0a1628] border border-[#0891b2]/30 rounded-xl px-3 py-2 shadow-xl">
        <div className="text-[10px] text-slate-400">Tiempo recuperado</div>
        <div className="text-lg font-bold text-[#0891b2]">340h/mes</div>
      </div>
    </div>
  );
}
