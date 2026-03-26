"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const CYAN = "#22d3ee";

const roles = [
  {
    name: "FRONTEND",
    description: "What your users see and touch.",
  },
  {
    name: "BACKEND & API",
    description: "What makes it actually work.",
  },
  {
    name: "UI/UX DESIGN",
    description: "How it looks, how it feels, how people use it.",
  },
  {
    name: "DEVOPS",
    description: "Infrastructure that doesn't need prayer.",
  },
  {
    name: "MOBILE",
    description: "iOS and Android. One codebase.",
  },
  {
    name: "QA & TESTING",
    description: "Before it ships.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" as const },
  }),
};

export default function IScale() {
  return (
    <section
      id="scale"
      className="border-b-[3px] border-brutal-black py-16 md:py-20"
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
            className="inline-block border-[3px] px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest w-fit"
            style={{ color: CYAN, borderColor: CYAN + "50" }}
          >
            Scale
          </span>
          <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-cream uppercase tracking-[-0.03em]">
            I work solo.
            <br />
            I don&apos;t ship solo.
          </h2>
          <p className="font-display text-lg sm:text-xl font-semibold text-cream/80">
            You talk to me. I bring the firepower.
          </p>
          <p className="font-display text-sm text-white/45 leading-relaxed max-w-xl">
            When a project needs more than one pair of hands, I bring in specialists
            I&apos;ve vetted and managed directly. You still get one person accountable for everything.
          </p>
        </motion.div>

        {/* Role grid — 3 col desktop, 2 col tablet, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
          {roles.map((role, i) => (
            <motion.div
              key={role.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="border-[3px] border-white/10 p-5 flex flex-col gap-2 cursor-default"
              style={{
                backgroundColor: "#111111",
                borderLeftColor: CYAN,
                borderLeftWidth: "5px",
              }}
            >
              <span
                className="font-mono text-xs font-bold uppercase tracking-widest"
                style={{ color: CYAN }}
              >
                {role.name}
              </span>
              <p className="font-display text-sm text-white/50 leading-snug">
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Proof line — the emotional anchor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
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
              One Slack. One weekly sync. One person accountable: me.
            </span>
          </p>
        </motion.div>

        {/* Trust closer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="font-mono text-xs text-white/30 uppercase tracking-widest"
        >
          One point of contact. One invoice. I own the result.
        </motion.p>

      </div>
    </section>
  );
}
