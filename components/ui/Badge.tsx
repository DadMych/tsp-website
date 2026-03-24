interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "dark" | "colored";
  accent?: string;
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  accent = "",
  className = "",
}: BadgeProps) {
  const variants = {
    default: "bg-white border-2 border-brutal-black text-brutal-black",
    dark: "bg-brutal-black border-2 border-brutal-black text-cream",
    colored: `${accent} border-2 border-brutal-black text-brutal-black`,
  };

  return (
    <span
      className={`inline-block px-2.5 py-0.5 font-mono text-xs font-bold uppercase tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
