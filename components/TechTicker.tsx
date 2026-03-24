"use client";

import { techStack } from "@/lib/data";

function TickerRow({
  items,
  direction,
}: {
  items: string[];
  direction: "left" | "right";
}) {
  return (
    <div className="overflow-hidden border-y-[3px] border-brutal-black py-3.5">
      <div
        className={
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }
      >
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center border-[3px] border-brutal-black bg-white mx-2.5 px-5 py-2 font-mono text-sm font-bold uppercase tracking-wide shadow-brutal-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechTicker() {
  return (
    <section className="bg-cream border-b-[3px] border-brutal-black py-16 md:py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <span className="inline-block border-[3px] border-brutal-black bg-brutal-blue px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest">
          Tech Stack
        </span>
      </div>

      {/* Marquee rows */}
      <div className="flex flex-col gap-0">
        <TickerRow items={techStack.row1} direction="left" />
        <TickerRow items={techStack.row2} direction="right" />
      </div>

      {/* Quote */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <p className="font-mono text-base sm:text-lg font-bold text-brutal-black/50 max-w-lg">
          &ldquo;Your stack doesn&apos;t matter. Your architecture decisions do.&rdquo;
        </p>
      </div>
    </section>
  );
}
