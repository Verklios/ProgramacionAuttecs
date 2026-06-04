"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import AuttecsLogo from "./AuttecsLogo";

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
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080808]/95 backdrop-blur-2xl border-b border-[#222]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
            <AuttecsLogo size={44} />
          </div>
          <div className="leading-tight">
            <div className="text-white font-black text-xl tracking-[0.2em] group-hover:text-[#f5a623] transition-colors duration-300">
              AUTTECS
            </div>
            <div className="text-[#f5a623]/50 text-[8px] tracking-[0.3em] font-semibold uppercase">
              Automation & Technology Solutions
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                  isActive ? "text-[#f5a623]" : "text-slate-400 hover:text-white"
                }`}
              >
                {l.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#f5a623]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Social + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"
            className="w-8 h-8 rounded-lg border border-[#222] flex items-center justify-center text-slate-500 hover:text-[#f5a623] hover:border-[#f5a623]/40 transition-all duration-300">
            <FacebookIcon size={15} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"
            className="w-8 h-8 rounded-lg border border-[#222] flex items-center justify-center text-slate-500 hover:text-[#f5a623] hover:border-[#f5a623]/40 transition-all duration-300">
            <LinkedinIcon size={15} />
          </a>
          <a
            href="#contact"
            className="btn-shine ml-2 px-5 py-2.5 rounded-full bg-[#f5a623] text-black text-xs font-bold uppercase tracking-widest hover:bg-[#fbbf24] transition-all duration-300 shadow-lg shadow-[#f5a623]/20"
          >
            Schedule Now
          </a>
        </div>

        <button className="md:hidden text-slate-400 hover:text-[#f5a623] transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[#080808]/98 backdrop-blur-2xl border-b border-[#222]`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-[#f5a623] text-xs py-3 border-b border-[#1a1a1a] uppercase tracking-widest font-semibold transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="mt-4 px-5 py-3 rounded-full bg-[#f5a623] text-black text-xs font-bold text-center uppercase tracking-widest">
            Schedule Now
          </a>
        </div>
      </div>
    </nav>
  );
}
