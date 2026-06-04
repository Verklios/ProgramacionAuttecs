const values = [
  { name: "Integrity", description: "We adhere to procedures and policies, always doing the right thing.", color: "#f5a623" },
  { name: "Audacity", description: "Leading innovation and transforming the impossible into opportunities.", color: "#fbbf24" },
  { name: "Effort & Tenacity", description: "We demonstrate perseverance to achieve our goals.", color: "#d97706" },
  { name: "Respect & Generosity", description: "We value every job and the contributions of every team member.", color: "#f59e0b" },
  { name: "Flexibility", description: "We proactively adapt to change.", color: "#f5a623" },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#050505] relative overflow-hidden">
      {/* Bg accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623]/20 to-transparent" />
      <div className="absolute inset-0 grid-bg" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f5a623]/20 bg-[#f5a623]/5 text-[#f5a623] text-xs font-bold uppercase tracking-widest">
            About Us
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
            Work for you is our{" "}
            <span className="gradient-text">reason for existing</span>
          </h2>
        </div>

        {/* Welcome banner */}
        <div className="mb-16 p-10 rounded-3xl border border-[#f5a623]/20 bg-gradient-to-br from-[#f5a623]/5 to-transparent text-center glow-gold">
          <h3 className="text-3xl font-black text-white mb-4">Welcome to <span className="gradient-text">Auttecs!</span></h3>
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto">
            At AUTTECS, we specialize in cutting-edge automation and technology solutions to transform
            your industry. Our commitment is to deliver integrated solutions that enhance your business
            efficiency and productivity through{" "}
            <span className="text-[#f5a623] font-semibold">vision systems</span>,{" "}
            <span className="text-[#f5a623] font-semibold">Manufacturing 5.0</span>, and{" "}
            <span className="text-[#f5a623] font-semibold">autonomous mobility</span>.
          </p>
        </div>

        {/* Mission + Vision */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {[
            {
              letter: "M",
              title: "Mission",
              text: "To offer our customers the best solutions, services, and products through continuous improvement as a tool for constant evolution. We apply advanced technology while developing and innovating products and processes.",
            },
            {
              letter: "V",
              title: "Vision",
              text: "To be an integrated company with efficient management across all our business units, focused on people and their comprehensive development. We are fully committed to the growth and success of our clients.",
            },
          ].map((item) => (
            <div key={item.title} className="card-hover group p-8 rounded-2xl border border-[#1e1e1e] bg-[#0d0d0d]">
              <div className="w-14 h-14 rounded-2xl bg-[#f5a623] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#f5a623]/30">
                <span className="text-black font-black text-xl">{item.letter}</span>
              </div>
              <h3 className="text-white text-2xl font-black mb-4 tracking-tight">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-black text-white text-center mb-10 tracking-tight">
            Our <span className="gradient-text">Values</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {values.map((v, i) => (
              <div
                key={v.name}
                className="card-hover group p-5 rounded-2xl border border-[#1e1e1e] bg-[#0d0d0d] text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${v.color}15`, border: `1px solid ${v.color}30` }}
                >
                  <span className="text-base font-black" style={{ color: v.color }}>
                    {v.name[0]}
                  </span>
                </div>
                <h4 className="text-white font-bold text-sm mb-2">{v.name}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
