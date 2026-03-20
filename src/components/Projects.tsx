import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "This very portfolio — a modern, performant single-page app built with React, TypeScript, Vite & TailwindCSS. Designed for speed and elegance.",
    techs: ["React", "TypeScript", "TailwindCSS", "Vite"],
    github: "https://github.com/RobynAwesome/Portfolio",
    live: "#",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack MERN e-commerce application with user authentication, product management, cart functionality, and payment integration.",
    techs: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/RobynAwesome",
    live: null,
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task manager with real-time updates, drag-and-drop interface, and team workspace features.",
    techs: ["React", "Firebase", "TailwindCSS", "DnD Kit"],
    github: "https://github.com/RobynAwesome",
    live: null,
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather dashboard integrating multiple APIs with beautiful data visualizations and location-based forecasts.",
    techs: ["React", "REST APIs", "Chart.js", "CSS3"],
    github: "https://github.com/RobynAwesome",
    live: null,
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase gradient-text mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base opacity-40 max-w-xl mb-16">
            A selection of projects I've worked on. Each one pushed my skills further.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative rounded-2xl border overflow-hidden card-hover ${
                project.featured ? "md:col-span-1" : ""
              }`}
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              {/* Gradient top border */}
              <div
                className="h-1 w-full"
                style={{
                  background: "linear-gradient(90deg, #6366f1, #a855f7, #ec4899)",
                }}
              />

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-30 hover:opacity-100 transition-opacity"
                        aria-label={`${project.title} source code`}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-30 hover:opacity-100 transition-opacity"
                        aria-label={`${project.title} live site`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm opacity-40 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        backgroundColor: "rgba(99,102,241,0.1)",
                        color: "#818cf8",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium opacity-50 hover:opacity-100 transition-opacity group/link"
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/RobynAwesome"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium opacity-50 hover:opacity-100 transition-opacity"
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
