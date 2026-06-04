const values = [
  {
    name: "Integrity",
    description: "We adhere to procedures and policies, always doing the right thing.",
    color: "#00d4b4",
  },
  {
    name: "Audacity",
    description: "We strive to be the best at what we do, leading innovation and transforming the impossible into opportunities.",
    color: "#0891b2",
  },
  {
    name: "Effort and Tenacity",
    description: "We demonstrate perseverance to achieve our goals.",
    color: "#8b5cf6",
  },
  {
    name: "Respect and Generosity",
    description: "We value every job and the contributions of every team member.",
    color: "#f59e0b",
  },
  {
    name: "Flexibility",
    description: "We proactively adapt to change.",
    color: "#10b981",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#06101e] relative">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1a2d4a] bg-[#0a1628] text-[#00d4b4] text-sm font-medium">
            About Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Work for you is our{" "}
            <span className="gradient-text">reason for existing</span>
          </h2>
        </div>

        {/* Mission + Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="card-hover p-8 rounded-2xl border border-[#1a2d4a] bg-[#0a1628]">
            <div className="w-12 h-12 rounded-xl bg-[#00d4b4]/10 border border-[#00d4b4]/20 flex items-center justify-center mb-5">
              <span className="text-[#00d4b4] font-bold text-lg">M</span>
            </div>
            <h3 className="text-white text-2xl font-bold mb-4">Mission</h3>
            <p className="text-slate-400 leading-relaxed">
              To offer our customers the best solutions, services, and products through continuous
              improvement as a tool for constant evolution. We apply advanced technology while
              developing and innovating products and processes.
            </p>
          </div>

          <div className="card-hover p-8 rounded-2xl border border-[#1a2d4a] bg-[#0a1628]">
            <div className="w-12 h-12 rounded-xl bg-[#0891b2]/10 border border-[#0891b2]/20 flex items-center justify-center mb-5">
              <span className="text-[#0891b2] font-bold text-lg">V</span>
            </div>
            <h3 className="text-white text-2xl font-bold mb-4">Vision</h3>
            <p className="text-slate-400 leading-relaxed">
              To be an integrated company with efficient management across all our business units,
              focused on people and their comprehensive development. We are fully committed to the
              growth and success of our clients.
            </p>
          </div>
        </div>

        {/* Welcome */}
        <div className="text-center mb-16 p-10 rounded-2xl border border-[#1a2d4a] bg-[#0a1628]">
          <h3 className="text-3xl font-bold text-white mb-4">Welcome to Auttecs!</h3>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
            At AUTTECS, we specialize in cutting-edge automation and technology solutions to transform
            your industry. Our commitment is to deliver integrated solutions that enhance your business
            efficiency and productivity through{" "}
            <span className="text-[#00d4b4] font-medium">vision systems</span>,{" "}
            <span className="text-[#00d4b4] font-medium">Manufacturing 5.0</span>, and{" "}
            <span className="text-[#00d4b4] font-medium">autonomous mobility</span>.
          </p>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-8">Our Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((v) => (
              <div
                key={v.name}
                className="card-hover p-5 rounded-2xl border border-[#1a2d4a] bg-[#0a1628] text-center"
              >
                <div
                  className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                  style={{ background: `${v.color}15`, border: `1px solid ${v.color}30` }}
                >
                  <span className="text-sm font-bold" style={{ color: v.color }}>
                    {v.name[0]}
                  </span>
                </div>
                <h4 className="text-white font-semibold text-sm mb-2">{v.name}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
