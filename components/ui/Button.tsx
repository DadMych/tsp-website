"use client";

import { siteConfig } from "@/lib/data";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  calendly?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  calendly = false,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-brutal-yellow border-2 border-brutal-black text-brutal-black shadow-brutal hover:shadow-brutal-hover hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-brutal-none active:translate-x-[4px] active:translate-y-[4px]",
    secondary:
      "bg-brutal-black border-2 border-brutal-black text-cream shadow-brutal hover:shadow-brutal-hover hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-brutal-none active:translate-x-[4px] active:translate-y-[4px]",
    outline:
      "bg-transparent border-2 border-brutal-black text-brutal-black shadow-brutal hover:bg-brutal-yellow hover:shadow-brutal-hover hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-brutal-none active:translate-x-[4px] active:translate-y-[4px]",
  };

  const base = `inline-flex items-center justify-center font-display font-bold uppercase tracking-wide transition-all duration-150 cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const handleCalendly = () => {
    if (typeof window !== "undefined" && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: siteConfig.calendlyUrl,
      });
    }
  };

  if (calendly) {
    return (
      <button type={type} className={base} onClick={handleCalendly}>
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <a href={href} className={base} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={base} onClick={onClick}>
      {children}
    </button>
  );
}
