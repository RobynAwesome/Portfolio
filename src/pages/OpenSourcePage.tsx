import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Github, GitPullRequest, GitMerge, Star, ExternalLink,
  Code2, Users, Zap, ArrowUpRight,
  Cpu, Globe, BookOpen, Layout, Sparkles,
} from "lucide-react";

type ViewMode = "terminal" | "blueprint" | "arcade" | "brutalist";

const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
  }),
};

const MODES: { id: ViewMode; label: string; emoji: string; desc: string; preview: string }[] = [
  { id: "terminal", label: "Terminal", emoji: ">_", desc: "Green-on-black CLI aesthetic", preview: "#00ff41" },
  { id: "blueprint", label: "Blueprint", emoji: "[]", desc: "Technical schematic style", preview: "#4fc3f7" },
  { id: "arcade", label: "Neon Arcade", emoji: "★", desc: "Retro 80s gaming vibes", preview: "#ff006e" },
  { id: "brutalist", label: "Brutalist", emoji: "B", desc: "Raw, bold, unfiltered", preview: "#111111" },
];

const contributions = [
  { title: "Bookit — 5's Arena", description: "Full-stack booking system for 5-a-side football. MERN stack with auth.", techs: ["React", "Node.js", "Express", "MongoDB"], github: "https://github.com/RobynAwesome/Bookit-5s-Arena", live: "https://fivesarena.com", icon: Code2, color: "#00e89d", role: "Solo Dev", year: "2026" },
  { title: "5's Arena Blog", description: "Community blog platform with auth, RBAC, and image uploads.", techs: ["React", "Node.js", "MongoDB", "TailwindCSS"], github: "https://github.com/RobynAwesome/5s-Arena-Blog", live: "https://blog.fivesarena.com", icon: GitPullRequest, color: "#0ea5e9", role: "Solo Dev", year: "2026" },
  { title: "Portfolio Website", description: "This portfolio — open source. React, TypeScript, Framer Motion.", techs: ["React", "TypeScript", "Vite", "Framer Motion"], github: "https://github.com/RobynAwesome/Portfolio", live: "https://kholofelorababalela.vercel.app", icon: Star, color: "#a855f7", role: "Solo Dev", year: "2026" },
  { title: "Introduction to MCP", description: "Model Context Protocol Python servers wiring Claude to real tools.", techs: ["Python", "MCP SDK", "REST API"], github: "https://github.com/RobynAwesome/Introduction-to-MCP", live: undefined, icon: Cpu, color: "#f97316", role: "Solo Dev", year: "2026" },
  { title: "Harvest 4 All", description: "Hackathon — connecting urban farmers with food banks.", techs: ["JavaScript", "HTML", "CSS", "REST API"], github: "https://github.com/RobynAwesome/Harvest-4-All", live: "https://www.cxia4irhack.co.za", icon: Globe, color: "#f7df1e", role: "Lead Dev", year: "2025" },
  { title: "KasiLink", description: "Township business directory — informal economy online.", techs: ["HTML", "CSS", "JavaScript"], github: "https://github.com/RobynAwesome/KasiLink", live: undefined, icon: BookOpen, color: "#ec4899", role: "Solo Dev", year: "2025" },
  { title: "Cape Campass", description: "CPUT campus guide — helping students navigate campus life.", techs: ["HTML", "CSS", "JavaScript"], github: "https://github.com/RobynAwesome/cape-campass", live: undefined, icon: Layout, color: "#14b8a6", role: "Solo Dev", year: "2025" },
  { title: "Portfolio-MBR", description: "Client portfolio — React + TypeScript for another developer.", techs: ["React", "TypeScript", "TailwindCSS", "Vite"], github: "https://github.com/RobynAwesome/Portfolio-MBR", live: "https://mashoto.vercel.app", icon: Sparkles, color: "#8b5cf6", role: "Freelance", year: "2025" },
];

const achievements = [
  { title: "Pull Shark", description: "Pull requests merged into the codebase", icon: GitMerge, color: "#00e89d" },
  { title: "YOLO", description: "Shipped without code review — true speed", icon: Zap, color: "#f7df1e" },
  { title: "Pair Extraordinaire", description: "Co-authored commits on merged PRs", icon: Users, color: "#0ea5e9" },
];

