"use client";

import { manifestoItems } from "@/lib/data";

export default function ManifestoStrip() {
  const doubled = [...manifestoItems, ...manifestoItems];

  return (
    <div className="bg-brutal-black border-y-[3px] border-brutal-black overflow-hidden py-4 relative z-20">
      <div className="animate-marquee-fast">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-6 flex-shrink-0">
            <span className="font-mono text-sm font-bold text-brutal-yellow uppercase tracking-[0.12em] whitespace-nowrap">
              {item}
            </span>
            <span className="text-brutal-yellow/40 text-xl font-bold flex-shrink-0">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
