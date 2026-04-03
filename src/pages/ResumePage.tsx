import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Download, MapPin, Github, Linkedin, ExternalLink,
  Award, Calendar, Briefcase, GraduationCap, Terminal,
  Code2, Rocket, Mail, ArrowRight,
} from "lucide-react";

/* ─── Typing animation ─────────────────────────────────────────── */
function TypingCode() {
  const lines = [
    { text: "const dev = {", color: "#0ea5e9" },
    { text: '  name: "Kholofelo",', color: "#00e89d" },
    { text: '  stack: "MERN",', color: "#f7df1e" },
    { text: '  passion: "Building apps",', color: "#a855f7" },
    { text: "  available: true,", color: "#00e89d" },
    { text: "};", color: "#0ea5e9" },
  ];
  const [visibleLines, setVisibleLines] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      setVisibleLines((v) => {
        if (v >= lines.length) { clearInterval(timer); return v; }
        return v + 1;
      });
    }, 400);
    return () => clearInterval(timer);
  }, [inView, lines.length]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl"
      style={{ background: "rgba(11,20,38,0.8)", border: "1px solid rgba(0,232,157,0.15)" }}
    >
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-2 flex items-center gap-1 text-[10px] text-gray-500">
          <Terminal size={10} /> developer.js
        </span>
      </div>
      <div className="space-y-1 p-4 font-mono text-sm">
        {lines.slice(0, visibleLines).map((line, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="flex items-center gap-2">
            <span className="w-4 text-right text-xs text-gray-600">{i + 1}</span>
            <span style={{ color: line.color }}>{line.text}</span>
          </motion.div>
        ))}
        {visibleLines < lines.length && (
          <motion.span className="ml-6 inline-block h-4 w-2 bg-[#00e89d]" animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} />
        )}
      </div>
    </motion.div>
  );
}

