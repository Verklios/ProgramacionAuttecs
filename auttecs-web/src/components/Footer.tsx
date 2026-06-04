import { MapPin } from "lucide-react";

function FacebookIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Notice", href: "#" },
];

const services = [
  "Industry 5.0",
  "Complete Machinery Installation",
  "Mining",
  "Energy Solutions for Business",
  "HVAC",
  "Facility Services",
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1a2d4a] bg-[#06101e] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-4">
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
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-5">
              End-to-end integrated engineering projects powered by Industry 5.0 technologies.
              Optimizing assets, reducing costs, driving decarbonization.
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
              <MapPin size={14} className="text-[#00d4b4]" />
              México & USA
            </div>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0a1628] border border-[#1a2d4a] flex items-center justify-center text-slate-500 hover:text-[#00d4b4] hover:border-[#00d4b4]/40 transition-all">
                <FacebookIcon />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0a1628] border border-[#1a2d4a] flex items-center justify-center text-slate-500 hover:text-[#00d4b4] hover:border-[#00d4b4]/40 transition-all">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-slate-400 hover:text-[#00d4b4] transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-slate-400 hover:text-[#00d4b4] transition-colors text-sm">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1a2d4a] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm uppercase tracking-wider">
            COPYRIGHT © 2026 AUTTECS – ALL RIGHTS RESERVED.
          </p>
          <p className="text-slate-500 text-sm">
            Powered by Industry <span className="text-[#00d4b4]">5.0</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
