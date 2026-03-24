"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/lib/data";

const NAV_ITEMS = [
  { label: "Services",  anchor: "services"  },
  { label: "Projects",  anchor: "projects"  },
  { label: "Insights",  anchor: null,  href: "/insights", badge: "NEW" },
  { label: "About",     anchor: "about"     },
  { label: "Contact",   anchor: "contact"   },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isInsights = pathname === "/insights";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openCalendly = () => {
    if (typeof window !== "undefined" && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: siteConfig.calendlyUrl });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-brutal-black border-b-[3px] border-brutal-black" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-4">
        {/* Logo */}
        <Link
          href="/"
          className={`font-mono font-bold text-xl tracking-tight transition-colors duration-200 flex-shrink-0 ${
            scrolled ? "text-brutal-yellow" : isInsights ? "text-cream" : "text-brutal-black"
          }`}
        >
          tfpdev
        </Link>

        {/* Availability indicator */}
        <div
          className={`hidden sm:flex items-center gap-2 border-[2px] border-current px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest transition-colors duration-200 ${
            scrolled
              ? "text-brutal-green border-brutal-green/60"
              : isInsights
              ? "text-brutal-green/80 border-brutal-green/40"
              : "text-brutal-black border-brutal-black/30"
          }`}
        >
          <span className="pulse-dot inline-block w-2 h-2 rounded-full bg-brutal-green flex-shrink-0" />
          Available · 2 spots Q2 2026
        </div>

        {/* Nav links — desktop only */}
        <nav className="hidden lg:flex items-center gap-5 flex-shrink-0">
          {NAV_ITEMS.map((item) => {
            const href = item.href
              ? item.href
              : isInsights
              ? `/#${item.anchor}`
              : `#${item.anchor}`;

            const baseColor = scrolled || isInsights ? "text-cream/80" : "text-brutal-black";

            return (
              <Link
                key={item.label}
                href={href}
                className={`relative font-display font-bold text-xs uppercase tracking-[0.12em] transition-colors duration-200 hover:text-brutal-yellow flex items-center gap-1 ${baseColor}`}
              >
                {item.label}
                {item.badge && (
                  <span className="inline-block bg-brutal-yellow text-brutal-black font-mono text-[8px] font-black uppercase px-1.5 py-0.5 rotate-[2deg] leading-none">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <button
          onClick={openCalendly}
          className={`flex-shrink-0 inline-flex items-center justify-center border-[3px] font-display font-bold uppercase text-xs tracking-wide px-4 py-2 transition-all duration-150 cursor-pointer ${
            scrolled || isInsights
              ? "border-brutal-yellow bg-brutal-yellow text-brutal-black shadow-brutal-sm hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
              : "border-brutal-black bg-brutal-black text-cream shadow-brutal-sm hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
          }`}
        >
          Book a Call
        </button>
      </div>
    </header>
  );
}
