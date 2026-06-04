"use client";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const images = [
  { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", alt: "Automation engineer at control panel" },
  { src: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80", alt: "Industrial mining operations" },
  { src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80", alt: "Robotics and automation" },
  { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", alt: "Technology systems" },
  { src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80", alt: "Industrial conveyor systems" },
  { src: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80", alt: "Smart factory" },
  { src: "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&q=80", alt: "Industrial plant" },
  { src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80", alt: "Renewable energy" },
  { src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80", alt: "Mechanical systems" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-28 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f5a623]/20 bg-[#f5a623]/5 text-[#f5a623] text-xs font-bold uppercase tracking-widest">
            Gallery
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
            Take a look at{" "}
            <span className="gradient-text">our work</span>
          </h2>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
          {images.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid relative rounded-2xl overflow-hidden border border-[#1a1a1a] cursor-pointer group"
              onClick={() => setSelected(i)}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400">
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-white text-sm font-semibold">{img.alt}</span>
                  <div className="w-8 h-8 rounded-full bg-[#f5a623] flex items-center justify-center">
                    <ZoomIn size={14} className="text-black" />
                  </div>
                </div>
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[#f5a623]/0 group-hover:border-[#f5a623]/30 transition-all duration-400 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6 backdrop-blur-sm"
          onClick={() => setSelected(null)}
          style={{ animation: "fadeIn 0.2s ease" }}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#111] border border-[#333] flex items-center justify-center text-slate-400 hover:text-[#f5a623] hover:border-[#f5a623]/40 transition-all"
            onClick={() => setSelected(null)}
          >
            <X size={18} />
          </button>

          {/* Prev / Next */}
          {selected > 0 && (
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#111] border border-[#333] flex items-center justify-center text-slate-400 hover:text-[#f5a623] hover:border-[#f5a623]/40 transition-all"
              onClick={(e) => { e.stopPropagation(); setSelected(selected - 1); }}
            >
              ‹
            </button>
          )}
          {selected < images.length - 1 && (
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#111] border border-[#333] flex items-center justify-center text-slate-400 hover:text-[#f5a623] hover:border-[#f5a623]/40 transition-all"
              onClick={(e) => { e.stopPropagation(); setSelected(selected + 1); }}
            >
              ›
            </button>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[selected].src}
            alt={images[selected].alt}
            className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-[#f5a623]/10"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-500 uppercase tracking-widest">
            {selected + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
