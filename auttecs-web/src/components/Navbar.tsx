"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
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
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border-2 border-[#00d4b4]/40 bg-gradient-to-br from-[#00d4b4]/20 to-[#0891b2]/20 flex items-center justify-center">
            <span className="text-[#00d4b4] font-bold text-sm">A</span>
          </div>
          <div>
            <div className="text-white font-bold text-lg tracking-widest leading-none">AUTTECS</div>
            <div className="text-[#00d4b4]/60 text-[9px] tracking-widest font-medium uppercase">
              Automation & Technology Solutions
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200 tracking-wide uppercase text-xs font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Social + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#00d4b4] transition-colors">
            <FacebookIcon size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#00d4b4] transition-colors">
            <LinkedinIcon size={18} />
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-[#00d4b4] text-[#030b14] text-sm font-semibold hover:bg-[#00b89c] transition-colors duration-200 shadow-lg shadow-[#00d4b4]/20 ml-2"
          >
            Schedule Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setOpen(!open)}>
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
              className="text-slate-400 hover:text-white text-sm py-2 border-b border-[#1a2d4a] uppercase tracking-wider"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-3 rounded-full bg-[#00d4b4] text-[#030b14] text-sm font-semibold text-center tracking-wide"
          >
            Schedule Now
          </a>
        </div>
      )}
    </nav>
  );
}
