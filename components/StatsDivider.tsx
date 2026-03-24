import { stats } from "@/lib/data";

export default function StatsDivider() {
  return (
    <div className="bg-brutal-black border-b-[3px] border-brutal-black">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={[
              "p-5 sm:p-7 flex flex-col gap-1.5",
              i % 2 === 0 ? "border-r-[3px] border-white/10" : "",
              i < 2 ? "border-b-[3px] sm:border-b-0 border-white/10" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div
              className="font-display font-black text-5xl sm:text-6xl leading-none"
              style={{ color: stat.accentHex }}
            >
              {stat.value}
            </div>
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white/45">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
