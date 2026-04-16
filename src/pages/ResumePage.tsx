import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  MapPin, Github, Linkedin, Mail, ExternalLink,
  Briefcase, GraduationCap, Code2, Award, ChevronRight,
} from "lucide-react";
import CVDownloadButton from "../components/cv-download/CVDownloadButton";
import CVPickerModal from "../components/cv-download/CVPickerModal";

/* ─── Data ──────────────────────────────────────────────────────── */

const experience = [
  {
    role: "Freelance Full-Stack Developer",
    company: "Ama_Phu Enterprises",
    period: "2023 — Present",
    bullets: [
      "Designed and built full-stack MERN applications for Hellenic FC (booking platform) and community products",
      "Delivered Bookit — 5's Arena: real-time booking, admin dashboard, payment integration",
      "Built 5's Arena Blog with auth, RBAC, rich text editing, image uploads",
      "Developed Portfolio-MBR as a client portfolio site (React + TypeScript + Framer Motion)",
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
  { label: "TailwindCSS / CSS", pct: 90 },
  { label: "Framer Motion", pct: 82 },
  { label: "Python / MCP SDK", pct: 68 },
];

const certRows = [
  { title: "AI Fluency: Framework & Foundations", issuer: "Anthropic", date: "Mar 2026", link: "https://verify.skilljar.com/c/eg2hpc738332" },
  { title: "Introduction to Model Context Protocol", issuer: "Anthropic", date: "Mar 2026", link: "https://verify.skilljar.com/c/t32humid3i99" },
  { title: "Frontend Developer (React)", issuer: "HackerRank", date: "Mar 2026", link: "https://www.hackerrank.com/certificates/eb2baf4f04c3" },
  { title: "AI for Cybersecurity", issuer: "LinkedIn Learning", date: "Mar 2026", link: "" },
  { title: "Azure Cloud Fundamentals", issuer: "LinkedIn Learning", date: "Mar 2026", link: "" },
  { title: "Generative AI in Cloud Computing", issuer: "LinkedIn Learning", date: "Mar 2026", link: "" },
  { title: "React (Basic)", issuer: "HackerRank", date: "Mar 2026", link: "https://www.hackerrank.com/certificates/b52e37357999" },
  { title: "Node.js (Basic)", issuer: "HackerRank", date: "Mar 2026", link: "https://www.hackerrank.com/certificates/bc9391871061" },
  { title: "Java (Basic)", issuer: "HackerRank", date: "Mar 2026", link: "https://www.hackerrank.com/certificates/400feb96b063" },
  { title: "CSS (Basic)", issuer: "HackerRank", date: "Mar 2026", link: "https://www.hackerrank.com/certificates/2fcac2281716" },
];

const projects = [
  { title: "Bookit — 5's Arena", url: "https://fivesarena.com", github: "https://github.com/RobynAwesome/Bookit-5s-Arena" },
  { title: "5's Arena Blog", url: "https://blog.fivesarena.com", github: "https://github.com/RobynAwesome/5s-Arena-Blog" },
  { title: "Portfolio Website", url: "https://kholofelorababalela.vercel.app", github: "https://github.com/RobynAwesome/Portfolio" },
  { title: "Portfolio-MBR", url: "https://mashoto.vercel.app", github: "https://github.com/RobynAwesome/Portfolio-MBR" },
  { title: "Harvest 4 All", url: "https://www.cxia4irhack.co.za", github: "https://github.com/RobynAwesome/Harvest-4-All" },
];

/* ─── Sub-components ────────────────────────────────────────────── */

function SectionTitle({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,232,157,0.12)", border: "1px solid rgba(0,232,157,0.2)" }}>
        <Icon size={16} className="text-[#00e89d]" />
      </div>
      <h2
        className="text-xl font-black tracking-tight text-white"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {label}
      </h2>
      <div className="flex-1 h-[1px] ml-3" style={{ background: "linear-gradient(90deg, rgba(0,232,157,0.3), transparent)" }} />
    </div>
  );
}

function SkillBar({ label, pct, delay }: { label: string; pct: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-gray-300 font-medium">{label}</span>
        <span className="text-xs font-mono text-[#00e89d]">{pct}%</span>
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

/* ─── Page ──────────────────────────────────────────────────────── */

export default function ResumePage() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const panelRef = useRef(null);
  const panelInView = useInView(panelRef, { once: true });

  return (
    <main
      className="relative min-h-screen overflow-x-clip pt-20 pb-28"
      style={{ background: "#060d18" }}
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-30" />

      {/* Ambient blobs */}
      <div className="pointer-events-none absolute top-28 left-1/2 hidden h-[420px] w-[420px] -translate-x-[35%] rounded-full opacity-10 blur-[120px] sm:block" style={{ background: "radial-gradient(circle, #00e89d, transparent)" }} />
      <div className="pointer-events-none absolute bottom-24 right-1/2 hidden h-[360px] w-[360px] translate-x-[45%] rounded-full opacity-8 blur-[120px] sm:block" style={{ background: "radial-gradient(circle, #a855f7, transparent)" }} />

      {/* ── Document panel ── */}
      <motion.div
        ref={panelRef}
        initial={{ opacity: 0, y: 40 }}
        animate={panelInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        className="relative mx-auto max-w-4xl px-3 sm:px-8"
      >
        <div
          className="relative overflow-hidden rounded-[24px] sm:rounded-3xl"
          style={{
            background: "rgba(8,14,28,0.85)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,232,157,0.04)",
          }}
        >
          {/* Top accent line */}
          <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg, transparent, #00e89d, #0ea5e9, transparent)" }} />

          <div className="p-6 sm:p-10 lg:p-16">

            {/* ── Header: photo right, name+info left ── */}
            <div className="mb-8 flex flex-col items-start gap-6 pb-8 sm:mb-10 sm:flex-row sm:gap-8 sm:pb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              {/* Left: Name + title + contacts */}
              <div className="flex-1 min-w-0">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={panelInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 }}
                  className="font-mono text-[#00e89d] text-xs tracking-[0.25em] uppercase mb-3"
                >
                  — Curriculum Vitae
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={panelInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.12 }}
                >
                  <h1
                    className="font-black leading-[0.9] tracking-tight text-white"
                    style={{ fontSize: "clamp(2.25rem, 10vw, 5.5rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Kholofelo
                  </h1>
                  <h1
                    className="font-black leading-[0.9] tracking-tight pb-1 mb-1"
                    style={{
                      fontSize: "clamp(2.25rem, 10vw, 5.5rem)",
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
                    className="font-black leading-[0.9] tracking-tight text-white mb-5"
                    style={{ fontSize: "clamp(2.25rem, 10vw, 5.5rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Rababalela<span className="text-[#00e89d]">.</span>
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={panelInView ? { scaleX: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="origin-left h-[1px] w-14 mb-5"
                  style={{ background: "linear-gradient(90deg, #00e89d, #0ea5e9)" }}
                />

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={panelInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 }}
                  className="space-y-2 mb-6"
                >
                  <p className="flex items-center gap-2 text-sm text-gray-400">
                    <Briefcase size={13} className="text-[#00e89d]" />
                    Full-Stack MERN Developer · Freelance
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

                {/* Contact links */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={panelInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="grid min-w-0 gap-2 sm:flex sm:flex-wrap sm:gap-3"
                >
                  {[
                    { icon: Mail, label: "rkholofelo@gmail.com", href: "mailto:rkholofelo@gmail.com" },
                    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/" },
                    { icon: Github, label: "RobynAwesome", href: "https://github.com/RobynAwesome" },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex min-w-0 items-center gap-1.5 rounded-lg border border-white/5 px-3 py-2 text-xs text-gray-400 transition-colors hover:text-[#00e89d] sm:border-0 sm:px-0 sm:py-0"
                    >
                      <Icon size={12} className="flex-shrink-0 transition-colors group-hover:text-[#00e89d]" />
                      <span className="min-w-0 break-all sm:break-normal">{label}</span>
                    </a>
                  ))}
                </motion.div>
              </div>

              {/* Right: Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={panelInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="flex-shrink-0 self-start"
              >
                <div
                  className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl overflow-hidden"
                  style={{ border: "2px solid rgba(0,232,157,0.3)", boxShadow: "0 0 40px rgba(0,232,157,0.15)" }}
                >
                  <img
                    src="/profile.jpg"
                    alt="Kholofelo Robyn"
                    width={144}
                    height={144}
                    fetchPriority="high"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: "center 15%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060d18]/30 to-transparent" />
                </div>

                {/* Download button under photo */}
                <CVDownloadButton variant="inline" onClick={() => setCvModalOpen(true)} />
              </motion.div>
            </div>

            {/* ── Summary ── */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={panelInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 }}
              className="mb-12"
            >
              <SectionTitle icon={Code2} label="Summary" />
              <p className="max-w-2xl text-sm leading-relaxed text-gray-300">
                I am a <span className="text-white font-semibold">Full-Stack MERN Developer</span> and{" "}
                <span className="text-white font-semibold">Bachelor of Eng Tech in Computer Engineering (Student)</span>{" "}
                at Cape Peninsula University of Technology, Cape Town. I build scalable, production-grade web applications —
                from RESTful APIs to polished, animated frontends — with a strong focus on user experience,
                clean architecture, and modern tooling.
              </p>
            </motion.section>

            {/* ── Experience ── */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={panelInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <SectionTitle icon={Briefcase} label="Experience" />
              {experience.map((exp) => (
                <div key={exp.role} className="pl-4 relative">
                  <div className="absolute left-0 top-1 bottom-0 w-[2px] rounded-full" style={{ background: "linear-gradient(180deg, #00e89d, transparent)" }} />
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2 gap-1">
                    <div>
                      <h3 className="text-white font-black text-base">{exp.role}</h3>
                      <p className="text-[#00e89d] text-sm font-semibold">{exp.company}</p>
                    </div>
                    <span className="font-mono text-xs text-gray-500 flex-shrink-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-1.5 mt-3">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex min-w-0 items-start gap-2 text-sm text-gray-400">
                        <ChevronRight size={13} className="text-[#00e89d] mt-0.5 flex-shrink-0" />
                        <span className="break-words">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.section>

            {/* ── Education ── */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={panelInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45 }}
              className="mb-12"
            >
              <SectionTitle icon={GraduationCap} label="Education" />
              {education.map((edu) => (
                <div key={edu.degree} className="pl-4 relative">
                  <div className="absolute left-0 top-1 bottom-0 w-[2px] rounded-full" style={{ background: "linear-gradient(180deg, #0ea5e9, transparent)" }} />
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1 gap-1">
                    <h3 className="text-white font-black text-base">{edu.degree}</h3>
                    <span className="font-mono text-xs text-gray-500 flex-shrink-0">{edu.period}</span>
                  </div>
                  <p className="text-[#0ea5e9] text-sm font-semibold mb-1">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.note}</p>
                </div>
              ))}
            </motion.section>

            {/* ── Skills (two columns) ── */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={panelInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mb-12"
            >
              <SectionTitle icon={Code2} label="Technical Skills" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
                {skills.map((s, i) => (
                  <SkillBar key={s.label} label={s.label} pct={s.pct} delay={0.5 + i * 0.08} />
                ))}
              </div>
              {/* Tech pills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {["React","TypeScript","Node.js","Express","MongoDB","TailwindCSS","Vite","Framer Motion","Python","MCP SDK","REST APIs","Git","HTML5","CSS3"].map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-lg text-[10px] font-semibold" style={{ background: "rgba(0,232,157,0.07)", border: "1px solid rgba(0,232,157,0.15)", color: "rgba(0,232,157,0.7)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* ── Certificates ── */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={panelInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55 }}
              className="mb-12"
            >
              <SectionTitle icon={Award} label="Certificates & Learning" />
              <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                {certRows.map((cert) => (
                  <div key={cert.title} className="flex flex-col items-start gap-2 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <div className="min-w-0 flex-1">
                      <p className="break-words text-sm font-semibold text-white">{cert.title}</p>
                      <p className="text-xs text-gray-500">{cert.issuer}</p>
                    </div>
                    <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:flex-shrink-0 sm:justify-start">
                      <span className="font-mono text-[10px] text-gray-600">{cert.date}</span>
                      {cert.link ? (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open certificate for ${cert.title}`}
                          className="text-gray-600 transition-colors hover:text-[#00e89d]"
                        >
                          <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-gray-600">
                          Internal
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* ── Projects ── */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={panelInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mb-4"
            >
              <SectionTitle icon={Code2} label="Key Projects" />
              <div className="space-y-3">
                {projects.map((p) => (
                  <div key={p.title} className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <p className="w-full break-words text-sm font-semibold text-white">{p.title}</p>
                    <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto sm:flex-shrink-0">
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-gray-500 hover:text-white transition-colors">
                        <Github size={11} /> Code
                      </a>
                      {p.url && (
                        <a href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-[#00e89d] hover:text-[#34d399] transition-colors">
                          <ExternalLink size={11} /> Live
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

          </div>

          {/* Bottom accent line */}
          <div className="h-[1px] w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(0,232,157,0.2), transparent)" }} />
        </div>
      </motion.div>

      {/* Floating download button (bottom-right) */}
      <CVDownloadButton variant="floating" onClick={() => setCvModalOpen(true)} />

      {/* CV Picker Modal */}
      <CVPickerModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </main>
  );
}
