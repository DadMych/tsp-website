"use client";

import { motion } from "framer-motion";
import { trustSignals, trustSubtext } from "@/lib/data";

export default function SocialProof() {
  return (
    <section className="bg-cream border-b-[3px] border-brutal-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 flex flex-col gap-3">
          <span className="inline-block border-[3px] border-brutal-black bg-brutal-yellow px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest w-fit">
            Trust Signals
          </span>
          <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-brutal-black uppercase tracking-[-0.03em]">
            Work speaks.
            <br />
            <span className="text-brutal-black/50">Here&apos;s the context.</span>
          </h2>
        </div>

        {/* Trust signal cards — clean, no colored decorations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {trustSignals.map((signal, i) => (
            <motion.div
              key={signal.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.09, duration: 0.4, ease: "easeOut" }}
              whileHover={{
                x: 3,
                y: 3,
                boxShadow: "3px 3px 0px 0px #000000",
                transition: { duration: 0.1 },
              }}
              className="bg-white border-[3px] border-brutal-black flex flex-col gap-4 p-7 relative"
              style={{ boxShadow: "6px 6px 0px 0px #000000" }}
            >
              {/* Accent top strip */}
              <div
                className="absolute top-0 left-0 right-0 h-[5px] border-b-[3px] border-brutal-black"
                style={{ backgroundColor: signal.accentHex }}
              />

              {/* Title */}
              <h3 className="font-mono font-black text-lg sm:text-xl uppercase tracking-wide text-brutal-black mt-2">
                {signal.title}
              </h3>

              {/* Description */}
              <p className="font-display text-base text-brutal-black/70 leading-relaxed">
                {signal.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-brutal-black/40 text-center max-w-3xl mx-auto"
        >
          {trustSubtext}
        </motion.p>
      </div>
    </section>
  );
}
