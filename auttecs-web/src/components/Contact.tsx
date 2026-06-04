"use client";
import { useState } from "react";
import { Send, CheckCircle, MapPin } from "lucide-react";

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
    <section id="contact" className="py-24 bg-[#06101e] relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1a2d4a] bg-[#0a1628] text-[#00d4b4] text-sm font-medium">
              Contact
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Ready to transform{" "}
              <span className="gradient-text">your industry?</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Schedule a meeting with our engineering team. We will analyze your operations
              and design an integrated solution that optimizes performance and reduces costs.
            </p>

            <div className="space-y-4">
              {[
                "End-to-end project engineering",
                "Industry 5.0 technology integration",
                "Mining and heavy industry expertise",
                "Operations in México & USA",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle size={18} className="text-[#00d4b4] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <MapPin size={16} className="text-[#00d4b4]" />
              <span>México & USA</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-[#00d4b4] transition-colors"
              >
                <FacebookIcon size={20} />
                <span className="text-sm">Facebook</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-[#00d4b4] transition-colors"
              >
                <LinkedinIcon size={20} />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right – form */}
          <div className="p-8 rounded-2xl border border-[#1a2d4a] bg-[#0a1628] glow-teal">
            {sent ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#00d4b4]/15 border border-[#00d4b4]/30 flex items-center justify-center mx-auto">
                  <CheckCircle size={32} className="text-[#00d4b4]" />
                </div>
                <h3 className="text-white text-xl font-semibold">Message received!</h3>
                <p className="text-slate-400">
                  Our engineering team will contact you within 24 business hours to schedule your consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-white text-xl font-semibold mb-6">Schedule Now</h3>
                {[
                  { name: "name", label: "Full name", type: "text", placeholder: "John Smith" },
                  { name: "email", label: "Business email", type: "email", placeholder: "john@company.com" },
                  { name: "company", label: "Company", type: "text", placeholder: "My Company Inc." },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm text-slate-400 mb-1.5">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      value={form[field.name as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#06101e] border border-[#1a2d4a] text-white placeholder-slate-600 focus:outline-none focus:border-[#00d4b4]/50 transition-colors text-sm"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">
                    What would you like to discuss? (industry, project, challenge)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your project or operational challenge..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#06101e] border border-[#1a2d4a] text-white placeholder-slate-600 focus:outline-none focus:border-[#00d4b4]/50 transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#00d4b4] text-[#030b14] font-semibold flex items-center justify-center gap-2 hover:bg-[#00b89c] transition-all duration-200 shadow-lg shadow-[#00d4b4]/25 hover:scale-[1.02] tracking-wide"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