/* ─── Contribution graph (deterministic — no Math.random) ──────── */
function ContributionGraph() {
  const weeks = 15;
  const days = 7;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const getLevel = (w: number, d: number) => {
    const seed = (w * 7 + d * 13 + 42) % 17;
    if (seed < 4) return 0;
    if (seed < 8) return 1;
    if (seed < 12) return 2;
    if (seed < 15) return 3;
    return 4;
  };

  const colors = [
    "rgba(255,255,255,0.03)",
    "rgba(0,232,157,0.2)",
    "rgba(0,232,157,0.4)",
    "rgba(0,232,157,0.65)",
    "rgba(0,232,157,0.9)",
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="rounded-2xl p-5"
      style={{ background: "rgba(11,20,38,0.6)", border: "1px solid rgba(0,232,157,0.12)" }}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-bold text-gray-400">Coding Activity</span>
        <span className="text-[10px] text-gray-600">Last 15 weeks</span>
      </div>
      <div className="flex gap-[3px]">
        {Array.from({ length: weeks }).map((_, w) => (
          <div key={w} className="flex flex-col gap-[3px]">
            {Array.from({ length: days }).map((_, d) => (
              <motion.div
                key={d}
                className="h-[11px] w-[11px] rounded-[3px]"
                style={{ background: colors[getLevel(w, d)] }}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.15, delay: (w * days + d) * 0.008, type: "spring", stiffness: 500 }}
                whileHover={{ scale: 1.8, boxShadow: "0 0 8px rgba(0,232,157,0.6)" }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-end gap-1 text-[9px] text-gray-600">
        <span>Less</span>
        {colors.map((c, i) => (
          <div key={i} className="h-[9px] w-[9px] rounded-[2px]" style={{ background: c }} />
        ))}
        <span>More</span>
      </div>
    </motion.div>
  );
}

/* ─── Currently Building ────────────────────────────────────────── */
function CurrentlyBuilding() {
  const [dotCount, setDotCount] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => setDotCount((d) => (d % 3) + 1), 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl p-6"
      style={{ background: "rgba(11,20,38,0.6)", border: "1px solid rgba(14,165,233,0.2)" }}
    >
      <motion.div
        className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#00e89d] to-transparent"
        animate={{ x: [0, 400, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{ opacity: 0.3 }}
      />
      <div className="flex items-center gap-3 mb-3">
        <motion.div
          className="h-3 w-3 rounded-full bg-[#00e89d]"
          animate={{ scale: [1, 1.3, 1], boxShadow: ["0 0 0px rgba(0,232,157,0.5)", "0 0 12px rgba(0,232,157,0.8)", "0 0 0px rgba(0,232,157,0.5)"] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <span className="text-xs font-bold text-[#00e89d] uppercase tracking-widest">
          Currently Building{".".repeat(dotCount)}
        </span>
      </div>
      <h4 className="text-lg font-black text-white mb-1">5's Arena Platform</h4>
      <p className="text-xs text-gray-500 mb-3">Full-stack booking system + community blog</p>
      <div className="flex-1">
        <div className="mb-1 flex justify-between text-[10px]">
          <span className="text-gray-500">Progress</span>
          <span className="text-[#00e89d] font-bold">68%</span>
        </div>
        <div className="h-1.5 rounded-full bg-[#0f1a30] overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[#00e89d] to-[#0ea5e9]"
            initial={{ width: 0 }}
            whileInView={{ width: "68%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Scrolling tech marquee ─────────────────────────────────────── */
function TechMarquee() {
  const techs = ["React", "Node.js", "MongoDB", "Express", "TypeScript", "JavaScript", "TailwindCSS", "Vite", "Next.js", "HTML5", "CSS3", "Git", "REST APIs", "Framer Motion", "Figma", "Vercel"];
  const doubled = [...techs, ...techs];
  return (
    <div className="relative overflow-hidden py-5">
      <div className="absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-[#060d18] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-[#060d18] to-transparent" />
      <motion.div
        className="flex gap-4 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((tech, i) => (
          <span key={i} className="inline-flex items-center gap-2 rounded-full border border-[#1a2744] bg-[#0f1a30]/50 px-4 py-1.5 text-xs font-semibold text-gray-400">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: i % 3 === 0 ? "#00e89d" : i % 3 === 1 ? "#0ea5e9" : "#a855f7" }} />
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Animated section wrapper ───────────────────────────────────── */
function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Section heading ─────────────────────────────────────────────── */
function SectionHeading({ children, color = "#00e89d", icon }: { children: React.ReactNode; color?: string; icon?: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      {icon && <span style={{ color }}>{icon}</span>}
      <h2 className="text-2xl font-black sm:text-3xl" style={{ color }}>
        {children}
      </h2>
      <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${color}30, transparent)` }} />
    </div>
  );
}

/* ─── Timeline item ───────────────────────────────────────────────── */
function TimelineItem({ accentColor, title, org, date, children }: {
  accentColor: string;
  title: string;
  org: string;
  date: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0">
      {/* Line */}
      <div className="absolute left-3 top-5 bottom-0 w-px" style={{ background: `linear-gradient(to bottom, ${accentColor}40, transparent)` }} />
      {/* Dot */}
      <motion.div
        className="absolute left-0 top-1 h-6 w-6 rounded-full flex items-center justify-center"
        style={{ background: `${accentColor}15`, border: `2px solid ${accentColor}60` }}
        whileInView={{ boxShadow: [`0 0 0px ${accentColor}`, `0 0 12px ${accentColor}50`, `0 0 0px ${accentColor}`] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="h-2 w-2 rounded-full" style={{ background: accentColor }} />
      </motion.div>

      <motion.div
        className="rounded-2xl p-6"
        style={{ background: "rgba(11,20,38,0.5)", border: `1px solid ${accentColor}18` }}
        whileHover={{ borderColor: `${accentColor}40`, boxShadow: `0 0 30px ${accentColor}10` }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-black text-white">{title}</h3>
            <p className="text-sm font-bold mt-0.5" style={{ color: accentColor }}>{org}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1 text-xs text-gray-500 whitespace-nowrap w-fit"
            style={{ borderColor: `${accentColor}20`, background: `${accentColor}08` }}>
            <Calendar size={11} />
            {date}
          </span>
        </div>
        {children}
      </motion.div>
    </div>
  );
}

/* ─── Main page ───────────────────────────────────────────────────── */
export default function ResumePage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const skills = [
    { name: "JavaScript / TypeScript", level: 92, color: "#f7df1e" },
    { name: "React / Next.js", level: 90, color: "#61dafb" },
    { name: "Node.js / Express", level: 85, color: "#68a063" },
    { name: "MongoDB", level: 80, color: "#00ed64" },
    { name: "TailwindCSS", level: 94, color: "#38bdf8" },
    { name: "REST API Design", level: 82, color: "#00e89d" },
  ];

  return (
    <main className="min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col lg:flex-row overflow-hidden" ref={heroRef}>

        {/* Left — photo panel */}
        <div className="relative w-full h-[55vh] lg:h-auto lg:w-[42%] xl:w-[40%] flex-shrink-0 overflow-hidden">
          <img
            src="/profile.jpg"
            alt="Kholofelo Robyn Rababalela"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 15%" }}
          />
          {/* Right-edge blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#060d18]" />
          {/* Bottom blend (mobile) */}
          <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-transparent via-transparent to-[#060d18]" />
        </div>

        {/* Right — info panel */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-14 xl:px-20 pt-8 pb-16 lg:pt-32 lg:pb-20 bg-[#060d18]">
          {/* Ambient glow */}
          <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] pointer-events-none"
            style={{ background: "radial-gradient(circle, #0ea5e9, transparent)" }} />

          <div className="relative max-w-xl">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="font-mono text-[#00e89d] text-xs sm:text-sm tracking-[0.25em] uppercase mb-5 flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-[#00e89d] inline-block" />
              Resume / About Me
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="font-black leading-[0.9] tracking-tight text-white mb-1"
              style={{ fontSize: "clamp(2.2rem, 5vw, 5.5rem)" }}
            >
              Kholofelo
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.13 }}
              className="font-black leading-[0.9] tracking-tight mb-1"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 5.5rem)",
                background: "linear-gradient(135deg, #00e89d 0%, #0ea5e9 60%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Robyn
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.18 }}
              className="font-black leading-[0.9] tracking-tight text-white mb-7"
              style={{ fontSize: "clamp(2.2rem, 5vw, 5.5rem)" }}
            >
              Rababalela<span className="text-[#00e89d]">.</span>
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={heroInView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="origin-left h-[1px] w-14 mb-7"
              style={{ background: "linear-gradient(90deg, #00e89d, #0ea5e9)" }}
            />

            {/* Meta info */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="space-y-2 mb-8"
            >
              <p className="flex items-center gap-2 text-sm text-gray-400">
                <Briefcase size={14} className="text-[#00e89d]" />
                Full-Stack MERN Developer · Freelance
              </p>
              <p className="flex items-center gap-2 text-sm text-gray-400">
                <GraduationCap size={14} className="text-[#0ea5e9]" />
                BEng Tech Computer Engineering · CPUT
              </p>
              <p className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin size={14} className="text-[#a855f7]" />
                Cape Town, Western Cape, South Africa
              </p>
              <p className="flex items-center gap-2 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e89d] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00e89d]" />
                </span>
                <span className="text-[#00e89d] font-semibold">Available for freelance work</span>
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.36 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm text-[#060d18] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#00e89d]/25"
                style={{ background: "linear-gradient(135deg, #00e89d, #34d399)" }}
              >
                <Download size={14} />
                Download CV
              </a>
              <a
                href="https://github.com/RobynAwesome"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-white/10 text-gray-300 hover:border-[#00e89d]/40 hover:text-white transition-all duration-300"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-white/10 text-gray-300 hover:border-[#0ea5e9]/40 hover:text-white transition-all duration-300"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.44 }}
              className="flex items-center gap-8"
            >
              {[
                { value: "3+", label: "Years coding" },
                { value: "2", label: "Live projects" },
                { value: "MERN", label: "Core stack" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black text-white leading-none mb-0.5">{s.value}</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TECH MARQUEE ─────────────────────────────────────────────── */}
      <div className="border-y border-[#1a2744]/40">
        <TechMarquee />
      </div>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-8 sm:px-12 lg:px-16 py-20 space-y-20">

        {/* About + Skills */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Bio */}
            <div>
              <SectionHeading color="#00e89d" icon={<Code2 size={22} />}>About Me</SectionHeading>
              <p className="text-sm leading-relaxed text-gray-400 mb-4">
                I'm Kholofelo Robyn Rababalela — a Full-Stack MERN developer and
                BEng Tech Computer Engineering student at Cape Peninsula University of Technology.
                I specialize in building scalable backend architectures, polished
                frontends, and intuitive user experiences.
              </p>
              <p className="text-sm leading-relaxed text-gray-400 mb-6">
                Since January 2026 I've been the sole developer on a comprehensive
                digital platform for 5's Arena (Hellenic Football Club) — a full-stack
                booking system and community blog, live in production.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Problem Solver", "Fast Learner", "Detail-Oriented", "Team Player"].map((t, i) => (
                  <span key={t} className="rounded-full border px-3 py-1 text-xs font-bold"
                    style={{
                      borderColor: i % 2 === 0 ? "rgba(0,232,157,0.3)" : "rgba(14,165,233,0.3)",
                      color: i % 2 === 0 ? "#00e89d" : "#0ea5e9",
                      background: i % 2 === 0 ? "rgba(0,232,157,0.06)" : "rgba(14,165,233,0.06)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Skill bars */}
            <div>
              <SectionHeading color="#0ea5e9" icon={<Rocket size={22} />}>Skills</SectionHeading>
              <div className="space-y-4">
                {skills.map((skill, i) => (
                  <motion.div key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <div className="mb-1.5 flex justify-between">
                      <span className="text-xs font-bold text-gray-300">{skill.name}</span>
                      <span className="text-xs font-bold" style={{ color: skill.color }}>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-[#0f1a30]">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${skill.color}60, ${skill.color})` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Coding activity + Currently building */}
        <AnimatedSection delay={0.05}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ContributionGraph />
            <CurrentlyBuilding />
          </div>
        </AnimatedSection>

        {/* Terminal + Interests */}
        <AnimatedSection delay={0.05}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <TypingCode />
            <div>
              <h3 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-5">Interests</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: "💻", label: "Coding" },
                  { icon: "⚽", label: "Football" },
                  { icon: "🎵", label: "Music" },
                  { icon: "🤖", label: "AI" },
                  { icon: "🎮", label: "Gaming" },
                  { icon: "📖", label: "Learning" },
                  { icon: "📱", label: "Mobile Dev" },
                  { icon: "🌍", label: "Community" },
                  { icon: "☕", label: "Coffee" },
                ].map((item, i) => (
                  <motion.div key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.05, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.25 }}
                    className="flex flex-col items-center gap-1.5 cursor-default"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-[10px] text-gray-500">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Experience */}
        <AnimatedSection delay={0.05}>
          <SectionHeading color="#0ea5e9" icon={<Briefcase size={22} />}>Experience</SectionHeading>
          <TimelineItem
            accentColor="#0ea5e9"
            title="Freelance Web Developer"
            org="5's Arena · Hellenic Football Club"
            date="Jan 2026 — Present"
          >
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00e89d]" />
                Building a full-stack booking and management system for a 5-a-side football venue
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0ea5e9]" />
                Developing a community blog platform with authentication, RBAC, and image uploads
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#a855f7]" />
                Full MERN stack: React, Node.js, Express, MongoDB with TailwindCSS
              </li>
            </ul>
          </TimelineItem>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection delay={0.05}>
          <SectionHeading color="#a855f7" icon={<GraduationCap size={22} />}>Education</SectionHeading>
          <TimelineItem
            accentColor="#a855f7"
            title="Bachelor of Eng Tech — Computer Engineering"
            org="Cape Peninsula University of Technology (CPUT)"
            date="2025 — Present"
          >
            <p className="text-sm leading-relaxed text-gray-400">
              Studying computer engineering with a focus on software development,
              embedded systems, and full-stack web technologies.
            </p>
          </TimelineItem>
        </AnimatedSection>

        {/* Certificates */}
        <AnimatedSection delay={0.05}>
          <SectionHeading color="#f7df1e" icon={<Award size={22} />}>Certificates</SectionHeading>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { title: "AI Fluency", issuer: "Anthropic / Skilljar", color: "#00e89d" },
              { title: "Skill Certificate", issuer: "HackerRank", color: "#0ea5e9" },
              { title: "Level 5 Achievement", issuer: "HackerRank", color: "#a855f7" },
            ].map((cert, i) => (
              <motion.div key={cert.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-6"
                style={{ background: "rgba(11,20,38,0.6)", border: `1px solid ${cert.color}20` }}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `${cert.color}12` }}>
                  <Award size={20} style={{ color: cert.color }} />
                </div>
                <h3 className="mb-1 text-sm font-bold text-white">{cert.title}</h3>
                <p className="text-xs text-gray-500">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects */}
        <AnimatedSection delay={0.05}>
          <SectionHeading color="#00e89d" icon={<Rocket size={22} />}>Projects</SectionHeading>
          <div className="space-y-5">
            {[
              {
                title: "Bookit — Real-time venue booking system",
                org: "5's Arena",
                category: "Full-Stack Booking Platform",
                techs: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
                color: "#0ea5e9",
                href: "https://github.com/RobynAwesome/Bookit-5s-Arena",
              },
              {
                title: "Community blog with auth, RBAC & rich text",
                org: "5's Arena",
                category: "Community Blog",
                techs: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
                color: "#00e89d",
                href: "https://github.com/RobynAwesome/5s-Arena-Blog",
              },
              {
                title: "Animated portfolio with Framer Motion",
                org: "Personal",
                category: "Personal Brand",
                techs: ["React", "TypeScript", "TailwindCSS", "Vite", "Framer Motion"],
                color: "#a855f7",
                href: "https://github.com/RobynAwesome/Portfolio",
              },
            ].map((proj, i) => (
              <motion.div key={proj.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ borderColor: `${proj.color}40`, boxShadow: `0 0 30px ${proj.color}08` }}
                className="rounded-2xl p-6 transition-all duration-300"
                style={{ background: "rgba(11,20,38,0.5)", border: `1px solid ${proj.color}18` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: proj.color }}>{proj.category}</span>
                      <span className="text-[10px] text-gray-600">· {proj.org}</span>
                    </div>
                    <h3 className="text-base font-black text-white mb-3">{proj.title}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.techs.map((t) => (
                        <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ color: `${proj.color}90`, background: `${proj.color}0a`, border: `1px solid ${proj.color}20` }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a href={proj.href} target="_blank" rel="noopener noreferrer"
                    className="flex-shrink-0 p-2 rounded-lg text-gray-600 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Links */}
        <AnimatedSection delay={0.05}>
          <SectionHeading color="#fff">Links & Profiles</SectionHeading>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { label: "GitHub", href: "https://github.com/RobynAwesome", icon: <Github size={18} />, color: "#fff" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/", icon: <Linkedin size={18} />, color: "#0ea5e9" },
              { label: "HackerRank", href: "https://www.hackerrank.com/profile/rkholofelo", icon: <Code2 size={18} />, color: "#00e89d" },
              { label: "ORCID", href: "https://orcid.org/0009-0000-3995-6147", icon: <GraduationCap size={18} />, color: "#a3e635" },
              { label: "PayPal", href: "https://paypal.me/osheenviews", icon: <ExternalLink size={18} />, color: "#0ea5e9" },
              { label: "Ko-fi", href: "https://ko-fi.com/robynawesome", icon: <ExternalLink size={18} />, color: "#f97316" },
            ].map((link, i) => (
              <motion.a key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -3, scale: 1.03 }}
                className="flex flex-col items-center gap-2 rounded-xl p-4"
                style={{ background: "rgba(11,20,38,0.5)", border: `1px solid ${link.color}15` }}
              >
                <div style={{ color: link.color }}>{link.icon}</div>
                <span className="text-xs font-medium text-gray-400">{link.label}</span>
              </motion.a>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 border-t border-[#1a2744]/40">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00e89d]/5 via-transparent to-[#0ea5e9]/5 pointer-events-none" />
        <div className="relative mx-auto max-w-3xl px-8 sm:px-12 text-center">
          <AnimatedSection>
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 scale-125 rounded-full bg-[#00e89d] opacity-20 blur-2xl" />
              <img
                src="/web-image-2.JPG"
                alt="Kholofelo"
                className="relative h-20 w-20 rounded-full border-2 border-[#00e89d]/50 object-cover object-top"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Ready to build something{" "}
              <span className="bg-gradient-to-r from-[#00e89d] to-[#0ea5e9] bg-clip-text text-transparent">amazing</span>?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-md mx-auto">
              Open to freelance projects, collaborations, and full-time opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:rkholofelo@gmail.com"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm text-[#060d18] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#00e89d]/25"
                style={{ background: "linear-gradient(135deg, #00e89d, #34d399)" }}
              >
                <Mail size={15} />
                Get in touch
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm border border-white/10 text-gray-300 hover:border-[#00e89d]/40 hover:text-white transition-all duration-300"
              >
                <Download size={14} />
                Download CV
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
