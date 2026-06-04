"use client";
import { useState } from "react";
import { Send, CheckCircle, MapPin, ArrowRight } from "lucide-react";

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}
function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 bg-[#080808] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623]/20 to-transparent" />
      <div className="absolute inset-0 dot-bg" />

      {/* Large glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,166,35,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f5a623]/20 bg-[#f5a623]/5 text-[#f5a623] text-xs font-bold uppercase tracking-widest">
            Contact
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
            Ready to transform{" "}
            <span className="gradient-text">your industry?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left info */}
          <div className="space-y-8">
            <p className="text-slate-400 text-lg leading-relaxed">
              Schedule a meeting with our engineering team. We will analyze your operations
              and design an integrated Industry 5.0 solution.
            </p>

            <div className="space-y-3">
              {[
                "End-to-end integrated engineering projects",
                "Industry 5.0 technology implementation",
                "Mining and heavy industry expertise",
                "Renewable energy & decarbonization",
                "Operations in México & USA",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-300 group">
                  <div className="w-5 h-5 rounded-full bg-[#f5a623]/10 border border-[#f5a623]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#f5a623]/20 transition-colors">
                    <CheckCircle size={11} className="text-[#f5a623]" />
                  </div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-slate-600">
              <MapPin size={15} className="text-[#f5a623]" />
              <span className="text-sm">México & USA</span>
            </div>

            <div className="flex gap-3">
              {[
                { Icon: FacebookIcon, label: "Facebook", href: "https://facebook.com" },
                { Icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#1e1e1e] text-slate-500 hover:text-[#f5a623] hover:border-[#f5a623]/30 transition-all duration-300 text-sm font-medium"
                >
                  <Icon size={16} />
                  {label}
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>

            {/* Highlight box */}
            <div className="p-5 rounded-2xl border border-[#f5a623]/20 bg-[#f5a623]/5">
              <p className="text-[#f5a623] text-sm font-bold uppercase tracking-wider mb-1">Industry 5.0 Partner</p>
              <p className="text-slate-400 text-sm">Advanced automation · Renewable energy · Decarbonization</p>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 rounded-3xl border border-[#1e1e1e] bg-[#0d0d0d] glow-gold">
            {sent ? (
              <div className="text-center py-14 space-y-5">
                <div className="w-20 h-20 rounded-full bg-[#f5a623]/10 border-2 border-[#f5a623]/30 flex items-center justify-center mx-auto">
                  <CheckCircle size={36} className="text-[#f5a623]" />
                </div>
                <h3 className="text-white text-2xl font-black">Message received!</h3>
                <p className="text-slate-400">
                  Our engineering team will contact you within 24 business hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-[#f5a623] text-sm hover:underline transition-all"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-white text-xl font-black mb-6 tracking-tight">Schedule Now</h3>
                {[
                  { name: "name", label: "Full name", type: "text", placeholder: "John Smith" },
                  { name: "email", label: "Business email", type: "email", placeholder: "john@company.com" },
                  { name: "company", label: "Company", type: "text", placeholder: "My Company Inc." },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs text-slate-500 mb-1.5 uppercase tracking-wider font-semibold">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      value={form[field.name as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080808] border border-[#1e1e1e] text-white placeholder-slate-700 focus:outline-none focus:border-[#f5a623]/40 transition-colors text-sm"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 uppercase tracking-wider font-semibold">
                    Project / Challenge
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your industry, project, or operational challenge..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#080808] border border-[#1e1e1e] text-white placeholder-slate-700 focus:outline-none focus:border-[#f5a623]/40 transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-shine w-full py-4 rounded-full bg-[#f5a623] text-black font-black flex items-center justify-center gap-2 hover:bg-[#fbbf24] transition-all duration-300 shadow-xl shadow-[#f5a623]/20 hover:scale-[1.02] uppercase tracking-widest text-sm"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
