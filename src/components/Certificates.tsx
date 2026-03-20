import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "React Developer Certification",
    issuer: "Meta / Coursera",
    date: "2024",
    link: null,
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "2024",
    link: null,
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2023",
    link: null,
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Udemy",
    date: "2023",
    link: null,
  },
  {
    title: "Git & GitHub Mastery",
    issuer: "LinkedIn Learning",
    date: "2023",
    link: null,
  },
];

export default function Certificates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certificates" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase gradient-text mb-4">
            Credentials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Certificates & <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-base opacity-40 max-w-xl mb-16">
            Continuous learning is at the core of my practice. Here are some highlights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative flex items-start gap-4 p-5 rounded-xl border card-hover"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              <div
                className="shrink-0 p-2.5 rounded-lg"
                style={{ backgroundColor: "rgba(99,102,241,0.1)" }}
              >
                <Award size={20} style={{ color: "#818cf8" }} />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold mb-1 leading-snug">{cert.title}</h3>
                <p className="text-xs opacity-40">{cert.issuer}</p>
                <p className="text-xs opacity-30 mt-1">{cert.date}</p>
              </div>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 opacity-30 hover:opacity-100 transition-opacity mt-1"
                  aria-label={`View ${cert.title} certificate`}
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
