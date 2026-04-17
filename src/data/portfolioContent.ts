export type VerificationStatus = "verified" | "coursework" | "planned";
export type ProjectStatus = "live" | "repo" | "comingSoon" | "upcoming";
export type MetricEvidence = "verified" | "pending";
export type RoadmapStatus = "Shipped" | "In Progress" | "Queued" | "Research";

export interface ExternalLink {
  label: string;
  href: string;
}

export interface Metric {
  label: string;
  value: string;
  evidence: MetricEvidence;
  note?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  systems: string[];
}

export interface CredentialItem {
  title: string;
  issuer: string;
  date: string;
  verificationStatus: VerificationStatus;
  href?: string;
  note?: string;
}

export interface BadgeItem {
  title: string;
  source: string;
  kind: string;
  href: string;
  verificationStatus: VerificationStatus;
  note?: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  strapline: string;
  summary: string;
  status: ProjectStatus;
  verificationStatus: VerificationStatus;
  tech: string[];
  highlights: string[];
  links: ExternalLink[];
}

export interface CaseStudy {
  title: string;
  strapline: string;
  summary: string;
  architecture: string[];
  tradeoffs: string[];
  metrics: Metric[];
  productionLessons: string[];
  links: ExternalLink[];
}

export interface AiProduct {
  title: string;
  strapline: string;
  problem: string;
  architecture: string[];
  promptAndTooling: string[];
  evalApproach: string[];
  failureCases: string[];
  measurableResults: Metric[];
  links: ExternalLink[];
}

export interface QualitySignal {
  title: string;
  summary: string;
  evidence: string;
  links?: ExternalLink[];
}

export interface RoadmapTrack {
  title: string;
  summary: string;
  items: {
    title: string;
    status: RoadmapStatus;
    when: string;
    detail: string;
  }[];
}

export const profile = {
  name: "Kholofelo Robyn Rababalela",
  title:
    "Freelance web developer and AI infrastructure builder creating product systems, community platforms, and auditable multi-agent tooling.",
  location: "Cape Town, South Africa",
  email: "rkholofelo@gmail.com",
  headline:
    "Freelance Web Developer and AI Infrastructure Builder | Creator of Kopano Context | CPUT Computer Engineering Student | KasiLink + Kopano Labs",
  summary:
    "I build things that have to work beyond the mockup: booking flows, community products, and AI systems with visible reasoning, logs, and trust checks. My public work spans Bookit for 5's Arena, Kopano Context's multi-agent runtime, and a documentation-heavy product workflow shaped by real South African constraints.",
};

export const publicLinks = {
  portfolio: "https://krrababalela.com/",
  github: "https://github.com/RobynAwesome",
  linkedin: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/",
  hackerrank: "https://www.hackerrank.com/profile/rkholofelo",
  orcid: "https://orcid.org/0009-0000-3995-6147",
};

export const experience: ExperienceItem[] = [
  {
    role: "Freelance Software Developer",
    company: "Ama_Phu Enterprises / 5's Arena engagements",
    period: "2023 — Present",
    location: "Cape Town / Remote",
    summary:
      "Built and shipped client-facing products from architecture through deployment, with the strongest work centered on booking operations, content tooling, and maintainable frontend systems.",
    achievements: [
      "Delivered Bookit — 5's Arena as a live court-management and booking platform instead of a brochure-style site.",
      "Shipped a companion blog platform with authentication, role-aware publishing, and image handling for the same venue ecosystem.",
      "Built production portfolio sites for both personal and client use, including the current portfolio and Portfolio-MBR.",
      "Worked across product design, frontend implementation, backend integration, deployment, and documentation instead of staying isolated in one layer.",
    ],
    systems: [
      "React / Next.js frontends",
      "Node.js application logic",
      "MongoDB data models",
      "Auth, payments, CMS flows, and deployment hygiene",
    ],
  },
];

