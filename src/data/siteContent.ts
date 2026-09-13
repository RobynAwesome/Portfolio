export type ProjectLink = {
  href: string;
  label: string;
};

export type EcosystemLink = {
  href: string;
  label: string;
  note: string;
  status: "Live" | "Active" | "Reserved";
};

export type StudioProject = {
  title: string;
  description: string;
  detail: string;
  status: "Active" | "MVP" | "In Development";
  deliveryLabel: "Live" | "Pilot" | "Active";
  category: string;
  stack: string[];
  image: string;
  imageAlt: string;
  primaryLink: ProjectLink;
  secondaryLink?: ProjectLink;
};

export type EducationSignal = {
  institution: string;
  award: string;
  period: string;
  note: string;
  href: string;
};

export const studioLinks = {
  kopanoLabs: "https://kopanolabs.com",
  portfolio: "https://KRRababalela.com/",
  kasiLink: "https://kasilink.com/",
  fivesArena: "https://fivesarena.com/",
  fivesArenaBlog: "https://blog.fivesarena.com/",
  starfallSalvage: "https://starfallsalvage.kopanolabs.com/",
  kopanoContext: "https://context.kopanolabs.com/",
  projectRune: "https://github.com/RobynAwesome/Project-Rune",
  orcid: "https://orcid.org/0009-0000-3995-6147",
  github: "https://github.com/RobynAwesome",
  linkedin: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/",
  koFi: "https://ko-fi.com/robynawesome/",
  amaPhuEntertainment: "https://linktr.ee/amaphu.ent",
  osheenViews: "https://linktr.ee/osheen_views",
  email: "mailto:rkholofelo@gmail.com",
};

export const ecosystemLinks: EcosystemLink[] = [
  {
    href: studioLinks.portfolio,
    label: "KRRababalela",
    note: "Public identity root, research lane, education evidence, and ecosystem map.",
    status: "Live",
  },
  {
    href: studioLinks.kopanoLabs,
    label: "Kopano Labs",
    note: "Studio surface for sovereign products, strategy, research translation, and systems work.",
    status: "Live",
  },
  {
    href: studioLinks.kasiLink,
    label: "KasiLink",
    note: "Township-first work network. Public outcome receipts remain pilot-stage.",
    status: "Live",
  },
  {
    href: studioLinks.fivesArena,
    label: "Five's Arena",
    note: "Live 5-a-side booking, discovery, and competition surface.",
    status: "Live",
  },
  {
    href: studioLinks.fivesArenaBlog,
    label: "5s Arena Blog",
    note: "Editorial and football culture layer around the arena stack.",
    status: "Live",
  },
  {
    href: studioLinks.starfallSalvage,
    label: "Starfall Salvage",
    note: "Playable WebGL lane inside the wider product graph.",
    status: "Live",
  },
  {
    href: studioLinks.kopanoContext,
    label: "Kopano Context",
    note: "Reserved intelligence domain. Public runtime surface still owner-blocked.",
    status: "Reserved",
  },
];

export const canonicalBio = {
  name: 'Kholofelo "Robyn" Rababalela',
  role: "Chief Architect, Kopano Labs",
  affiliation:
    "CPUT Computer Engineering student with independent research in protocol-driven agentic memory, AI governance, and resilient runtime systems",
  location: "Cape Town, South Africa",
  missionStatement:
    '"Unity through Technology — building digital infrastructure that respects African realities (load-shedding, data residency, POPIA)."',
  recognition: "Finalist, SA Startup Week 2026",
  beliefStatement:
    '"Kopano Labs is built on the belief that Jesus Christ is God."',
  stack: [
    "Next.js 15",
    "Turborepo",
    "React 19",
    "TypeScript",
    "NextAuth",
    "Tailwind CSS",
    "MongoDB Atlas (SA region)",
    "MCP",
  ],
};

export const homeTraits = ["Architect", "Research Builder", "Believer"];

export const homeMetrics = [
  {
    label: "Current Study",
    value: "CPUT",
    detail: "BEng Tech in Computer Engineering — in progress",
  },
  {
    label: "Research Identity",
    value: "ORCID",
    detail: "0009-0000-3995-6147",
  },
  {
    label: "Flagship Research Build",
    value: "RUNE",
    detail: "Runtime Unified Network Endorsement",
  },
  {
    label: "Based In",
    value: "Cape Town",
    detail: "Building for Africa. Anchored at home.",
  },
];

export const homeHighlights = [
  "I build sovereign digital infrastructure for African realities — secure by design, proof before promotion.",
  "Research stays fail-closed: claim, evidence, state, action, receipt. Pilots stay labelled until verified.",
];

export const homeQuote =
  "Technology is not neutral. It must heal, uplift and unite. That is our mandate.";

