/**
 * All page copy and data lives here, so editing the site never means editing JSX.
 *
 * Roles, dates and the 250k figure come from David's CV (September 2026), at
 * `public/cv/david-pears-cv.pdf`. Keep the two in step.
 *
 * Anything marked `pending: true` is a deliberate gap rather than an oversight.
 * It renders as a visible amber slot instead of inventing a fact.
 */

export const profile = {
  name: "David Pears",
  standby: "Currently: Co-founder & CTO at NaviSavi",
  headline: {
    before: "Technology lead who still ",
    accent: "codes",
    after: ".",
  },
  location: "Stockholm, Sweden",
  /** Delete this line if the site should not read as actively looking. */
  availability: "Open to senior front-end and mobile leadership roles.",
} as const;

export const slate = [
  { label: "Role", value: ["Co-founder & CTO", "NaviSavi"] },
  { label: "Builds in", value: ["React Native", "React", "TypeScript"] },
  { label: "At scale", value: ["250k+ videos", "190+ countries"] },
  { label: "Based in", value: ["Stockholm", "7+ yrs commercial"] },
] as const;

/**
 * The three public front ends. Figures come from the sites themselves, and note
 * that they disagree slightly: the overview site says 180+ destinations while
 * the licensing site says 190+ countries.
 */
