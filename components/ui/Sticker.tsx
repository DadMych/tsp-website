interface StickerProps {
  children: React.ReactNode;
  rotate?: string; // e.g. "rotate-[-3deg]"
  accent?: string; // Tailwind bg class
  className?: string;
}

export default function Sticker({
  children,
  rotate = "rotate-[-3deg]",
  accent = "bg-brutal-yellow",
  className = "",
}: StickerProps) {
  return (
    <span
      className={`inline-block border-2 border-brutal-black ${accent} px-3 py-1.5 font-mono text-xs font-bold shadow-brutal-sm uppercase tracking-wide ${rotate} ${className}`}
    >
      {children}
    </span>
  );
}
