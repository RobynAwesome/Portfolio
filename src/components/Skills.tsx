import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const JSIcon = () => (
  <svg viewBox="0 0 48 48" className="h-10 w-10">
    <circle cx="24" cy="24" r="22" fill="#f7df1e" />
    <text x="24" y="30" textAnchor="middle" fontWeight="900" fontSize="18" fill="#1a1a1a" fontFamily="Inter, system-ui, sans-serif">JS</text>
  </svg>
);

const JSWatermark = () => (
  <svg viewBox="0 0 48 48" className="h-32 w-32 opacity-[0.04]">
    <circle cx="24" cy="24" r="22" fill="currentColor" />
    <text x="24" y="30" textAnchor="middle" fontWeight="900" fontSize="18" fill="#060d18" fontFamily="Inter, system-ui, sans-serif">JS</text>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 48 48" className="h-10 w-10">
    <circle cx="24" cy="24" r="4" fill="#61dafb" />
    <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="#61dafb" strokeWidth="1.6" />
    <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="#61dafb" strokeWidth="1.6" transform="rotate(60 24 24)" />
    <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="#61dafb" strokeWidth="1.6" transform="rotate(120 24 24)" />
  </svg>
);

const ReactWatermark = () => (
  <svg viewBox="0 0 48 48" className="h-32 w-32 opacity-[0.04]">
    <circle cx="24" cy="24" r="4" fill="currentColor" />
    <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(60 24 24)" />
    <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(120 24 24)" />
  </svg>
);

