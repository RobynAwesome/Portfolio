import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight, Star, GitFork } from "lucide-react";

const projects = [
  {
    title: "Bookit — 5's Arena",
    description:
      "Full-stack management system for South African 5-a-side football. Features arena management, league tracking, player engagement, live pitch status, and conflict-free bookings. A comprehensive CMS and business engine.",
    techs: ["React", "Node.js", "Express", "MongoDB", "CSS", "JavaScript"],
    github: "https://github.com/RobynAwesome/Bookit-5s-Arena",
    live: null,
    stars: 4,
    featured: true,
    gradient: "from-[#00e89d] via-[#0ea5e9] to-[#6366f1]",
  },
  {
    title: "5's Arena Blog",
    description:
      "MERN stack blog application with secure authentication, role-based access control, CRUD for posts, image uploads, infinite scroll with filters, and social media integration.",
    techs: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    github: "https://github.com/RobynAwesome/5s-Arena-Blog",
    live: null,
    stars: 4,
    featured: true,
    gradient: "from-[#0ea5e9] via-[#6366f1] to-[#a855f7]",
  },
  {
    title: "Portfolio Website",
    description:
      "This very portfolio — a modern, performant single-page app built with React, TypeScript, Vite, TailwindCSS & Framer Motion. Designed for speed, elegance, and maximum impact.",
    techs: ["React", "TypeScript", "TailwindCSS", "Vite", "Framer Motion"],
    github: "https://github.com/RobynAwesome/Portfolio",
    live: "#",
    stars: 1,
    featured: false,
    gradient: "from-[#6366f1] via-[#00e89d] to-[#0ea5e9]",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-[#00e89d] mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight">
            Recent <span className="gradient-text">Projects.</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mb-16">
            Real-world applications I've built. Each one pushed my skills further and solved real problems.
          </p>
        </motion.div>

        {/* Featured projects — large cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative rounded-2xl border border-[#1a2744] overflow-hidden card-hover bg-[#0f1a30]/50"
              >
                {/* Gradient top accent */}
                <div
                  className="h-1 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${project.gradient.includes("00e89d") ? "#00e89d" : "#0ea5e9"}, ${project.gradient.includes("6366f1") ? "#6366f1" : "#00e89d"})`,
                  }}
                />

                {/* Shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer" />

                <div className="relative p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00e89d] transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <Star size={12} className="text-yellow-500" />
                          {project.stars}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg border border-[#1a2744] text-gray-400 hover:text-white hover:border-[#00e89d]/40 transition-all"
                          aria-label="Source code"
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {project.live && project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg border border-[#1a2744] text-gray-400 hover:text-white hover:border-[#00e89d]/40 transition-all"
                          aria-label="Live site"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full font-medium border border-[#1a2744] text-gray-300 bg-[#0b1426]/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00e89d] hover:text-[#34d399] transition-colors group/link"
                  >
                    View Project
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </a>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Non-featured projects */}
        {projects
          .filter((p) => !p.featured)
          .map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="group rounded-xl border border-[#1a2744] p-5 sm:p-6 bg-[#0f1a30]/30 card-hover mb-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-base font-bold text-white group-hover:text-[#00e89d] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.techs.map((tech) => (
                      <span key={tech} className="text-[11px] text-gray-500">{tech}</span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 p-2 rounded-lg border border-[#1a2744] text-gray-400 hover:text-[#00e89d] hover:border-[#00e89d]/40 transition-all"
                >
                  <Github size={16} />
                </a>
              </div>
            </motion.div>
          ))}

        {/* View all on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-8"
        >
          <a
            href="https://github.com/RobynAwesome"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#1a2744] text-sm font-semibold text-white hover:border-[#00e89d]/40 hover:bg-[#00e89d]/5 transition-all duration-300"
          >
            <Github size={16} />
            View all projects on GitHub
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
