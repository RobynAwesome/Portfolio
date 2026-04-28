export type ProjectLink = {
  href: string;
  label: string;
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

export const studioLinks = {
  kopanoLabs: "https://kopanolabs.com",
  github: "https://github.com/RobynAwesome",
  linkedin: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/",
  koFi: "https://ko-fi.com/robynawesome/",
  email: "mailto:rkholofelo@gmail.com",
};

export const canonicalBio = {
  name: 'Kholofelo "Robyn" Rababalela',
  role: "Chief Architect, Kopano Labs",
  affiliation:
    "CPUT (Cape Peninsula University of Technology), 2nd-year IT/Engineering",
  location: "Cape Town, South Africa (V&A Waterfront / CPUT)",
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

export const homeTraits = ["Architect", "Builder", "Believer"];

export const homeMetrics = [
  {
    label: "Alumna",
    value: "CPUT",
    detail: "Cape Peninsula University of Technology",
  },
  {
    label: "Based In",
    value: "Cape Town",
    detail: "Building for Africa. Anchored at home.",
  },
  {
    label: "Recognition",
    value: "SA Startup Week 2026 Finalist",
    detail: "Top founder and startup recognition.",
  },
];

export const homeHighlights = [
  "I lead Kopano Labs in building sovereign digital infrastructure and products that reflect African realities, secure by design and built to last.",
  "From strategy to system design, from code to cloud, the work stays close to operators, communities, and public trust.",
];

export const homeQuote =
  "Technology is not neutral. It must heal, uplift and unite. That is our mandate.";

export const studioNotes = [
  "Sovereign by design",
  "Secure by default",
  "Built for scale",
];

export const studioProjects: StudioProject[] = [
  {
    title: "Bookit 5s Arena",
    description:
      "Football court booking platform operating as a live MVP for 5-a-side football infrastructure.",
    detail:
      "Positioned to scale into the World Cup 5s 48-nation tournament, 29–31 May 2026.",
    status: "MVP",
    deliveryLabel: "Live",
    category: "SaaS Platform",
    stack: ["Next.js", "TypeScript", "Postgres", "Stripe"],
    image: "/project-banners/bookit-banner-opt.png",
    imageAlt: "Bookit 5s Arena project banner",
    primaryLink: {
      href: "https://fivesarena.com",
      label: "Visit live platform",
    },
    secondaryLink: {
      href: "https://github.com/RobynAwesome/Bookit-5s-Arena",
      label: "View GitHub",
    },
  },
  {
    title: "KasiLink",
    description:
      "Township gig economy platform designed mobile-first and resilient under uneven connectivity.",
    detail:
      "PWA-first product thinking for offline-capable discovery, trust, and local economic access.",
    status: "Active",
    deliveryLabel: "Pilot",
    category: "Connectivity Platform",
    stack: ["IoT", "Mesh", "Rust", "Tailwind"],
    image: "/project-banners/kasilink-banner.svg",
    imageAlt: "KasiLink project banner",
    primaryLink: {
      href: "https://github.com/RobynAwesome/KasiLink",
      label: "View GitHub",
    },
  },
  {
    title: "Kopano Context",
    description:
      "Contextual identity and data orchestration framework for African data ecosystems.",
    detail:
      "Architecture work around durable context, memory-aware tooling, and multi-agent product systems.",
    status: "In Development",
    deliveryLabel: "Live",
    category: "Identity & Data Layer",
    stack: ["Go", "gRPC", "Kafka", "CockroachDB"],
    image: "/project-banners/mcp-banner.svg",
    imageAlt: "Kopano Context project banner",
    primaryLink: {
      href: "https://github.com/RobynAwesome/Introduction-to-MCP",
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
    title: "Sovereign Delivery",
    body: "Ship infrastructure that can be hosted, reasoned about, and trusted close to home.",
  },
];
