import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Award,
  Briefcase,
  ChevronRight,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import CVDownloadButton from "../components/cv-download/CVDownloadButton";
import CVPickerModal from "../components/cv-download/CVPickerModal";

const experience = [
  {
    role: "Chief Architect",
    company: "Kopano Labs",
    period: "2026 — Present",
    bullets: [
      "Leading product architecture across Bookit 5s Arena, KasiLink, and Kopano Context (KC)",
      "Defining resilient delivery patterns for mobile-first products shaped by load-shedding and data-residency constraints",
      "Setting platform direction across Next.js, TypeScript, MongoDB Atlas (SA region), and MCP-based systems",
      "Balancing studio execution with ongoing Computer Engineering studies at CPUT",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Engineering Technology — Computer Engineering",
    institution: "Cape Peninsula University of Technology (CPUT)",
    period: "2025 — Present",
    note: "Deep foundations in software and hardware engineering",
  },
];

const skills = [
  { label: "React / TypeScript", pct: 92 },
  { label: "Node.js / Express", pct: 88 },
  { label: "MongoDB / REST APIs", pct: 85 },
  { label: "Tailwind CSS / Design Systems", pct: 90 },
  { label: "Framer Motion", pct: 82 },
  { label: "Python / MCP SDK", pct: 68 },
];

const certRows = [
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
  { title: "AI for Cybersecurity", issuer: "LinkedIn Learning", date: "Mar 2026", link: "#" },
  { title: "Azure Cloud Fundamentals", issuer: "LinkedIn Learning", date: "Mar 2026", link: "#" },
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
];

const projects = [
  {
    title: "Bookit — 5's Arena",
    url: "https://fivesarena.com",
    github: "https://github.com/RobynAwesome/Bookit-5s-Arena",
  },
  {
    title: "KasiLink",
    url: undefined,
    github: "https://github.com/RobynAwesome/KasiLink",
  },
  {
    title: "Kopano Context (KC)",
    url: undefined,
    github: "https://github.com/RobynAwesome",
  },
  {
    title: "Portfolio Website",
    url: "https://krrababalela.com",
    github: "https://github.com/RobynAwesome/Portfolio",
  },
  {
    title: "Harvest 4 All",
    url: "https://www.cxia4irhack.co.za",
    github: "https://github.com/RobynAwesome/Harvest-4-All",
  },
];

function SectionTitle({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div
        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl"
        style={{
          background: "rgba(0,232,157,0.12)",
          border: "1px solid rgba(0,232,157,0.2)",
        }}
      >
        <Icon size={16} className="text-[#00e89d]" />
      </div>
      <h2
        className="text-xl font-black tracking-tight text-white"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {label}
      </h2>
      <div
        className="ml-3 h-[1px] flex-1"
        style={{ background: "linear-gradient(90deg, rgba(0,232,157,0.3), transparent)" }}
      />
    </div>
  );
}

function SkillBar({ label, pct, delay }: { label: string; pct: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="mb-1.5 flex justify-between">
        <span className="text-sm font-medium text-gray-300">{label}</span>
        <span className="font-mono text-xs text-[#00e89d]">{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, #00e89d, #0ea5e9)" }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.23, 1, 0.32, 1] }}
        />
      </div>
    </div>
  );
}

export default function ResumePage() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const panelRef = useRef(null);
  const panelInView = useInView(panelRef, { once: true });

  return (
    <main className="relative min-h-screen pb-28 pt-20" style={{ background: "#060d18" }}>
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-30" />
      <div
        className="pointer-events-none absolute left-1/4 top-32 h-[500px] w-[500px] rounded-full opacity-10 blur-[120px]"
        style={{ background: "radial-gradient(circle, #00e89d, transparent)" }}
      />
      <div
        className="pointer-events-none absolute bottom-32 right-1/4 h-[400px] w-[400px] rounded-full opacity-8 blur-[120px]"
        style={{ background: "radial-gradient(circle, #a855f7, transparent)" }}
      />

      <motion.div
        ref={panelRef}
        initial={{ opacity: 0, y: 40 }}
        animate={panelInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        className="relative mx-auto max-w-4xl px-4 sm:px-8"
      >
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{
            background: "rgba(8,14,28,0.85)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,232,157,0.04)",
          }}
        >
          <div
            className="h-[2px] w-full"
            style={{ background: "linear-gradient(90deg, transparent, #00e89d, #0ea5e9, transparent)" }}
          />

          <div className="p-8 sm:p-12 lg:p-16">
            <div
              className="mb-10 flex flex-col items-start gap-8 border-b pb-10 sm:flex-row"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="min-w-0 flex-1">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={panelInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 }}
                  className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-[#00e89d]"
                >
                  Curriculum Vitae
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={panelInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.12 }}
                >
                  <h1
                    className="font-black leading-[0.9] tracking-tight text-white"
                    style={{ fontSize: "clamp(2.2rem, 5vw, 5.5rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Kholofelo
                  </h1>
                  <h1
                    className="mb-1 pb-1 font-black leading-[0.9] tracking-tight"
                    style={{
                      fontSize: "clamp(2.2rem, 5vw, 5.5rem)",
                      fontFamily: "'Playfair Display', Georgia, serif",
                      background: "linear-gradient(135deg, #00e89d 0%, #0ea5e9 60%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Robyn
                  </h1>
                  <h1
                    className="mb-5 font-black leading-[0.9] tracking-tight text-white"
                    style={{ fontSize: "clamp(2.2rem, 5vw, 5.5rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Rababalela<span className="text-[#00e89d]">.</span>
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={panelInView ? { scaleX: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="mb-5 h-[1px] w-14 origin-left"
                  style={{ background: "linear-gradient(90deg, #00e89d, #0ea5e9)" }}
                />

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={panelInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 }}
                  className="mb-6 space-y-2"
                >
                  <p className="flex items-center gap-2 text-sm text-gray-400">
                    <Briefcase size={13} className="text-[#00e89d]" />
                    Chief Architect · Kopano Labs
                  </p>
                  <p className="flex items-center gap-2 text-sm text-gray-400">
                    <GraduationCap size={13} className="text-[#0ea5e9]" />
                    BEng Tech Computer Engineering · CPUT
                  </p>
                  <p className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin size={13} className="text-[#a855f7]" />
                    Cape Town, Western Cape, South Africa
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={panelInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-3"
                >
                  {[
                    { icon: Mail, label: "rkholofelo@gmail.com", href: "mailto:rkholofelo@gmail.com" },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      href: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/",
                    },
                    { icon: Github, label: "RobynAwesome", href: "https://github.com/RobynAwesome" },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-xs text-gray-400 transition-colors hover:text-[#00e89d]"
                    >
                      <Icon size={12} className="transition-colors group-hover:text-[#00e89d]" />
                      {label}
                    </a>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={panelInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="flex-shrink-0"
              >
                <div
                  className="relative h-28 w-28 overflow-hidden rounded-3xl sm:h-36 sm:w-36"
                  style={{
                    border: "2px solid rgba(0,232,157,0.3)",
                    boxShadow: "0 0 40px rgba(0,232,157,0.15)",
                  }}
                >
                  <img
                    src="/profile.jpg"
                    alt="Kholofelo Robyn"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: "center 15%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060d18]/30 to-transparent" />
                </div>

                <CVDownloadButton variant="inline" onClick={() => setCvModalOpen(true)} />
              </motion.div>
            </div>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={panelInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 }}
              className="mb-12"
            >
              <SectionTitle icon={Code2} label="Summary" />
              <p className="max-w-2xl text-sm leading-relaxed text-gray-300">
                I am the <span className="font-semibold text-white">Chief Architect at Kopano Labs</span> and a{" "}
                <span className="font-semibold text-white">Bachelor of Eng Tech in Computer Engineering student</span>{" "}
                at Cape Peninsula University of Technology, Cape Town. My work centers on sovereign digital
                infrastructure, resilient full-stack product systems, and modern tooling that respects African
                operating realities.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={panelInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <SectionTitle icon={Briefcase} label="Experience" />
              {experience.map((exp) => (
                <div key={exp.role} className="relative pl-4">
                  <div
                    className="absolute bottom-0 left-0 top-1 w-[2px] rounded-full"
                    style={{ background: "linear-gradient(180deg, #00e89d, transparent)" }}
                  />
                  <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-base font-black text-white">{exp.role}</h3>
                      <p className="text-sm font-semibold text-[#00e89d]">{exp.company}</p>
                    </div>
                    <span className="flex-shrink-0 font-mono text-xs text-gray-500">{exp.period}</span>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {exp.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                        <ChevronRight size={13} className="mt-0.5 flex-shrink-0 text-[#00e89d]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={panelInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45 }}
              className="mb-12"
            >
              <SectionTitle icon={GraduationCap} label="Education" />
              {education.map((edu) => (
                <div key={edu.degree} className="relative pl-4">
                  <div
                    className="absolute bottom-0 left-0 top-1 w-[2px] rounded-full"
                    style={{ background: "linear-gradient(180deg, #0ea5e9, transparent)" }}
                  />
                  <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-base font-black text-white">{edu.degree}</h3>
                    <span className="flex-shrink-0 font-mono text-xs text-gray-500">{edu.period}</span>
                  </div>
                  <p className="mb-1 text-sm font-semibold text-[#0ea5e9]">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.note}</p>
                </div>
              ))}
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={panelInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mb-12"
            >
              <SectionTitle icon={Code2} label="Technical Skills" />
              <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
                {skills.map((skill, index) => (
                  <SkillBar key={skill.label} label={skill.label} pct={skill.pct} delay={0.5 + index * 0.08} />
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Tailwind CSS",
                  "Vite",
                  "Framer Motion",
                  "Python",
                  "MCP SDK",
                  "REST APIs",
                  "Git",
                  "HTML5",
                  "CSS3",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg px-2.5 py-1 text-[10px] font-semibold"
                    style={{
                      background: "rgba(0,232,157,0.07)",
                      border: "1px solid rgba(0,232,157,0.15)",
                      color: "rgba(0,232,157,0.7)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={panelInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55 }}
              className="mb-12"
            >
              <SectionTitle icon={Award} label="Certificates & Learning" />
              <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                {certRows.map((cert) => (
                  <div key={cert.title} className="flex items-center justify-between gap-4 py-3">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-white">{cert.title}</p>
                      <p className="text-xs text-gray-500">{cert.issuer}</p>
                    </div>
                    <div className="flex flex-shrink-0 items-center gap-3">
                      <span className="font-mono text-[10px] text-gray-600">{cert.date}</span>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 transition-colors hover:text-[#00e89d]"
                      >
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={panelInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mb-4"
            >
              <SectionTitle icon={Code2} label="Key Projects" />
              <div className="space-y-3">
                {projects.map((project) => (
                  <div key={project.title} className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-white">{project.title}</p>
                    <div className="flex flex-shrink-0 items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-gray-500 transition-colors hover:text-white"
                      >
                        <Github size={11} /> Code
                      </a>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-[#00e89d] transition-colors hover:text-[#34d399]"
                        >
                          <ExternalLink size={11} /> Live
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          <div
            className="h-[1px] w-full"
            style={{ background: "linear-gradient(90deg, transparent, rgba(0,232,157,0.2), transparent)" }}
          />
        </div>
      </motion.div>

      <CVDownloadButton variant="floating" onClick={() => setCvModalOpen(true)} />
      <CVPickerModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </main>
  );
}
