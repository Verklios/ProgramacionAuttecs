"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import AuttecsLogo from "./AuttecsLogo";
import PageHome from "./pages/PageHome";
import PageAbout from "./pages/PageAbout";
import PageServices from "./pages/PageServices";
import PageGallery from "./pages/PageGallery";
import PageContact from "./pages/PageContact";

const PAGES = [
  { id: "home",     label: "Home",      Component: PageHome },
  { id: "about",    label: "About Us",  Component: PageAbout },
  { id: "services", label: "Services",  Component: PageServices },
  { id: "gallery",  label: "Gallery",   Component: PageGallery },
  { id: "contact",  label: "Contact",   Component: PageContact },
];

// ── Logo overlay animation ──────────────────────────────────────────
function LogoOverlay({ visible, phase }: { visible: boolean; phase: "in" | "hold" | "out" | "hidden" }) {
  if (!visible) return null;

  const scale =
    phase === "in"     ? "scale(0.2) rotate(-20deg)" :
    phase === "hold"   ? "scale(1.1) rotate(0deg)" :
    phase === "out"    ? "scale(5) rotate(15deg)"   : "scale(0)";

  const opacity = phase === "out" ? 0 : 1;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#080808] flex flex-col items-center justify-center gap-5"
      style={{
        transition: phase === "out" ? "opacity 0.45s ease" : "none",
        opacity: phase === "out" ? 0 : 1,
      }}
    >
      <div
        style={{
          transform: scale,
          opacity,
          transition:
            phase === "in"   ? "transform 0.45s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s" :
            phase === "hold" ? "transform 0.2s ease"  :
            phase === "out"  ? "transform 0.45s ease, opacity 0.45s ease" : "none",
        }}
      >
        <AuttecsLogo size={110} />
      </div>
      <div
        style={{
          opacity: phase === "out" ? 0 : phase === "hold" ? 1 : 0,
          transition: "opacity 0.3s ease",
          transitionDelay: phase === "hold" ? "0.05s" : "0s",
        }}
        className="text-white font-black text-4xl tracking-[0.3em]"
      >
        AUTTECS
      </div>
    </div>
  );
}

