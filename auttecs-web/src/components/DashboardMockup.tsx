"use client";
import { useEffect, useState } from "react";
import { Cpu, Zap, Settings, Activity, CheckCircle } from "lucide-react";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
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
  return <span>{val.toLocaleString()}{suffix}</span>;
}

const logs = [
  { icon: CheckCircle, text: "IoT sensors synced across production floor", delay: 0 },
  { icon: CheckCircle, text: "Automated maintenance alert: Unit #12 scheduled", delay: 600 },
  { icon: CheckCircle, text: "Vision system: quality check passed (99.2%)", delay: 1200 },
  { icon: CheckCircle, text: "Energy usage optimized — 18% reduction", delay: 1800 },
];

export default function DashboardMockup() {
  const [visible, setVisible] = useState([false, false, false, false]);

  useEffect(() => {
    logs.forEach((log, i) => {
      setTimeout(() => {
        setVisible((prev) => { const n = [...prev]; n[i] = true; return n; });
      }, 800 + log.delay);
    });
  }, []);

  return (
    <div className="relative w-full max-w-[600px] animate-float">
      <div className="rounded-2xl border border-[#1a2d4a] bg-[#0a1628] shadow-2xl shadow-black/60 overflow-hidden glow-teal">
        {/* Browser chrome */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#1a2d4a] bg-[#06101e]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-slate-500 font-mono">auttecs.com / operations</span>
          <div className="flex items-center gap-1.5 text-xs text-[#00d4b4]">
            <span className="w-2 h-2 rounded-full bg-[#00d4b4] pulse-dot inline-block" />
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
              <div key={kpi.label} className="bg-[#06101e] rounded-xl p-3 border border-[#1a2d4a]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] text-slate-500 font-medium uppercase tracking-wider">{kpi.label}</span>
                  <kpi.icon size={12} className="text-[#00d4b4]" />
                </div>
                <div className="text-lg font-bold text-white leading-tight">
                  <AnimatedNumber target={kpi.value} suffix={kpi.suffix} />
                </div>
                <div className="text-[10px] text-[#00d4b4] mt-0.5">{kpi.delta}</div>
              </div>
            ))}
          </div>

          {/* Chart + Status */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#06101e] rounded-xl p-3 border border-[#1a2d4a]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-slate-400">Asset Performance · 14 days</span>
                <span className="text-[10px] text-[#00d4b4] font-semibold">+18% MoM</span>
              </div>
              <svg viewBox="0 0 200 60" className="w-full h-12">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00d4b4" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#00d4b4" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,50 C20,46 30,40 50,35 C70,30 80,28 100,20 C120,12 140,16 160,8 C170,4 180,3 200,1"
                  fill="none" stroke="#00d4b4" strokeWidth="2" strokeLinecap="round" />
                <path d="M0,50 C20,46 30,40 50,35 C70,30 80,28 100,20 C120,12 140,16 160,8 C170,4 180,3 200,1 L200,60 L0,60 Z"
                  fill="url(#chartGrad)" />
              </svg>
            </div>

            <div className="bg-[#06101e] rounded-xl p-3 border border-[#1a2d4a]">
              <span className="text-[10px] text-slate-400 block mb-2">Services Status</span>
              {[
                { label: "Industry 5.0", pct: 92, color: "#00d4b4" },
                { label: "Mining Ops", pct: 78, color: "#0891b2" },
                { label: "Energy Solutions", pct: 85, color: "#f59e0b" },
                { label: "HVAC Systems", pct: 96, color: "#10b981" },
              ].map((row) => (
                <div key={row.label} className="mb-1.5">
                  <div className="flex justify-between text-[9px] text-slate-400 mb-0.5">
                    <span>{row.label}</span><span>{row.pct}%</span>
                  </div>
                  <div className="h-1 rounded-full bg-[#1a2d4a]">
                    <div className="h-1 rounded-full" style={{ width: `${row.pct}%`, background: row.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Automation log */}
          <div className="bg-[#06101e] rounded-xl p-3 border border-[#1a2d4a]">
            <div className="flex items-center gap-1.5 mb-2">
              <Settings size={11} className="text-[#00d4b4]" />
              <span className="text-[10px] text-slate-400">Automation Events</span>
              <span className="ml-auto text-[10px] text-slate-500">today · 236</span>
            </div>
            <div className="space-y-1.5">
              {logs.map((log, i) => (
                <div key={i} className={`flex items-start gap-1.5 transition-all duration-500 ${visible[i] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}>
                  <log.icon size={9} className="text-[#00d4b4] mt-0.5 flex-shrink-0" />
                  <span className="text-[9px] text-slate-400 leading-tight">{log.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-4 mb-4 flex items-center gap-2 bg-[#06101e] border border-[#1a2d4a] rounded-xl px-3 py-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#00d4b4] to-[#0891b2] flex items-center justify-center flex-shrink-0">
            <Zap size={12} className="text-[#030b14]" />
          </div>
          <div>
            <div className="text-[9px] text-slate-500">AUTTECS AI</div>
            <div className="text-[10px] text-white font-medium">Executive report ready · Industry 5.0</div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -top-4 -right-4 bg-[#0a1628] border border-[#00d4b4]/30 rounded-xl px-3 py-2 shadow-xl">
        <div className="text-[10px] text-slate-400">Projects delivered</div>
        <div className="text-lg font-bold text-[#00d4b4]">México & USA</div>
      </div>
      <div className="absolute -bottom-4 -left-4 bg-[#0a1628] border border-[#f59e0b]/30 rounded-xl px-3 py-2 shadow-xl">
        <div className="text-[10px] text-slate-400">Operating costs reduced</div>
        <div className="text-lg font-bold text-[#f59e0b]">Up to 35%</div>
      </div>
    </div>
  );
}
