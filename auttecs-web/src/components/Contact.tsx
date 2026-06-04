"use client";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1a2d4a] bg-[#0a1628] text-[#00d4b4] text-sm font-medium">
              Agenda tu diagnóstico
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Empieza con un{" "}
              <span className="gradient-text">diagnóstico sin costo</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              En 45 minutos identificamos los 3 procesos con mayor potencial de automatización en tu empresa y te entregamos un roadmap accionable.
            </p>

            <div className="space-y-4">
              {[
                "Análisis de procesos actuales",
                "Identificación de cuellos de botella",
                "Roadmap de automatización priorizado",
                "Estimado de ROI y tiempo de recuperación",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle size={18} className="text-[#00d4b4] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl border border-[#00d4b4]/20 bg-[#00d4b4]/5">
              <p className="text-[#00d4b4] text-sm font-medium">
                Sin compromiso · Sin costo · Sin burocracia
              </p>
            </div>
          </div>

          {/* Right – form */}
          <div className="p-8 rounded-2xl border border-[#1a2d4a] bg-[#0a1628] glow-teal">
            {sent ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#00d4b4]/15 border border-[#00d4b4]/30 flex items-center justify-center mx-auto">
                  <CheckCircle size={32} className="text-[#00d4b4]" />
                </div>
                <h3 className="text-white text-xl font-semibold">¡Recibido!</h3>
                <p className="text-slate-400">
                  Te contactamos en menos de 24 horas hábiles para agendar tu diagnóstico.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-white text-xl font-semibold mb-6">Agendar diagnóstico estratégico</h3>
                {[
                  { name: "name", label: "Nombre completo", type: "text", placeholder: "Juan Pérez" },
                  { name: "email", label: "Correo empresarial", type: "email", placeholder: "juan@empresa.com" },
                  { name: "company", label: "Empresa", type: "text", placeholder: "Mi Empresa S.A." },
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
                  <label className="block text-sm text-slate-400 mb-1.5">¿Qué proceso te gustaría automatizar?</label>
                  <textarea
                    rows={3}
                    placeholder="Describe brevemente el proceso o problema..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#06101e] border border-[#1a2d4a] text-white placeholder-slate-600 focus:outline-none focus:border-[#00d4b4]/50 transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#00d4b4] text-[#030b14] font-semibold flex items-center justify-center gap-2 hover:bg-[#00b89c] transition-all duration-200 shadow-lg shadow-[#00d4b4]/25 hover:scale-[1.02]"
                >
                  Enviar solicitud <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
