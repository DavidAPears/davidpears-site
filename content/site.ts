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
    slug: "rost",
    name: "RÖST",
    kind: "Full-stack build",
    role: "Solo project, ideation through design to delivery",
    period: "2026 to present",
    summary:
      "Social built on the voice instead of the photograph. An open audio feed, dating where you hear somebody before you ever see them, and a creator layer where a voice can earn. People are more than pictures, made structurally true rather than merely said.",
    points: [
      "Three modes on one account: an audio feed, voice-first dating, and a creator layer",
      "On Connect no photograph is ever sent until both people agree, so there is nothing to un-blur",
      "The recording screen is a live Skia ribbon driven by the microphone, so the artwork is the voice",
      "Designed, architected and built solo, from the idea to the store listing",
    ],
    stack: [
      "React Native",
      "Expo SDK 57",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Skia",
    ],
    image: "/images/work/rost-hero-poster.webp",
    imageAlt:
      "RÖST on three phones: the Discover feed of voice posts, a profile, and the voice note recorder.",
  },
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
 * The RÖST case study.
 *
 * Leads with the product: what it is and why anybody would want it. The
 * technical challenges come after, and are chosen because they are interesting
 * rather than because they were difficult. Earlier drafts led with counts, then
 * with a problem-and-fix ledger including two bugs. Both read as a defect log
 * to the only reader who matters here, which is somebody deciding whether to
 * hire him.
 */
