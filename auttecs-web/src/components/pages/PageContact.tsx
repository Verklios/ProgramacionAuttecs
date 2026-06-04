"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, MapPin } from "lucide-react";

function FacebookIcon() {
  return <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>;
}
function LinkedinIcon() {
  return <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>;
}

export default function PageContact({ currentPage, totalPages }: { onNavigate: (i: number) => void; currentPage: number; totalPages: number }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  void currentPage; void totalPages;

  return (
    <div className="relative w-full h-full flex items-center overflow-y-auto page-scroll bg-[#080808]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623]/20 to-transparent" />
      <div className="absolute inset-0 dot-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,166,35,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-10 w-full relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-7 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#f5a623]/20 bg-[#f5a623]/5 text-[#f5a623] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Ready to transform{" "}
            <span className="gradient-text">your industry?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4 sm:space-y-5"
          >
            <p className="text-slate-400 leading-relaxed">
              Schedule a meeting with our engineering team. We design integrated
              Industry 5.0 solutions that optimize performance and reduce costs.
            </p>

            <div className="space-y-3">
              {[
                "End-to-end integrated engineering projects",
                "Industry 5.0 technology implementation",
                "Mining and heavy industry expertise",
                "Renewable energy & decarbonization",
                "Operations in México & USA",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-[#f5a623]/10 border border-[#f5a623]/30 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={10} className="text-[#f5a623]" />
                  </div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <MapPin size={14} className="text-[#f5a623]" />
              México & USA
            </div>

            <div className="flex gap-2">
              {[
                { Icon: FacebookIcon, label: "Facebook", href: "https://facebook.com" },
                { Icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com" },
              ].map(({ Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#1e1e1e] text-slate-500 hover:text-[#f5a623] hover:border-[#f5a623]/30 transition-all text-sm">
                  <Icon />{label}
                </a>
              ))}
            </div>

            <div className="p-4 rounded-2xl border border-[#f5a623]/15 bg-[#f5a623]/5">
              <p className="text-[#f5a623] text-xs font-bold uppercase tracking-wider mb-1">Industry 5.0 Partner</p>
              <p className="text-slate-500 text-xs">Advanced automation · Renewable energy · Decarbonization</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="p-5 sm:p-7 rounded-3xl border border-[#1e1e1e] bg-[#0d0d0d] glow-gold"
          >
            {sent ? (
              <div className="text-center py-10 space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 rounded-full bg-[#f5a623]/10 border-2 border-[#f5a623]/30 flex items-center justify-center mx-auto"
                >
                  <CheckCircle size={30} className="text-[#f5a623]" />
                </motion.div>
                <h3 className="text-white text-xl font-black">Message received!</h3>
                <p className="text-slate-400 text-sm">Our engineering team will contact you within 24 business hours.</p>
                <button onClick={() => setSent(false)} className="text-[#f5a623] text-sm hover:underline">
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <h3 className="text-white text-lg font-black mb-5 tracking-tight">Schedule Now</h3>
                {[
                  { name: "name", label: "Full name", type: "text", placeholder: "John Smith" },
                  { name: "email", label: "Business email", type: "email", placeholder: "john@company.com" },
                  { name: "company", label: "Company", type: "text", placeholder: "My Company Inc." },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs text-slate-600 mb-1 uppercase tracking-wider font-semibold">{field.label}</label>
                    <input
                      type={field.type} placeholder={field.placeholder} required
                      value={form[field.name as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080808] border border-[#1e1e1e] text-white placeholder-slate-700 focus:outline-none focus:border-[#f5a623]/40 transition-colors text-sm"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs text-slate-600 mb-1 uppercase tracking-wider font-semibold">Project / Challenge</label>
                  <textarea rows={3} placeholder="Describe your project or operational challenge..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#080808] border border-[#1e1e1e] text-white placeholder-slate-700 focus:outline-none focus:border-[#f5a623]/40 transition-colors text-sm resize-none"
                  />
                </div>
                <button type="submit" className="btn-shine w-full py-4 rounded-full bg-[#f5a623] text-black font-black flex items-center justify-center gap-2 hover:bg-[#fbbf24] transition-all shadow-lg shadow-[#f5a623]/20 hover:scale-[1.02] uppercase tracking-widest text-sm">
                  Send Message <Send size={15} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