const hackerRankSkills = [
  { name: "Frontend Dev (React)", level: "Role Cert", color: "#61dafb" },
  { name: "React (Basic)", level: "Verified", color: "#61dafb" },
  { name: "Node.js (Basic)", level: "Verified", color: "#00e89d" },
  { name: "CSS (Basic)", level: "Verified", color: "#0ea5e9" },
  { name: "Java (Basic)", level: "Verified", color: "#f97316" },
  { name: "JavaScript", level: "Intermediate", color: "#f7df1e" },
];

const TERMINAL_LINES = [
  "$ whoami",
  "  kholofelo.robyn.rababalela — full-stack dev, CPUT '27",
  "$ ls -la ~/open-source/",
  "  drwxr-xr-x  Bookit-5s-Arena      [React · Node · MongoDB]",
  "  drwxr-xr-x  5s-Arena-Blog        [React · Node · MongoDB]",
  "  drwxr-xr-x  Portfolio            [React · TypeScript · Vite]",
  "  drwxr-xr-x  Introduction-to-MCP  [Python · MCP SDK]",
  "  drwxr-xr-x  Harvest-4-All        [JavaScript · REST API]",
  "  drwxr-xr-x  KasiLink             [HTML · CSS · JS]",
  "  drwxr-xr-x  Cape-Campass         [HTML · CSS · JS]",
  "  drwxr-xr-x  Portfolio-MBR        [React · TypeScript]",
  "$ cat ~/achievements.txt",
  "  [✓] Pull Shark         — PRs merged",
  "  [✓] YOLO               — shipped fearlessly",
  "  [✓] Pair Extraordinaire — co-authored commits",
  "$ curl https://hackerrank.com/rkholofelo | grep verified",
  "  Frontend Dev (React)   :: Role Certification",
  "  React (Basic)          :: Verified",
  "  Node.js (Basic)        :: Verified",
  "  JavaScript             :: Intermediate",
  "$ echo 'Open to work ✓'",
  "  Open to work ✓",
  "$ _",
];