export const verifiedCredentials: CredentialItem[] = [
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    date: "March 2026",
    verificationStatus: "verified",
    href: "https://verify.skilljar.com/c/eg2hpc738332",
  },
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    date: "March 2026",
    verificationStatus: "verified",
    href: "/certificates/certificate-introduction-to-MCP.pdf",
    note: "Linked from local certificate artifact copied into the portfolio build.",
  },
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "March 2026",
    verificationStatus: "verified",
    href: "https://www.hackerrank.com/certificates/eb2baf4f04c3",
  },
  {
    title: "React (Basic)",
    issuer: "HackerRank",
    date: "March 2026",
    verificationStatus: "verified",
    href: "https://www.hackerrank.com/certificates/b52e37357999",
  },
  {
    title: "Node.js (Basic)",
    issuer: "HackerRank",
    date: "March 2026",
    verificationStatus: "verified",
    href: "https://www.hackerrank.com/certificates/bc9391871061",
  },
  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    date: "March 2026",
    verificationStatus: "verified",
    href: "https://www.hackerrank.com/certificates/400feb96b063",
  },
  {
    title: "CSS (Basic)",
    issuer: "HackerRank",
    date: "March 2026",
    verificationStatus: "verified",
    href: "https://www.hackerrank.com/certificates/2fcac2281716",
  },
];

export const courseworkCredentials: CredentialItem[] = [
  {
    title: "AI for Cybersecurity",
    issuer: "LinkedIn Learning",
    date: "March 2026",
    verificationStatus: "coursework",
    note: "Public verification link not available from the export, so this is presented as coursework rather than a verifiable credential.",
  },
  {
    title: "Azure Cloud Fundamentals",
    issuer: "LinkedIn Learning",
    date: "March 2026",
    verificationStatus: "coursework",
    note: "Included as relevant coursework only.",
  },
  {
    title: "Generative AI in Cloud Computing",
    issuer: "LinkedIn Learning",
    date: "March 2026",
    verificationStatus: "coursework",
    note: "Included as relevant coursework only.",
  },
  {
    title: "What is Generative AI?",
    issuer: "LinkedIn Learning",
    date: "March 2026",
    verificationStatus: "coursework",
    note: "Included as relevant coursework only.",
  },
];

export const publicBadges: BadgeItem[] = [
  {
    title: "Frontend Developer (React)",
    source: "HackerRank",
    kind: "Role certification",
    href: "https://www.hackerrank.com/certificates/eb2baf4f04c3",
    verificationStatus: "verified",
  },
  {
    title: "React (Basic)",
    source: "HackerRank",
    kind: "Skill certification",
    href: "https://www.hackerrank.com/certificates/b52e37357999",
    verificationStatus: "verified",
  },
  {
    title: "Node.js (Basic)",
    source: "HackerRank",
    kind: "Skill certification",
    href: "https://www.hackerrank.com/certificates/bc9391871061",
    verificationStatus: "verified",
  },
  {
    title: "JavaScript profile badges",
    source: "HackerRank",
    kind: "Profile badge track",
    href: publicLinks.hackerrank,
    verificationStatus: "verified",
    note: "Profile-level badge evidence lives on the public HackerRank profile.",
  },
  {
    title: "GitHub achievements",
    source: "GitHub",
    kind: "Open-source profile achievements",
    href: publicLinks.github,
    verificationStatus: "verified",
    note: "Profile achievements and contribution history are visible on the public GitHub profile.",
  },
  {
    title: "LinkedIn Learning completions",
    source: "LinkedIn Learning",
    kind: "Coursework collection",
    href: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/details/certifications/",
    verificationStatus: "coursework",
    note: "Useful for learning signal, but presented as coursework because LinkedIn does not expose strong public certificate verification.",
  },
];

export const featuredCaseStudy: CaseStudy = {
  title: "Bookit — 5's Arena",
  strapline: "Live venue-management system for a South African 5-a-side football operation",
  summary:
    "Bookit is the clearest example of my production work: a live arena booking system that moved beyond a static marketing site into scheduling, payment handling, admin operations, and customer support workflows.",
  architecture: [
    "Next.js full-stack application with React and TypeScript on the client surface.",
    "MongoDB / Mongoose persistence for bookings, users, and venue data.",
    "NextAuth-backed authentication and role-aware admin surfaces.",
    "Stripe checkout, guest reservation flow, and operational notifications through email tooling.",
    "AI support features wired into the product to answer venue and booking questions.",
  ],
  tradeoffs: [
    "Kept the system inside one product surface instead of splitting booking and admin into separate services, which made shipping faster but tightened coupling between operations and user flows.",
    "Supported both online payment and pay-on-arrival guest reservations, which improved flexibility but increased operational state handling.",
    "Prioritized booking reliability and admin clarity over adding broader marketing features first.",
  ],
  metrics: [
    {
      label: "Public repository commits",
      value: "62 commits",
      evidence: "verified",
      note: "Visible on the public GitHub repository.",
    },
    {
      label: "Public GitHub stars",
      value: "6 stars",
      evidence: "verified",
      note: "Visible on the public GitHub repository.",
    },
    {
      label: "Live booking surface",
      value: "1 production domain",
      evidence: "verified",
      note: "Deployed at fivesarena.com.",
    },
    {
      label: "Standard booking slot presets",
      value: "3 durations",
      evidence: "verified",
      note: "1-hour, 2-hour, and 3-hour slots documented in the public README.",
    },
  ],
  productionLessons: [
    "Operational software gets judged on what happens when plans change: double-booking prevention, state transitions, and admin visibility mattered more than visual polish alone.",
    "Payments create responsibility. Once money enters the flow, confirmation, fallback, and auditability become product requirements rather than extras.",
    "Supporting venue staff requires different UX than supporting customers, so admin and public flows need separate attention even inside one app.",
  ],
  links: [
    { label: "Live system", href: "https://fivesarena.com" },
    { label: "Public repository", href: "https://github.com/RobynAwesome/Bookit-5s-Arena" },
    { label: "Venue blog companion", href: "https://blog.fivesarena.com" },
  ],
};

