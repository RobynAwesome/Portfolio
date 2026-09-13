export type JourneyStatus = "Foundation" | "Active" | "Verified" | "Exploring";

export interface JourneyLink {
  label: string;
  href: string;
}

export interface JourneyMilestone {
  year: string;
  status: JourneyStatus;
  title: string;
  detail: string;
  links: JourneyLink[];
}

export interface LinkGroup {
  title: string;
  summary: string;
  items: {
    label: string;
    href: string;
    note: string;
  }[];
}

export interface AmaPhuSignal {
  title: string;
  summary: string;
  links: JourneyLink[];
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: "2022",
    status: "Foundation",
    title: "Ama_Phu releases become publicly visible",
    detail:
      "The entertainment lane already has public release evidence, including the 'Burning the Midnight Oil' album and the Ama_Phu artist page on Apple Music.",
    links: [
      {
        label: "Burning the Midnight Oil",
        href: "https://music.apple.com/au/album/burning-the-midnight-oil/1656494537",
      },
      {
        label: "Ama_Phu artist profile",
        href: "https://music.apple.com/us/artist/ama-phu/1656490480",
      },
    ],
  },
  {
    year: "2023 - Present",
    status: "Active",
    title: "Ama-Phu and venue client work move into live product delivery",
    detail:
      "The client ecosystem now spans entertainment-facing profile surfaces and the 5's Arena booking stack, with public proof visible on the live venue site and the developer attribution on the about page.",
    links: [
      {
        label: "5's Arena live site",
        href: "https://fivesarena.com",
      },
      {
        label: "5's Arena about page",
        href: "https://fivesarena.com/about",
      },
      {
        label: "Bookit repository",
        href: "https://github.com/RobynAwesome/Bookit-5s-Arena",
      },
    ],
  },
  {
    year: "2025",
    status: "Foundation",
    title: "Computer engineering studies begin at CPUT",
    detail:
      "The formal engineering path runs in parallel with studio and client work, giving the portfolio a clearer hardware-software foundation instead of a pure frontend story.",
    links: [
      {
        label: "CPUT",
        href: "https://www.cput.ac.za",
      },
    ],
  },
  {
    year: "2026",
    status: "Verified",
    title: "Public engineering identity consolidates",
    detail:
      "Portfolio, GitHub, LinkedIn, Kopano Labs, HackerRank, and ORCID now form a public graph that shows product delivery, engineering learning, and auditable public proof in one place.",
    links: [
      {
        label: "Portfolio",
        href: "https://KRRababalela.com/",
      },
      {
        label: "Kopano Labs",
        href: "https://kopanolabs.com",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/",
      },
    ],
  },
  {
    year: "2026",
    status: "Exploring",
    title: "Education path held to evidence",
    detail:
      "Public education story stays with CPUT computer engineering in progress, plus Johns Hopkins Agentic AI as provisional admission only. Graduate AI pathways remain PENDING_EVIDENCE until enrollment or award receipts exist — biography follows the same proof discipline as Project RUNE.",
    links: [
      {
        label: "Cape Peninsula University of Technology",
        href: "https://www.cput.ac.za/",
      },
      {
        label: "Johns Hopkins Engineering Executive Education",
        href: "https://ep.jhu.edu/",
      },
    ],
  },
];

export const digitalProfileGroups: LinkGroup[] = [
  {
    title: "Builder Identity",
    summary:
      "The core engineering profile surface: portfolio, public code, professional profile, learning verification, and research identity.",
    items: [
      {
        label: "Portfolio",
        href: "https://KRRababalela.com/",
        note: "Primary public portfolio surface.",
      },
      {
        label: "GitHub",
        href: "https://github.com/RobynAwesome",
        note: "Public repositories and commit history.",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/",
        note: "Professional profile, services, and articles.",
      },
      {
        label: "HackerRank",
        href: "https://www.hackerrank.com/profile/rkholofelo",
        note: "Public skills and certificate profile.",
      },
      {
        label: "ORCID",
        href: "https://orcid.org/0009-0000-3995-6147",
        note: "Persistent research identity.",
      },
    ],
  },
  {
    title: "Studio and Product",
    summary:
      "The operating surface for client delivery and product work across Kopano Labs and the venue stack.",
    items: [
      {
        label: "Kopano Labs",
        href: "https://kopanolabs.com",
        note: "Company surface and studio positioning.",
      },
      {
        label: "5's Arena",
        href: "https://fivesarena.com",
        note: "Live venue product surface.",
      },
      {
        label: "Bookit repository",
        href: "https://github.com/RobynAwesome/Bookit-5s-Arena",
        note: "Public code behind the booking stack.",
      },
      {
        label: "5's Arena about",
        href: "https://fivesarena.com/about",
        note: "Public developer attribution and venue context.",
      },
    ],
  },
  {
    title: "Creative and Label",
    summary:
      "The entertainment-facing branch of the wider ecosystem, including label discovery, music distribution, and creator profile routing.",
    items: [
      {
        label: "Ama-Phu Entertainment",
        href: "https://linktr.ee/amaphu.ent",
        note: "Primary public label hub for socials and releases.",
      },
      {
        label: "Ama_Phu on Apple Music",
        href: "https://music.apple.com/us/artist/ama-phu/1656490480",
        note: "Public streaming artist page.",
      },
      {
        label: "Burning the Midnight Oil",
        href: "https://music.apple.com/au/album/burning-the-midnight-oil/1656494537",
        note: "Album proof published in November 2022.",
      },
      {
        label: "osheen_views",
        href: "https://linktr.ee/osheen_views",
        note: "Creator profile hub connected to the same ecosystem.",
      },
    ],
  },
  {
    title: "Education and Learning Path",
    summary:
      "Evidence-gated learning lane: CPUT engineering in progress; Johns Hopkins Agentic AI as provisional admission only until completion is verified.",
    items: [
      {
        label: "Cape Peninsula University of Technology",
        href: "https://www.cput.ac.za/",
        note: "BEng Tech Computer Engineering — in progress.",
      },
      {
        label: "Johns Hopkins Engineering Executive Education",
        href: "https://ep.jhu.edu/",
        note: "Certificate Program in Agentic AI — provisional admission (completion NOT_VERIFIED).",
      },
    ],
  },
];

