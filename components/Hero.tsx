"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { siteConfig } from "@/lib/data";
import Terminal from "@/components/Terminal";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const openCalendly = () => {
    if (typeof window !== "undefined" && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: siteConfig.calendlyUrl });
    }
  };

  return (
    <section
      className="relative bg-cream bg-grid flex flex-col justify-center pt-24 pb-16 overflow-x-hidden border-b-[3px] border-brutal-black"
      id="hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* ── Two-column grid on desktop ─ */}
        <div className="lg:grid lg:grid-cols-[1fr_420px] lg:gap-12 lg:items-center">

          {/* LEFT — hero content ─────────────────────── */}
          <div>
            {/* Label tag */}
            <motion.div
              custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="mb-6"
            >
              <span className="inline-block border-[3px] border-brutal-black bg-brutal-yellow px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest">
                Fractional CTO · Full-Stack Development
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
              <h1 className="font-display font-black text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[6.8rem] leading-[0.88] tracking-[-0.04em] text-brutal-black uppercase mb-3">
                CTO
              </h1>
              <h1 className="font-display font-black text-[11vw] sm:text-[9vw] md:text-[7.5vw] lg:text-[5.4rem] leading-[0.88] tracking-[-0.04em] text-brutal-black uppercase mb-5">
                as a Service<span className="text-brutal-yellow">.</span>
              </h1>
            </motion.div>

            {/* "Started at 14..." — bold display, continuation of headline */}
            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="font-display font-black text-xl sm:text-2xl text-brutal-black/60 uppercase tracking-tight mb-5"
            >
              Started at 14. Still shipping at 22.
            </motion.p>

            {/* Subheadline with marker */}
            <motion.p
              custom={3} variants={fadeUp} initial="hidden" animate="visible"
              className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-brutal-black mb-4 max-w-2xl leading-snug"
            >
              I solve <mark>business problems</mark> with code.
              <br />
              Not the other way around.
            </motion.p>

            {/* Body — clean, factual, no gimmicks */}
            <motion.p
              custom={4} variants={fadeUp} initial="hidden" animate="visible"
              className="font-display text-base sm:text-lg text-brutal-black/65 max-w-xl leading-relaxed mb-8"
            >
              8 years building products. Teams up to 18. 30+ projects shipped
              across US, EU, and Middle East.
            </motion.p>

            {/* CTAs — last element in left column */}
            <motion.div
              custom={5} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={openCalendly}
                className="btn-pulse inline-flex items-center justify-center border-[3px] border-brutal-black bg-brutal-yellow text-brutal-black font-display font-black uppercase tracking-wide px-8 py-4 text-base sm:text-lg hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none active:translate-x-[6px] active:translate-y-[6px] transition-all duration-150 cursor-pointer"
              >
                Book a Call →
              </button>
              <a
                href="#services"
                className="inline-flex items-center justify-center border-[3px] border-brutal-black bg-transparent text-brutal-black font-display font-black uppercase tracking-wide px-8 py-4 text-base sm:text-lg shadow-brutal hover:shadow-brutal-hover hover:translate-x-[3px] hover:translate-y-[3px] active:translate-x-[6px] active:translate-y-[6px] transition-all duration-150"
              >
                See What I Build ↓
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Terminal (desktop only) ─────────── */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.55, ease: "easeOut" }}
          >
            <Terminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