export const rost = {
  name: "RÖST",
  period: "Case study · 2026 to present",
  status: "Feature complete on Discover and Connect. Closed Android beta next.",
  intro: [
    "Every social product of the last fifteen years has been built on the photograph. You decide who somebody is from a square image, in about a fifth of a second, and everything downstream follows from that: the filters, the editing, the performance of a life rather than the having of one.",
    "RÖST starts from the voice instead. A post is somebody talking. You hear how they think, what they find funny, where they are from, how long they take to get to the point. **People are more than pictures** is the line, and the whole product is an attempt to make that structurally true rather than merely said.",
    "Three modes on one account. **Discover** is an open audio feed. **Connect** is dating where nobody sees a face until both people agree to it. **Create** is where a voice can earn, through commissions, subscriptions and communities. Designed, architected and built solo, from the idea to the store listing. Launching in London for 18 to 25 year olds.",
  ],
  modes: [
    {
      name: "Discover",
      line: "An open audio feed",
      detail:
        "Social media where the unit is a recording of somebody talking rather than a picture of them. Follow, search, listen, reply in voice.",
    },
    {
      name: "Connect",
      line: "Dating, heard first",
      detail:
        "You hear people before you see them. Each card plays one answer that person chose to record, and liking is held back until at least one has been played.",
    },
    {
      name: "Create",
      line: "A voice that earns",
      detail:
        "Commissions, subscriptions and communities, so the people worth listening to have a reason to keep talking.",
    },
  ],
  /** Chosen for interest, not for difficulty. */
  challenges: [
    {
      title: "A face that is never sent",
      body: "On Connect the promise is that nobody sees you until you both agree, and almost every app that promises this sends the photograph and blurs it on the phone. That is a visual effect: the real image has already arrived, and a blur radius is a number anybody can change. Here the photograph never leaves the server. What travels instead is a blurhash, about thirty characters of averaged colour, so there is nothing on the device to un-blur. The first time a single byte of somebody's face crosses the network is after both people have said yes.",
    },
    {
      title: "Making a blurred face feel human",
      body: "Which created a far more interesting problem. Thirty characters of colour, drawn at the size of a phone screen, looks like a gradient, and the card's entire job is to say there is a person here. More detail is the obvious fix and also the privacy dial, so that road is closed. Hard pixel blocks looked like a broken image. What actually works turned out to have nothing to do with the code: it is lighting. A face lit against a dark ground still reads as a face when it is crushed to twenty frequencies, because the warmth and the falloff survive. A flat snapshot in a bright room does not, and no amount of rendering puts the person back. So the light is shaped before the hash is made, and the phone draws something very simple.",
    },
    {
      title: "Earning the reveal",
      body: "A photograph unlocks when both people have actually talked: three voice messages each, of real length, not three from one person and silence from the other. Nothing counts a running total, because a total is a number that can be wrong, and being wrong here means showing somebody's face when it should not have been shown. It is worked out from the conversation itself, every time, and worked out again at the moment the reveal is accepted rather than when it was asked for. Both galleries open together or neither does. Saying not yet is drawn as an ordinary choice, and both people can carry on talking.",
    },
    {
      title: "One account, two lives",
      body: "Somebody can be a public voice under their own name and a private person on Connect, on one login, with nothing joining the two. The hardest product conversation was the reasonable-sounding suggestion that a mutual reveal should show the full public profile. It should not: agreeing to show your face is not agreeing to hand a stranger your professional identity. Someone who does voiceover work publicly, and dates privately, gets to decide that separately. Linking the two is a switch, off by default, theirs to turn on.",
    },
    {
      title: "The artwork is the voice",
      body: "While somebody records, the screen behind them is a live ribbon of particles drawn with Skia, driven entirely by the microphone's own metering. It is not a decorative animation reacting vaguely to sound: the shape on screen is the shape of that person speaking. The same idea carries into the feed, where the waveform on a card is the real envelope of the recording rather than a stock squiggle, captured live while they talked.",
    },
    {
      title: "Trust that holds up",
      body: "A dating product for 18 to 25 year olds has to actually know its users are adults, and a date of birth box knows nothing. Platform signals are checked first and verified on the server before anything is recorded, so a device cannot simply assert that it passed. Stronger checks are reserved for the cases the data says need them, which is a decision the product can make with evidence a week after launch rather than by spending money up front on a guess.",
    },
  ],
  /** Kept because it is genuinely unusual, and stated as a method. */
  method: {
    title: "The tests run inside the deploy",
    body: "A quarter of the database migrations are verification migrations: they create real users, act as those users, call the real functions and refuse to deploy if an answer is wrong. They run against the real database, in the same transaction as the schema they are checking. It is a deliberate choice, because the questions worth asking are not unit-testable ones. Whether a stranger can reach a private conversation through any route at all is a question about the database, not about a function, and the only honest way to ask it is to try.",
  },
  /**
   * Four screens, chosen to carry the story rather than to tour the app:
   * what the feed is, the blurhash that is not a blurred photograph, the
   * ribbon drawn from the microphone, and a conversation held in voice.
   */
  screens: [
    {
      src: "/images/work/rost/discover.webp",
      caption: "The feed",
      note: "Real waveforms, captured while somebody talks",
      alt: "The RÖST Discover feed: voice posts from three people, each with a waveform and a play button.",
    },
    {
      src: "/images/work/rost/connect.webp",
      caption: "A Connect card",
      note: "A blurhash, not a blurred photograph",
      alt: "A RÖST Connect card: a name, age and neighbourhood over soft colour, with a recorded answer to play and no photograph.",
    },
    {
      src: "/images/work/rost/recording.webp",
      caption: "Recording",
      note: "The ribbon is the microphone, drawn with Skia",
      alt: "The RÖST recording screen: a particle ribbon driven by live audio, above a timer reading 27 seconds.",
    },
    {
      src: "/images/work/rost/conversation.webp",
      caption: "In conversation",
      note: "Voice notes both ways, newest at the bottom",
      alt: "A RÖST conversation: voice notes from both people, each with its own waveform.",
    },
  ],
  stack: [
    { label: "React Native", tone: "hot" },
    { label: "Expo SDK 57", tone: "hot" },
    { label: "TypeScript" },
    { label: "Supabase" },
    { label: "PostgreSQL + RLS", tone: "cool" },
    { label: "Realtime" },
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
