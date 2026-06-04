export default function Footer() {
  return (
    <footer className="border-t border-[#1a2d4a] bg-[#06101e] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4b4] to-[#0891b2] flex items-center justify-center">
                <span className="text-[#030b14] font-bold text-sm">A</span>
              </div>
              <span className="text-white font-semibold text-lg">auttecs</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Automatización, software e IA aplicada para empresas que quieren operar mejor.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Servicios</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {["Automatización", "Dashboards", "IA Aplicada", "Integraciones", "Consultoría"].map((s) => (
                <li key={s}><a href="#servicios" className="hover:text-[#00d4b4] transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Empresa</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {["Proceso", "Casos de uso", "Demos", "Contacto"].map((s) => (
                <li key={s}><a href={`#${s.toLowerCase().replace(/ /g, "-")}`} className="hover:text-[#00d4b4] transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1a2d4a] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© 2025 Auttecs. Todos los derechos reservados.</p>
          <p className="text-slate-500 text-sm">
            Hecho con{" "}
            <span className="text-[#00d4b4]">♥</span>
            {" "}para equipos que quieren operar mejor
          </p>
        </div>
      </div>
    </footer>
  );
}
