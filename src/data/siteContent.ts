export type ProjectLink = {
  href: string;
  label: string;
};

export type StudioProject = {
  title: string;
  description: string;
  detail: string;
  status: "Active" | "MVP" | "In Development";
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

export const studioProjects: StudioProject[] = [
  {
    title: "Bookit 5s Arena",
    description:
      "Next.js football court booking platform, shipped as an MVP with a live client deployment.",
    detail:
      "Scaling operations for the World Cup 5s 48-nation tournament, 29–31 May 2026.",
    status: "MVP",
    stack: ["Next.js 15", "TypeScript", "MongoDB Atlas", "Tailwind CSS"],
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
      "Township gig economy platform designed PWA-first for lower-connectivity environments.",
    detail:
      "Offline-capable product thinking focused on local trust, discoverability, and resilience.",
    status: "Active",
    stack: ["PWA", "TypeScript", "Tailwind CSS", "Offline-first UX"],
    image: "/project-banners/kasilink-banner.svg",
    imageAlt: "KasiLink project banner",
    primaryLink: {
      href: "https://github.com/RobynAwesome/KasiLink",
      label: "View GitHub",
    },
  },
  {
    title: "Kopano Context (KC)",
    description:
      "Multi-agent MCP framework that treats LLMs as stateless renters of persistent memory.",
    detail:
      "Architecture work around durable context, tool orchestration, and memory-aware product systems.",
    status: "In Development",
    stack: ["MCP", "TypeScript", "Node.js", "Multi-agent systems"],
    image: "/project-banners/mcp-banner.svg",
    imageAlt: "Kopano Context project banner",
    primaryLink: {
      href: "https://github.com/RobynAwesome",
      label: "View GitHub profile",
    },
  },
];

export const homeHighlights = [
  "Chief Architect at Kopano Labs, shaping sovereign product systems from Cape Town.",
  "CPUT student building for mobile-first, bandwidth-sensitive, and policy-aware contexts.",
  "SA Startup Week 2026 finalist with a studio focus on infrastructure that fits African realities.",
];

export const studioPrinciples = [
  {
    title: "African Realities",
    body: "Design for load-shedding, uneven connectivity, and local compliance from the first decision.",
  },
  {
    title: "Persistent Context",
    body: "Treat memory, workflow, and operator control as product primitives rather than add-ons.",
  },
  {
    title: "Sovereign Delivery",
    body: "Ship infrastructure that can be hosted, reasoned about, and trusted close to home.",
  },
];

export const homeMetrics = [
  {
    label: "Role",
    value: canonicalBio.role,
  },
  {
    label: "Base",
    value: "Cape Town, South Africa",
  },
  {
    label: "Recognition",
    value: canonicalBio.recognition,
  },
];