// ── Main controller ─────────────────────────────────────────────────
export default function FullPageController() {
  const [current, setCurrent]         = useState(0);
  const [overlayVisible, setOverlay]  = useState(false);
  const [phase, setPhase]             = useState<"in"|"hold"|"out"|"hidden">("hidden");
  const [navOpen, setNavOpen]         = useState(false);
  const busy    = useRef(false);
  const wheelQ  = useRef(0);

  const goTo = useCallback((target: number) => {
    if (busy.current || target === current || target < 0 || target >= PAGES.length) return;
    busy.current = true;

    // Phase 1 — burst in (0 → peak)
    setOverlay(true);
    setPhase("in");

    setTimeout(() => setPhase("hold"), 50);   // trigger CSS transition

    // Phase 2 — swap page while fully covered
    setTimeout(() => {
      setCurrent(target);
    }, 480);

    // Phase 3 — fly out
    setTimeout(() => setPhase("out"), 580);

    // Phase 4 — done
    setTimeout(() => {
      setOverlay(false);
      setPhase("hidden");
      busy.current = false;
    }, 1050);
  }, [current]);

  // Wheel
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (busy.current) return;

      // Allow scroll inside scrollable containers
      const el = e.target as HTMLElement;
      const scrollable = el.closest(".page-scroll") as HTMLElement | null;
      if (scrollable) {
        const atBottom = scrollable.scrollTop + scrollable.clientHeight >= scrollable.scrollHeight - 4;
        const atTop    = scrollable.scrollTop <= 4;
        if ((e.deltaY > 0 && !atBottom) || (e.deltaY < 0 && !atTop)) return;
      }

      wheelQ.current += e.deltaY;
      clearTimeout((onWheel as any)._t);
      (onWheel as any)._t = setTimeout(() => {
        if (wheelQ.current > 40)       goTo(current + 1);
        else if (wheelQ.current < -40) goTo(current - 1);
        wheelQ.current = 0;
      }, 50);
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [current, goTo]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") goTo(current + 1);
      if (e.key === "ArrowUp"   || e.key === "PageUp")   goTo(current - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, goTo]);

  // Touch
  const touchY = useRef(0);
  useEffect(() => {
    const onStart = (e: TouchEvent) => { touchY.current = e.touches[0].clientY; };
    const onEnd   = (e: TouchEvent) => {
      const delta = touchY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) < 60) return;
      const el = e.target as HTMLElement;
      const scrollable = el.closest(".page-scroll") as HTMLElement | null;
      if (scrollable) {
        const atBottom = scrollable.scrollTop + scrollable.clientHeight >= scrollable.scrollHeight - 4;
        const atTop    = scrollable.scrollTop <= 4;
        if ((delta > 0 && !atBottom) || (delta < 0 && !atTop)) return;
      }
      if (delta > 0) goTo(current + 1);
      else           goTo(current - 1);
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend",   onEnd,   { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend",   onEnd);
    };
  }, [current, goTo]);

  const { Component } = PAGES[current];

  return (
    <div className="fixed inset-0 bg-[#080808] overflow-hidden">
      {/* ── Current page ── */}
      <div className="absolute inset-0">
        <Component onNavigate={goTo} currentPage={current} totalPages={PAGES.length} />
      </div>

      {/* ── Logo transition overlay ── */}
      <LogoOverlay visible={overlayVisible} phase={phase} />

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
        {/* Logo — pointer-events back on */}
        <button
          onClick={() => goTo(0)}
          className="flex items-center gap-3 group pointer-events-auto"
        >
          <div className="group-hover:scale-110 transition-transform duration-300">
            <AuttecsLogo size={40} />
          </div>
          <div className="leading-tight text-left">
            <div className="text-white font-black text-lg tracking-[0.2em] group-hover:text-[#f5a623] transition-colors">AUTTECS</div>
            <div className="text-[#f5a623]/50 text-[8px] tracking-[0.25em] font-semibold uppercase hidden sm:block">Automation & Technology Solutions</div>
          </div>
        </button>

        {/* Desktop pills */}
        <div className="hidden md:flex items-center gap-1 bg-black/50 backdrop-blur-xl border border-white/5 rounded-full px-3 py-1.5 pointer-events-auto">
          {PAGES.map((p, i) => (
            <button
              key={p.id}
              onClick={() => goTo(i)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                i === current ? "bg-[#f5a623] text-black" : "text-slate-400 hover:text-white"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden w-10 h-10 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center gap-1.5 pointer-events-auto"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${navOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${navOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${navOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {navOpen && (
        <div className="fixed top-20 left-4 right-4 z-40 bg-black/95 backdrop-blur-2xl border border-[#222] rounded-2xl p-4 flex flex-col gap-2 md:hidden">
          {PAGES.map((p, i) => (
            <button
              key={p.id}
              onClick={() => { goTo(i); setNavOpen(false); }}
              className={`px-5 py-3 rounded-xl text-sm font-bold uppercase tracking-widest text-left transition-all ${
                i === current ? "bg-[#f5a623] text-black" : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      )}

      {/* ── Dot nav ── */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
        {PAGES.map((p, i) => (
          <button
            key={p.id}
            onClick={() => goTo(i)}
            title={p.label}
            className="group flex items-center justify-end gap-2"
          >
            <span className="hidden group-hover:block text-[10px] text-[#f5a623] font-bold uppercase tracking-widest whitespace-nowrap pr-1">
              {p.label}
            </span>
            <span className={`block rounded-full transition-all duration-400 ${
              i === current
                ? "w-3 h-3 bg-[#f5a623] shadow-lg shadow-[#f5a623]/50"
                : "w-2 h-2 bg-white/20 hover:bg-white/40"
            }`} />
          </button>
        ))}
      </div>

      {/* ── Page counter ── */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3 select-none">
        <span className="text-3xl font-black text-[#f5a623] tabular-nums">
          {String(current + 1).padStart(2, "0")}
        </span>
        <div className="w-10 h-px bg-white/10 relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-[#f5a623] transition-all duration-500"
            style={{ width: `${((current + 1) / PAGES.length) * 100}%` }}
          />
        </div>
        <span className="text-sm text-slate-600 font-medium">
          {String(PAGES.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
