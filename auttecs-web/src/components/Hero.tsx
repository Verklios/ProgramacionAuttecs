"use client";
import { ArrowRight, MapPin } from "lucide-react";
import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center grid-bg overflow-hidden pt-20">
      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4b4]/6 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#f59e0b]/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4b4]/30 bg-[#00d4b4]/5 text-[#00d4b4] text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d4b4] pulse-dot" />
            Automation & Technology Solutions
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            Industry{" "}
            <span className="gradient-text text-glow">5.0</span>
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
            We deliver end-to-end integrated engineering projects, covering all phases
            from concept development through operation, by integrating advanced
            automation, renewable energy systems, and Industry 5.0 technologies.
          </p>
          <p className="text-slate-400 text-base leading-relaxed max-w-xl">
            Our goal is to optimize asset performance, reduce operating costs, and drive
            decarbonization, particularly in sectors such as{" "}
            <span className="text-[#00d4b4] font-medium">mining</span> and{" "}
            <span className="text-[#00d4b4] font-medium">heavy industry</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#00d4b4] text-[#030b14] font-semibold hover:bg-[#00b89c] transition-all duration-200 shadow-lg shadow-[#00d4b4]/25 hover:shadow-[#00d4b4]/40 hover:scale-105 tracking-wide"
            >
              Schedule Now
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-[#1a2d4a] text-slate-300 font-semibold hover:border-[#00d4b4]/40 hover:text-white transition-all duration-200 tracking-wide"
            >
              Our Services
            </a>
          </div>

          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <MapPin size={14} className="text-[#00d4b4]" />
            <span>México & USA</span>
          </div>
        </div>

        {/* Right – Dashboard */}
        <div className="flex justify-center lg:justify-end">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
