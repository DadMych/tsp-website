"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { antiPortfolioItems } from "@/lib/data";

export default function AntiPortfolio() {
  return (
    <section className="bg-brutal-black border-b-[3px] border-brutal-black py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left — title */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="flex flex-col gap-4"
          >
            <span className="inline-block border-[3px] border-brutal-red bg-brutal-red text-cream px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest w-fit">
              Let&apos;s be clear
            </span>
            <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-cream uppercase tracking-[-0.03em]">
              What I
              <br />
              <span className="text-brutal-red">don&apos;t do.</span>
            </h2>
            <p className="font-display text-cream/50 text-base max-w-sm leading-relaxed">
              Knowing what I&apos;m NOT doing is just as important as knowing
              what I am. This filters out bad fits early.
            </p>
          </motion.div>

          {/* Right — list */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="flex flex-col border-[3px] border-white/10"
          >
            {antiPortfolioItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.07, duration: 0.35 }}
                className={`flex items-start gap-4 p-5 ${
                  i < antiPortfolioItems.length - 1
                    ? "border-b-[2px] border-white/10"
                    : ""
                }`}
              >
                <div className="flex-shrink-0 mt-0.5 border-[2px] border-brutal-red p-0.5">
                  <X size={14} strokeWidth={3} className="text-brutal-red" />
                </div>
                <span className="font-mono text-sm font-bold text-white/80">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
