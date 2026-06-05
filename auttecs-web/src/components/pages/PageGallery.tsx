"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/gallery/foto-01.jpeg", alt: "Auttecs project 1" },
  { src: "/gallery/foto-02.jpeg", alt: "Auttecs project 2" },
  { src: "/gallery/foto-03.jpeg", alt: "Auttecs project 3" },
  { src: "/gallery/foto-04.jpeg", alt: "Auttecs project 4" },
  { src: "/gallery/foto-05.jpeg", alt: "Auttecs project 5" },
  { src: "/gallery/foto-06.jpeg", alt: "Auttecs project 6" },
  { src: "/gallery/foto-07.jpeg", alt: "Auttecs project 7" },
  { src: "/gallery/foto-08.jpeg", alt: "Auttecs project 8" },
  { src: "/gallery/foto-09.jpeg", alt: "Auttecs project 9" },
  { src: "/gallery/foto-10.jpeg", alt: "Auttecs project 10" },
];

export default function PageGallery({ onNavigate }: { onNavigate: (i: number) => void; currentPage: number; totalPages: number }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="relative w-full h-full flex items-center overflow-y-auto page-scroll bg-[#050505]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-7 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#f5a623]/20 bg-[#f5a623]/5 text-[#f5a623] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
            Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Take a look at <span className="gradient-text">our work</span>
          </h2>
        </motion.div>

        <div className="columns-2 sm:columns-2 lg:columns-3 gap-2 sm:gap-3 space-y-2 sm:space-y-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="break-inside-avoid relative rounded-xl overflow-hidden border border-[#1a1a1a] cursor-pointer group"
              onClick={() => setSelected(i)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} className="w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end p-3">
                <div className="flex items-center justify-between w-full">
                  <span className="text-white text-xs font-semibold">{img.alt}</span>
                  <div className="w-7 h-7 rounded-full bg-[#f5a623] flex items-center justify-center">
                    <ZoomIn size={12} className="text-black" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-xl border-2 border-[#f5a623]/0 group-hover:border-[#f5a623]/30 transition-all duration-400 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-center mt-6 sm:mt-8">
          <button onClick={() => onNavigate(4)} className="btn-shine px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#f5a623] text-black font-black uppercase tracking-widest text-xs sm:text-sm hover:bg-[#fbbf24] transition-all shadow-lg shadow-[#f5a623]/20">
            Contact Us →
          </button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={images[selected].src} alt={images[selected].alt} className="w-full max-h-[75vh] object-contain rounded-2xl border border-[#f5a623]/10" />
              <div className="absolute top-3 right-3">
                <button onClick={() => setSelected(null)} className="w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:text-[#f5a623] transition-colors">
                  <X size={16} />
                </button>
              </div>
              {selected > 0 && (
                <button onClick={() => setSelected(selected - 1)} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:text-[#f5a623] transition-colors">
                  <ChevronLeft size={16} />
                </button>
              )}
              {selected < images.length - 1 && (
                <button onClick={() => setSelected(selected + 1)} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:text-[#f5a623] transition-colors">
                  <ChevronRight size={16} />
                </button>
              )}
              <div className="text-center mt-3 text-xs text-slate-600 uppercase tracking-widest">
                {selected + 1} / {images.length} — {images[selected].alt}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