export interface AdmissionsJourneyBeat {
  period: string;
  title: string;
  summary: string;
  proof?: JourneyLink[];
}

/** Admissions-facing arc on the Music page: creative lane + engineering proof. */
export const amaPhuAdmissionsJourney: AdmissionsJourneyBeat[] = [
  {
    period: "Origins",
    title: "Design curiosity became systems responsibility",
    summary:
      "I did not enter technology to sound like an infrastructure person. I came in through visuals, interaction, and music — then kept following the question underneath: what has to exist for this to work when the grid drops, when bandwidth is thin, and when people depend on you showing up?",
  },
  {
    period: "2023–2024",
    title: "CPUT and the first real delivery loops",
    summary:
      "Computer Engineering at CPUT pulled me from screens into state, APIs, and failure modes. Freelance work under Ama_Phu Enterprises turned into shipped products: booking flows, content tooling, and venue operations — not slide decks.",
    proof: [
      { label: "Bookit live", href: "https://fivesarena.com/" },
      { label: "Bookit repository", href: "https://github.com/RobynAwesome/Bookit-5s-Arena" },
    ],
  },
  {
    period: "2025–2026",
    title: "Two lanes, one builder: Kopano Labs + Ama-Phu",
    summary:
      "Kopano Labs carries deep-tech IP — multi-agent orchestration, proof gates, edge runtimes. Ama-Phu carries label discovery, creator identity, and the public music graph. Same operator discipline: evidence first, no invented scale.",
    proof: [
      { label: "Apple Music — Ama_Phu", href: "https://music.apple.com/us/artist/ama-phu/1656490480" },
      { label: "Ama-Phu link hub", href: "https://linktr.ee/amaphu.ent" },
    ],
  },
  {
    period: "Now",
    title: "Graduate AI study remains PENDING_EVIDENCE",
    summary:
      "Interest in formal graduate AI training is real — mathematics, evaluation discipline, and research posture behind African-infrastructure systems work. Until enrollment or award receipts exist, no MSc completion claim is published. Same proof chain as RUNE: did it → can prove it → can publish it.",
    proof: [
      {
        label: "Project RUNE (proof-by-receipt)",
        href: "https://github.com/RobynAwesome/Project-Rune",
      },
    ],
  },
];

export const amaPhuSignals: AmaPhuSignal[] = [
  {
    title: "Public label hub",
    summary:
      "Ama-Phu Entertainment currently presents its public footprint through a Linktree hub that routes music, social, streaming, and contact surfaces in one place.",
    links: [
      {
        label: "Ama-Phu Entertainment",
        href: "https://linktr.ee/amaphu.ent",
      },
    ],
  },
  {
    title: "Streaming footprint",
    summary:
      "The catalog is publicly visible on Apple Music, with the artist profile and the 'Burning the Midnight Oil' album providing clear release evidence.",
    links: [
      {
        label: "Ama_Phu artist page",
        href: "https://music.apple.com/us/artist/ama-phu/1656490480",
      },
      {
        label: "Burning the Midnight Oil",
        href: "https://music.apple.com/au/album/burning-the-midnight-oil/1656494537",
      },
    ],
  },
  {
    title: "Creator crossover",
    summary:
      "The adjacent osheen_views hub shows the creator and social branch around the same ecosystem, linking creator channels, collaboration contact, and the Ama-Phu label surface.",
    links: [
      {
        label: "osheen_views",
        href: "https://linktr.ee/osheen_views",
      },
    ],
  },
  {
    title: "Product crossover with 5's Arena",
    summary:
      "The venue product lane provides the strongest public proof of direct delivery, including the live booking surface and an about page that names the lead developer behind the Bookit platform.",
    links: [
      {
        label: "5's Arena about",
        href: "https://fivesarena.com/about",
      },
      {
        label: "Bookit live site",
        href: "https://fivesarena.com",
      },
      {
        label: "Bookit repository",
        href: "https://github.com/RobynAwesome/Bookit-5s-Arena",
      },
    ],
  },
];
