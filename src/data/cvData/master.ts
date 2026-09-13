export interface CVExperience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface CVEducation {
  degree: string;
  institution: string;
  period: string;
  note: string;
}

export interface CVSkill {
  label: string;
  pct: number;
  group: "frontend" | "backend" | "infrastructure" | "ai";
}

export interface CVCert {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

export interface CVProject {
  title: string;
  url?: string;
  github: string;
  description: string;
}

export interface CVData {
  name: string;
  roleTitle: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  website: string;
  orcid?: string;
  summary: string;
  experience: CVExperience[];
  education: CVEducation[];
  skills: CVSkill[];
  techTags: string[];
  certs: CVCert[];
  projects: CVProject[];
}

export const masterCV: CVData = {
  name: "Kholofelo Robyn Rababalela",
  roleTitle: "Chief Architect — Sovereign System Engineer",
  location: "Cape Town, Western Cape, South Africa",
  email: "rkholofelo@gmail.com",
  linkedin: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/",
  github: "https://github.com/RobynAwesome",
  website: "https://KRRababalela.com",
  orcid: "https://orcid.org/0009-0000-3995-6147",

  summary:
    "Chief Architect at Kopano Labs and BEng Tech Computer Engineering student at CPUT. " +
    "I design resilient product systems, protocol-driven agentic memory, and multi-agent governance infrastructure " +
    "shaped by real constraints — load-shedding, data residency, township connectivity, and the need for verifiable AI execution. " +
    "My active research/build programme connects Digital Hippocampus memory architecture, POC/FOC failure diagnostics, " +
    "Kopano Context, and Project RUNE while keeping implementation claims bounded by evidence and receipts.",

  experience: [
    {
      role: "Chief Architect",
      company: "Kopano Labs",
      period: "2026 — Present",
      bullets: [
        "Architected product systems across Bookit 5s Arena, KasiLink, and Kopano Context (KC) with Next.js 15, TypeScript, and MongoDB Atlas (SA region)",
        "Developed protocol-driven research and implementation work around durable agentic memory, failure/convergence governance, and user-controlled context",
        "Built Project RUNE as a public reference MVP for fail-closed endorsement of agent-to-agent coordination and identity claims with ledger/receipt evidence",
        "Set platform direction across Turborepo monorepos, MCP-based systems, and edge/offline-first PWA runtimes",
      ],
    },
    {
      role: "Freelance Software Developer",
      company: "Ama-Phu Entertainment / Ama_Phu Enterprises / 5's Arena",
      period: "2023 — Present",
      bullets: [
        "Delivered the Bookit 5's Arena booking platform as a production product surface — not a brochure site",
        "Shipped web properties including the 5's Arena blog, public portfolio builds, and entertainment profile surfaces",
        "Worked across the wider Ama-Phu client ecosystem connecting venue logistics with web product delivery",
        "Handled design, frontend, backend integration, deployment, and documentation across live client-facing work",
      ],
    },
    {
      role: "Director",
      company: "AMAPHU (Pty) Ltd",
      period: "2021 — Present",
      bullets: [
        "Registered and operate an entertainment and technology company bridging African art with engineering",
        "Managed production logistics for live events, stage coordination, and digital asset pipelines",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Engineering Technology — Computer Engineering",
      institution: "Cape Peninsula University of Technology (CPUT)",
      period: "2025 — Present",
      note: "Deep foundations in software, hardware, and systems engineering",
    },
    {
      degree: "Certificate Program in Agentic AI — provisional admission",
      institution: "Johns Hopkins Engineering Executive and Professional Education",
      period: "Offer dated Aug 2026",
      note: "Provisional admission only (conditional on fee). Completion NOT_VERIFIED — not an earned certificate.",
    },
  ],

  skills: [
    { label: "React / TypeScript", pct: 92, group: "frontend" },
    { label: "Tailwind CSS / Design Systems", pct: 90, group: "frontend" },
    { label: "Next.js / Vite", pct: 88, group: "frontend" },
    { label: "Framer Motion / Animation", pct: 82, group: "frontend" },
    { label: "Node.js / Express", pct: 88, group: "backend" },
    { label: "MongoDB / REST APIs", pct: 85, group: "backend" },
    { label: "Python / FastAPI", pct: 72, group: "backend" },
    { label: "Auth / NextAuth / JWT", pct: 80, group: "backend" },
    { label: "Git / CI/CD / Vercel", pct: 86, group: "infrastructure" },
    { label: "Docker / Linux", pct: 68, group: "infrastructure" },
    { label: "MCP SDK / Protocol Eng.", pct: 75, group: "ai" },
    { label: "LangChain / Agentic AI", pct: 70, group: "ai" },
  ],

  techTags: [
    "React",
    "TypeScript",
    "Next.js 15",
    "Node.js",
    "Express",
    "MongoDB Atlas",
    "Tailwind CSS",
    "Vite",
    "Turborepo",
    "Framer Motion",
    "Python",
    "FastAPI",
    "MCP SDK",
    "Protocol Engineering",
    "REST APIs",
    "Git",
    "Docker",
    "Vercel",
    "HTML5",
    "CSS3",
  ],

  certs: [
    {
      title: "AI Fluency: Framework & Foundations",
      issuer: "Anthropic",
      date: "Mar 2026",
      link: "https://verify.skilljar.com/c/eg2hpc738332",
    },
    {
      title: "Introduction to Model Context Protocol",
      issuer: "Anthropic",
      date: "Mar 2026",
      link: "https://verify.skilljar.com/c/t32humid3i99",
    },
    {
      title: "Frontend Developer (React)",
      issuer: "HackerRank",
      date: "Mar 2026",
      link: "https://www.hackerrank.com/certificates/eb2baf4f04c3",
    },
    {
      title: "AI for Cybersecurity",
      issuer: "LinkedIn Learning",
      date: "Mar 2026",
      link: "#",
    },
    {
      title: "Azure Cloud Fundamentals",
      issuer: "LinkedIn Learning",
      date: "Mar 2026",
      link: "#",
    },
    {
      title: "Generative AI in Cloud Computing",
      issuer: "LinkedIn Learning",
      date: "Mar 2026",
      link: "#",
    },
    {
      title: "React (Basic)",
      issuer: "HackerRank",
      date: "Mar 2026",
      link: "https://www.hackerrank.com/certificates/b52e37357999",
    },
    {
      title: "Node.js (Basic)",
      issuer: "HackerRank",
      date: "Mar 2026",
      link: "https://www.hackerrank.com/certificates/bc9391871061",
    },
    {
      title: "Java (Basic)",
      issuer: "HackerRank",
      date: "Mar 2026",
      link: "https://www.hackerrank.com/certificates/400feb96b063",
    },
    {
      title: "CSS (Basic)",
      issuer: "HackerRank",
      date: "Mar 2026",
      link: "https://www.hackerrank.com/certificates/2fcac2281716",
    },
  ],

  projects: [
    {
      title: "Project RUNE — Runtime Unified Network Endorsement",
      github: "https://github.com/RobynAwesome/Project-Rune",
      description: "Public reference MVP for fail-closed endorsement of agent coordination and identity claims with ledger/receipt evidence",
    },
    {
      title: "Bookit — 5's Arena",
      url: "https://fivesarena.com",
      github: "https://github.com/RobynAwesome/Bookit-5s-Arena",
      description: "Production booking platform for a five-a-side arena — real transactions, not a brochure",
    },
    {
      title: "KasiLink",
      github: "https://github.com/RobynAwesome/KasiLink",
      description: "Community marketplace routing realism over brittle corporate APIs",
    },
    {
      title: "Kopano Context (KC)",
      github: "https://github.com/RobynAwesome",
      description: "Durable context and agentic-memory architecture with governed multi-agent execution",
    },
    {
      title: "Portfolio Website",
      url: "https://KRRababalela.com",
      github: "https://github.com/RobynAwesome/Portfolio",
      description: "This site — React + TypeScript + Tailwind + Framer Motion, deployed on Vercel",
    },
    {
      title: "Harvest 4 All",
      url: "https://www.cxia4irhack.co.za",
      github: "https://github.com/RobynAwesome/Harvest-4-All",
      description: "Hackathon finalist platform for food security and community distribution",
    },
    {
      title: "Ama-Phu Entertainment",
      github: "https://github.com/RobynAwesome",
      description: "Cultural provenance surfaces — live art + stage logistics tied to engineering narrative",
    },
  ],
};