export const aiProduct: AiProduct = {
  title: "Kopano Context (KC)",
  strapline: "Multi-agent orchestration system with safety checks, audit logs, and a real product surface",
  problem:
    "Most AI demos stop at one model and one prompt. Kopano Context is my attempt to build a system that coordinates multiple models, tools, and product surfaces while keeping a usable audit trail and a visible trust layer.",
  architecture: [
    "Python orchestration core with CLI entrypoints and FastAPI runtime surfaces.",
    "LiteLLM-based multi-provider routing for Anthropic, Google, xAI, OpenAI, and other providers.",
    "SQLite data lake for discussion logs, replay history, and auditability.",
    "Next.js / React studio surface for real-time visibility into orchestration activity.",
    "KasiLink bridge and Labs surfaces that connect orchestration work to South African product ideas instead of isolated prompts.",
  ],
  promptAndTooling: [
    "A moderator layer decides how multi-agent conversations are coordinated rather than letting every agent run unbounded.",
    "Tool use spans git, web, database, spreadsheet, visualization, social monitoring, and simulation-style workflows based on the local test surface.",
    "Prompting is treated as one layer of the system, not the entire product. Logging, memory, routing, and safe execution all sit around it.",
  ],
  evalApproach: [
    "Repo-level tests cover orchestration, CLI runtime, data lake behavior, demo assets, labs API, security tools, and external-tool integrations.",
    "Demo-day smoke and go/no-go scripts are kept in the repo as operational checks instead of relying on memory.",
    "SafeSkill verification is used as a trust gate for security-sensitive execution paths.",
  ],
  failureCases: [
    "Prompt-injection and unsafe-code risks are treated as first-class concerns through the SafeSkill trust layer and security tooling.",
    "Provider instability and tool variability are handled by keeping a persistent audit log and routing logic instead of assuming perfect model behavior.",
    "Multi-agent systems can drift or become noisy, so moderator control and persistent replay data are used to inspect what actually happened.",
  ],
  measurableResults: [
    {
      label: "Automated test files",
      value: "23 test files",
      evidence: "verified",
      note: "Counted in the local repository test directory.",
    },
    {
      label: "SafeSkill verification",
      value: "100/100 passes",
      evidence: "verified",
      note: "Marked in README as verified on 2026-04-11.",
    },
    {
      label: "Readiness state",
      value: "Full stack demo ready",
      evidence: "verified",
      note: "Marked in README as verified on 2026-04-11.",
    },
    {
      label: "Roadmap progress",
      value: "Phases 1-6 complete or operational",
      evidence: "verified",
      note: "Public roadmap in README lists phases 1-6 as complete or operational.",
    },
  ],
  links: [
    { label: "KC repository", href: "https://github.com/RobynAwesome/Introduction-to-MCP" },
    { label: "KC README", href: "https://github.com/RobynAwesome/Introduction-to-MCP#readme" },
    { label: "KC studio domain", href: "https://www.context.kopanolabs.com" },
  ],
};

