import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Bookit — 5's Arena",
    subtitle: "Full-Stack Booking Platform",
    description:
      "Hellenic FC needed a way to digitize their 5-a-side booking flow. I built a full-stack MERN platform with real-time booking, team management, payment integration, and an admin dashboard — replacing their manual spreadsheet system.",
    techs: ["React", "Node.js", "Express", "MongoDB", "CSS", "JavaScript"],
    github: "https://github.com/RobynAwesome/Bookit-5s-Arena",
    image: "/web-image-5s.png",
    accent: "#00e89d",
    accentAlt: "#34d399",
  },
  {
    title: "5's Arena Blog",
    subtitle: "Community Blog Platform",
    description:
      "5's Arena needed a community hub to drive engagement beyond the pitch. I built a MERN blog platform with full authentication, role-based access control, image uploads, and rich text editing — giving players a voice and building community.",
    techs: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    github: "https://github.com/RobynAwesome/5s-Arena-Blog",
    image: "/web-image-5s.png",
    accent: "#0ea5e9",
    accentAlt: "#38bdf8",
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Brand & Showcase",
    description:
      "I needed a portfolio that matches the quality of the apps I build. This site is a multi-page React + TypeScript app with Framer Motion animations, dark/light mode, and a techy design — built to impress recruiters and clients alike.",
    techs: ["React", "TypeScript", "TailwindCSS", "Vite", "Framer Motion"],
    github: "https://github.com/RobynAwesome/Portfolio",
    image: "/profile-banner-1.jpg",
    accent: "#a855f7",
    accentAlt: "#c084fc",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
      className="group relative"
    >
      {/* Outer glow */}
      <div
        className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
        style={{
          background: `linear-gradient(135deg, ${project.accent}40, transparent 50%, ${project.accentAlt}30)`,
        }}
      />

      {/* Card */}
      <div
        className="relative rounded-3xl overflow-hidden"
        style={{
          background: "rgba(15, 23, 42, 0.6)",
          backdropFilter: "blur(20px) saturate(150%)",
          WebkitBackdropFilter: "blur(20px) saturate(150%)",
          border: `1px solid rgba(255,255,255,0.06)`,
        }}
      >
        {/* Top image/preview area */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${project.accent}20, transparent 60%, rgba(15,23,42,0.4))`,
            }}
          />

          {/* Project number badge */}
          <div className="absolute top-4 right-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black backdrop-blur-sm"
              style={{
                background: `rgba(15,23,42,0.7)`,
                border: `1px solid ${project.accent}40`,
                color: project.accent,
              }}
            >
              0{index + 1}
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f172a] to-transparent" />
        </div>

        {/* Content */}
        <div className="relative p-7 sm:p-8 -mt-6">
          {/* Subtitle */}
          <p
            className="text-xs font-bold tracking-widest uppercase mb-2"
            style={{ color: project.accent }}
          >
            {project.subtitle}
          </p>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 group-hover:text-white/90 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Techs */}
          <div className="flex flex-wrap gap-2 mb-7">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all"
                style={{
                  background: `${project.accent}08`,
                  border: `1px solid ${project.accent}20`,
                  color: `${project.accent}cc`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${project.accent}, ${project.accentAlt})`,
                color: "#060d18",
              }}
            >
              <Github size={16} />
              View Code
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <main className="pt-28 pb-28 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden" ref={heroRef}>
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#00e89d]/5 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#a855f7]/5 blur-[120px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-12 sm:px-20 lg:px-36 py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-8xl font-black mb-2 leading-none"
            >
              <span className="bg-gradient-to-r from-[#00e89d] via-[#0ea5e9] to-[#a855f7] bg-clip-text text-transparent">
                Projects.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto mt-6"
            >
              Real-world applications built with the MERN stack,
              TypeScript, and modern web technologies.
            </motion.p>

            {/* Gradient line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={heroInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mx-auto mt-10 h-[2px] w-40 origin-left"
              style={{
                background: "linear-gradient(90deg, #00e89d, #0ea5e9, #a855f7)",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-12 sm:px-20 lg:px-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}

          {/* Coming soon card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden flex items-center justify-center min-h-[300px]"
            style={{
              background: "rgba(15, 23, 42, 0.3)",
              border: "1px dashed rgba(255,255,255,0.08)",
            }}
          >
            <div className="text-center p-8">
              <div className="relative inline-flex mb-4">
                <span className="absolute inline-flex h-4 w-4 rounded-full bg-[#00e89d] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-[#00e89d]" />
              </div>
              <p className="text-sm text-gray-500 font-medium">
                More projects coming soon...
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GitHub CTA */}
      <section className="max-w-6xl mx-auto px-12 sm:px-20 lg:px-36 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,232,157,0.08), rgba(14,165,233,0.06), rgba(168,85,247,0.08))",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#00e89d]/5 blur-[100px]" />

          {/* Border */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{ border: "1px solid rgba(255,255,255,0.06)" }}
          />

          <div className="relative p-10 sm:p-16 text-center">
            <div
              className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-6"
              style={{ background: "rgba(0,232,157,0.1)", border: "1px solid rgba(0,232,157,0.2)" }}
            >
              <Github size={28} className="text-[#00e89d]" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Explore my work on{" "}
              <span className="gradient-text">GitHub</span>
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Check out my repositories for more projects, experiments, and
              open source contributions.
            </p>

            <motion.a
              href="https://github.com/RobynAwesome"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold bg-gradient-to-r from-[#00e89d] to-[#34d399] text-[#060d18] shadow-lg shadow-[#00e89d]/20 hover:shadow-xl hover:shadow-[#00e89d]/30 transition-all duration-300"
            >
              <Github size={20} />
              View GitHub Profile
              <ExternalLink size={14} />
            </motion.a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
