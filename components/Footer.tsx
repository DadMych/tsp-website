"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  const openCalendly = () => {
    if (typeof window !== "undefined" && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: siteConfig.calendlyUrl });
    }
  };

  return (
    <footer id="contact" className="bg-brutal-black">

      {/* Main CTA block */}
      <div className="relative overflow-hidden border-b-[3px] border-white/10 py-20 md:py-28">

        {/* "AVAILABLE" watermark — large rotated background text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="font-display font-black text-cream uppercase tracking-widest"
            style={{
              fontSize: "clamp(4rem, 12vw, 10rem)",
              opacity: 0.04,
              transform: "rotate(-15deg)",
              letterSpacing: "0.3em",
            }}
          >
            AVAILABLE
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start gap-8"
          >
            {/* Label with availability sticker */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-block border-[3px] border-brutal-yellow bg-brutal-yellow text-brutal-black px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest">
                Let&apos;s work together
              </span>
              <span className="inline-block border-[3px] border-brutal-red bg-brutal-red text-cream px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-widest shadow-brutal-sm rotate-1">
                2 spots · Q2 2026
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display font-black uppercase tracking-[-0.04em] text-cream leading-[0.9] max-w-5xl"
              style={{ fontSize: "clamp(2.8rem, 7vw, 7.5rem)" }}
            >
              You made it
              <br />
              to the bottom.
              <br />
              <span className="text-brutal-yellow">That means you&apos;re serious.</span>
            </h2>

            {/* Subheadline */}
            <p className="font-display text-lg sm:text-xl text-cream/50 max-w-lg leading-relaxed">
              Currently available for 1–2 new engagements starting Q2 2026.
            </p>

            {/* Primary CTA */}
            <button
              onClick={openCalendly}
              className="btn-pulse inline-flex items-center justify-center border-[3px] border-brutal-yellow bg-brutal-yellow text-brutal-black font-display font-black uppercase px-10 py-5 text-xl tracking-wide hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none active:translate-x-[6px] active:translate-y-[6px] transition-all duration-150 cursor-pointer"
            >
              Book a Call →
            </button>

            {/* Email — large mono */}
            <div className="flex flex-col gap-1 mt-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                Or reach out directly:
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-mono font-black text-2xl sm:text-3xl md:text-4xl text-cream hover:text-brutal-yellow transition-colors duration-150 tracking-tight"
              >
                {siteConfig.email}
              </a>
            </div>

            {/* Secondary links */}
            <div className="flex items-center gap-5 flex-wrap">
              {/* Replace PLACEHOLDER_LINKEDIN_URL with real URL */}
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono font-bold text-sm text-cream/40 hover:text-brutal-yellow transition-colors duration-150 uppercase tracking-widest"
              >
                LinkedIn ↗
              </a>
              {/* Replace PLACEHOLDER_GITHUB_URL with real URL — optional */}
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono font-bold text-sm text-cream/40 hover:text-brutal-yellow transition-colors duration-150 uppercase tracking-widest"
              >
                GitHub ↗
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-5 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span className="font-mono text-sm font-black text-brutal-yellow uppercase tracking-widest">
            tfpdev
          </span>
          <span className="font-mono text-xs text-cream/25">
            © 2026 · Based in Europe · US &amp; EU timezones · English &amp; Ukrainian
          </span>
        </div>
      </div>
    </footer>
  );
}
