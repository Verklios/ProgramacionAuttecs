"use client";
import { useEffect, useState } from "react";
import { Cpu, Zap, Settings, Activity, CheckCircle } from "lucide-react";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const duration = 1800;
    const steps = 80;
    const step = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setVal(target); clearInterval(timer); }
      else setVal(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);
  return <span>{val.toLocaleString()}{suffix}</span>;
}

const logs = [
  { icon: CheckCircle, text: "IoT sensors synced across production floor", delay: 0 },
  { icon: CheckCircle, text: "Automated maintenance alert: Unit #12 scheduled", delay: 700 },
  { icon: CheckCircle, text: "Vision system: quality check passed (99.2%)", delay: 1400 },
  { icon: CheckCircle, text: "Energy usage optimized — 18% reduction", delay: 2100 },
];

export default function DashboardMockup() {
  const [visible, setVisible] = useState([false, false, false, false]);

  useEffect(() => {
    logs.forEach((log, i) => {
      setTimeout(() => {
        setVisible((prev) => { const n = [...prev]; n[i] = true; return n; });
      }, 1000 + log.delay);
    });
  }, []);

  return (
    <div className="relative w-full max-w-[580px] animate-float">
      {/* Outer glow ring */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#f5a623]/10 via-transparent to-[#f5a623]/5 blur-xl pointer-events-none" />

      <div className="relative rounded-2xl border border-[#2a2a2a] bg-[#0f0f0f] shadow-2xl shadow-black/80 overflow-hidden">
        {/* Scan line */}
        <div className="scan-line" />

        {/* Browser chrome */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#1e1e1e] bg-[#0a0a0a]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
            auttecs.com / operations
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#f5a623]">
            <span className="w-2 h-2 rounded-full bg-[#f5a623] pulse-dot inline-block" />
            Live
          </div>
        </div>

        <div className="p-4 space-y-3">
          {/* KPI cards */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "SYSTEMS ACTIVE", value: 142, suffix: "", icon: Cpu, delta: "+5 today" },
              { label: "UPTIME", value: 99, suffix: ".8%", icon: Activity, delta: "last 30 days" },
              { label: "ENERGY SAVED", value: 23, suffix: "%", icon: Zap, delta: "vs last month" },
            ].map((kpi) => (
              <div key={kpi.label} className="bg-[#0a0a0a] rounded-xl p-3 border border-[#1e1e1e] hover:border-[#f5a623]/30 transition-colors duration-300">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] text-slate-600 font-medium uppercase tracking-wider">{kpi.label}</span>
                  <kpi.icon size={12} className="text-[#f5a623]" />
                </div>
                <div className="text-lg font-bold text-white leading-tight">
                  <AnimatedNumber target={kpi.value} suffix={kpi.suffix} />
                </div>
                <div className="text-[10px] text-[#f5a623] mt-0.5">{kpi.delta}</div>
              </div>
            ))}
          </div>

          {/* Chart + Status */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#0a0a0a] rounded-xl p-3 border border-[#1e1e1e]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-slate-500">Asset Performance · 14d</span>
                <span className="text-[10px] text-[#f5a623] font-semibold">+18% MoM</span>
              </div>
              <svg viewBox="0 0 200 60" className="w-full h-12">
                <defs>
                  <linearGradient id="chartGold" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f5a623" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#f5a623" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,52 C15,50 25,44 45,38 C65,32 75,28 95,20 C115,12 135,15 155,8 C165,4 180,3 200,1"
                  fill="none" stroke="#f5a623" strokeWidth="2" strokeLinecap="round" />
                <path d="M0,52 C15,50 25,44 45,38 C65,32 75,28 95,20 C115,12 135,15 155,8 C165,4 180,3 200,1 L200,60 L0,60 Z"
                  fill="url(#chartGold)" />
              </svg>
            </div>

            <div className="bg-[#0a0a0a] rounded-xl p-3 border border-[#1e1e1e]">
              <span className="text-[10px] text-slate-500 block mb-2">Services Status</span>
              {[
                { label: "Industry 5.0", pct: 92, color: "#f5a623" },
                { label: "Mining Ops", pct: 78, color: "#d97706" },
                { label: "Energy Solutions", pct: 85, color: "#fbbf24" },
                { label: "HVAC Systems", pct: 96, color: "#f59e0b" },
              ].map((row) => (
                <div key={row.label} className="mb-1.5">
                  <div className="flex justify-between text-[9px] text-slate-500 mb-0.5">
                    <span>{row.label}</span><span>{row.pct}%</span>
                  </div>
                  <div className="h-1 rounded-full bg-[#1e1e1e]">
                    <div className="h-1 rounded-full transition-all duration-1000" style={{ width: `${row.pct}%`, background: row.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Automation log */}
          <div className="bg-[#0a0a0a] rounded-xl p-3 border border-[#1e1e1e]">
            <div className="flex items-center gap-1.5 mb-2">
              <Settings size={11} className="text-[#f5a623]" />
              <span className="text-[10px] text-slate-500">Automation Events</span>
              <span className="ml-auto text-[10px] text-slate-600">today · 236</span>
            </div>
            <div className="space-y-1.5">
              {logs.map((log, i) => (
                <div key={i} className={`flex items-start gap-1.5 transition-all duration-700 ${visible[i] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"}`}>
                  <log.icon size={9} className="text-[#f5a623] mt-0.5 flex-shrink-0" />
                  <span className="text-[9px] text-slate-500 leading-tight">{log.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom AI bar */}
        <div className="mx-4 mb-4 flex items-center gap-2 bg-gradient-to-r from-[#f5a623]/10 to-transparent border border-[#f5a623]/20 rounded-xl px-3 py-2">
          <div className="w-6 h-6 rounded-lg bg-[#f5a623] flex items-center justify-center flex-shrink-0">
            <Zap size={12} className="text-black" />
          </div>
          <div>
            <div className="text-[9px] text-slate-600">AUTTECS AI</div>
            <div className="text-[10px] text-white font-medium">Executive report ready · Industry 5.0</div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -top-5 -right-5 bg-[#111] border border-[#f5a623]/30 rounded-2xl px-4 py-2.5 shadow-2xl animate-fade delay-500 glow-gold-sm">
        <div className="text-[10px] text-slate-500">Projects delivered</div>
        <div className="text-base font-bold text-[#f5a623]">México & USA</div>
      </div>
      <div className="absolute -bottom-5 -left-5 bg-[#111] border border-[#f5a623]/20 rounded-2xl px-4 py-2.5 shadow-2xl animate-fade delay-600">
        <div className="text-[10px] text-slate-500">Operating costs reduced</div>
        <div className="text-base font-bold text-[#fbbf24]">Up to 35%</div>
      </div>
    </div>
  );
}
