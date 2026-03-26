"use client";

import { motion } from "framer-motion";

const columns = [
  {
    heading: "Your Product",
    items: ["React / Next.js", "Node.js", "Python / FastAPI", "TypeScript"],
  },
  {
    heading: "Your Data",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    heading: "Your Infrastructure",
    items: ["Docker", "AWS", "CI/CD (GitHub Actions)", "Cloudflare"],
  },
];

export default function TechStack() {
  return (
    <section className="border-b-[3px] border-brutal-black py-20 md:py-24" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-16 items-start">

          {/* LEFT — 3-column curated toolkit */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">

            {/* Non-dev callout */}
            <div className="flex items-start gap-3 border-[2px] border-brutal-yellow/50 bg-brutal-yellow/10 px-5 py-4">
              <span className="flex-shrink-0 mt-0.5 border-[2px] border-brutal-yellow bg-brutal-yellow text-brutal-black font-mono text-[9px] font-black uppercase tracking-widest px-2 py-0.5 whitespace-nowrap">
                Not a dev?
              </span>
              <p className="font-mono text-xs text-white/60 leading-relaxed">
                I pick proven tools that won&apos;t lock you in or fall apart at scale. The specifics only matter to engineers — skip ahead if you&apos;re not one.
              </p>
            </div>

            {/* 3-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-[3px] border-white/10">
              {columns.map((col, i) => (
                <motion.div
                  key={col.heading}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
                  className={`flex flex-col gap-4 p-6 ${
                    i < columns.length - 1
                      ? "border-b-[3px] sm:border-b-0 sm:border-r-[3px] border-white/10"
                      : ""
                  }`}
                  style={{ backgroundColor: "#111111" }}
                >
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                    {col.heading}
                  </p>
                  <div className="border-t-[2px] border-dashed border-white/10" />
                  <ul className="flex flex-col gap-2.5">
                    {col.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 font-mono text-sm text-white/75"
                      >
                        <span className="w-1.5 h-1.5 flex-shrink-0 bg-brutal-yellow" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Integrations line */}
            <p className="font-mono text-xs text-white/30 leading-relaxed">
              + Stripe, Telegram API, WhatsApp API, Twilio, OpenAI, Google APIs,
              GraphQL, WebSockets, REST — whatever your product needs to talk to.
            </p>
          </div>

          {/* RIGHT — heading + quote, sticky on desktop */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-24 flex flex-col gap-6 lg:text-right">
            <span className="inline-block border-[3px] border-brutal-yellow bg-brutal-yellow text-brutal-black px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest w-fit lg:ml-auto">
              Tech Stack
            </span>

            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-4xl xl:text-5xl leading-[0.95] text-cream uppercase tracking-[-0.03em]">
              Deliberate
              <br />
              choices.
              <br />
              <span className="text-white/30">Not trends.</span>
            </h2>

            <p className="font-mono text-sm text-white/40 italic border-l-[3px] border-brutal-yellow pl-4 lg:border-l-0 lg:border-r-[3px] lg:pr-4 lg:pl-0 leading-relaxed">
              &ldquo;Your stack doesn&apos;t matter.
              <br />
              Your architecture
              <br />
              decisions do.&rdquo;
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
