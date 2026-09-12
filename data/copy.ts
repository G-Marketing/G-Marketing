export const FAQS = [
  {
    q: "Do you work only on paid media?",
    a: "No. Advertising is one of three lines. We also build the marketing system that paid media feeds, and the growth system that turns traffic into revenue. Most retainers use at least two of the three.",
  },
  {
    q: "Can you run a single country and a multi-market rollout?",
    a: "Yes. Local work is language, maps, creative, and regulation for one market. Global work is the same discipline copied with control: shared measurement, market-level creative, and budget that follows proven demand.",
  },
  {
    q: "How do you prove the work is effective?",
    a: "Every engagement has a scoreboard before spend scales: one commercial goal, a measurement map, and a reporting cadence. We do not treat platform-reported ROAS as the whole truth. We reconcile to CRM, revenue, and incrementality tests where the spend justifies it.",
  },
  {
    q: "What does a first engagement look like?",
    a: "A diagnostic. We inspect tracking, creative, funnel, and budget. You get a written plan: what to stop, what to keep, what to test in the next 90 days. Implementation starts only after you approve that plan.",
  },
  {
    q: "Do you replace an in-house team?",
    a: "We can operate as the team, or as the operating layer next to yours. We are explicit about who owns media, creative, analytics, and the weekly decision.",
  },
];

export const PILLARS = [
  {
    slug: "advertising",
    href: "/services/advertising",
    title: "Advertising",
    kicker: "Demand you can buy",
    summary:
      "Search, social, and video media planned against a number, not a channel habit.",
    image: "/images/service-advertising.jpg",
    imageAlt:
      "Sunlit city with precise blue light on selected towers and houses, a metaphor for targeted advertising.",
  },
  {
    slug: "marketing",
    href: "/services/marketing",
    title: "Marketing",
    kicker: "Demand you can earn",
    summary:
      "Positioning, SEO, content, and lifecycle so the brand is findable when the ads are off.",
    image: "/images/service-marketing.jpg",
    imageAlt:
      "A sunlit brand-workshop table with sketches, metal type, and window light.",
  },
  {
    slug: "growth",
    href: "/services/growth",
    title: "Growth",
    kicker: "Demand you can keep",
    summary:
      "Tracking, experiments, and conversion design that raise the yield of every visit you already paid for.",
    image: "/images/service-growth.jpg",
    imageAlt:
      "A pale crystalline form growing from a data grid in a bright studio, a metaphor for compounding growth.",
  },
] as const;

export const SCOREBOARD = [
  {
    metric: "MER",
    name: "Marketing efficiency ratio",
    meaning: "Revenue divided by all marketing cost. The number finance can live with.",
  },
  {
    metric: "CAC payback",
    name: "Time to recover acquisition cost",
    meaning: "How many months until a new customer pays back media and sales cost.",
  },
  {
    metric: "Incremental lift",
    name: "What would not have happened anyway",
    meaning: "Geo tests, holdouts, or platform lift studies when spend is large enough.",
  },
  {
    metric: "Pipeline quality",
    name: "Revenue, not form-fills",
    meaning: "Qualified opportunities and closed revenue, reconciled to the CRM.",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Diagnostic",
    body: "Tracking, funnel, creative, and budget in one pass. We write what is leaking before we ask for more spend.",
  },
  {
    step: "02",
    title: "Scoreboard",
    body: "One commercial goal, the few metrics that prove it, and the sources of truth. No vanity dashboard.",
  },
  {
    step: "03",
    title: "Build",
    body: "Campaign architecture, landing system, tagging, and creative tests. Shipping beats slideware.",
  },
  {
    step: "04",
    title: "Operate",
    body: "Weekly decisions: scale, cut, or test. Monthly commercial review. Quarterly reset of the bet.",
  },
];

export const MARKETS = [
  {
    title: "Local markets",
    body: "Win the city, the language, and the map pack. Local work is not a smaller version of global. It is denser: reviews, local ads, culturally exact creative, and compliance that actually applies.",
    points: [
      "Search + Maps + local service ads",
      "Language, dialect, and proof that feels native",
      "Geo-fenced media and store / lead routing",
      "Local privacy, advertising, and disclosure rules",
    ],
  },
  {
    title: "Global markets",
    body: "A shared measurement spine, then market cells that can spend independently. We expand only where unit economics survive translation, logistics, and competition.",
    points: [
      "International SEO and hreflang architecture",
      "Market-level budgets with a global MER cap",
      "Creative localization, not just translation",
      "Brand safety, billing, and platform entity setup",
    ],
  },
];