export const studioNotes = [
  "Sovereign by design",
  "Secure by default",
  "Proof before promotion",
];

export const educationSignals: EducationSignal[] = [
  {
    institution: "Cape Peninsula University of Technology",
    award: "BEng Tech in Computer Engineering — current study",
    period: "2025 - 2028",
    note: "Computer Engineering in progress.",
    href: "https://www.cput.ac.za/",
  },
  {
    institution: "Johns Hopkins Engineering",
    award: "Provisional admission — Certificate Program in Agentic AI",
    period: "5 August 2026",
    note: "Provisional admission only. Completion not verified.",
    href: "https://ep.jhu.edu/",
  },
];

export const studioProjects: StudioProject[] = [
  {
    title: "Project RUNE",
    description: "Fail-closed endorsement for agent claims.",
    detail: "",
    status: "MVP",
    deliveryLabel: "Active",
    category: "Agent Governance",
    stack: ["Python", "MCP", "Ed25519", "Fail-closed"],
    image: "/project-banners/rune-emblem.svg",
    imageAlt: "Project RUNE endorsement and convergence emblem",
    primaryLink: {
      href: studioLinks.projectRune,
      label: "Explore RUNE",
    },
    secondaryLink: {
      href: studioLinks.orcid,
      label: "Research identity",
    },
  },
  {
    title: "Bookit 5s Arena",
    description: "Live 5-a-side booking infrastructure.",
    detail: "",
    status: "MVP",
    deliveryLabel: "Live",
    category: "SaaS Platform",
    stack: ["React", "Node.js", "MongoDB", "APWA"],
    image: "/project-banners/bookit-banner-opt.png",
    imageAlt: "Bookit 5s Arena project banner",
    primaryLink: {
      href: "https://fivesarena.com",
      label: "Visit live platform",
    },
    secondaryLink: {
      href: "https://github.com/Kopano-Labs/Bookit-5s-Arena",
      label: "View GitHub",
    },
  },
  {
    title: "KasiLink",
    description: "Township-first work network. Pilot outcomes stay labelled.",
    detail: "",
    status: "Active",
    deliveryLabel: "Pilot",
    category: "Connectivity Platform",
    stack: ["PWA", "Offline-first", "Trust"],
    image: "/project-banners/kasilink-banner.svg",
    imageAlt: "KasiLink project banner",
    primaryLink: {
      href: studioLinks.kasiLink,
      label: "Visit live platform",
    },
    secondaryLink: {
      href: "https://github.com/RobynAwesome/KasiLink",
      label: "View GitHub",
    },
  },
  {
    title: "Kopano Context",
    description: "User-governed AI memory and multi-agent state.",
    detail: "",
    status: "In Development",
    deliveryLabel: "Active",
    category: "Identity & Data Layer",
    stack: ["MCP", "Context", "Receipts"],
    image: "/project-banners/mcp-banner.svg",
    imageAlt: "Kopano Context project banner",
    primaryLink: {
      href: "https://github.com/RobynAwesome/Introduction-to-MCP",
      label: "View GitHub",
    },
    secondaryLink: {
      href: studioLinks.kopanoContext,
      label: "Reserved domain",
    },
  },
  {
    title: "Harvest 4 All",
    description: "Civic hackathon build for food access.",
    detail: "",
    status: "Active",
    deliveryLabel: "Active",
    category: "Civic Impact",
    stack: ["JavaScript", "HTML", "CSS"],
    image: "/project-banners/harvest-banner.png",
    imageAlt: "Harvest 4 All project banner",
    primaryLink: {
      href: "https://github.com/RobynAwesome/Harvest-4-All",
      label: "View repository",
    },
    secondaryLink: {
      href: "https://www.cxia4irhack.co.za",
      label: "Hackathon site",
    },
  },
  {
    title: "5's Arena Blog",
    description: "Editorial layer around the live arena stack.",
    detail: "",
    status: "MVP",
    deliveryLabel: "Live",
    category: "Content Platform",
    stack: ["Auth", "CMS", "Images"],
    image: "/project-banners/blog-banner.svg",
    imageAlt: "5's Arena Blog banner",
    primaryLink: {
      href: studioLinks.fivesArenaBlog,
      label: "Visit live blog",
    },
    secondaryLink: {
      href: "https://github.com/RobynAwesome/5s-Arena-Blog",
      label: "View GitHub",
    },
  },
];

export const studioPrinciples = [
  {
    title: "African Realities",
    body: "Design for load-shedding, uneven connectivity, and local compliance from the first decision.",
  },
  {
    title: "Context Matters",
    body: "Treat memory, workflow, and operator control as product primitives rather than optional extras.",
  },
  {
    title: "Proof Before Promotion",
    body: "Separate intention, demonstration, deployment, discovery, and verified outcome instead of collapsing them into one success claim.",
  },
];
