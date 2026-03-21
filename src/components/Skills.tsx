import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const JSIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10">
    <circle cx="24" cy="24" r="22" fill="#f7df1e" />
    <text
      x="24"
      y="30"
      textAnchor="middle"
      fontWeight="900"
      fontSize="18"
      fill="#1a1a1a"
      fontFamily="Inter, system-ui, sans-serif"
    >
      JS
    </text>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10">
    <circle cx="24" cy="24" r="4" fill="#61dafb" />
    <ellipse
      cx="24"
      cy="24"
      rx="20"
      ry="8"
      fill="none"
      stroke="#61dafb"
      strokeWidth="1.6"
    />
    <ellipse
      cx="24"
      cy="24"
      rx="20"
      ry="8"
      fill="none"
      stroke="#61dafb"
      strokeWidth="1.6"
      transform="rotate(60 24 24)"
    />
    <ellipse
      cx="24"
      cy="24"
      rx="20"
      ry="8"
      fill="none"
      stroke="#61dafb"
      strokeWidth="1.6"
      transform="rotate(120 24 24)"
    />
  </svg>
);

const ServerIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
    <rect
      x="8"
      y="6"
      width="32"
      height="12"
      rx="3"
      stroke="#00e89d"
      strokeWidth="2"
    />
    <circle cx="14" cy="12" r="2" fill="#00e89d" />
    <rect x="20" y="10" width="14" height="1.5" rx="0.75" fill="#00e89d" opacity="0.5" />
    <rect
      x="8"
      y="22"
      width="32"
      height="12"
      rx="3"
      stroke="#00e89d"
      strokeWidth="2"
    />
    <circle cx="14" cy="28" r="2" fill="#00e89d" />
    <rect x="20" y="26" width="14" height="1.5" rx="0.75" fill="#00e89d" opacity="0.5" />
    <path d="M24 38v4M18 42h12" stroke="#00e89d" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#0ea5e9">
    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.1 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.38 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.62 13.15 9.5 12 7 12z" />
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#0ea5e9">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#0ea5e9">
    <path d="M12 2H8.5A3.5 3.5 0 005 5.5 3.5 3.5 0 008.5 9H12V2z" opacity="0.8" />
    <path d="M12 2h3.5A3.5 3.5 0 0119 5.5 3.5 3.5 0 0115.5 9H12V2z" opacity="0.6" />
    <path d="M12 9H8.5A3.5 3.5 0 005 12.5 3.5 3.5 0 008.5 16H12V9z" opacity="0.7" />
    <path d="M12 16H8.5a3.5 3.5 0 100 7A3.5 3.5 0 0012 19.5V16z" opacity="0.9" />
    <circle cx="15.5" cy="12.5" r="3.5" opacity="0.5" />
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#0ea5e9">
    <path d="M13 4h2v2h-2V4zm-3 0h2v2h-2V4zM7 4h2v2H7V4zm6 3h2v2h-2V7zm-3 0h2v2h-2V7zM7 7h2v2H7V7zm-3 0h2v2H4V7zm3 3h2v2H7v-2zm-3 0h2v2H4v-2zm17.7 1.4c-.5-.4-1.6-.5-2.4-.4-.2-1.1-.9-2-1.8-2.6l-.4-.3-.3.4c-.4.6-.6 1.4-.5 2.1.1.5.2 1 .5 1.4-.7.4-2 .5-2.3.5H1.1l-.1.6c-.1 1.3.2 2.7.7 3.9.7 1.4 1.7 2.3 3.2 2.8 1.4.5 3.7.6 5.8.1 1.6-.4 3-.9 4.3-1.9 1-.8 1.9-1.8 2.5-3.2.7 0 2.2 0 3-1.5l.2-.4-.4-.3z" />
  </svg>
);

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#0ea5e9">
    <path d="M12 2L2 19.5h20L12 2z" />
  </svg>
);

const AgileIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const skills = [
  {
    icon: <JSIcon />,
    iconBg: "rgba(247,223,30,0.15)",
    category: "JavaScript & TypeScript",
    description:
      "I code in modern ES2024+ JavaScript across all environments. I now use TypeScript for type-safe, maintainable codebases — a requirement for production-grade applications.",
    techs: ["TypeScript", "Node.js", "HTML5", "CSS3"],
  },
  {
    icon: <ReactIcon />,
    iconBg: "rgba(97,218,251,0.15)",
    category: "React Ecosystem",
    description:
      "Building component-driven UIs with React 18+, hooks, and the broader ecosystem. From SPAs to SSR with Next.js and Vite for blazing-fast development.",
    techs: ["React", "Next.js", "Vite", "Redux", "Framer Motion"],
  },
  {
    icon: <ServerIcon />,
    iconBg: "rgba(0,232,157,0.15)",
    category: "Backend & APIs",
    description:
      "As a Full-Stack Developer, I build robust server-side architectures. From RESTful APIs to database design with MongoDB, I handle the complete backend pipeline.",
    techs: ["Node.js", "Express", "MongoDB", "REST APIs", "Firebase"],
  },
];

const additionalSkills = [
  { name: "TailwindCSS", icon: <TailwindIcon /> },
  { name: "Git & GitHub", icon: <GitIcon /> },
  { name: "Figma", icon: <FigmaIcon /> },
  { name: "Docker", icon: <DockerIcon /> },
  { name: "Vercel", icon: <VercelIcon /> },
  { name: "Agile/Scrum", icon: <AgileIcon /> },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-16 text-center">
            My experience across the entire MERN stack gives me confidence in the
            technologies & tools I use. Whether you need help bootstrapping your project
            or building production-grade features, I bring both frontend finesse and
            backend backbone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-2xl border-2 border-[#0ea5e9] overflow-hidden card-hover bg-[#0b1426]/80"
            >
              {/* Subtle glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/5 via-transparent to-[#00e89d]/5 opacity-80" />

              <div className="relative p-6 sm:p-8 min-h-[320px] flex flex-col">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: skill.iconBg }}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{skill.category}</h3>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">
                  {skill.description}
                </p>

                {/* Tech list as inline badges */}
                <div className="flex flex-wrap gap-2">
                  {skill.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold rounded-full border border-[#0ea5e9]/40 text-[#0ea5e9] bg-[#0ea5e9]/10"
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
          {additionalSkills.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
              className="px-4 py-3 rounded-xl border border-[#0ea5e9]/30 bg-[#0ea5e9]/5 text-center hover:border-[#00e89d]/50 hover:bg-[#00e89d]/10 transition-all duration-300 group flex items-center justify-center gap-1.5"
            >
              {tech.icon}
              <span className="text-xs font-medium text-[#0ea5e9] group-hover:text-[#00e89d] transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Check my resume button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 flex justify-center"
        >
          <Link
            to="/resume"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00e89d] to-[#34d399] text-[#060d18] text-base font-bold hover:shadow-[0_0_30px_rgba(0,232,157,0.3)] hover:scale-105 transition-all duration-300"
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