export const ADVERTISING = {
  hero: "Paid media that is accountable to revenue.",
  intro:
    "We buy attention only when the path from click to cash is instrumented. Channel mix follows that path, not the latest platform pitch.",
  points: [
    "Buy media against CRM-qualified outcomes, not platform estimates.",
    "Give each channel a job: search for intent, social and video for demand.",
    "Move budget to the queries and placements that produce pipeline.",
    "Test creative, offer, and landing pages as one unit.",
  ],
  offerings: [
    {
      title: "Search & shopping",
      body: "Google and Microsoft: brand defense, non-brand capture, shopping feeds, and negatives as a discipline, not a cleanup day.",
    },
    {
      title: "Paid social & video",
      body: "Meta, LinkedIn, TikTok, YouTube. Creative is the targeting. We test hooks, offers, and landing pairs on a fixed cadence.",
    },
    {
      title: "Demand capture architecture",
      body: "Account structure that mirrors the funnel: intent, consideration, remarketing. Budgets move to proven ad groups, not to the loudest channel owner.",
    },
    {
      title: "Tracking you can audit",
      body: "Enhanced conversions, consent mode, server-side tagging where it pays off, and a written map of every conversion event.",
    },
  ],
  effectiveness: [
    {
      label: "What we optimize",
      items: ["Cost per qualified opportunity", "MER / blended ROAS", "Impression share on defending terms", "Creative win rate"],
    },
    {
      label: "What we refuse to treat as proof",
      items: ["View-through conversions as revenue", "Last-click only", "Platform ROAS with broken attribution", "Vanity CPM without a commercial read"],
    },
    {
      label: "Typical 90-day moves",
      items: ["Kill wasted queries and placements", "Rebuild conversion events", "Stand up a creative test grid", "Reallocate budget to proven intent"],
    },
  ],
};

export const MARKETING = {
  hero: "A brand that is findable, clear, and repeatable.",
  intro:
    "Marketing here is the system that makes advertising cheaper: search demand you own, a story people remember, and a lifecycle that does not go silent after the first click.",
  points: [
    "Use one positioning line in ads, on the site, and in sales.",
    "Build pages for commercial intent, not for content volume.",
    "Stamp organic source into the CRM and judge SEO by pipeline.",
    "Keep a lifecycle loop running after the first click.",
  ],
  offerings: [
    {
      title: "Positioning & message",
      body: "Who it is for, why it wins, what to say on a page in eight seconds. Used everywhere: ads, sales, site, email.",
    },
    {
      title: "SEO & content",
      body: "Technical health, information architecture, and pages built to rank for commercial intent, not blog volume.",
    },
    {
      title: "Lifecycle & CRM",
      body: "Onboarding, nurture, win-back. Email and WhatsApp/SMS only where they convert and stay compliant.",
    },
    {
      title: "Landing & site conversion",
      body: "Pages that match the ad, load fast, and ask for one action. Built for paid and organic, not for a redesign vanity cycle.",
    },
  ],
  effectiveness: [
    {
      label: "What we optimize",
      items: ["Qualified organic pipeline", "Branded search growth", "Email / lifecycle revenue", "Page-level conversion"],
    },
    {
      label: "What we refuse to treat as proof",
      items: ["Traffic without intent", "Keyword rankings with no landing path", "Open rates without revenue", "Content count"],
    },
    {
      label: "Typical 90-day moves",
      items: ["Fix indexation and cannibalization", "Ship 5–15 commercial pages", "Align ads and landing claims", "Turn on one lifecycle loop"],
    },
  ],
};

export const GROWTH = {
  hero: "Raise the yield of demand you already have.",
  intro:
    "Growth is the operating system: analytics, experiments, and conversion design. It is how advertising and marketing compound instead of resetting every quarter.",
  points: [
    "Define lead, opportunity, and revenue once for every dashboard.",
    "Instrument the path from first session to paid invoice.",
    "Test offers and friction against a metric agreed before the test.",
    "Run holdouts or geo splits when last-click is too expensive to trust.",
  ],
  offerings: [
    {
      title: "Measurement spine",
      body: "GA4 / server events, CRM join, and a single definition of lead, opportunity, and revenue. If this is wrong, every dashboard lies.",
    },
    {
      title: "CRO & experiments",
      body: "Hypothesis backlog, test design, and ship cadence. We test offers and friction, not button colors in isolation.",
    },
    {
      title: "Funnel architecture",
      body: "From first session to paid invoice: where people drop, which step is worth fixing, which step is a sales problem.",
    },
    {
      title: "Incrementality",
      body: "Holdouts, geo splits, and platform lift when spend is large enough that last-click theater is expensive.",
    },
  ],
  effectiveness: [
    {
      label: "What we optimize",
      items: ["Conversion rate by intent", "Activation / first-value time", "LTV : CAC", "Experiment velocity"],
    },
    {
      label: "What we refuse to treat as proof",
      items: ["Unsampled tests with no power", "Correlation sold as causation", "Dashboard beauty", "A/A noise treated as a win"],
    },
    {
      label: "Typical 90-day moves",
      items: ["Rebuild event taxonomy", "Instrument the money path", "Run a weekly test slot", "Cut one high-cost leak"],
    },
  ],
};

export const SERVICES_INDEX = [
  { href: "/services/advertising", title: "Advertising", line: "Buy demand with a scoreboard." },
  { href: "/services/marketing", title: "Marketing", line: "Earn demand that still works when media pauses." },
  { href: "/services/growth", title: "Growth", line: "Keep more of the demand you already paid for." },
];
