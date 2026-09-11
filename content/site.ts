/**
 * All page copy and data lives here, so editing the site never means editing JSX.
 *
 * Roles, dates and the 250k figure come from David's CV (September 2026) —
 * `public/cv/david-pears-cv.pdf`. Keep the two in step.
 *
 * Anything marked `pending: true` is a deliberate gap, not an oversight — it
 * renders as a visible amber slot rather than inventing a fact.
 */

export const profile = {
  name: "David Pears",
  standby: "Currently — Co-founder & CTO at NaviSavi",
  headline: {
    before: "Technology lead who still writes the ",
    accent: "front end",
    after: ".",
  },
  location: "Stockholm, Sweden",
} as const;

export const slate = [
  { label: "Role", value: ["Co-founder & CTO", "NaviSavi"] },
  { label: "Builds in", value: ["React Native", "React", "TypeScript"] },
  { label: "At scale", value: ["250k+ videos", "190+ countries"] },
  { label: "Based in", value: ["Stockholm", "7+ yrs commercial"] },
] as const;

/**
 * The three public front ends. Figures are taken from the sites themselves —
 * note they disagree slightly: the marketing site says 180+ destinations while
 * the licensing site says 190+ countries.
 */
export const properties = [
  {
    domain: "navi-savi.com",
    href: "https://navi-savi.com/",
    shot: "/images/work/b2c-home.jpg",
    audience: "Consumer",
    title: "Real travel. Not travel reels.",
    detail:
      "Video-first discovery. Unedited footage from real travellers, browsable by country, vibe, place type, season and traveller type — and every video is bookable.",
  },
  {
    domain: "navisavitravel.com",
    href: "https://navisavitravel.com/",
    shot: "/images/work/b2b-home.jpg",
    audience: "Business",
    title: "The world's leading travel video library.",
    detail:
      "Rights-cleared licensing for hotels, airlines, OTAs and travel brands, plus a 5,000-strong creator network, MOATS and API access.",
  },
  {
    domain: "marketing.navisavitravel.com",
    href: "https://marketing.navisavitravel.com/",
    shot: "/images/work/eco-home.jpg",
    audience: "Ecosystem",
    title: "Authentic travel video for modern travel companies.",
    detail:
      "How the pieces fit: content enters through MOATS or traveller uploads, gets structured and rights-cleared, then distributes to booking products and APIs.",
  },
];

type StackChip = { label: string; tone?: "hot" | "cool" };

export const caseStudy: {
  name: string;
  period: string;
  intro: string[];
  owned: { title: string; detail: string }[];
  stack: StackChip[];
} = {
  name: "NaviSavi",
  period: "Case study · 2020 — present",
  intro: [
    "NaviSavi is **video infrastructure for the travel industry**. Travellers now decide where to go by watching video, but travel businesses still run on static photography and fragmented rights. NaviSavi turns authentic traveller footage into structured, rights-cleared, bookable media.",
    "That is not one product but **three front ends over one catalogue** of 250k+ videos across 190+ countries — a consumer discovery app, a business licensing platform, and the ecosystem site that explains how they connect. I co-founded the company and own the frontend across all of it, on web and in React Native.",
  ],
  owned: [
    {
      title: "Frontend architecture",
      detail:
        "Three public front ends over a shared platform API, fronted by a BFF layer with typed clients generated from the OpenAPI spec.",
    },
    {
      title: "Discovery & search",
      detail:
        "Clustered map browsing with deck.gl and supercluster, plus the taxonomy the consumer site is navigated by — country, vibe, place type, experience, traveller type, season.",
    },
    {
      title: "Licensing & checkout",
      detail:
        "Stripe payments, webhook-driven fulfilment, licence delivery and download — and the booking flow that turns a video into a trip.",
    },
    {
      title: "MOATS & the commercial API",
      detail:
        "The branded hub that converts guest and creator video into approved brand content — and the public API I oversaw the creation of, with proximity, taxonomy and natural-language search, and SDKs in TypeScript, Python and Ruby.",
    },
    {
      title: "Native apps",
      detail:
        "The React Native iOS and Android clients, from build config to store release.",
    },
    {
      title: "Leading the team",
      detail:
        "A distributed engineering team, while staying hands-on with architecture, code review and production delivery.",
    },
  ],
  stack: [
    { label: "React Native", tone: "hot" },
    { label: "Next.js", tone: "hot" },
    { label: "TypeScript" },
    { label: "React" },
    { label: "deck.gl", tone: "cool" },
    { label: "supercluster", tone: "cool" },
    { label: "Google Maps", tone: "cool" },
    { label: "Firebase Auth" },
    { label: "Stripe", tone: "hot" },
    { label: "GraphQL / REST" },
    { label: "Contentful" },
    { label: "Lingui · en / es" },
    { label: "Sentry" },
    { label: "AWS" },
  ],
};