const ServerIcon = () => (
  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
    <rect x="8" y="6" width="32" height="12" rx="3" stroke="#00e89d" strokeWidth="2" />
    <circle cx="14" cy="12" r="2" fill="#00e89d" />
    <rect x="20" y="10" width="14" height="1.5" rx="0.75" fill="#00e89d" opacity="0.5" />
    <rect x="8" y="22" width="32" height="12" rx="3" stroke="#00e89d" strokeWidth="2" />
    <circle cx="14" cy="28" r="2" fill="#00e89d" />
    <rect x="20" y="26" width="14" height="1.5" rx="0.75" fill="#00e89d" opacity="0.5" />
    <path d="M24 38v4M18 42h12" stroke="#00e89d" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ServerWatermark = () => (
  <svg viewBox="0 0 48 48" className="h-32 w-32 opacity-[0.04]" fill="none">
    <rect x="8" y="6" width="32" height="12" rx="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="14" cy="12" r="2" fill="currentColor" />
    <rect x="8" y="22" width="32" height="12" rx="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="14" cy="28" r="2" fill="currentColor" />
    <path d="M24 38v4M18 42h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const skills = [
  {
    icon: <JSIcon />,
    watermark: <JSWatermark />,
    category: "Interfaces & Motion",
    description:
      "I care about interface feel as much as function: expressive motion, strong typography, clear hierarchy, and responsive systems that still behave under real content.",
    techs: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Figma"],
    bg: "linear-gradient(135deg, #0c1a35 0%, #0f2240 50%, #0a1628 100%)",
    accent: "#f7df1e",
  },
  {
    icon: <ReactIcon />,
    watermark: <ReactWatermark />,
    category: "Product Systems",
    description:
      "The strongest thread in my public work is product flow: bookings, admin tooling, customer surfaces, and the connections between frontend choices and operational reality.",
    techs: ["Next.js", "Node.js", "MongoDB", "Auth", "Payments"],
    bg: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 50%, #0c1a35 100%)",
    accent: "#61dafb",
  },
  {
    icon: <ServerIcon />,
    watermark: <ServerWatermark />,
    category: "AI & Tooling",
    description:
      "Kopano Context pulled me deeper into routing, replay logs, trust gates, tool orchestration, and AI runtime design. I treat prompting as one layer, not the whole product.",
    techs: ["Python", "FastAPI", "SQLite", "LiteLLM", "MCP"],
    bg: "linear-gradient(135deg, #0c1a35 0%, #0a1e30 50%, #0f2240 100%)",
    accent: "#00e89d",
  },
];

const githubRepos = [
  {
    name: "Bookit-5s-Arena",
    description: "Full-stack booking system for 5's Arena football facility",
    lang: "JavaScript",
    langColor: "#f7df1e",
    url: "https://github.com/RobynAwesome/Bookit-5s-Arena",
  },
  {
    name: "5s-Arena-Blog",
    description: "Community blog platform for 5's Arena",
    lang: "JavaScript",
    langColor: "#f7df1e",
    url: "https://github.com/RobynAwesome/5s-Arena-Blog",
  },
  {
    name: "Portfolio",
    description: "Current portfolio system with structured content, motion, and deployment checks",
    lang: "TypeScript",
    langColor: "#3178c6",
    url: "https://github.com/RobynAwesome/Portfolio",
  },
  {
    name: "Introduction-to-MCP",
    description: "Kopano Context runtime, schematics vault, orchestration tooling, and tests",
    lang: "Python",
    langColor: "#3776ab",
    url: "https://github.com/RobynAwesome/Introduction-to-MCP",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"skills" | "github">("skills");

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-12 sm:px-20 lg:px-36">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="mb-4 text-center text-2xl leading-tight font-black sm:text-3xl md:text-4xl">
            Visual craft with a <span className="gradient-text">real build spine.</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-base leading-relaxed text-gray-400 sm:text-lg">
            The stack matters less than the way it comes together. This is the toolkit
            behind the interfaces, product flows, and AI systems that show up across
            the rest of the portfolio.
          </p>
        </motion.div>

        {/* Tab switcher — sliding pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 flex justify-center"
        >
          <div className="relative inline-flex rounded-full border border-[#1a2744] bg-[#0b1426]/80 p-1">
            {/* Sliding pill indicator */}
            <motion.div
              className="absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-[#0ea5e9]/20 to-[#00e89d]/20 border border-[#0ea5e9]/30"
              animate={{ x: activeTab === "skills" ? 0 : "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ width: "calc(50% - 2px)" }}
            />
            <button
              onClick={() => setActiveTab("skills")}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                activeTab === "skills" ? "text-white" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              Toolkit
            </button>
            <button
              onClick={() => setActiveTab("github")}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 flex items-center gap-2 ${
                activeTab === "github" ? "text-white" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              <Github size={14} />
              GitHub
            </button>
          </div>
        </motion.div>

        {/* Skills tab */}
        {activeTab === "skills" && (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{
                    y: -8,
                    boxShadow: `0 0 40px ${skill.accent}33, 0 0 80px ${skill.accent}14`,
                    borderColor: `${skill.accent}72`,
                  }}
                  className="group relative rounded-2xl border border-[#1a2744] overflow-hidden"
                  style={{ background: skill.bg }}
                >
                  {/* Radial glow reveal on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${skill.accent}10, transparent 70%)`,
                    }}
                  />

                  {/* Watermark icon */}
                  <div className="pointer-events-none absolute -right-4 -bottom-4 text-white">
                    {skill.watermark}
                  </div>

                  {/* Animated top accent line */}
                  <motion.div
                    className="h-[2px] w-full origin-left"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${skill.accent}, transparent)`,
                    }}
                    initial={{ scaleX: 0.3, opacity: 0.4 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />

                  <div className="relative flex min-h-[320px] flex-col p-6 sm:p-8">
                    {/* Icon + Title */}
                    <div className="flex items-center gap-3 mb-5">
                      <motion.div
                        className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <h3 className="text-lg font-bold text-white">{skill.category}</h3>
                    </div>

                    {/* Description */}
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-400">
                      {skill.description}
                    </p>

                    {/* Tech list at bottom */}
                    <div className="mt-auto flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
                      {skill.techs.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-[#0ea5e9]/8 px-2 py-0.5 text-[10px] font-medium text-[#0ea5e9]/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* GitHub tab */}
        {activeTab === "github" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* GitHub profile header */}
            <div className="mb-6 overflow-hidden rounded-2xl border border-[#1a2744]" style={{ background: "linear-gradient(135deg, #0c1a35, #0f2240)" }}>
              <div className="flex items-center gap-5 p-6 sm:p-8">
                <img
                  src="/web-image-2.JPG"
                  alt="GitHub avatar"
                  className="h-16 w-16 rounded-full border-2 border-[#0ea5e9]/30 object-cover object-top"
                />
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">RobynAwesome</h3>
                    <span className="rounded-full border border-[#00e89d]/30 px-2 py-0.5 text-[10px] font-semibold text-[#00e89d]">
                      PRO
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">Freelance Web Developer · AI Infrastructure Builder · Cape Town</p>
                </div>
                <a
                  href="https://github.com/RobynAwesome/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto hidden items-center gap-2 rounded-lg border border-[#1a2744] px-4 py-2 text-sm font-medium text-gray-300 transition-all hover:border-[#00e89d]/40 hover:text-white sm:flex"
                >
                  <Github size={14} />
                  View Profile
                </a>
              </div>
            </div>

            {/* Repo cards */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {githubRepos.map((repo, i) => (
                <motion.a
                  key={repo.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-[#1a2744] p-5 transition-all duration-300 hover:border-[#0ea5e9]/40"
                  style={{ background: "linear-gradient(135deg, #0c1a35, #0a1628)" }}
                >
                  <div className="mb-3 flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <Github size={14} className="text-gray-500" />
                      <span className="text-sm font-bold text-[#0ea5e9] transition-colors group-hover:text-[#00e89d]">
                        {repo.name}
                      </span>
                    </div>
                    <ExternalLink size={12} className="text-gray-600 transition-colors group-hover:text-[#00e89d]" />
                  </div>
                  <p className="mb-4 text-xs leading-relaxed text-gray-500">
                    {repo.description}
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: repo.langColor }}
                    />
                    <span className="text-xs text-gray-500">{repo.lang}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Check my resume button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 flex justify-center"
        >
          <motion.a
            href="/resume"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#00e89d]/40 px-8 py-4 text-base font-bold text-[#00e89d] transition-all duration-300 hover:border-[#00e89d]/60 hover:bg-[#00e89d]/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Check my resume
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
