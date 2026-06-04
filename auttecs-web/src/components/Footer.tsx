import AuttecsLogo from "./AuttecsLogo";

function FacebookIcon() {
  return (
    <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const navLinks = ["Home", "About Us", "Services", "Gallery", "Contact", "Privacy Notice"];
const hrefs = ["#home", "#about", "#services", "#gallery", "#contact", "#"];
const serviceList = ["Industry 5.0", "Complete Machinery Installation", "Mining", "Energy Solutions for Business", "HVAC", "Facility Services"];

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#050505] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-5 group">
              <div className="group-hover:scale-110 transition-transform duration-300">
                <AuttecsLogo size={44} />
              </div>
              <div>
                <div className="text-white font-black text-xl tracking-[0.2em] group-hover:text-[#f5a623] transition-colors">AUTTECS</div>
                <div className="text-[#f5a623]/40 text-[8px] tracking-[0.3em] font-semibold uppercase">Automation & Technology Solutions</div>
              </div>
            </a>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs mb-6">
              End-to-end integrated engineering projects powered by Industry 5.0 technologies.
              Optimizing assets, reducing costs, driving decarbonization.
            </p>
            <div className="flex gap-2">
              {[
                { Icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
                { Icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#111] border border-[#1e1e1e] flex items-center justify-center text-slate-600 hover:text-[#f5a623] hover:border-[#f5a623]/30 transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-5 text-xs uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map((l, i) => (
                <li key={l}>
                  <a href={hrefs[i]} className="text-slate-600 hover:text-[#f5a623] transition-colors text-sm">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-5 text-xs uppercase tracking-widest">Services</h4>
            <ul className="space-y-2.5">
              {serviceList.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-slate-600 hover:text-[#f5a623] transition-colors text-sm">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#111] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-700 text-xs uppercase tracking-widest font-medium">
            COPYRIGHT © 2026 AUTTECS – ALL RIGHTS RESERVED.
          </p>
          <p className="text-slate-700 text-xs">
            México & USA · Powered by Industry{" "}
            <span className="text-[#f5a623] font-bold">5.0</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
