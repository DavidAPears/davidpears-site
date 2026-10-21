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
  headline: {
    before: "",
    accent: "Engineer",
    after: ", architect, technology lead.",
  },
  location: "Stockholm, Sweden",
  /** Delete this line if the site should not read as actively looking. */
  availability:
    "Open to senior mobile and front-end roles: hands-on engineering, technical leadership, or fractional CTO work.",
} as const;

export const slate = [
  { label: "Current role", value: ["Co-founder & CTO", "NaviSavi"] },
  { label: "Builds in", value: ["React Native", "React", "TypeScript"] },
  { label: "At scale", value: ["250k+ videos", "190+ countries"] },
  { label: "Based in", value: ["Stockholm", "7+ yrs engineering"] },
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

/**
 * NaviSavi's recognition, not David's personally, which is how it is labelled
 * on the page. Verified against Silicon Prairie News, January 2025, and the
 * company's own marketing site. The two finalist placings and the Traverse
 * "Industry Person of the Year" are deliberately left out: the first would
 * dilute the wins, the second is not his award.
 */
export const recognition = [
  { title: "Startup of the Year", event: "World Aviation Festival", year: "2024" },
  { title: "Startup of the Year", event: "Touristech Startup Fest", year: "2024" },
  { title: "Innovation Pitch, winner", event: "Travel Massive London", year: "2024" },
  { title: "Techstars", event: "Build in Tulsa accelerator", year: "2023" },
];

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
      title: "Native apps",
      detail:
        "The React Native iOS and Android clients, from build config to store release.",
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
      title: "Leading the team",
      detail:
        "A distributed engineering team, alongside the architecture, code review and production delivery.",
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
 * The lead quote, given its own space above the grid: it is four times the
 * length of the others, it is the most recent, and it comes from the CEO of a
 * company where the engagement is current rather than finished.
 *
 * Verbatim, American spellings and all. The signature line is dropped only
 * because the attribution below carries it.
 */
export const featuredTestimonial = {
  paragraphs: [
    "I\u2019ve had the opportunity to work very closely with David, and he has become an enormously valuable part of our team at Indeez.",
    "David is one of those rare people who can walk into a complicated situation, quickly understand what needs to happen, and simply start making things better. He is technically excellent, but his value goes well beyond technology. He\u2019s an exceptionally strong communicator, a natural leader, and someone who works comfortably with people at every level of an organization.",
    "He takes charge without making a production out of taking charge. He motivates people without putting unnecessary pressure on them, communicates extremely well, and has an easy confidence that makes him particularly effective in meetings, with teams, and with clients and partners. My team genuinely enjoys working with him, and I\u2019ve come to rely heavily on his judgment.",
    "David has also been extraordinarily generous with his time and commitment to Indeez. He\u2019s someone I trust completely, both professionally and personally.",
    "Whatever the role, if I were building a team and had the opportunity to put David Pears on it, I would.",
  ],
  name: "Bobby Harlow",
  role: "Founder & CEO, Indeez",
  country: "USA",
} as const;

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
    href: "/work/navisavi",
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
      "Mobile-first entertainment at Endemol, including interactive formats and short-form drama made for phones in 2006 and 2007, then twelve years managing recording artists through my own company. Before that, the Financial Ombudsman Service.",
    tags: ["Mobile-first video", "Artist management", "Rights & licensing"],
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

/* ------------------------------------------------------------------ */
/* Freelance                                                           */
/* ------------------------------------------------------------------ */

/**
 * Deliberately not linked from the masthead. This page exists to be sent
 * directly, and to be found from the footer by someone already reading.
 *
 * No rate, no availability date and no notice period, all by David's call.
 * The message is simply that he is available, not when or for how much.
 */
export const freelance = {
  intro: [
    "I am available for contract engineering and fractional CTO work. If you are building something and need a senior React Native or front-end engineer on it, get in touch.",
    "Seven years of React Native, React and TypeScript, most of it at startups and scale-ups. Two of those products are written up as case studies on this site, so you can see the work before you call.",
  ],
  shapes: [
    {
      title: "Contract engineering",
      detail:
        "Three months or more, hands on the codebase. A mobile app that needs someone senior on it, a front end to take from architecture to release, or a team that is short an engineer who can do both.",
    },
    {
      title: "Fractional CTO",
      detail:
        "Technical direction for a company that needs senior judgement without a full-time hire. Architecture, code review, hiring, and the decisions that are expensive to get wrong later.",
    },
  ],
  practical: [
    { label: "Based", value: "Stockholm, Sweden" },
    { label: "Working", value: "Remote, hybrid or onsite. Onsite means Stockholm." },
    { label: "Minimum", value: "Three months for project work" },
    { label: "Invoicing", value: "Direct, through my own Swedish sole trader business" },
    { label: "Rate", value: "On request, once I know the shape of the work" },
  ],
  next: "Email me with what you are building and what you need. If I am not the right person for it, I will say so.",
} as const;

/* ------------------------------------------------------------------ */
/* Selected work                                                       */
/* ------------------------------------------------------------------ */

export type WorkCard = {
  slug: string;
  name: string;
  /** What kind of exhibit this is, so the two read as a contrasting pair. */
  kind: string;
  role: string;
  period: string;
  summary: string;
  /** Hard evidence, for the reader who never clicks through. */
  points: string[];
  stack: string[];
  image: string | null;
  imageAlt: string;
};

export const work: WorkCard[] = [
  {
    slug: "navisavi",
    name: "NaviSavi",
    kind: "Platform and ecosystem",
    role: "Co-founder & CTO",
    period: "2020 to present",
    summary:
      "Video infrastructure for the travel industry. One ecosystem built on a library of 250k+ UGC traveller videos: consumer discovery, a licensing marketplace for business, a B2C travel OTA, a commercial API, and the mobile apps.",
    points: [
      "Every front end over a shared platform API, on web and in React Native",
      "Clustered map discovery with deck.gl, Stripe licensing, checkout and booking",
      "250k+ videos across 190+ countries, two Startup of the Year wins",
      "Leading a distributed engineering team from inside the codebase",
    ],
    stack: ["React Native", "Next.js", "TypeScript", "deck.gl", "Stripe", "AWS"],
    image: "/images/work/navisavi-hero-poster-16x9.webp",
    imageAlt:
      "NaviSavi across a laptop and two phones: the licensing library search, the consumer app, and travel playlists.",
  },
  {
    slug: "rost",
    name: "RÖST",
    kind: "Full-stack build",
    role: "Solo, idea to delivery",
    period: "2026 to present",
    summary:
      "A voice-first social platform where the unit is a recording of somebody talking rather than a picture of them. An open audio feed, dating where nobody sees a face until both people agree, and a place where a voice can earn.",
    points: [
      "No photograph reaches another device before a mutual reveal: the card draws a blurhash, never a blurred image",
      "39 tables, 104 row-level security policies and 91 Postgres functions, written solo",
      "306 assertions run inside the migrations, against the real database, on every deploy",
      "100% coverage across 1,733 tests, enforced on push",
    ],
    stack: [
      "React Native",
      "Expo SDK 57",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Skia",
    ],
    image: null,
    imageAlt: "RÖST, a voice-first social platform.",
  },
  {
    slug: "indeez",
    name: "Indeez",
    kind: "Mobile app",
    role: "React Native engineer & engineering lead",
    period: "2026 to present",
    summary:
      "Putting the social layer back into music, for the grassroots end of the industry that streaming abandoned. MySpace-style personalisation, swipe discovery, one login across artist, label, venue and store identities.",
    points: [
      "Swipe discovery that has to make sound instantly, solved with two warm audio decks",
      "Player skins over one shared controller: default, vinyl, animated cassette",
      "One login, many identities, with roles and invitations",
      "Engineering lead, directing two engineers and building the player",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "AWS"],
    image: "/images/indeez/indeez-hero-poster.webp",
    imageAlt:
      "Indeez on three phones: the discovery feed, an artist page, and a record label page.",
  },
];

/**
 * The RÖST case study. The richest of the three and the only solo build, so
 * the right column carries the numbers rather than screens: there are no
 * screenshots yet, and a table of what was actually built says more about a
 * security-led product than a phone mockup would.
 *
 * Facts come from David's own source notes, 21 October 2026, all checkable
 * against the repository. Keep the figures and the date in step.
 */
export const rost = {
  name: "RÖST",
  period: "Case study · 2026 to present",
  status: "Feature complete on Discover and Connect. Closed Android beta next.",
  intro: [
    "RÖST is a voice-first social platform: social media where the unit is a recording of somebody talking rather than a picture of them. Three modes sit on one account. **Discover** is an open audio feed. **Connect** is dating where nobody sees a face until both people agree to it. **Create** is where a voice can eventually earn, through commissions, subscriptions and communities.",
    "The brand line is *people are more than pictures*, and the engineering is the argument for it. On Connect, no photograph of a person reaches another person's device at all until two people have both said yes. That is not a setting or a client behaviour. It is the only way the data can travel.",
    "Built solo, end to end, under a hard zero-cost constraint: free tier throughout development, and a written capacity model that says which resource binds first and at what number. Launching in London for 18 to 25 year olds.",
  ],
  owned: [
    {
      title: "Data model",
      detail:
        "39 tables, from identity and audio through matching, messaging, reveal grants, moderation, communities and the monetisation seams.",
    },
    {
      title: "Security",
      detail:
        "104 row-level security policies, 91 Postgres functions, and separate Storage access policies. RLS on Postgres does not protect Storage objects, and treating it as though it does is the most common way products like this leak.",
    },
    {
      title: "API surface",
      detail:
        "The client talks to SECURITY DEFINER RPCs rather than tables, so authorisation lives in one layer instead of being reimplemented on every screen.",
    },
    {
      title: "Realtime",
      detail:
        "Supabase Broadcast with channel authorisation, fired by database triggers. The payload carries ids and nothing else, so a mistake in channel policy leaks nothing.",
    },
    {
      title: "Mobile",
      detail:
        "React Native and Expo across 168 source files, a design system whose tokens are enforced by lint, and Skia for the live audio artwork.",
    },
    {
      title: "Verification",
      detail:
        "306 assertions that run inside the migrations, against the real database, as part of deploying. A failing assertion aborts the deploy.",
    },
    {
      title: "Everything around it",
      detail:
        "Age assurance architecture, retention and purge, capacity modelling, the policies, the brand application and the app icons.",
    },
  ],
  /** Checkable against the repository, 21 October 2026. */
  numbers: [
    { label: "First commit", value: "12 October 2026" },
    { label: "Migrations", value: "85, of which 25 are verification" },
    { label: "In-database assertions", value: "306" },
    { label: "Postgres functions", value: "91" },
    { label: "RLS policies", value: "104" },
    { label: "Tables", value: "39" },
    { label: "SQL", value: "~12,800 lines" },
    { label: "TypeScript", value: "~20,500 lines, 168 files" },
    { label: "Tests", value: "1,733 across 130 files" },
    { label: "Coverage", value: "100%, enforced on push" },
  ],
  decisions: [
    {
      label: "A decision worth naming",
      title: "A blurred photograph is not a privacy control",
      body: "The obvious build is to send the photograph and blur it on the device. That is a visual effect, not privacy: the real pixels have arrived, a blur radius is a number in a stylesheet, and anybody who wants the picture takes it off the wire. So no photograph is sent. What travels is a blurhash, around thirty characters of averaged colour from which nothing is recoverable because nothing was ever encoded. The photographs sit in a private bucket behind a Storage policy that checks reveal grants. The way to guarantee a face is not leaked is for it never to be sent.",
    },
    {
      label: "A bug found by reading",
      title: "Policies written to grant access that could never grant anything",
      body: "Two Storage policies answered by selecting from an application table, and ran that query as the caller. The table has RLS on it, so the caller could not see the row that would have said yes, the subquery returned nothing and the policy returned false. Both were written to allow access and allowed none. Fixed with SECURITY DEFINER helpers that can see the row and answer honestly, with the authorisation in one place rather than inlined into a policy where it quietly inverts.",
    },
    {
      label: "A failure that deployed cleanly",
      title: "A function pointed at a table that does not exist",
      body: "A migration rewrote swipe() to let a match adopt a conversation two people had already started. The logic was right, the table name was not: it wrote to public.swipes, and the decisions have lived in public.likes since the fourth migration. Postgres does not resolve a table name inside a plpgsql body until the function runs, so it deployed perfectly and then raised on every call. Both buttons on the dating deck were dead, and the migration's own verification never called the function it had just replaced. The fix was one line. The rule it produced was that a migration redefining a function has to call it.",
    },
    {
      label: "What a reveal means",
      title: "Consent to show a photograph, not to join two identities",
      body: "Somebody can hold a public creator identity and a private dating identity on one login, never linked by default. The reasonable-sounding request was to show the full public profile after a mutual reveal. Someone doing voiceover work publicly under their real name, who is on Connect under another, agreed to show their face, not to hand a stranger their professional identity. Linking the two is a switch they can turn on themselves, off by default, and a verification migration asserts the inbox shows the Connect name, because a query joining the wrong table would undo the whole separation and look completely fine on screen.",
    },
  ],
  /** The threshold story, pulled out because it is the clearest statement of the method. */
  computed: {
    title: "Computed, never stored",
    body: "A photo reveal unlocks when each participant has sent three qualifying audio messages. Six from one person unlocks nothing. A stored counter would be a number that can drift, and drift here means exposing a photograph that should not have been exposed, so it is computed from the messages table every time it is asked for, and recomputed twice: once when a reveal is requested and again at the moment it is accepted, because messages can be deleted in between. Accepting opens both galleries at once or neither.",
  },
  stack: [
    { label: "React Native", tone: "hot" },
    { label: "Expo SDK 57", tone: "hot" },
    { label: "TypeScript" },
    { label: "Supabase" },
    { label: "PostgreSQL + RLS", tone: "cool" },
    { label: "SECURITY DEFINER RPCs", tone: "cool" },
    { label: "Supabase Broadcast" },
    { label: "Edge Functions" },
    { label: "Skia", tone: "cool" },
    { label: "Unistyles" },
    { label: "Jest" },
    { label: "EAS" },
  ] as StackChip[],
  team: "Solo: design, architecture, build and delivery.",
};

/**
 * The Indeez case study. Deliberately a skeleton: the headings are the same as
 * NaviSavi's so the two pages read as a set, and every gap is a visible slot
 * rather than invented detail. Fill from David's own account and the screen
 * recordings.
 */
export const indeez = {
  name: "Indeez",
  period: "Case study · 2026 to present",
  status: "Internal TestFlight. App Store submission is weeks away.",
  intro: [
    "Streaming pays emerging artists almost nothing and gives them no way to reach the people listening. Indeez answers that with the direct-to-fan economics of independent music marketplaces and the personality of mid-2000s social media. Streaming is the shop window rather than the business: artists put music up to be discovered, then earn from tickets, vinyl, cassettes and merch. I managed recording artists during the first wave of artist-led social media, and saw what happened when a band could own its corner of the internet.",
    "That shape makes specific engineering demands. Discovery is a swipe that has to produce sound immediately, which rules out loading audio at the moment of the swipe. Profiles have to be personalised deeply enough to feel like someone's own page rather than a theme. And one person has to act as themselves, as their band, as the label they help run and as the venue they book, without four logins. The goal is not more time on the platform. It is to turn discovery into fandom, and get people off their phones and into rooms where music is happening.",
  ],
  owned: [
    {
      title: "The discovery player",
      detail:
        "Built first as a standalone test app, so the hard part could be solved away from the main codebase. The requirement is simple to state and unforgiving: a swipe has to produce sound immediately, which means never loading audio on the swipe itself.",
    },
    {
      title: "Two warm decks",
      detail:
        "Two audio engines run at once. The active one is audible; the other already holds the next track loaded at volume zero, so advancing is a role swap rather than a load. Instrumented in development to measure swipe committed to first audible frame.",
    },
    {
      title: "Races, not just happy paths",
      detail:
        "Every load carries a token. A slow resolve that returns after the listener has already swiped on is discarded rather than interrupting whatever is playing now. The same guard covers lock screen artwork.",
    },
    {
      title: "Player skins",
      detail:
        "A skin is a look over one shared controller: a default, a vinyl deck, and an animated cassette transport. Chosen and remembered per profile, which keeps the personalisation idea in the player rather than only the profile page.",
    },
    {
      title: "One login, many identities",
      detail:
        "A personal profile plus artist, label, venue and record store Pages, each with owner, admin, editor and viewer roles and invitations. Switching identity is an app-wide lens. I architected the model, my team delivered the backend, and I built the front end around it.",
    },
    {
      title: "A feed the listener controls",
      detail:
        "People choose whether the main feed shows algorithmic recommendations or only the people they follow who follow them back. Privacy, blocking and reporting are built to current social norms rather than retrofitted.",
    },
    {
      title: "Leading the engineering",
      detail:
        "Setting the architecture and directing two engineers, one on the front end and one on the backend, while building the player and the identity layer.",
    },
  ],
  /** The decision the whole product turns on, and the strongest thing on the page. */
  decision: {
    label: "A decision worth naming",
    title: "The optimisation I refused",
    body: "Preloading the next track needs its stream URL early. On this platform, resolving a stream URL logs a play. Prefetching would have inflated artists' play counts, on a product that exists because artists are paid badly and counted carelessly. So the prefetch resolves nothing it is not about to play, and the play is recorded when audio actually starts.",
  },
  stack: [
    { label: "React Native 0.83", tone: "hot" as const },
    { label: "Expo SDK 55", tone: "hot" as const },
    { label: "TypeScript" },
    { label: "Reanimated 4", tone: "cool" as const },
    { label: "Gesture Handler", tone: "cool" as const },
    { label: "expo-audio" },
    { label: "Zustand" },
    { label: "Supabase" },
    { label: "PostgreSQL" },
    { label: "AWS S3 / Lambda" },
    { label: "Sentry" },
  ],
  team: "With engineers Abhay Gondesi and Xinya Wang.",
};

/**
 * App screens, all portrait at the same ratio so the strip stays even whether an
 * item is a still or a recording. `src: null` renders a visible slot.
 */
export type AppScreen = {
  src: string | null;
  kind: "image" | "video";
  caption: string;
  /** Shown before a recording loads, and instead of it under reduced motion. */
  poster?: string;
};

export const indeezScreens: AppScreen[] = [
  {
    src: "/images/indeez/profile.mp4",
    poster: "/images/indeez/profile-poster.jpg",
    kind: "video",
    caption: "A profile, personalised",
  },
  {
    src: "/images/indeez/swipe.mp4",
    poster: "/images/indeez/swipe-poster.jpg",
    kind: "video",
    caption: "Swipe discovery",
  },
  {
    src: "/images/indeez/skins.mp4",
    poster: "/images/indeez/skins-poster.jpg",
    kind: "video",
    caption: "Player skins",
  },
  {
    src: "/images/indeez/feed.mp4",
    poster: "/images/indeez/feed-poster.jpg",
    kind: "video",
    caption: "The feed",
  },
];
