/**
 * All page copy and data lives here, so editing the site never means editing JSX.
 *
 * Anything marked `pending: true` is a deliberate gap waiting on David, not an
 * oversight — it renders as a visible amber slot rather than inventing a fact.
 */

export const profile = {
  name: "David Pears",
  standby: "Currently — CTO at NaviSavi",
  headline: {
    before: "Technology lead who still writes the ",
    accent: "front end",
    after: ".",
  },
  lede: "I run engineering at NaviSavi, a travel-video licensing marketplace — and I build the storefront and the iOS and Android apps that sit on top of it. Architecture on Monday, pixels on Friday.",
  location: "Stockholm, Sweden",
} as const;

export const slate = [
  { label: "Role", value: ["CTO", "hands-on front end & mobile"] },
  { label: "Ships on", value: ["Web", "iOS", "Android"] },
  { label: "Core stack", value: ["Next.js 14", "TypeScript", "Firebase"] },
  { label: "Specialism", value: ["Geospatial UI", "commerce flows"] },
] as const;

type StackChip = { label: string; tone?: "hot" | "cool" };

export const caseStudy: {
  name: string;
  period: string;
  intro: string[];
  owned: { title: string; detail: string }[];
  stack: StackChip[];
} = {
  name: "NaviSavi",
  period: "Case study · 2022 — present",
  intro: [
    "NaviSavi is a **travel-video licensing marketplace**: buyers search, preview and license curated footage sourced directly from independent creators, cutting out the overhead of a traditional stock agency.",
    "The whole job is speed to license. A media buyer already knows what shooting it themselves would cost — the storefront's only task is getting them from a search box to a confident checkout without friction.",
  ],
  owned: [
    {
      title: "Architecture",
      detail:
        "Next.js storefront fronting the platform API through a BFF layer, typed clients generated from the OpenAPI spec.",
    },
    {
      title: "Geospatial search",
      detail:
        "Clustered map browsing over the footage catalogue with deck.gl and supercluster.",
    },
    {
      title: "Licensing & checkout",
      detail:
        "Stripe payments, webhook-driven fulfilment, licence delivery and download.",
    },
    {
      title: "Native apps",
      detail: "The iOS and Android clients, from build config to store release.",
    },
    {
      title: "Design system",
      detail:
        '"The Full Frame": one typeface, three brand hues, every screen finished to the same standard as the hero reel.',
    },
  ],
  stack: [
    { label: "Next.js 14", tone: "hot" },
    { label: "TypeScript" },
    { label: "React" },
    { label: "deck.gl", tone: "cool" },
    { label: "supercluster", tone: "cool" },
    { label: "Google Maps", tone: "cool" },
    { label: "Firebase Auth" },
    { label: "Stripe", tone: "hot" },
    { label: "Contentful" },
    { label: "Lingui · en / es" },
    { label: "socket.io" },
    { label: "Sentry" },
    { label: "Serwist PWA" },
    { label: "Azure" },
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
  detail: string;
  tags: string[];
  href?: string;
  pending?: boolean;
};

export const roster: RosterEntry[] = [
  {
    years: "2022 — NOW",
    name: "NaviSavi",
    detail:
      "CTO. Travel-video licensing marketplace — web storefront, iOS and Android.",
    tags: ["Next.js", "TypeScript", "Stripe", "deck.gl"],
    href: "#navisavi",
  },
  {
    years: "YEAR?",
    name: "Indeez",
    detail: "Needs your words — what it is, what you owned, and whether it is linkable.",
    tags: ["stack?"],
    pending: true,
  },
  {
    years: "YEAR?",
    name: "Fanbased",
    detail: "Same — one line on the product and one on your role.",
    tags: ["stack?"],
    pending: true,
  },
  {
    years: "YEAR?",
    name: "SolidSport AB",
    detail:
      "Ryan Anglem's testimonial covers this one. Add the dates and what you built.",
    tags: ["stack?"],
    pending: true,
  },
  {
    years: "YEAR?",
    name: "SearchParties",
    detail: "Led the team from concept to MVP, per Ryan Bromley. Dates needed.",
    tags: ["stack?"],
    pending: true,
  },
];

export const cv = {
  filename: "david-pears-cv.pdf",
  href: "/cv/david-pears-cv.pdf",
  updated: "— add on publish",
  blurb:
    "Highlights live on the page above; the PDF is for the people who need to forward it. One file, kept current, no form to fill in first.",
};

/**
 * read.cv shut down on 16 May 2025, so the old site's CV link is dead.
 * Email intentionally left blank — decide which address this site should use.
 */
export const links: { label: string; href: string; pending?: boolean }[] = [
  { label: "Email", href: "#", pending: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/davepears/" },
  { label: "GitHub", href: "https://github.com/DavidAPears" },
];
