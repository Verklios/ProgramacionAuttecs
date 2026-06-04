"use client";
import { useState } from "react";
import { X } from "lucide-react";

// Using placeholder industrial images from Unsplash (free, no auth)
const images = [
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    alt: "Automation engineer at control panel",
  },
  {
    src: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80",
    alt: "Industrial mining operations",
  },
  {
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
    alt: "Robotics and automation",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    alt: "Technology circuit board",
  },
  {
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    alt: "Industrial conveyor systems",
  },
  {
    src: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    alt: "Smart factory operations",
  },
  {
    src: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&q=80",
    alt: "Industrial plant facility",
  },
  {
    src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
    alt: "Renewable energy solutions",
  },
  {
    src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80",
    alt: "HVAC and mechanical systems",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1a2d4a] bg-[#0a1628] text-[#00d4b4] text-sm font-medium">
            Gallery
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Take a look at{" "}
            <span className="gradient-text">our work</span>
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid rounded-2xl overflow-hidden border border-[#1a2d4a] cursor-pointer group relative"
              onClick={() => setSelected(img.src)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#00d4b4]/0 group-hover:bg-[#00d4b4]/10 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#030b14]/70 px-4 py-2 rounded-full">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-[#00d4b4]">
            <X size={28} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={selected}
            alt="Gallery image"
            className="max-w-full max-h-[85vh] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
