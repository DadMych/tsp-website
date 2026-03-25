type TagVariant = "primary" | "database" | "infra" | "integration";

const groups: { label: string; variant: TagVariant; items: string[] }[] = [
  {
    label: "Primary",
    variant: "primary",
    items: [
      "Python", "TypeScript", "JavaScript",
      "React", "Next.js", "Node.js", "FastAPI",
    ],
  },
  {
    label: "Databases",
    variant: "database",
    items: [
      "PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite",
    ],
  },
  {
    label: "Infrastructure",
    variant: "infra",
    items: [
      "Docker", "AWS", "Linux", "Nginx",
      "Vercel", "GitHub Actions", "CI/CD", "Cloudflare",
    ],
  },
  {
    label: "Integrations",
    variant: "integration",
    items: [
      "Stripe", "Telegram API", "WhatsApp API",
      "Twilio", "OpenAI API", "Google APIs",
      "REST", "WebSockets", "GraphQL",
    ],
  },
];

const tagStyles: Record<TagVariant, string> = {
  primary:     "border-brutal-yellow  text-brutal-yellow  text-sm font-bold",
  database:    "border-white/50       text-white/75       text-sm font-semibold",
  infra:       "border-white/25       text-white/50       text-xs font-semibold",
  integration: "border-white/15       text-white/35       text-xs font-medium",
};

function Tag({ label, variant }: { label: string; variant: TagVariant }) {
  return (
    <span
      className={`inline-block border px-3.5 py-1.5 font-mono uppercase tracking-wide ${tagStyles[variant]}`}
    >
      {label}
    </span>
  );
}

export default function TechStack() {
  return (
    <section className="bg-brutal-black border-b-[3px] border-brutal-black py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Mirrored layout: tags left, header right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-16 items-start">

          {/* LEFT — tag groups */}
          <div className="flex flex-col gap-9 order-2 lg:order-1">
            {/* Non-tech callout */}
            <div className="flex items-start gap-3 border-[2px] border-brutal-yellow/50 bg-brutal-yellow/10 px-5 py-4">
              <span className="flex-shrink-0 mt-0.5 border-[2px] border-brutal-yellow bg-brutal-yellow text-brutal-black font-mono text-[9px] font-black uppercase tracking-widest px-2 py-0.5 whitespace-nowrap">
                Not a dev?
              </span>
              <p className="font-mono text-xs text-white/60 leading-relaxed">
                I pick proven tools that won&apos;t lock you in or fall apart at scale. The specifics only matter to engineers — skip ahead if you&apos;re not one.
              </p>
            </div>
            {groups.map((group) => (
              <div key={group.label} className="flex flex-col gap-3">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item} label={item} variant={group.variant} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — header, sticky on desktop */}
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

            {/* Hierarchy legend */}
            <div className="flex flex-col gap-2 lg:items-end mt-2">
              <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white/20 mb-1">
                Legend
              </p>
              {(["primary", "database", "infra", "integration"] as TagVariant[]).map((v) => (
                <div key={v} className="flex items-center gap-2 lg:flex-row-reverse">
                  <span className={`inline-block border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide ${tagStyles[v]}`}>
                    {v === "primary" ? "Main" : v === "database" ? "Data" : v === "infra" ? "Infra" : "APIs"}
                  </span>
                  <span className="font-mono text-[9px] text-white/25 uppercase tracking-widest">
                    {v === "primary" ? "Core" : v === "database" ? "Storage" : v === "infra" ? "Ops" : "Integrations"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
