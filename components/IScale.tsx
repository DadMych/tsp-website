"use client";

import { motion } from "framer-motion";

const CYAN = "#22d3ee";

export default function IScale() {
  return (
    <section
      id="scale"
      className="py-16 md:py-20"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-10 flex flex-col gap-4"
        >
          <span
            className="inline-block border-[3px] px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest w-fit text-brutal-black"
            style={{ backgroundColor: CYAN, borderColor: CYAN }}
          >
            Scale
          </span>
          <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-cream uppercase tracking-[-0.03em]">
            I work solo.
            <br />
            I don&apos;t ship solo.
          </h2>
          <p className="font-display text-lg sm:text-xl font-semibold text-cream/80">
            You talk to me. I bring the people.
          </p>
        </motion.div>

        {/* Body paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-display text-base sm:text-lg text-white/55 leading-relaxed max-w-2xl mb-8"
        >
          When a project needs more than one pair of hands, I bring in people
          I&apos;ve shipped with before. Not strangers from a freelance marketplace.
          Design, dev, infrastructure, QA — whatever the project needs.
          I vet them, I brief them, I manage them.
        </motion.p>

        {/* Proof line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          className="border-[3px] border-white/10 p-6 mb-5"
          style={{
            backgroundColor: "#111111",
            borderLeftColor: CYAN,
            borderLeftWidth: "5px",
          }}
        >
          <p className="font-display font-bold text-base sm:text-lg text-cream leading-relaxed">
            My last project had 18 people across design, dev, and ops.
            <br />
            <span style={{ color: CYAN }}>
              One Slack. One weekly sync. One person running it: me.
            </span>
          </p>
        </motion.div>

        {/* Trust closer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="font-mono text-xs text-white/30 uppercase tracking-widest"
        >
          One point of contact. My responsibility.
        </motion.p>

      </div>
    </section>
  );
}
