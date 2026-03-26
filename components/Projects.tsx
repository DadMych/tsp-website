"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { MapPin } from "lucide-react";
import { projects, siteConfig } from "@/lib/data";
import DualCTA from "@/components/ui/DualCTA";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.4, ease: "easeOut" as const },
  }),
};

const locations = ["US", "Turkey", "Cyprus", "Ukraine", "Germany", "UAE"];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-28"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-6 flex flex-col gap-3">
          <span className="inline-block border-[3px] border-brutal-yellow bg-brutal-yellow text-brutal-black px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest w-fit">
            Selected Work
          </span>
          <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-cream uppercase tracking-[-0.03em]">
            30+ shipped.
            <br />
            <span className="text-brutal-yellow">Here are some.</span>
          </h2>
          <Link
            href="/insights"
            className="font-mono text-sm font-bold text-brutal-yellow underline underline-offset-4 hover:no-underline transition-all duration-150"
          >
            24 insights from building them →
          </Link>
        </div>

        {/* Geography row */}
        <div className="mb-12 flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-white/30 mr-1">
            Clients from:
          </span>
          {locations.map((loc, i) => (
            <span key={loc} className="flex items-center gap-1">
              <span className="border-[2px] border-white/20 px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wide text-white/60">
                {loc}
              </span>
              {i < locations.length - 1 && (
                <span className="text-white/20 font-bold ml-1">·</span>
              )}
            </span>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              whileHover={{ x: 3, y: 3, transition: { duration: 0.1 } }}
              className={`relative border-[3px] border-white/10 flex flex-col ${
                project.featured ? "md:col-span-2" : ""
              }`}
              style={{
                backgroundColor: "#111111",
                boxShadow: `4px 4px 0px 0px ${project.accentHex}50`,
                borderLeftColor: project.accentHex,
                borderLeftWidth: "5px",
              }}
            >
              <div className={`p-6 flex flex-col gap-4 ${project.featured ? "md:p-8" : ""}`}>
                {/* NDA stamp — absolute, overlapping top-right corner */}
                {project.underNda && (
                  <div
                    className="absolute -top-3 right-4 z-20 bg-brutal-red border-[3px] border-brutal-red text-cream font-mono font-black text-[11px] uppercase tracking-[0.15em] px-3 py-1"
                    style={{
                      transform: "rotate(-5deg)",
                      boxShadow: "3px 3px 0px 0px #000000",
                    }}
                  >
                    Under NDA
                  </div>
                )}

                {/* Top row: location */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-white/40 uppercase tracking-widest">
                    <MapPin size={11} strokeWidth={2.5} />
                    {project.location}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`font-display font-black text-white uppercase tracking-tight leading-tight ${
                    project.featured
                      ? "text-2xl sm:text-3xl md:text-4xl"
                      : "text-xl sm:text-2xl"
                  }`}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-display text-sm text-white/60 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics line — highlighted */}
                <div
                  className="border-l-[3px] pl-3 py-1"
                  style={{ borderColor: project.accentHex }}
                >
                  <p
                    className="font-mono text-xs font-bold uppercase tracking-wide"
                    style={{ color: project.accentHex }}
                  >
                    {project.metrics}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block border-[2px] px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide"
                      style={{
                        borderColor: project.accentHex + "60",
                        color: project.accentHex,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Insight link */}
                {project.insightLink && project.insightText && (
                  <Link
                    href={project.insightLink}
                    className="block font-mono text-xs text-brutal-yellow hover:text-white underline underline-offset-4 transition-colors duration-150"
                  >
                    {project.insightText} →
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-10 flex flex-col gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <p className="font-display font-bold text-white/40 text-base">
              + more under NDA.{" "}
              <span className="text-brutal-yellow font-black">
                Let&apos;s talk about what I can build for you.
              </span>
            </p>
            <span className="hidden sm:inline text-white/20">·</span>
            <Link
              href="/insights"
              className="font-mono text-sm font-bold text-brutal-yellow underline underline-offset-4 hover:no-underline transition-all duration-150 whitespace-nowrap"
            >
              Read 24 insights from these projects →
            </Link>
          </div>
          <div className="flex justify-center">
            <DualCTA
              onBookCall={() => {
                if (typeof window !== "undefined" && (window as any).Calendly) {
                  (window as any).Calendly.initPopupWidget({ url: siteConfig.calendlyUrl });
                }
              }}
              quizText="not ready to talk? start with a free quiz"
              layout="horizontal"
              variant="dark"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
