// ─────────────────────────────────────────────────────────────────────────────
// Insights — decisions from a real 18-person, 6-month platform build
// ─────────────────────────────────────────────────────────────────────────────

export type InsightCategory =
  | "architecture"
  | "team"
  | "payments"
  | "product"
  | "devops"
  | "lessons"
  | "stakeholders";

export interface SeeAlsoRef {
  id: number;
  label: string;
}

export interface Insight {
  id: number;
  title: string;
  category: InsightCategory;
  secondaryCategory?: InsightCategory; // dual-category merged cards
  situation: string;
  decision: string;
  outcome: string;
  highlight: string;
  tags: string[];
  seeAlso?: SeeAlsoRef[];
  redacted?: boolean;
}

export interface ExplainerCard {
  id: string;
  term: string;
  explanation: string;
  appearsAfter: number; // renders after the insight with this id
}

export const categories: { key: "all" | InsightCategory; label: string; color: string }[] = [
  { key: "all",          label: "ALL",              color: "#000000" },
  { key: "architecture", label: "ARCHITECTURE",     color: "#FFE600" },
  { key: "team",         label: "TEAM & PROCESS",   color: "#4ECDC4" },
  { key: "payments",     label: "PAYMENTS & E-COM", color: "#A855F7" },
  { key: "product",      label: "PRODUCT",          color: "#FF6B6B" },
  { key: "devops",       label: "DEVOPS",           color: "#F97316" },
  { key: "lessons",      label: "HARD LESSONS",     color: "#FF0000" },
  { key: "stakeholders", label: "STAKEHOLDERS",     color: "#22C55E" },
];

