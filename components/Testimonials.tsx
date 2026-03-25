"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    text: "We needed someone who could think about the product, not just write code. He rebuilt our entire architecture in weeks and stayed until it was solid in production.",
    attribution: "Founder, membership platform · California, US",
  },
  {
    text: "We had a half-built payment system and a deadline. He came in, understood the problem in one call, and delivered a working pipeline faster than our previous team delivered a spec document.",
    attribution: "CEO, fintech startup · Turkey",
  },
  {
    text: "I expected a developer. I got someone who asked better questions about my business than my business consultant. The bot he built replaced three hours of daily manual work for my team.",
    attribution: "Operations director, e-commerce · Germany",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream border-b-[3px] border-brutal-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 flex flex-col gap-3">
          <span className="inline-block border-[3px] border-brutal-black bg-brutal-yellow px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest w-fit">
            What Clients Say
          </span>
          <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-brutal-black uppercase tracking-[-0.03em]">
            What working
            <br />
            with me looks like.
          </h2>
          <p className="font-mono text-xs text-brutal-black/40 max-w-xl leading-relaxed">
            Paraphrased from real conversations. Names withheld, but the work is verifiable.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
              className="relative bg-cream border border-brutal-black p-6 pt-10 flex flex-col gap-4 overflow-hidden"
            >
              {/* Large decorative quotation mark */}
              <div
                className="absolute top-0 left-4 font-display font-black text-brutal-yellow leading-none select-none pointer-events-none"
                style={{ fontSize: "5rem", lineHeight: 1, opacity: 0.9 }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Quote */}
              <p className="font-display text-base sm:text-lg leading-relaxed text-brutal-black/80 relative z-10">
                {q.text}
              </p>

              {/* Attribution */}
              <p className="font-mono text-xs text-brutal-black/40 mt-auto">
                — {q.attribution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