export const upcomingProject: ProjectItem = {
  slug: "cars4mars",
  title: "Cars4Mars African Rover Challenge",
  strapline: "Upcoming robotics + computer-vision build for the 2026 student competition cycle",
  summary:
    "Cars4Mars is the next engineering build I am preparing around robotics, wireless control, camera systems, and applied computer vision under public competition constraints.",
  status: "upcoming",
  verificationStatus: "planned",
  tech: [
    "Wireless control",
    "Battery systems",
    "Computer vision",
    "Object detection",
    "Video streaming",
    "Autonomous navigation",
  ],
  highlights: [
    "Registration page currently states entries close on 30 April 2026.",
    "Official competition structure is split between an online Launch Stage and an in-person Mars Stage in Johannesburg.",
    "Current public guidance still points teams to the 2025 rulebook for orientation.",
    "Early priorities are rover mobility, reliable remote control, live camera feeds, and object / balloon detection before higher-risk autonomy work.",
  ],
  links: [
    { label: "Register", href: "https://cars4mars.co.za/register/" },
    { label: "How it works", href: "https://cars4mars.co.za/how-it-works/" },
    { label: "Competition home", href: "https://cars4mars.co.za/" },
  ],
};

export const supportingProjects: ProjectItem[] = [
  {
    slug: "fives-arena-blog",
    title: "5's Arena Blog",
    strapline: "Community publishing system for the same venue ecosystem",
    summary:
      "A role-aware blog platform with authentication, image uploads, and content publishing built to extend the venue product beyond bookings.",
    status: "live",
    verificationStatus: "verified",
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS", "RBAC"],
    highlights: [
      "Public repo and live deployment available.",
      "Extends the same real client ecosystem as Bookit.",
    ],
    links: [
      { label: "Live system", href: "https://blog.fivesarena.com" },
      { label: "Repository", href: "https://github.com/RobynAwesome/5s-Arena-Blog" },
    ],
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    strapline: "This portfolio as a React + TypeScript production surface",
    summary:
      "A public-facing product surface that now doubles as a structured engineering narrative instead of a stack-label showcase.",
    status: "live",
    verificationStatus: "verified",
    tech: ["React", "TypeScript", "Vite", "Framer Motion", "Vercel"],
    highlights: [
      "Public custom-domain deployment.",
      "Typecheck + build gate wired into npm run check.",
    ],
    links: [
      { label: "Live site", href: "https://krrababalela.com/" },
      { label: "Repository", href: "https://github.com/RobynAwesome/Portfolio" },
    ],
  },
  {
    slug: "harvest-4-all",
    title: "Harvest 4 All",
    strapline: "Hackathon-built civic project around food access",
    summary:
      "A civic hackathon concept connecting urban farmers with local distributors and food banks.",
    status: "repo",
    verificationStatus: "verified",
    tech: ["JavaScript", "HTML", "CSS", "REST API"],
    highlights: [
      "Public hackathon project with social-impact framing.",
    ],
    links: [
      { label: "Repository", href: "https://github.com/RobynAwesome/Harvest-4-All" },
      { label: "Hackathon site", href: "https://www.cxia4irhack.co.za" },
    ],
  },
  {
    slug: "kasilink",
    title: "KasiLink",
    strapline: "Township-focused product direction connected to KC and Kopano Labs",
    summary:
      "Product exploration around township commerce and local opportunity discovery, connected to the broader Kopano ecosystem narrative.",
    status: "repo",
    verificationStatus: "planned",
    tech: ["Township product design", "Directory workflows", "AI integration planning"],
    highlights: [
      "Referenced in KC README as part of the ecosystem direction.",
    ],
    links: [
      { label: "Repository", href: "https://github.com/RobynAwesome/KasiLink" },
      { label: "KC repository", href: "https://github.com/RobynAwesome/Introduction-to-MCP" },
    ],
  },
  {
    slug: "portfolio-mbr",
    title: "Portfolio-MBR",
    strapline: "Client portfolio delivery for another developer",
    summary:
      "A polished portfolio build delivered for a client, useful as proof of delivery outside your own brand surface.",
    status: "live",
    verificationStatus: "verified",
    tech: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    highlights: [
      "Live deployment and public repo available.",
    ],
    links: [
      { label: "Live site", href: "https://mashoto.vercel.app" },
      { label: "Repository", href: "https://github.com/RobynAwesome/Portfolio-MBR" },
    ],
  },
];

