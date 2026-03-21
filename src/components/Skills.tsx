import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";

const JSIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10">
    <circle cx="24" cy="24" r="22" fill="#f7df1e" />
    <text x="24" y="30" textAnchor="middle" fontWeight="900" fontSize="18" fill="#1a1a1a" fontFamily="Inter, system-ui, sans-serif">JS</text>
  </svg>
);

const JSWatermark = () => (
  <svg viewBox="0 0 48 48" className="w-32 h-32 opacity-[0.04]">
    <circle cx="24" cy="24" r="22" fill="currentColor" />
    <text x="24" y="30" textAnchor="middle" fontWeight="900" fontSize="18" fill="#060d18" fontFamily="Inter, system-ui, sans-serif">JS</text>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10">
    <circle cx="24" cy="24" r="4" fill="#61dafb" />
    <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="#61dafb" strokeWidth="1.6" />
    <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="#61dafb" strokeWidth="1.6" transform="rotate(60 24 24)" />
    <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="#61dafb" strokeWidth="1.6" transform="rotate(120 24 24)" />
  </svg>
);

const ReactWatermark = () => (
  <svg viewBox="0 0 48 48" className="w-32 h-32 opacity-[0.04]">
    <circle cx="24" cy="24" r="4" fill="currentColor" />
    <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(60 24 24)" />
    <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(120 24 24)" />
  </svg>
);

const ServerIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
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
  <svg viewBox="0 0 48 48" className="w-32 h-32 opacity-[0.04]" fill="none">
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
    category: "JavaScript & TypeScript",
    description:
      "I code in modern ES2024+ JavaScript across all environments. I now use TypeScript for type-safe, maintainable codebases — a requirement for production-grade applications.",
    techs: ["TypeScript", "Node.js", "HTML5", "CSS3"],
    bg: "linear-gradient(135deg, #0c1a35 0%, #0f2240 50%, #0a1628 100%)",
  },
  {
    icon: <ReactIcon />,
    watermark: <ReactWatermark />,
    category: "React Ecosystem",
    description:
      "Building component-driven UIs with React 18+, hooks, and the broader ecosystem. From SPAs to SSR with Next.js and Vite for blazing-fast development.",
    techs: ["React", "Next.js", "Vite", "Redux", "Framer Motion"],
    bg: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 50%, #0c1a35 100%)",
  },
  {
    icon: <ServerIcon />,
    watermark: <ServerWatermark />,
    category: "Backend & APIs",
    description:
      "As a Full-Stack Developer, I build robust server-side architectures. From RESTful APIs to database design with MongoDB, I handle the complete backend pipeline.",
    techs: ["Node.js", "Express", "MongoDB", "REST APIs", "Firebase"],
    bg: "linear-gradient(135deg, #0c1a35 0%, #0a1e30 50%, #0f2240 100%)",
  },
];

const additionalSkills = [
  "TailwindCSS", "Git & GitHub", "Figma", "Docker", "Vercel", "Agile/Scrum",
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
    description: "Personal portfolio built with React + Vite + TailwindCSS",
    lang: "TypeScript",
    langColor: "#3178c6",
    url: "https://github.com/RobynAwesome/Portfolio",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"skills" | "github">("skills");

  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="max-w-5xl mx-auto px-12 sm:px-20 lg:px-36">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 leading-tight text-center">
            Full-Stack <span className="gradient-text">Architect.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 text-center">
            My experience across the entire MERN stack gives me confidence in the
            technologies & tools I use. Whether you need help bootstrapping your project
            or building production-grade features, I bring both frontend finesse and
            backend backbone.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex rounded-full border border-[#1a2744] bg-[#0b1426]/80 p-1">
            <button
              onClick={() => setActiveTab("skills")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "skills"
                  ? "bg-gradient-to-r from-[#0ea5e9]/20 to-[#00e89d]/20 text-white border border-[#0ea5e9]/30"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              Tech Stack
            </button>
            <button
              onClick={() => setActiveTab("github")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === "github"
                  ? "bg-gradient-to-r from-[#0ea5e9]/20 to-[#00e89d]/20 text-white border border-[#0ea5e9]/30"
                  : "text-gray-500 hover:text-gray-300"
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="group relative rounded-2xl border border-[#1a2744] overflow-hidden card-hover"
                  style={{ background: skill.bg }}
                >
                  {/* Watermark icon */}
                  <div className="absolute -bottom-4 -right-4 text-white pointer-events-none">
                    {skill.watermark}
                  </div>

                  {/* Top accent line */}
                  <div className="h-[2px] w-full bg-gradient-to-r from-[#0ea5e9] via-[#00e89d] to-[#0ea5e9]" />

                  <div className="relative p-6 sm:p-8 min-h-[320px] flex flex-col">
                    {/* Icon + Title */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10">
                        {skill.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white">{skill.category}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">
                      {skill.description}
                    </p>

                    {/* Tech list at bottom */}
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
                      {skill.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-[#0ea5e9]/8 text-[#0ea5e9]/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional skills row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3"
            >
              {additionalSkills.map((name, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                  className="px-4 py-3 rounded-xl border border-[#1a2744] bg-[#0c1a35] text-center hover:border-[#00e89d]/40 hover:bg-[#0f2240] transition-all duration-300"
                >
                  <span className="text-xs font-medium text-[#0ea5e9]">
                    {name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
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
            <div className="rounded-2xl border border-[#1a2744] overflow-hidden mb-6" style={{ background: "linear-gradient(135deg, #0c1a35, #0f2240)" }}>
              <div className="p-6 sm:p-8 flex items-center gap-5">
                <img
                  src="/web-image-2.JPG"
                  alt="GitHub avatar"
                  className="w-16 h-16 rounded-full object-cover object-top border-2 border-[#0ea5e9]/30"
                />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white">RobynAwesome</h3>
                    <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full border border-[#00e89d]/30 text-[#00e89d]">
                      PRO
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">Full-Stack MERN Developer | Cape Town, South Africa</p>
                </div>
                <a
                  href="https://github.com/RobynAwesome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1a2744] text-sm font-medium text-gray-300 hover:text-white hover:border-[#00e89d]/40 transition-all"
                >
                  <Github size={14} />
                  View Profile
                </a>
              </div>
            </div>

            {/* Repo cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {githubRepos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-[#1a2744] p-5 hover:border-[#0ea5e9]/40 transition-all duration-300"
                  style={{ background: "linear-gradient(135deg, #0c1a35, #0a1628)" }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Github size={14} className="text-gray-500" />
                      <span className="text-sm font-bold text-[#0ea5e9] group-hover:text-[#00e89d] transition-colors">
                        {repo.name}
                      </span>
                    </div>
                    <ExternalLink size={12} className="text-gray-600 group-hover:text-[#00e89d] transition-colors" />
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    {repo.description}
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: repo.langColor }}
                    />
                    <span className="text-xs text-gray-500">{repo.lang}</span>
                  </div>
                </a>
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
          <Link
            to="/resume"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold border-2 border-[#00e89d]/40 text-[#00e89d] hover:bg-[#00e89d]/10 hover:border-[#00e89d]/60 hover:scale-105 transition-all duration-300"
          >
            Check my resume
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
