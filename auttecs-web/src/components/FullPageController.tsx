"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AuttecsLogo from "./AuttecsLogo";

// ─── Pages ───────────────────────────────────────────────────────────
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

type TransitionType = "logo";

// All transitions use the logo reveal — matches Auttecs brand identity
function getTransition(_index: number): TransitionType {
  return "logo";
}

// ─── Overlay transitions ──────────────────────────────────────────────
function LiftTransition({ onMid, onDone }: { onMid: () => void; onDone: () => void }) {
  useEffect(() => { const t = setTimeout(onMid, 400); return () => clearTimeout(t); }, [onMid]);
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-[#080808] origin-bottom"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: [0, 1, 1, 0] }}
      transition={{ duration: 1.1, times: [0, 0.35, 0.65, 1], ease: "easeInOut" }}
      onAnimationComplete={onDone}
      style={{ transformOrigin: "bottom" }}
    />
  );
}

function LogoTransition({ onMid, onDone }: { onMid: () => void; onDone: () => void }) {
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 500);
    const t2 = setTimeout(() => { setPhase("out"); onMid(); }, 950);
    const t3 = setTimeout(onDone, 1400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onMid, onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-[#080808] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "out" ? 0 : 1 }}
      transition={{ duration: 0.45 }}
    >
      {/* Logo center burst */}
      <motion.div
        initial={{ scale: 0, rotate: -30 }}
        animate={
          phase === "in"   ? { scale: 1.2, rotate: 0 } :
          phase === "hold" ? { scale: 1.1, rotate: 0 } :
                             { scale: 6, rotate: 15, opacity: 0 }
        }
        transition={{ duration: phase === "out" ? 0.45 : 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-4"
      >
        <AuttecsLogo size={120} />
        <motion.div
          className="text-4xl font-black tracking-[0.3em] text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: phase === "out" ? 0 : 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.35 }}
        >
          AUTTECS
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function SlideTransition({ onMid, onDone, direction }: { onMid: () => void; onDone: () => void; direction: number }) {
  useEffect(() => { const t = setTimeout(onMid, 300); return () => clearTimeout(t); }, [onMid]);
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-[#f5a623]"
      initial={{ x: direction > 0 ? "100%" : "-100%" }}
      animate={{ x: ["100%", "0%", "0%", direction > 0 ? "-100%" : "100%"] }}
      transition={{ duration: 1.0, times: [0, 0.3, 0.7, 1], ease: "easeInOut" }}
      onAnimationComplete={onDone}
    />
  );
}

function CurtainTransition({ onMid, onDone }: { onMid: () => void; onDone: () => void }) {
  useEffect(() => { const t = setTimeout(onMid, 450); return () => clearTimeout(t); }, [onMid]);
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 bg-[#080808] origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: [0, 1, 1, 0] }}
        transition={{ duration: 1.1, times: [0, 0.4, 0.6, 1], ease: "easeInOut" }}
        style={{ height: "50vh", transformOrigin: "top" }}
        onAnimationComplete={onDone}
      />
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 bg-[#080808] origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: [0, 1, 1, 0] }}
        transition={{ duration: 1.1, times: [0, 0.4, 0.6, 1], ease: "easeInOut" }}
        style={{ height: "50vh", transformOrigin: "bottom" }}
      />
    </>
  );
}

// ─── Main Controller ──────────────────────────────────────────────────
export default function FullPageController() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [transitionType, setTransitionType] = useState<TransitionType>("logo");
  const [direction, setDirection] = useState(1);
  const [navOpen, setNavOpen] = useState(false);
  const wheelLock = useRef(false);

  const goTo = useCallback((index: number) => {
    if (transitioning || index === current || index < 0 || index >= PAGES.length) return;
    const dir = index > current ? 1 : -1;
    setDirection(dir);
    setTransitionType(getTransition(Math.min(current, index)));
    setNext(index);
    setTransitioning(true);
  }, [transitioning, current]);

  const handleWheel = useCallback((e: WheelEvent) => {
    if (wheelLock.current || transitioning) return;

    // Find the scrollable container the event came from
    const target = e.target as HTMLElement;
    const scrollable = target.closest(".overflow-y-auto, .overflow-y-scroll") as HTMLElement | null;

    if (scrollable) {
      const atBottom = scrollable.scrollTop + scrollable.clientHeight >= scrollable.scrollHeight - 8;
      const atTop    = scrollable.scrollTop <= 8;
      // Let the element scroll naturally unless it's already at its limit
      if ((e.deltaY > 0 && !atBottom) || (e.deltaY < 0 && !atTop)) return;
    }

    // (passive listener — cannot preventDefault)
    wheelLock.current = true;
    setTimeout(() => { wheelLock.current = false; }, 1300);
    if (e.deltaY > 30)  goTo(current + 1);
    else if (e.deltaY < -30) goTo(current - 1);
  }, [current, goTo, transitioning]);

  // Touch support
  const touchStartY = useRef(0);
  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);
  const handleTouchEnd = useCallback((e: TouchEvent) => {
    const delta = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(delta) < 60) return;

    const target = e.target as HTMLElement;
    const scrollable = target.closest(".overflow-y-auto, .overflow-y-scroll") as HTMLElement | null;
    if (scrollable) {
      const atBottom = scrollable.scrollTop + scrollable.clientHeight >= scrollable.scrollHeight - 8;
      const atTop    = scrollable.scrollTop <= 8;
      if ((delta > 0 && !atBottom) || (delta < 0 && !atTop)) return;
    }

    if (delta > 0) goTo(current + 1);
    else goTo(current - 1);
  }, [current, goTo]);

  // Keyboard
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "PageDown") goTo(current + 1);
    if (e.key === "ArrowUp" || e.key === "PageUp") goTo(current - 1);
  }, [current, goTo]);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleWheel, handleTouchStart, handleTouchEnd, handleKey]);

  const { Component } = PAGES[current];
  const handleTransitionMid = useCallback(() => {
    setCurrent(next);
  }, [next]);
  const handleTransitionDone = useCallback(() => {
    setTransitioning(false);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#080808]">
      {/* Page content — rendered directly, overlay handles transitions */}
      <div className="absolute inset-0">
        <Component onNavigate={goTo} currentPage={current} totalPages={PAGES.length} />
      </div>

      {/* Transition overlay — always logo style */}
      <AnimatePresence>
        {transitioning && (
          <LogoTransition key="logo" onMid={handleTransitionMid} onDone={handleTransitionDone} />
        )}
      </AnimatePresence>

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex items-center justify-between">
        <button onClick={() => goTo(0)} className="flex items-center gap-3 group">
          <div className="group-hover:scale-110 transition-transform duration-300">
            <AuttecsLogo size={40} />
          </div>
          <div className="leading-tight">
            <div className="text-white font-black text-lg tracking-[0.2em] group-hover:text-[#f5a623] transition-colors">AUTTECS</div>
            <div className="text-[#f5a623]/50 text-[8px] tracking-[0.25em] font-semibold uppercase hidden sm:block">Automation & Technology Solutions</div>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 bg-black/40 backdrop-blur-xl border border-white/5 rounded-full px-4 py-2">
          {PAGES.map((p, i) => (
            <button
              key={p.id}
              onClick={() => goTo(i)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                i === current
                  ? "bg-[#f5a623] text-black"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden w-10 h-10 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${navOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${navOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${navOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-4 right-4 z-40 bg-black/95 backdrop-blur-2xl border border-[#222] rounded-2xl p-4 flex flex-col gap-2 md:hidden"
          >
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Dot navigation ── */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
        {PAGES.map((p, i) => (
          <button
            key={p.id}
            onClick={() => goTo(i)}
            title={p.label}
            className="group relative flex items-center justify-end gap-2"
          >
            <span className="hidden group-hover:block text-xs text-[#f5a623] font-semibold uppercase tracking-widest whitespace-nowrap">
              {p.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-400 ${
                i === current
                  ? "w-3 h-3 bg-[#f5a623] shadow-lg shadow-[#f5a623]/50"
                  : "w-2 h-2 bg-white/20 hover:bg-white/50"
              }`}
            />
          </button>
        ))}
      </div>

      {/* ── Page counter ── */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
        <span className="text-3xl font-black text-[#f5a623]">
          {String(current + 1).padStart(2, "0")}
        </span>
        <div className="w-12 h-px bg-white/20 relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-[#f5a623]"
            animate={{ width: `${((current + 1) / PAGES.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        <span className="text-sm text-slate-600 font-medium">
          {String(PAGES.length).padStart(2, "0")}
        </span>
      </div>

      {/* ── Scroll hint (first page only) ── */}
      {current === 0 && !transitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 2 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 text-slate-600"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
            className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-[#f5a623]" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
