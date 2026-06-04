"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Casos de uso", href: "#casos" },
  { label: "Demos", href: "#demos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030b14]/90 backdrop-blur-xl border-b border-[#1a2d4a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4b4] to-[#0891b2] flex items-center justify-center">
            <span className="text-[#030b14] font-bold text-sm">A</span>
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">
            auttecs
          </span>
          <span className="text-xs text-[#00d4b4]/60 font-medium hidden sm:block">
            AI PARTNER
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contacto"
            className="px-5 py-2.5 rounded-full bg-[#00d4b4] text-[#030b14] text-sm font-semibold hover:bg-[#00b89c] transition-colors duration-200 shadow-lg shadow-[#00d4b4]/20"
          >
            Agendar diagnóstico
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#030b14]/95 backdrop-blur-xl border-b border-[#1a2d4a] px-6 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-white text-sm py-2 border-b border-[#1a2d4a]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-3 rounded-full bg-[#00d4b4] text-[#030b14] text-sm font-semibold text-center"
          >
            Agendar diagnóstico
          </a>
        </div>
      )}
    </nav>
  );
}