/**
 * Verbatim from davidpearsconsulting.com. These read as opening sentences —
 * if fuller versions exist, paste them in; do not paraphrase, they are
 * attributed to named people.
 */
export const testimonials = [
  {
    quote:
      "David led the team I hired to help develop the concept of SearchParties from an idea up to a working MVP/Prototype app.",
    name: "Ryan Bromley",
    role: "CEO & Founder, SearchParties",
  },
  {
    quote:
      "David, when it comes to a deep understanding of what was required and delivering a working solution, is one of the best I have met.",
    name: "Sally Bunnell",
    role: "CEO & Founder, NaviSavi Travel",
  },
  {
    quote:
      "David was a huge asset to our team at Solidsport. We had a difficult deadline to meet when he started.",
    name: "Ryan Anglem",
    role: "Tech Lead, SolidSport AB",
  },
] as const;

export type RosterEntry = {
  years: string;
  name: string;
  role: string;
  detail: string;
  tags: string[];
  href?: string;
  pending?: boolean;
};

export const roster: RosterEntry[] = [
  {
    years: "2020 — NOW",
    name: "NaviSavi",
    role: "Co-founder & CTO · Stockholm",
    detail:
      "Consumer and B2B travel platform built around video, discovery, licensing and booking.",
    tags: ["React Native", "Next.js", "TypeScript", "Stripe", "deck.gl"],
    href: "#navisavi",
  },
  {
    years: "2026 — NOW",
    name: "Indeez",
    role: "Senior React Native Engineer, consultant · Remote",
    detail:
      "A social music app — MySpace reinvented for mobile, where fans, artists, venues and record stores all share the same space. Built around a player whose discovery feed works like a swipe deck: keep a track or skip it, and the algorithm learns what grassroots music you actually want.",
    tags: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "AWS"],
  },
  {
    years: "2022 — 2023",
    name: "SolidSport",
    role: "Senior Mobile Developer · Stockholm",
    detail:
      "Production features for a multi-brand sports streaming app, across APIs, video streaming and shared application architecture.",
    tags: ["React Native", "TypeScript", "Video streaming"],
  },
  {
    years: "2022",
    name: "LOQBOX",
    role: "Senior Mobile UI Developer · Remote",
    detail:
      "Reusable UI components, API integrations and customer-facing flows for a consumer fintech app.",
    tags: ["React Native", "TypeScript"],
  },
  {
    years: "2020 — 2022",
    name: "Tangy Market",
    role: "Software Developer · Stockholm",
    detail:
      "Mobile UI, APIs and product development for a Swedish music-fintech startup.",
    tags: ["React Native"],
  },
  {
    years: "2019 — 2020",
    name: "Beatchain",
    role: "Software Developer · London",
    detail:
      "One of two engineers rebuilding an existing React web platform as a mobile app for musicians.",
    tags: ["React Native", "TypeScript", "GraphQL"],
  },
  {
    years: "2018 — 2019",
    name: "LevelStudios",
    role: "Software Developer / Product Manager · Edinburgh",
    detail:
      "Web and mobile products, working across development, requirements and product delivery.",
    tags: ["React", "React Native", "JavaScript"],
  },
  {
    years: "YEAR?",
    name: "Fanbased",
    role: "Role?",
    detail:
      "Not on the CV, but there is a repo for it. Worth a row if it is worth showing — tell me what it is.",
    tags: ["stack?"],
    pending: true,
  },
  {
    years: "2004 — 2018",
    name: "Earlier career",
    role: "Music, media & financial services",
    detail:
      "A decade across music, television and digital media — Endemol, Guardian Media Group, artist management — then adjudicating regulated advice disputes at the Financial Ombudsman Service.",
    tags: ["Rights & licensing", "Digital content"],
  },
];

export const cv = {
  filename: "david-pears-cv.pdf",
  href: "/cv/david-pears-cv.pdf",
  updated: "September 2026",
  blurb:
    "Highlights live on the page above; the PDF is for the people who need to forward it. One file, kept current, no form to fill in first.",
};

/** read.cv shut down on 16 May 2025 — the old site's CV link is dead. */
export const links: { label: string; href: string; pending?: boolean }[] = [
  { label: "Email", href: "mailto:davidapears@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/davepears/" },
  { label: "GitHub", href: "https://github.com/DavidAPears" },
];