export const properties = [
  {
    domain: "navisavitravel.com",
    href: "https://navisavitravel.com/",
    shot: "/images/work/b2b-library.jpg",
    audience: "Business",
    title: "The world's leading travel video library.",
    detail:
      "Rights-cleared licensing for hotels, airlines, OTAs and travel brands, plus a 5,000-strong creator network, MOATS and API access.",
  },
  {
    domain: "navi-savi.com",
    href: "https://navi-savi.com/",
    shot: "/images/work/b2c-detail.jpg",
    audience: "Consumer",
    title: "Real travel. Not travel reels.",
    detail:
      "Video-first discovery, browsable by country, vibe, place type, season and traveller type. Every clip carries its own place page, with the vibes, nearby hotels, tours and the best time to go.",
  },
  {
    domain: "marketing.navisavitravel.com",
    href: "https://marketing.navisavitravel.com/",
    shot: "/images/work/eco-overview.jpg",
    audience: "Overview",
    title: "Authentic travel video for modern travel companies.",
    detail:
      "The case to the industry: how traveller video is captured, structured, rights-cleared, and put to work in websites, booking journeys and apps.",
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
  period: "Case study · 2020 to present",
  intro: [
    "Modern travellers are inspired by watching video. The businesses selling those destinations still run on static photography, or on social media footage where rights clearance is tricky. The video that actually moves people is being made by travellers, and it never reaches the brands who need it.",
    "Closing that gap is an engineering problem before it is a content one. It means making 250k+ unedited clips findable by place, mood and season rather than by filename, clearing rights so that licensing is one click instead of one email thread, and serving **a single library through four products** that each want something different from it: a consumer discovery app, a licensing platform for business, a B2C booking OTA, and a commercial API.",
  ],
  owned: [
    {
      title: "Front-end architecture",
      detail:
        "Every public front end over a shared platform API, behind a BFF layer, with typed clients generated from the OpenAPI spec.",
    },
    {
      title: "Discovery and search",
      detail:
        "Clustered map browsing with deck.gl and supercluster, plus the taxonomy the consumer product is navigated by, across country, vibe, place type, experience, traveller type and season.",
    },
    {
      title: "Licensing and checkout",
      detail:
        "Stripe payments, webhook-driven fulfilment, licence delivery and download.",
    },
    {
      title: "Booking",
      detail:
        "The OTA side, where a video becomes a trip. Hotels, tours and experiences, with member pricing through the Travel Club.",
    },
    {
      title: "MOATS and the commercial API",
      detail:
        "The branded hub that turns guest and creator video into approved brand content, and the public API I oversaw the creation of, with proximity, taxonomy and natural-language search, and SDKs in TypeScript, Python and Ruby.",
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
 * Verbatim, and attributed to named people. The spaced hyphens and the
 * semicolon are theirs. Never tidy or paraphrase these.
 */
export const testimonials = [
  {
    quote:
      "David led the team I hired to help develop the concept of SearchParties from an idea up to a working MVP/Prototype app. I could not be happier with both him and his team\u2019s work. David is a communicative Project Manager/Developer and helped me understand the processes and decisions behind creating our product - something I greatly appreciated",
    name: "Ryan Bromley",
    role: "CEO & Founder, SearchParties",
    country: "England",
  },
  {
    quote:
      "As a CEO I have come into contact with many Tech Leads & Software Developers - and David, when it comes to a deep understanding of what was required and delivering a working solution, is one of the best I have met. I appreciated how communicative, reliable, and responsive he is; and the empathy he displayed for both the product and our users and me!",
    name: "Sally Bunnell",
    role: "CEO & Founder, NaviSavi Travel",
    country: "USA",
  },
  {
    quote:
      "David was a huge asset to our team at Solidsport. We had a difficult deadline to meet when he started and he was able to get up to speed quickly, working with the team to create a solution that not only got us over the line but was maintainable and scalable.",
    name: "Ryan Anglem",
    role: "Tech Lead, SolidSport AB",
    country: "Sweden",
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
    years: "2020 - NOW",
    name: "NaviSavi",
    role: "Co-founder & CTO · Stockholm",
    detail:
      "Travel video platform: discovery and booking for travellers, licensing and an API for the industry.",
    tags: ["React Native", "Next.js", "TypeScript", "Stripe", "deck.gl"],
    href: "#navisavi",
  },
  {
    years: "2026 - NOW",
    name: "Indeez",
    role: "Senior React Native Engineer, consultant · Remote",
    detail:
      "A social music app, built from the ground up. Fans, artists, venues and record stores share one space, around a player whose discovery feed works like a swipe deck: keep a track or skip it, and the algorithm learns which grassroots music to serve you next.",
    tags: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "AWS"],
  },
  {
    years: "2022 - 2023",
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
    years: "2020 - 2022",
    name: "Tangy Market",
    role: "Software Developer · Stockholm",
    detail:
      "Mobile UI, APIs and product development for a Swedish music-fintech startup.",
    tags: ["React Native"],
  },
  {
    years: "2019 - 2020",
    name: "Beatchain",
    role: "Software Developer · London",
    detail:
      "One of two engineers rebuilding an existing React web platform as a mobile app for musicians.",
    tags: ["React Native", "TypeScript", "GraphQL"],
  },
  {
    years: "2018 - 2019",
    name: "LevelStudios",
    role: "Software Developer / Product Manager · Edinburgh",
    detail:
      "Web and mobile products, working across development, requirements and product delivery.",
    tags: ["React", "React Native", "JavaScript"],
  },
  {
    years: "2004 - 2018",
    name: "Earlier career",
    role: "Music, media & financial services",
    detail:
      "A decade across music, television and digital media, including Endemol, Guardian Media Group and artist management. Before that, adjudicating regulated advice disputes at the Financial Ombudsman Service.",
    tags: ["Rights & licensing", "Digital content"],
  },
];

export const cv = {
  filename: "david-pears-cv.pdf",
  href: "/cv/david-pears-cv.pdf",
  updated: "September 2026",
  blurb:
    "Everything above in one file, plus the detail this page leaves out: exact dates, the full stack for each role, and the media and financial services years before I moved into engineering.",
};

/** read.cv shut down on 16 May 2025, so the old site's CV link is dead. */
export const links: { label: string; href: string; pending?: boolean }[] = [
  { label: "Email", href: "mailto:davidapears@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/davepears/" },
  { label: "GitHub", href: "https://github.com/DavidAPears" },
];
