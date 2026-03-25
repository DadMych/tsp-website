"use client";

import { motion } from "framer-motion";

const rows = [
  {
    get:  "An architect who codes",
    wont: "A coder who googles architecture",
  },
  {
    get:  "Honest timelines with built-in buffers",
    wont: "Optimistic estimates that slip every sprint",
  },
  {
    get:  "Weekly updates — whether news is good or bad",
    wont: "Radio silence until you chase me down",
  },
  {
    get:  "'That's phase two' — said clearly and early",
    wont: "Scope creep absorbed silently until deadlines blow up",
  },
  {
    get:  "Deep focus — 2-3 clients max at a time",
    wont: "Spread thin across 15 projects at once",
  },
];

export default function AntiPortfolio() {
  return (
    <section className="bg-cream border-b-[3px] border-brutal-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-3">
          <span className="inline-block border-[3px] border-brutal-black bg-brutal-yellow px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest w-fit">
            Let&apos;s be clear
          </span>
          <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-brutal-black uppercase tracking-[-0.03em]">
            What this is.
            <br />
            <span className="text-brutal-black/35">And what it isn&apos;t.</span>
          </h2>
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="border-[3px] border-brutal-black overflow-hidden shadow-brutal"
        >
          {/* Column headers */}
          <div className="grid grid-cols-2">
            <div className="p-4 sm:p-5 bg-white border-r-[3px] border-brutal-black">
              <p className="font-mono text-[11px] font-black uppercase tracking-[0.2em] text-brutal-black">
                What you get
              </p>
            </div>
            <div className="p-4 sm:p-5 bg-brutal-black/5">
              <p className="font-mono text-[11px] font-black uppercase tracking-[0.2em] text-brutal-black/35">
                What you won&apos;t get
              </p>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-2 border-t-[3px] border-brutal-black"
            >
              <div className="p-5 sm:p-6 bg-white border-r-[3px] border-brutal-black flex items-center">
                <p className="font-display text-sm sm:text-base font-semibold text-brutal-black leading-snug">
                  {row.get}
                </p>
              </div>
              <div className="p-5 sm:p-6 bg-brutal-black/5 flex items-center">
                <p className="font-display text-sm sm:text-base text-brutal-black/40 line-through leading-snug decoration-brutal-black/30 decoration-1">
                  {row.wont}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
