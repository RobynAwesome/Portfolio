import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    category: "JavaScript & TypeScript",
    description: "Modern ES2024+, TypeScript for type-safe applications, async patterns, and clean architecture.",
    techs: ["JavaScript", "TypeScript", "ES Modules"],
  },
  {
    category: "React Ecosystem",
    description: "Component-driven UIs with React 18+, hooks, state management, and the broader React ecosystem.",
    techs: ["React", "Next.js", "Vite", "Redux"],
  },
  {
    category: "Backend & APIs",
    description: "RESTful APIs, server-side logic, database design, and scalable backend architecture.",
    techs: ["Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    category: "UI & Styling",
    description: "Responsive, accessible, and beautiful interfaces using modern CSS frameworks and tools.",
    techs: ["TailwindCSS", "CSS3", "Figma", "Responsive Design"],
  },
  {
    category: "DevOps & Tools",
    description: "Version control, CI/CD pipelines, deployment, and development workflow optimization.",
    techs: ["Git", "GitHub", "Vercel", "Docker"],
  },
  {
    category: "Soft Skills",
    description: "Strong communication, collaborative mindset, rapid learner, and detail-oriented approach.",
    techs: ["Team Collaboration", "Problem Solving", "Agile", "Communication"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase gradient-text mb-4">
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-base opacity-40 max-w-xl mb-16">
            The tools and technologies I use to bring products to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl border card-hover"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, rgba(99,102,241,0.06), rgba(168,85,247,0.06))",
                }}
              />
              <div className="relative">
                <h3 className="text-lg font-semibold mb-2">{skill.category}</h3>
                <p className="text-sm opacity-40 mb-4 leading-relaxed">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.techs.map((tech) => (
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
