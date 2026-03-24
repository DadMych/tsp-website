interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  accent?: string;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  accent = "bg-brutal-yellow",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {label && (
        <span className={`inline-block border-2 border-brutal-black ${accent} px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest`}>
          {label}
        </span>
      )}
      <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-brutal-black">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-brutal-black/70 max-w-2xl leading-relaxed font-display">
          {subtitle}
        </p>
      )}
    </div>
  );
}