export const insights: Insight[] = [
  // ═══════ ARCHITECTURE ═══════
  {
    id: 1,
    title: "Why we went serverless microservices from day one",
    category: "architecture",
    situation:
      "The platform needed to cover many independent operational domains — member onboarding, retail, physical delivery, staff tooling, community features, and analytics. A monolithic backend would have created tight coupling between unrelated concerns and made independent scaling impossible.",
    decision:
      "Architected the backend as hundreds of independent serverless functions — each route handler a discrete, stateless microservice with its own scope and failure boundary. Domains that needed different scaling characteristics were isolated from the start.",
    outcome:
      "Each domain scaled and failed independently. The architecture handled traffic spikes on delivery and checkout without impacting community or admin features — exactly the isolation microservices are supposed to deliver.",
    highlight: "exactly the isolation microservices are supposed to deliver",
    tags: ["serverless", "microservices", "scaling", "isolation"],
  },
  {
    id: 2,
    title: "We built custom auth because off-the-shelf didn't fit",
    category: "architecture",
    situation:
      "Off-the-shelf auth providers make assumptions about session models that didn't fit: custom role hierarchy, staff-level access tiers, ban enforcement, and the ability to forcibly invalidate sessions across devices instantly.",
    decision:
      "Designed a custom JWT + bcrypt authentication system with a dedicated invalidation table enabling server-side session revocation. Every authenticated API call validates token integrity, account status, and role in a single middleware pass.",
    outcome:
      "The organization had exactly the security model they needed from day one — including compliance with internal access control policies. Zero auth-related incidents post-launch.",
    highlight: "Zero auth-related incidents post-launch",
    tags: ["auth", "security", "JWT", "custom-build"],
  },
  {
    id: 3,
    title: "Don't replace what works — extend it",
    category: "architecture",
    secondaryCategory: "stakeholders",
    situation:
      "The organization ran their entire product catalog and pricing through an existing POS system. Staff had years of muscle memory built around it. We had a choice: rebuild that functionality in our platform (more control, more work) or integrate with the POS as the source of truth (less control, faster delivery, zero retraining).",
    decision:
      "We made the POS the single source of truth and positioned every integration as 'this makes your existing tools more powerful.' The platform reads from the POS at runtime — it never competes with it. This was both a technical architecture decision AND a stakeholder management decision. Staff didn't have to learn a new catalog system. The platform just worked with what they already knew.",
    outcome:
      "Zero retraining cost. Staff adoption was faster than any previous system rollout. The platform stayed in sync automatically. The lesson has two sides: architecturally, don't rebuild what already works. Organizationally, the best integration is the one your users don't have to think about.",
    highlight: "the best integration is the one your users don't have to think about",
    tags: ["integration", "POS", "adoption", "stakeholders", "pragmatism"],
  },
  {
    id: 4,
    title: "Hybrid inventory: granular tracking without breaking what exists",
    category: "architecture",
    situation:
      "The existing POS couldn't represent inventory across multiple distinct physical storage locations. Staff needed location-level counts — per safe, per storage area — that the POS data model simply didn't support.",
    decision:
      "Stored inventory counts in our own database with a full audit log, then provided a deliberate one-way sync to the POS only when staff confirmed accuracy. The two systems stayed decoupled, with the push as an explicit staff action — not an automatic background sync.",
    outcome:
      "Staff got granular location-level tracking plus a full audit trail that hadn't existed before. The audit log became one of the most-used features, flagging discrepancies that would have gone undetected under the old process.",
    highlight: "The audit log became one of the most-used features",
    tags: ["inventory", "audit-trail", "hybrid-architecture", "data-sync"],
    seeAlso: [
      { id: 3, label: "Don't replace what works — extend it" },
      { id: 9, label: "Mandatory onboarding — enforced at the infrastructure level" },
    ],
  },

  // ═══════ DEVOPS ═══════
  {
    id: 5,
    title: "Self-hosted observability at 10% of the SaaS price",
    category: "devops",
    situation:
      "Commercial observability platforms at scale are expensive, and they give you less control over data retention, alerting logic, and dashboard customization than the project needed.",
    decision:
      "Deployed a self-hosted Loki + Grafana stack on a dedicated VPS using Docker Compose, integrated with CI/CD for automated deployments. The application pushes structured logs; Grafana provides real-time operational dashboards.",
    outcome:
      "Full-featured observability at a fraction of SaaS pricing, with dashboards tailored exactly to the organization's operational metrics. The entire stack can be rebuilt from the repository in under an hour.",
    highlight: "The entire stack can be rebuilt from the repository in under an hour",
    tags: ["observability", "grafana", "self-hosted", "cost-optimization"],
  },
  {
    id: 6,
    title: "Infrastructure as code from day one — not after the first fire",
    category: "devops",
    situation:
      "Manually configured infrastructure doesn't survive server migrations, team changes, or incident recovery. If the person who set up the VPS isn't available when it needs to be rebuilt, the organization is in trouble.",
    decision:
      "Every infrastructure component is version-controlled: Docker Compose services, Nginx configuration, backup schedules, monitoring setup. CI/CD automatically deploys infrastructure changes when the config directory is updated.",
    outcome:
      "The entire observability stack was rebuilt during the project when the VPS needed replacing — recovered in under an hour. Infrastructure-as-code is non-negotiable for production systems.",
    highlight: "Infrastructure-as-code is non-negotiable for production systems",
    tags: ["IaC", "docker", "disaster-recovery", "automation"],
  },
  {
    id: 7,
    title: "Three environments or you're gambling with production",
    category: "devops",
    situation:
      "A platform with live member accounts, financial transactions, and delivery operations cannot absorb untested changes into production. The cost of a production incident far exceeds the cost of a staging environment.",
    decision:
      "Maintained a full three-environment pipeline from day one — development, staging mirroring production configuration, and production. Every change validated in staging before promotion. Staging used production-equivalent data fixtures, not toy data.",
    outcome:
      "Multiple issues caught in staging that would have caused production incidents — including edge cases in delivery workflows and data sync timing. The staging investment paid for itself many times over.",
    highlight: "The staging investment paid for itself many times over",
    tags: ["environments", "staging", "deployment", "risk-management"],
  },
  {
    id: 8,
    title: "'We have backups' means nothing without verification",
    category: "devops",
    situation:
      "'We have backups' is a meaningless statement unless you know the backups are current, complete, and restorable. Many organizations discover their backup process is broken at exactly the moment they need it most.",
    decision:
      "Automated database backups through the infrastructure stack, with scheduled verification that backups are being created and are non-empty. Backup status is visible in the operational dashboard.",
    outcome:
      "Backup verification became part of routine operational review, not an emergency check. The distinction between 'we have backups' and 'we have tested, automated, verified backups' is the only one that matters.",
    highlight: "The distinction between 'we have backups' and 'we have tested, automated, verified backups' is the only one that matters",
    tags: ["backups", "verification", "disaster-recovery", "operations"],
  },

  // ═══════ PRODUCT + ARCHITECTURE (merged) ═══════
  {
    id: 9,
    title: "Mandatory onboarding — enforced at the infrastructure level",
    category: "product",
    secondaryCategory: "architecture",
    situation:
      "Platforms that let members skip profile completion end up with unreliable data — breaking reporting, communications, and access control downstream. But enforcing onboarding page-by-page in application code is fragile: any new page without the check is an instant access gap.",
    decision:
      "We made onboarding non-negotiable AND enforced it at the infrastructure layer — edge middleware, not page logic. Cookie state drives routing decisions before any application code runs. There is exactly one place where access rules live. No opt-outs, no 'remind me later.'",
    outcome:
      "Member data quality from day one was higher than any comparable rollout. Zero instances of members bypassing onboarding post-launch. When rules changed, one file to update. This is what happens when product discipline and technical architecture align.",
    highlight: "product discipline and technical architecture align",
    tags: ["onboarding", "middleware", "data-quality", "enforcement"],
  },

  // ═══════ TEAM & PROCESS ═══════
  {
    id: 10,
    title: "Admin permissions that don't need a developer to change",
    category: "team",
    situation:
      "The admin dashboard covered many operational domains — inventory, payroll, delivery, marketing analytics, community moderation. A simple 'admin' role couldn't express the access control the organization actually needed.",
    decision:
      "Built a data-driven permission system with a custom React hook and wrapper component. Each admin module declares its required permission; the system handles rendering and API access enforcement. Adding a new module means one config entry, not a new access control implementation.",
    outcome:
      "Role-based admin access became a feature the operations team could reason about and request adjustments to without developer involvement. Permissions stayed current as the team structure evolved.",
    highlight: "Permissions stayed current as the team structure evolved",
    tags: ["permissions", "admin", "RBAC", "developer-experience"],
  },
  {
    id: 11,
    title: "AI for back-office — practical, not performative",
    category: "team",
    situation:
      "The organization had access to large external datasets relevant to planning decisions. Manual analysis was inconsistent and time-consuming, with results varying based on who was doing it.",
    decision:
      "Integrated AI into a dedicated internal analysis workflow — combining external data fetching with structured AI-assisted analysis. A back-office productivity tool with clear data boundaries, not a consumer-facing feature bolted on for appearances.",
    outcome:
      "Analysis that previously took hours became a minutes-long workflow. AI delivers the most reliable ROI when applied to well-defined internal processes, not as a product differentiator.",
    highlight: "AI delivers the most reliable ROI when applied to well-defined internal processes",
    tags: ["AI", "automation", "back-office", "practical-AI"],
  },

  // ═══════ PAYMENTS & E-COM ═══════
  {
    id: 12,
    title: "When traditional payment rails aren't available, you build your own",
    category: "payments",
    situation:
      "Traditional payment processors presented regulatory and operational friction for this organization's specific product vertical. Standard providers were evaluated and determined not to be viable — a situation more common in certain industries than vendors admit.",
    decision:
      "Built a production-grade integration with an alternative payment provider, covering the full webhook lifecycle: signature verification, payload transformation, retry logic, timeout handling, and forwarding to downstream order systems.",
    outcome:
      "Payment acceptance was fully unblocked. The engineering investment was real — a custom payment pipeline is never trivial — but the alternative was no payment acceptance at all. When traditional rails aren't available, you build the rails.",
    highlight: "When traditional rails aren't available, you build the rails",
    tags: ["payments", "alternative-payments", "webhooks", "integration"],
  },
  {
    id: 13,
    title: "Delivery isn't a feature — it's its own domain",
    category: "payments",
    situation:
      "Physical product delivery was central to the organization's revenue model, not a peripheral feature. Treating it as an add-on would have produced an add-on result — functional in demos, brittle in production.",
    decision:
      "Designed delivery as its own operational domain from the architecture phase: dedicated driver-facing dashboard, packing workflows, real-time chat, and route calculation — all fully integrated with member accounts and inventory.",
    outcome:
      "Delivery operations became a competitive differentiator. The organization's fulfillment capability was cited by members as a core reason for continued engagement. Architecture decisions have business consequences.",
    highlight: "Architecture decisions have business consequences",
    tags: ["delivery", "domain-design", "operations", "competitive-advantage"],
  },
  {
    id: 14,
    title: "Referrals and credits tied to onboarding — not bolted on after",
    category: "payments",
    situation:
      "The organization needed organic member growth mechanisms that didn't require marketing spend. Generic discount codes don't create lasting loyalty; credits tied to genuine participation do.",
    decision:
      "Built a referral and credit system integrated directly into onboarding. Members earned credits through verified referrals; credits applied at checkout through the same session as every other account action.",
    outcome:
      "Member-driven acquisition at near-zero marginal cost. The referral system produced measurable growth within the first quarter post-launch, with zero paid marketing required.",
    highlight: "Member-driven acquisition at near-zero marginal cost",
    tags: ["referrals", "growth", "onboarding", "zero-cost-acquisition"],
  },

  // ═══════ PRODUCT ═══════
  {
    id: 15,
    title: "Know what NOT to build — and document why",
    category: "product",
    situation:
      "There was early pressure to replicate product management, pricing, and vendor management inside the web platform. This would have created a second system to maintain and keep in sync.",
    decision:
      "Drew a clear boundary: the POS owns commerce configuration; the platform owns member experience and operations. Any request to build functionality that duplicated what the POS did was explicitly declined and documented.",
    outcome:
      "The team avoided maintaining a parallel product catalog. Every feature you don't build is a feature you don't have to support. This discipline is what kept the delivery timeline achievable.",
    highlight: "Every feature you don't build is a feature you don't have to support",
    tags: ["scope-discipline", "say-no", "product-strategy", "pragmatism"],
    seeAlso: [{ id: 3, label: "Don't replace what works — extend it" }],
  },
  {
    id: 16,
    title: "Community features: native, not third-party",
    category: "product",
    situation:
      "Embedding third-party community tools would have required members to manage separate accounts and context-switch constantly. Engagement in a disconnected tool rarely sustains.",
    decision:
      "Posts, messaging, and community rooms were built natively — inside the same authenticated session as every other platform feature. Community was treated as a core module, not an integration.",
    outcome:
      "Community activity stayed within the platform, measurable and connected to member profiles. Retention rates for members who engaged with community features were significantly higher than for those who didn't.",
    highlight: "Retention rates for members who engaged with community features were significantly higher",
    tags: ["community", "retention", "native-build", "engagement"],
  },
  {
    id: 17,
    title: "Separate mandatory from optional — always",
    category: "product",
    situation:
      "Stakeholders initially wanted all onboarding fields mandatory. Pilot testing revealed significant drop-off — the questionnaire was too long to feel reasonable at first registration.",
    decision:
      "Split onboarding into two explicit tiers: mandatory (minimum for access) and optional (profile enrichment presented post-login). The mandatory tier was kept ruthlessly short. Optional questions surfaced only after members experienced the platform's value.",
    outcome:
      "Mandatory completion rates were high. A meaningful percentage voluntarily completed the optional tier too — a counterintuitive result that came directly from not treating optional as mandatory.",
    highlight: "A meaningful percentage voluntarily completed the optional tier too",
    tags: ["onboarding", "UX", "conversion", "user-psychology"],
    seeAlso: [{ id: 9, label: "Mandatory onboarding — enforced at the infrastructure level" }],
  },

  // ═══════ HARD LESSONS ═══════
  {
    id: 18,
    title: "No automated tests in phase one — and why that was the right call",
    category: "lessons",
    situation:
      "In the first phase of a platform covering multiple operational domains simultaneously, a comprehensive test suite would have consumed a significant portion of engineering capacity — urgently needed to ship working features.",
    decision:
      "Made an explicit, documented call to defer automated testing in phase one, relying on code review, staging validation, and production monitoring. The decision included a commitment to introduce integration tests at the start of phase two, when domain boundaries were stable.",
    outcome:
      "Phase one shipped on schedule. Tests were introduced in phase two with a more accurate understanding of what actually needed testing — rather than writing tests for assumptions that turned out wrong. Pragmatic sequencing beats premature optimization.",
    highlight: "Pragmatic sequencing beats premature optimization",
    tags: ["testing", "pragmatism", "trade-offs", "shipping"],
  },
  {
    id: 19,
    title: "The one we can't talk about",
    category: "lessons",
    situation: "",
    decision: "",
    outcome: "",
    highlight: "",
    tags: [],
    redacted: true,
  },
  {
    id: 20,
    title: "Three UI libraries in one project — on purpose",
    category: "lessons",
    situation:
      "Different domains of the platform had genuinely different UI requirements — member-facing experience needed polish, staff dashboards needed data density, admin tooling needed rapid prototyping speed.",
    decision:
      "Made deliberate library choices per domain: Tailwind for member-facing UI, Ant Design for data-heavy staff interfaces, and Material UI where specific components provided the right interaction model.",
    outcome:
      "Each domain got tooling appropriate to its purpose. The constraint we enforced: consistency within a domain, pragmatism across domains. Mixing UI libraries requires clear rules about when each applies — without those rules, the codebase becomes incoherent.",
    highlight: "Mixing UI libraries requires clear rules about when each applies",
    tags: ["UI", "libraries", "pragmatism", "design-systems"],
  },

  // ═══════ STAKEHOLDERS ═══════
  {
    id: 21,
    title: "One dashboard, one source of truth for leadership",
    category: "stakeholders",
    situation:
      "Leadership was making decisions by piecing together information from multiple disconnected sources — POS reports, spreadsheets, and messages from staff. The cognitive cost was high and the result was often outdated.",
    decision:
      "Designed the admin dashboard as a single operational pane: inventory, member data, delivery status, payroll, marketing analytics, and community health in one authenticated interface.",
    outcome:
      "Decision-making speed improved measurably. Leadership cited the unified operational view as one of the platform's highest-value features — ahead of several features the technical team had prioritized.",
    highlight: "Leadership cited the unified operational view as one of the platform's highest-value features — ahead of several features the technical team had prioritized",
    tags: ["dashboard", "leadership", "decision-making", "unified-view"],
  },
  {
    id: 22,
    title: "Name scope creep directly — don't absorb it silently",
    category: "stakeholders",
    situation:
      "Mid-project, new feature requests arrived framed as if they had always been part of the plan. Without a clear process, the team was absorbing work without explicit agreement on trade-offs.",
    decision:
      "Implemented a lightweight scope classification: every new request was explicitly categorized as in-scope, deferred to a future phase, or new scope requiring timeline discussion. When a request was scope creep, we named it — respectfully and directly.",
    outcome:
      "Stakeholder relationships improved when expectations were managed clearly. Leaders consistently preferred hearing 'that's a phase two item' over discovering three months later that core features had slipped because of unplanned additions.",
    highlight: "Leaders consistently preferred hearing 'that's a phase two item'",
    tags: ["scope-creep", "communication", "project-management", "honesty"],
  },
  {
    id: 23,
    title: "Translate architecture into business risk language",
    category: "stakeholders",
    situation:
      "Technical decisions are invisible to non-technical stakeholders until something goes wrong. Stakeholders who don't understand the rationale can't evaluate trade-offs or provide informed input.",
    decision:
      "Every significant technical decision was documented in business terms: what risk it mitigated, what it would cost to change later, and what the organization would need to do differently if it was wrong. Architecture reviews included non-technical stakeholders.",
    outcome:
      "Stakeholders made better-informed requests, and technical decisions had explicit organizational buy-in. When edge cases appeared in production, stakeholders understood why the mitigation worked — because they had been part of the decision.",
    highlight: "stakeholders understood why the mitigation worked — because they had been part of the decision",
    tags: ["communication", "risk", "documentation", "trust"],
    seeAlso: [{ id: 22, label: "Name scope creep directly — don't absorb it silently" }],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Explainer cards — "In Plain English" for non-technical readers
// appearsAfter: render after the insight with this id
// ─────────────────────────────────────────────────────────────────────────────

export const explainers: ExplainerCard[] = [
  {
    id: "ex-1",
    term: "Serverless & Microservices",
    explanation:
      "Instead of one big application that does everything, we built hundreds of small independent programs — each handling one job. If the payment system gets slammed with traffic, it doesn't slow down the community features. If one part breaks, the rest keep running.",
    appearsAfter: 1,
  },
  {
    id: "ex-2",
    term: "JWT, Bcrypt & Session Revocation",
    explanation:
      "JWT is a secure digital pass that proves who you are. Bcrypt scrambles passwords so even we can't read them. Session revocation means if someone's account gets banned, they're kicked out instantly — across every device, no waiting.",
    appearsAfter: 2,
  },
  {
    id: "ex-7",
    term: "Loki + Grafana",
    explanation:
      "Loki collects all the logs (records of what the system is doing). Grafana turns those logs into visual dashboards — graphs, alerts, real-time status. Together they're like a control room for the entire platform. We host them ourselves instead of paying for expensive cloud services.",
    appearsAfter: 5,
  },
  {
    id: "ex-6",
    term: "Infrastructure as Code",
    explanation:
      "Instead of manually setting up servers by clicking buttons in a dashboard, every server configuration is written as code files. If the server explodes, we run the code and get an identical server back in minutes. It's a recipe book for your entire infrastructure.",
    appearsAfter: 6,
  },
  {
    id: "ex-5",
    term: "CI/CD Pipeline",
    explanation:
      "An automated assembly line for code. Developer writes code → it gets automatically tested → automatically deployed to a test environment → then to production. No manual uploading, no 'works on my machine' surprises.",
    appearsAfter: 7,
  },
  {
    id: "ex-3",
    term: "Edge Middleware",
    explanation:
      "A checkpoint that runs before the website even starts loading. Think of it as a bouncer at the door — if you haven't completed onboarding, you don't get in. Doesn't matter which page you try to visit.",
    appearsAfter: 9,
  },
  {
    id: "ex-4",
    term: "Webhook Lifecycle",
    explanation:
      "When a payment happens, the payment provider sends a message to our server saying 'hey, money arrived.' The webhook lifecycle is everything we do with that message: verify it's real, transform it into our format, handle failures, and update the order. If any step fails, the whole thing retries safely.",
    appearsAfter: 12,
  },
  {
    id: "ex-8",
    term: "Tailwind vs Ant Design vs Material UI",
    explanation:
      "Three different toolkits for building user interfaces. Tailwind gives you full creative control (used for what members see). Ant Design comes with pre-built data tables and forms (used for staff dashboards). Material UI has specific interactive components (used for admin tools). Different jobs, different tools.",
    appearsAfter: 20,
  },
];