export const qualitySignals: QualitySignal[] = [
  {
    title: "Portfolio build gate",
    summary: "The portfolio repo exposes a single `npm run check` gate that typechecks and builds before release.",
    evidence: "Verified in the local package.json.",
    links: [{ label: "Portfolio repository", href: "https://github.com/RobynAwesome/Portfolio" }],
  },
  {
    title: "Production deployment habit",
    summary: "Public sites are deployed and kept reachable on live domains instead of existing only as screenshots or local demos.",
    evidence: "Verified through public portfolio and 5's Arena deployment links.",
    links: [
      { label: "Portfolio", href: "https://krrababalela.com/" },
      { label: "5's Arena", href: "https://fivesarena.com" },
    ],
  },
  {
    title: "AI system test surface",
    summary: "Kopano Context keeps a non-trivial automated test directory covering orchestration, CLI, data lake, security, labs API, and tool integrations.",
    evidence: "23 test files counted in the local repository.",
    links: [{ label: "KC repository", href: "https://github.com/RobynAwesome/Introduction-to-MCP" }],
  },
  {
    title: "Safety and trust checks",
    summary: "KC is presented with a visible SafeSkill trust layer and a 100/100 verified pass state rather than hand-wavy AI claims.",
    evidence: "README marks SafeSkill 100/100 on 2026-04-11.",
    links: [{ label: "KC README", href: "https://github.com/RobynAwesome/Introduction-to-MCP#readme" }],
  },
  {
    title: "Runbooks and operating docs",
    summary: "The KC repo includes README, SECURITY, demo-day runbooks, and a large Schematics vault for operating knowledge.",
    evidence: "Verified in the local repository structure.",
    links: [{ label: "KC repository", href: "https://github.com/RobynAwesome/Introduction-to-MCP" }],
  },
];

export const roadmapTracks: RoadmapTrack[] = [
  {
    title: "Portfolio / Hiring",
    summary: "Turn the site into a stronger engineering interview asset.",
    items: [
      {
        title: "Rewrite portfolio positioning around engineering depth",
        status: "In Progress",
        when: "April 2026",
        detail: "Replace stack-first repetition with production systems, AI orchestration, and quality signals.",
      },
      {
        title: "Publish Bookit as a real case study",
        status: "In Progress",
        when: "April 2026",
        detail: "Add architecture, tradeoffs, production lessons, and verified evidence instead of a short project card.",
      },
      {
        title: "Tighten hiring package",
        status: "Queued",
        when: "May 2026",
        detail: "Refine recruiter-facing materials, project ordering, and verified credentials after the site rewrite lands.",
      },
    ],
  },
  {
    title: "Kopano Context (KC)",
    summary: "Ship KC as a credible AI systems project, not a loose AI interest section.",
    items: [
      {
        title: "Phase 1-6 foundation",
        status: "Shipped",
        when: "Verified 11 April 2026",
        detail: "KC README marks phases 1-6 as complete or operational, including Microsoft readiness and labs packaging.",
      },
      {
        title: "SA language and speech-access work",
        status: "In Progress",
        when: "2026",
        detail: "Continue phase 7 and related product surfaces with stronger eval and demo evidence.",
      },
      {
        title: "Evaluation and failure analysis docs",
        status: "Queued",
        when: "May–June 2026",
        detail: "Turn the current tests, smoke scripts, and SafeSkill checks into a clearer engineering narrative.",
      },
    ],
  },
  {
    title: "Cars4Mars",
    summary: "Build toward the 2026 rover challenge with engineering priorities grounded in the official rules.",
    items: [
      {
        title: "Competition registration",
        status: "In Progress",
        when: "Closes 30 April 2026",
        detail: "Team registration is live on the public Cars4Mars page.",
      },
      {
        title: "Mobility, remote control, and video pipeline",
        status: "Queued",
        when: "Q2 2026",
        detail: "Prioritize wireless control, stable camera feeds, and rover reliability before autonomy-heavy work.",
      },
      {
        title: "Object detection and autonomous mission prep",
        status: "Research",
        when: "Q2–Q3 2026",
        detail: "Work toward hammer / tennis ball / traffic cone detection and ordered balloon navigation under official mission constraints.",
      },
    ],
  },
  {
    title: "Kopano Labs",
    summary: "Build the documentation and launch layer around the wider Kopano product studio idea.",
    items: [
      {
        title: "Domain reserved",
        status: "Shipped",
        when: "17 April 2026",
        detail: "kopanolabs.com is registered but not yet connected to a live website.",
      },
      {
        title: "Pilot and operations docs",
        status: "In Progress",
        when: "April 2026",
        detail: "Executive summary, milestone tracker, DPA checklist, DSAR dry run, and launch pack are being organized into the vault.",
      },
      {
        title: "Public coming-soon site",
        status: "Queued",
        when: "Later in 2026",
        detail: "Keep Kopano Labs public positioning conservative until the site and pilot pack are ready.",
      },
    ],
  },
];