/* ────────────────────────────────────────
   TERMINAL MODE
──────────────────────────────────────── */
function TerminalView() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i >= TERMINAL_LINES.length) { clearInterval(t); return; }
      setLines((prev) => [...prev, TERMINAL_LINES[i]]);
      i++;
      if (i >= TERMINAL_LINES.length) clearInterval(t);
    }, 120);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6" style={{ background: "#0a0a0a", fontFamily: "'IBM Plex Mono', 'Roboto Mono', monospace" }}>
      <div className="max-w-4xl mx-auto">
        {/* Window chrome */}
        <div className="rounded-t-xl overflow-hidden" style={{ border: "1px solid #1a1a1a" }}>
          <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#1a1a1a" }}>
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-4 text-xs text-gray-500">bash — robyn@portfolio: ~/open-source</span>
          </div>
          <div className="p-6 rounded-b-xl min-h-[70vh] overflow-auto" style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", borderTop: "none" }}>
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.1 }}
                className="text-sm leading-7"
                style={{
                  color: !line ? "#d4d4d4" : line.startsWith("$") ? "#00ff41" : line.startsWith("  [✓]") ? "#00e89d" : line.startsWith("  drwxr") ? "#4ec9b0" : "#d4d4d4",
                  fontWeight: line?.startsWith("$") ? "bold" : "normal",
                }}
              >
                {line}
              </motion.div>
            ))}
            {lines.length === TERMINAL_LINES.length && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="inline-block w-2 h-4 ml-0.5 align-middle"
                style={{ background: "#00ff41" }}
              />
            )}
          </div>
        </div>
        {/* Project links */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {contributions.map((c) => (
            <a key={c.title} href={c.github} target="_blank" rel="noopener noreferrer"
              className="group flex items-center justify-between px-4 py-3 rounded-lg border transition-all duration-200"
              style={{ border: "1px solid #1a1a1a", background: "#0d0d0d", color: "#00ff41" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#00ff4150"; e.currentTarget.style.background = "#00ff4108"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a1a"; e.currentTarget.style.background = "#0d0d0d"; }}
            >
              <span className="text-sm font-mono text-[#00ff41]">$ git clone {c.title.toLowerCase().replace(/\s+/g, "-")}</span>
              <ArrowUpRight size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────
   BLUEPRINT MODE
──────────────────────────────────────── */
function BlueprintView() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6" style={{
      background: "#0d2137",
      backgroundImage: `
        linear-gradient(rgba(79,195,247,0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(79,195,247,0.08) 1px, transparent 1px)
      `,
      backgroundSize: "32px 32px",
      fontFamily: "'IBM Plex Mono', monospace",
    }}>
      <div className="max-w-5xl mx-auto">
        {/* Header schematic */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-x-0 top-1/2 h-px" style={{ background: "rgba(79,195,247,0.2)" }} />
          <div className="relative inline-block bg-[#0d2137] px-8">
            <p className="text-[10px] tracking-[0.4em] uppercase mb-3" style={{ color: "#4fc3f7" }}>SCHEMATIC v2.6 / OPEN SOURCE PROJECTS</p>
            <h1 className="text-5xl font-black" style={{ color: "#e1f5fe", letterSpacing: "-0.02em" }}>Technical Index</h1>
            {/* Measurement annotations */}
            <div className="absolute -left-16 top-1/2 flex items-center gap-2" style={{ color: "#4fc3f7", opacity: 0.5 }}>
              <div className="w-8 h-px" style={{ background: "#4fc3f7" }} />
              <span className="text-[9px]">0x00</span>
            </div>
          </div>
        </div>

        {/* Project schematics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {contributions.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.github}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="group relative block p-6 transition-all duration-300"
              style={{ border: "1px solid rgba(79,195,247,0.3)", background: "rgba(13,33,55,0.7)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(79,195,247,0.7)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(79,195,247,0.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(79,195,247,0.3)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: "#4fc3f7" }} />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: "#4fc3f7" }} />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: "#4fc3f7" }} />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: "#4fc3f7" }} />

              <div className="flex justify-between items-start mb-3">
                <span className="text-[9px] tracking-[0.3em] uppercase" style={{ color: "#4fc3f7", opacity: 0.6 }}>MODULE-{String(i + 1).padStart(2, "0")} / {c.year}</span>
                <span className="text-[9px] px-2 py-0.5" style={{ border: "1px solid rgba(79,195,247,0.4)", color: "#4fc3f7" }}>{c.role}</span>
              </div>
              <h3 className="text-lg font-black mb-2" style={{ color: "#e1f5fe" }}>{c.title}</h3>
              <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(225,245,254,0.55)" }}>{c.description}</p>
              <div className="flex flex-wrap gap-1">
                {c.techs.map(t => (
                  <span key={t} className="text-[9px] px-2 py-0.5 tracking-wider" style={{ border: "1px solid rgba(79,195,247,0.25)", color: "#4fc3f7", opacity: 0.7 }}>{t}</span>
                ))}
              </div>
              {c.live && (
                <div className="mt-4 flex items-center gap-2 text-[10px]" style={{ color: "#4fc3f7" }}>
                  <span style={{ width: 24, height: 1, background: "#4fc3f7", display: "inline-block", opacity: 0.4 }} />
                  LIVE DEPLOYMENT
                  <ExternalLink size={10} />
                </div>
              )}
            </motion.a>
          ))}
        </div>

        {/* Achievements as circuit nodes */}
        <div className="mb-16">
          <p className="text-[9px] tracking-[0.4em] uppercase mb-6" style={{ color: "#4fc3f7", opacity: 0.6 }}>ACHIEVEMENTS / NODE MAP</p>
          <div className="grid grid-cols-3 gap-4 relative">
            <div className="absolute top-1/2 left-0 right-0 h-px" style={{ background: "rgba(79,195,247,0.15)" }} />
            {achievements.map((a, i) => (
              <div key={a.title} className="relative flex flex-col items-center p-6 text-center" style={{ border: "1px solid rgba(79,195,247,0.25)", background: "rgba(13,33,55,0.8)" }}>
                <div className="w-12 h-12 flex items-center justify-center mb-4" style={{ border: "1px solid rgba(79,195,247,0.4)" }}>
                  <a.icon size={20} style={{ color: "#4fc3f7" }} />
                </div>
                <h4 className="text-sm font-bold mb-1" style={{ color: "#e1f5fe" }}>{a.title}</h4>
                <p className="text-[10px]" style={{ color: "rgba(225,245,254,0.45)" }}>{a.description}</p>
                {i < 2 && <div className="absolute -right-4 top-1/2 w-4 h-px z-10" style={{ background: "#4fc3f7", opacity: 0.4 }} />}
              </div>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="text-center p-10" style={{ border: "1px solid rgba(79,195,247,0.4)" }}>
          <p className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color: "#4fc3f7", opacity: 0.6 }}>REPOSITORY GATEWAY</p>
          <a href="https://github.com/RobynAwesome" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 text-sm font-bold transition-all duration-200"
            style={{ border: "2px solid rgba(79,195,247,0.6)", color: "#4fc3f7", background: "rgba(79,195,247,0.05)" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(79,195,247,0.12)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(79,195,247,0.05)"; }}
          >
            <Github size={18} />
            OPEN GITHUB PROFILE
          </a>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────
   NEON ARCADE MODE
──────────────────────────────────────── */
function ArcadeView() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden" style={{
      background: "#0a0010",
      fontFamily: "'Orbitron', monospace",
    }}>
      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 4px)",
      }} />
      {/* CRT curvature vignette */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{
        background: "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.5) 100%)",
      }} />
      {/* Neon grid floor */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(255,0,110,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,110,0.06) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
        transform: "perspective(600px) rotateX(60deg)",
        transformOrigin: "bottom center",
        bottom: 0,
        top: "50%",
      }} />

      <div className="relative z-20 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-xs tracking-[0.5em] uppercase mb-4"
            style={{ color: "#ff006e" }}
          >
            ★ INSERT COIN TO CONTINUE ★
          </motion.p>
          <h1 className="text-5xl sm:text-7xl font-black mb-4" style={{
            color: "#fff",
            textShadow: "0 0 20px #ff006e, 0 0 60px #ff006e80, 0 0 100px #ff006e40",
            letterSpacing: "0.05em",
          }}>
            OPEN SOURCE
          </h1>
          <h2 className="text-2xl font-black" style={{ color: "#00f5ff", textShadow: "0 0 15px #00f5ff" }}>
            LEVEL SELECT
          </h2>
        </div>

        {/* Projects as "game levels" */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contributions.map((c, i) => {
            const neons = ["#ff006e", "#00f5ff", "#a855f7", "#f7df1e"];
            const col = neons[i % neons.length];
            return (
              <motion.a
                key={c.title}
                href={c.github}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.08}
                whileHover={{ scale: 1.05 }}
                className="group relative p-5 text-center overflow-hidden"
                style={{
                  border: `2px solid ${col}`,
                  background: `${col}0d`,
                  boxShadow: `0 0 12px ${col}50, inset 0 0 12px ${col}10`,
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 30px ${col}90, inset 0 0 20px ${col}20`; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = `0 0 12px ${col}50, inset 0 0 12px ${col}10`; }}
              >
                <div className="text-3xl mb-3 font-black" style={{ color: col, textShadow: `0 0 15px ${col}` }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xs font-black mb-2 leading-tight" style={{ color: "#fff", textShadow: `0 0 8px ${col}60` }}>{c.title}</h3>
                <div className="text-[9px] uppercase tracking-widest mb-3" style={{ color: col, opacity: 0.8 }}>
                  {c.role} · {c.year}
                </div>
                <div className="flex flex-wrap justify-center gap-1">
                  {c.techs.slice(0, 2).map(t => (
                    <span key={t} className="text-[8px] px-1.5 py-0.5" style={{ border: `1px solid ${col}50`, color: col }}>{t}</span>
                  ))}
                </div>
                {/* Pixel corner decorators */}
                <div className="absolute top-1 left-1 w-2 h-2" style={{ borderTop: `2px solid ${col}`, borderLeft: `2px solid ${col}` }} />
                <div className="absolute top-1 right-1 w-2 h-2" style={{ borderTop: `2px solid ${col}`, borderRight: `2px solid ${col}` }} />
                <div className="absolute bottom-1 left-1 w-2 h-2" style={{ borderBottom: `2px solid ${col}`, borderLeft: `2px solid ${col}` }} />
                <div className="absolute bottom-1 right-1 w-2 h-2" style={{ borderBottom: `2px solid ${col}`, borderRight: `2px solid ${col}` }} />
              </motion.a>
            );
          })}
        </div>

        {/* HIGH SCORES = Achievements */}
        <div className="mb-16 p-8" style={{ border: "2px solid #a855f7", boxShadow: "0 0 20px #a855f750" }}>
          <p className="text-center text-xs tracking-[0.5em] uppercase mb-8" style={{ color: "#a855f7", textShadow: "0 0 10px #a855f7" }}>
            ✦ HIGH SCORE TABLE ✦
          </p>
          <div className="grid grid-cols-3 gap-6">
            {achievements.map((a) => (
              <div key={a.title} className="text-center">
                <a.icon size={32} className="mx-auto mb-3" style={{ color: "#f7df1e", filter: "drop-shadow(0 0 8px #f7df1e)" }} />
                <p className="text-sm font-black" style={{ color: "#fff" }}>{a.title}</p>
                <p className="text-[10px] mt-1" style={{ color: "#a855f7" }}>{a.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SKILLS as power-ups */}
        <div className="mb-16">
          <p className="text-center text-xs tracking-[0.5em] uppercase mb-6" style={{ color: "#00f5ff", textShadow: "0 0 10px #00f5ff" }}>
            ⚡ POWER-UPS COLLECTED
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {hackerRankSkills.map((s) => (
              <motion.div
                key={s.name}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 text-xs font-bold"
                style={{
                  border: `1px solid ${s.color}`,
                  color: s.color,
                  background: `${s.color}10`,
                  boxShadow: `0 0 10px ${s.color}40`,
                  textShadow: `0 0 8px ${s.color}80`,
                }}
              >
                {s.name} [{s.level}]
              </motion.div>
            ))}
          </div>
        </div>

        {/* Continue CTA */}
        <div className="text-center">
          <motion.a
            href="https://github.com/RobynAwesome"
            target="_blank"
            rel="noopener noreferrer"
            animate={{ boxShadow: ["0 0 15px #ff006e80", "0 0 40px #ff006e", "0 0 15px #ff006e80"] }}
            transition={{ repeat: Infinity, duration: 2 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-10 py-4 text-sm font-black"
            style={{
              background: "linear-gradient(135deg, #ff006e, #a855f7)",
              color: "#fff",
              textShadow: "none",
              border: "2px solid #ff006e",
            }}
          >
            <Github size={18} />
            VISIT GITHUB — PRESS START
          </motion.a>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────
   BRUTALIST MODE
──────────────────────────────────────── */
function BrutalistView() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-8" style={{
      background: "#f5f0e8",
      fontFamily: "'Times New Roman', Georgia, serif",
      color: "#111",
    }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="border-8 border-black p-8 mb-12" style={{ borderBottom: "none" }}>
          <p className="text-xs tracking-[0.5em] uppercase mb-2" style={{ fontFamily: "monospace" }}>OPEN SOURCE / PUBLIC WORK</p>
          <h1 className="text-7xl sm:text-9xl font-black leading-none mb-0" style={{ letterSpacing: "-0.04em", textTransform: "uppercase" }}>
            CODE.
          </h1>
          <div className="h-4 bg-black mt-4 -mx-8" />
        </div>
        <div className="border-8 border-black p-8 mb-12" style={{ background: "#111", color: "#f5f0e8" }}>
          <p className="text-xl leading-relaxed" style={{ fontFamily: "monospace" }}>
            8 REPOSITORIES. ALL OPEN. ALL REAL. NO FAKE PROJECTS. NO TUTORIAL CLONES.
            EVERY LINE WRITTEN BY KHOLOFELO ROBYN RABABALELA, CAPE TOWN, SOUTH AFRICA.
          </p>
        </div>

        {/* Projects — raw list */}
        <div className="mb-12">
          {contributions.map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.05}
              className="border-8 border-black mb-0"
              style={{ borderBottom: i === contributions.length - 1 ? "8px solid black" : "none" }}
            >
              <div className="flex flex-col sm:flex-row">
                <div className="flex-shrink-0 flex items-center justify-center p-6 text-5xl font-black border-r-0 sm:border-r-8 border-b-8 sm:border-b-0 border-black" style={{ minWidth: 80, background: i % 2 === 0 ? "#111" : "#f5f0e8", color: i % 2 === 0 ? "#f5f0e8" : "#111" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-2xl font-black" style={{ textTransform: "uppercase", textDecoration: "underline", textDecorationThickness: 3 }}>{c.title}</h3>
                    <a href={c.github} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 flex items-center gap-1 px-3 py-1 font-bold text-sm border-4 border-black hover:bg-black hover:text-[#f5f0e8] transition-colors" style={{ fontFamily: "monospace" }}>
                      CODE <ArrowUpRight size={14} />
                    </a>
                  </div>
                  <p className="text-base leading-relaxed mb-4">{c.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.techs.map(t => (
                      <span key={t} className="px-2 py-0.5 border-2 border-black text-xs font-bold" style={{ fontFamily: "monospace" }}>{t}</span>
                    ))}
                    {c.live && <a href={c.live} target="_blank" rel="noopener noreferrer" className="px-2 py-0.5 border-2 border-black text-xs font-bold bg-black text-[#f5f0e8] hover:bg-gray-800 transition-colors" style={{ fontFamily: "monospace" }}>LIVE ↗</a>}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <div className="border-8 border-black mb-12">
          <div className="p-4 border-b-8 border-black" style={{ background: "#111", color: "#f5f0e8" }}>
            <p className="text-sm font-bold tracking-widest uppercase" style={{ fontFamily: "monospace" }}>GitHub Achievements</p>
          </div>
          <div className="grid grid-cols-3 divide-x-8 divide-black">
            {achievements.map((a) => (
              <div key={a.title} className="p-6 text-center">
                <a.icon size={28} className="mx-auto mb-3" />
                <p className="text-sm font-black uppercase">{a.title}</p>
                <p className="text-xs mt-1 opacity-60">{a.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border-8 border-black p-10 text-center">
          <p className="text-3xl font-black uppercase mb-6">SEE ALL WORK ON GITHUB</p>
          <a href="https://github.com/RobynAwesome" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-black border-4 border-black hover:bg-black hover:text-[#f5f0e8] transition-colors"
            style={{ fontFamily: "monospace", textTransform: "uppercase" }}
          >
            <Github size={22} />
            GITHUB.COM/ROBYNAWESOME
          </a>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────
   MAIN PAGE
──────────────────────────────────────── */
export default function OpenSourcePage() {
  const [mode, setMode] = useState<ViewMode>("terminal");

  const MODE_BG: Record<ViewMode, string> = {
    terminal: "#0a0a0a",
    blueprint: "#0d2137",
    arcade: "#0a0010",
    brutalist: "#f5f0e8",
  };

  return (
    <div style={{ background: MODE_BG[mode], minHeight: "100vh", transition: "background 0.6s ease" }}>
      {/* Mode Selector strip — fixed at top of content */}
      <div className="fixed top-[76px] left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-4 py-2 rounded-2xl" style={{
        background: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}>
        {MODES.map((m) => {
          const active = mode === m.id;
          return (
            <motion.button
              key={m.id}
              onClick={() => setMode(m.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-300"
              style={{
                background: active ? `${m.preview}20` : "transparent",
                border: `1px solid ${active ? m.preview : "transparent"}`,
                color: active ? m.preview : "rgba(255,255,255,0.45)",
              }}
              title={m.desc}
            >
              <span className="font-mono">{m.emoji}</span>
              <span className="hidden sm:inline">{m.label}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Mode content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {mode === "terminal" && <TerminalView />}
          {mode === "blueprint" && <BlueprintView />}
          {mode === "arcade" && <ArcadeView />}
          {mode === "brutalist" && <BrutalistView />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
