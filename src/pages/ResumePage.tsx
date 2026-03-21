import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Download,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Award,
  Calendar,
  Briefcase,
  GraduationCap,
  Terminal,
  Sparkles,
  Code2,
  Rocket,
} from "lucide-react";

/* ───── Animated counter hook ───── */
function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return { count, ref };
}

/* ───── Typing animation component ───── */
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
        if (v >= lines.length) {
          clearInterval(timer);
          return v;
        }
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
      style={{
        background: "rgba(15, 23, 42, 0.7)",
        border: "1px solid rgba(0, 232, 157, 0.2)",
      }}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-2 flex items-center gap-1 text-[10px] text-gray-500">
          <Terminal size={10} />
          developer.js
        </span>
      </div>
      {/* Code lines */}
      <div className="space-y-1 p-4 font-mono text-sm">
        {lines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2"
          >
            <span className="w-4 text-right text-xs text-gray-600">
              {i + 1}
            </span>
            <span style={{ color: line.color }}>{line.text}</span>
          </motion.div>
        ))}
        {visibleLines < lines.length && (
          <motion.span
            className="ml-6 inline-block h-4 w-2 bg-[#00e89d]"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        )}
      </div>
    </motion.div>
  );
}

/* ───── Floating particles component ───── */
function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full"
          style={{
            background:
              i % 3 === 0 ? "#00e89d" : i % 3 === 1 ? "#0ea5e9" : "#a855f7",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ───── Toolbox icons (real SVGs) ───── */
const JSIcon = () => (
  <svg viewBox="0 0 48 48" className="h-12 w-12">
    <rect width="48" height="48" rx="6" fill="#f7df1e" />
    <text
      x="24"
      y="32"
      textAnchor="middle"
      fontWeight="900"
      fontSize="18"
      fill="#1a1a1a"
      fontFamily="Inter, system-ui"
    >
      JS
    </text>
  </svg>
);
const TSIcon = () => (
  <svg viewBox="0 0 48 48" className="h-12 w-12">
    <rect width="48" height="48" rx="6" fill="#3178c6" />
    <text
      x="24"
      y="32"
      textAnchor="middle"
      fontWeight="900"
      fontSize="18"
      fill="#fff"
      fontFamily="Inter, system-ui"
    >
      TS
    </text>
  </svg>
);
const CSSIcon = () => (
  <svg viewBox="0 0 48 48" className="h-12 w-12">
    <rect width="48" height="48" rx="6" fill="#264de4" />
    <text
      x="24"
      y="32"
      textAnchor="middle"
      fontWeight="900"
      fontSize="16"
      fill="#fff"
      fontFamily="Inter, system-ui"
    >
      CSS
    </text>
  </svg>
);
const ReactIcon = () => (
  <svg viewBox="0 0 48 48" className="h-12 w-12">
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
const NodeIcon = () => (
  <svg viewBox="0 0 48 48" className="h-12 w-12">
    <rect width="48" height="48" rx="6" fill="#333" />
    <text
      x="24"
      y="30"
      textAnchor="middle"
      fontWeight="700"
      fontSize="10"
      fill="#68a063"
      fontFamily="Inter, system-ui"
    >
      Node
    </text>
  </svg>
);
const MongoIcon = () => (
  <svg viewBox="0 0 48 48" className="h-12 w-12">
    <rect width="48" height="48" rx="6" fill="#023430" />
    <text
      x="24"
      y="30"
      textAnchor="middle"
      fontWeight="700"
      fontSize="9"
      fill="#00ed64"
      fontFamily="Inter, system-ui"
    >
      Mongo
    </text>
  </svg>
);
const NextIcon = () => (
  <svg viewBox="0 0 48 48" className="h-12 w-12">
    <rect width="48" height="48" rx="6" fill="#000" />
    <text
      x="24"
      y="32"
      textAnchor="middle"
      fontWeight="900"
      fontSize="16"
      fill="#fff"
      fontFamily="Inter, system-ui"
    >
      N
    </text>
  </svg>
);
const ViteIcon = () => (
  <svg viewBox="0 0 48 48" className="h-12 w-12">
    <rect width="48" height="48" rx="6" fill="#1a1a2e" />
    <text
      x="24"
      y="30"
      textAnchor="middle"
      fontWeight="700"
      fontSize="10"
      fill="#bd34fe"
      fontFamily="Inter, system-ui"
    >
      Vite
    </text>
  </svg>
);
const TailwindIcon = () => (
  <svg viewBox="0 0 48 48" className="h-12 w-12">
    <rect width="48" height="48" rx="6" fill="#0f172a" />
    <text
      x="24"
      y="30"
      textAnchor="middle"
      fontWeight="700"
      fontSize="8"
      fill="#38bdf8"
      fontFamily="Inter, system-ui"
    >
      TW
    </text>
  </svg>
);

const toolbox = [
  { icon: <JSIcon />, label: "JavaScript" },
  { icon: <TSIcon />, label: "TypeScript" },
  { icon: <CSSIcon />, label: "CSS" },
  { icon: <ReactIcon />, label: "React" },
  { icon: <NodeIcon />, label: "Node.js" },
  { icon: <MongoIcon />, label: "MongoDB" },
  { icon: <NextIcon />, label: "Next.js" },
  { icon: <ViteIcon />, label: "Vite" },
  { icon: <TailwindIcon />, label: "Tailwind" },
];

const interests = [
  { icon: "🎵", label: "Music" },
  { icon: "💻", label: "Coding" },
  { icon: "⚽", label: "Football" },
  { icon: "📖", label: "Learning" },
  { icon: "🎮", label: "Gaming" },
  { icon: "🤖", label: "AI" },
  { icon: "📱", label: "Mobile Dev" },
  { icon: "🌍", label: "Community" },
  { icon: "☕", label: "Coffee" },
];

function AnimatedSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function ResumePage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <main className="min-h-screen pt-28 pb-28">
      {/* ───── Hero: Name + Photo + Skills badges ───── */}
      <section className="relative overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-[#00e89d]/5 blur-[120px]" />
          <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-[#0ea5e9]/5 blur-[120px]" />
        </div>
        <FloatingParticles />

        <div className="relative mx-auto max-w-5xl px-12 py-16 sm:px-20 sm:py-24 lg:px-36">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="mb-2 text-5xl leading-none font-black sm:text-6xl md:text-7xl"
              >
                <span className="bg-gradient-to-r from-[#00e89d] via-[#0ea5e9] to-[#a855f7] bg-clip-text text-transparent">
                  Full-Stack Developer.
                </span>
              </motion.h1>

              <p className="mb-6 text-sm text-gray-500">
                Freelance <span className="text-[#00e89d]">since 2026</span>
              </p>

              <h2 className="mb-1 text-4xl font-black text-[#00e89d] sm:text-5xl">
                Kholofelo.
              </h2>
              <p className="mb-6 text-2xl font-light text-gray-400 sm:text-3xl">
                Kholofelo Robyn
                <br />
                Rababalela
              </p>

              <div className="mb-6 flex items-center gap-4">
                <a
                  href="https://github.com/RobynAwesome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-[#00e89d]"
                >
                  <Github size={16} />
                  github.com/RobynAwesome
                </a>
              </div>
              <div className="mb-8 flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-[#0ea5e9]"
                >
                  <Linkedin size={16} />
                  linkedin.com/in/kholofelo
                </a>
              </div>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-xl border border-[#00e89d]/30 px-6 py-3 text-sm font-semibold text-[#00e89d] transition-all duration-300 hover:bg-[#00e89d]/10"
              >
                <Download size={16} />
                Download
              </motion.a>

              {/* Gradient line */}
              <div className="mt-10 h-[3px] w-48 rounded-full bg-gradient-to-r from-[#00e89d] via-[#0ea5e9] to-[#a855f7]" />
            </motion.div>

            {/* Right — Photo with floating badges */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden justify-center lg:flex"
            >
              <div className="relative">
                {/* Spinning concentric circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="h-[360px] w-[360px] rounded-full border-2 border-dashed border-[#0ea5e9]/20"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="h-[300px] w-[300px] rounded-full border border-[#00e89d]/15"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="h-[340px] w-[340px] rounded-full"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent, rgba(0,232,157,0.15), transparent, rgba(14,165,233,0.15), transparent)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>

                {/* Floating orbital dots */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute h-2.5 w-2.5 rounded-full"
                    style={{
                      background: i % 2 === 0 ? "#00e89d" : "#0ea5e9",
                      top: `${50 + Math.sin((i * Math.PI) / 3) * 45}%`,
                      left: `${50 + Math.cos((i * Math.PI) / 3) * 45}%`,
                      boxShadow: `0 0 10px ${i % 2 === 0 ? "#00e89d" : "#0ea5e9"}`,
                    }}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.4, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}

                {/* Photo with hover grayscale toggle */}
                <motion.img
                  src="/profile.png"
                  alt="Kholofelo"
                  className="relative z-10 h-64 w-64 rounded-full border-4 border-[#0ea5e9]/20 object-cover object-top grayscale transition-all duration-700 hover:grayscale-0"
                  whileHover={{ scale: 1.05 }}
                />

                {/* Floating badge — Web Developer */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-4 -left-16 z-20 min-w-[170px] rounded-2xl px-6 py-3 text-center"
                  style={{
                    background: "rgba(10, 18, 36, 0.85)",
                    backdropFilter: "blur(20px)",
                    border: "2px solid rgba(14, 165, 233, 0.35)",
                    boxShadow:
                      "0 0 25px rgba(14,165,233,0.1), 0 10px 40px rgba(0,0,0,0.5)",
                  }}
                >
                  <p className="text-[10px] text-gray-500">Professional</p>
                  <p className="text-base font-black text-[#0ea5e9]">
                    Web Developer
                  </p>
                </motion.div>

                {/* Floating badge — First Website */}
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -top-6 -right-8 z-20 rounded-2xl px-5 py-2.5 text-center"
                  style={{
                    background: "rgba(10, 18, 36, 0.85)",
                    backdropFilter: "blur(20px)",
                    border: "2px solid rgba(0, 232, 157, 0.35)",
                    boxShadow:
                      "0 0 25px rgba(0,232,157,0.1), 0 10px 40px rgba(0,0,0,0.5)",
                  }}
                >
                  <p className="text-xs font-bold text-[#00e89d]">
                    First Website
                  </p>
                  <p className="text-[10px] text-gray-500">2024</p>
                </motion.div>

                {/* Floating badge — MERN Stack */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -right-20 bottom-12 z-20 min-w-[160px] rounded-2xl px-6 py-3 text-center"
                  style={{
                    background: "rgba(10, 18, 36, 0.85)",
                    backdropFilter: "blur(20px)",
                    border: "2px solid rgba(14, 165, 233, 0.35)",
                    boxShadow:
                      "0 0 25px rgba(14,165,233,0.1), 0 10px 40px rgba(0,0,0,0.5)",
                  }}
                >
                  <p className="text-[10px] text-gray-500">Full-Stack</p>
                  <p className="text-base font-black text-[#0ea5e9]">
                    MERN Stack
                  </p>
                </motion.div>

                {/* Floating badge — Engineering */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                  className="absolute -bottom-8 -left-10 z-20 rounded-2xl px-5 py-2.5 text-center"
                  style={{
                    background: "rgba(10, 18, 36, 0.85)",
                    backdropFilter: "blur(20px)",
                    border: "2px solid rgba(168, 85, 247, 0.35)",
                    boxShadow:
                      "0 0 25px rgba(168,85,247,0.1), 0 10px 40px rgba(0,0,0,0.5)",
                  }}
                >
                  <p className="text-xs font-bold text-[#a855f7]">
                    Computer Eng
                  </p>
                  <p className="text-[10px] text-gray-500">CPUT · Student</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── About Me + Interests + Toolbox (moox style) ───── */}
      <section className="mx-auto mt-8 max-w-5xl px-12 sm:px-20 lg:px-36">
        <AnimatedSection>
          <h2 className="mb-8 text-3xl font-black text-[#00e89d] sm:text-4xl">
            About Me
          </h2>

          {/* Animated skill proficiency bars */}
          <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { name: "React / Next.js", level: 90, color: "#61dafb" },
              { name: "Node.js / Express", level: 85, color: "#68a063" },
              { name: "MongoDB", level: 80, color: "#00ed64" },
              { name: "TypeScript", level: 75, color: "#3178c6" },
              { name: "TailwindCSS", level: 92, color: "#38bdf8" },
              { name: "JavaScript", level: 95, color: "#f7df1e" },
            ].map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group"
              >
                <div className="mb-1.5 flex justify-between">
                  <span className="text-xs font-bold text-gray-300 transition-colors group-hover:text-white">
                    {skill.name}
                  </span>
                  <span
                    className="text-xs font-bold"
                    style={{ color: skill.color }}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-[#0f1a30]">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
                      boxShadow: `0 0 12px ${skill.color}40`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: 0.3 + i * 0.1,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Bio text */}
            <div className="lg:col-span-1">
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                I am Kholofelo Robyn Rababalela. I live in Cape Town, South
                Africa. I am a Computer Engineering student specializing in
                full-stack web development.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                I love to design and develop UIs. I care about UX,
                responsiveness, performance, maintainability and scalability.
              </p>
              <p className="text-sm leading-relaxed text-gray-400">
                When I'm not coding, I enjoy football, music, gaming, and
                exploring new technologies — especially AI-augmented workflows.
              </p>
            </div>

            {/* Interests grid */}
            <div>
              <h3 className="mb-5 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                Interests
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {interests.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.06,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
                    className="flex cursor-pointer flex-col items-center gap-1.5"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-[10px] text-gray-500">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Toolbox grid */}
            <div>
              <h3 className="mb-5 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                Toolbox
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {toolbox.map((tool, i) => (
                  <motion.div
                    key={tool.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    whileHover={{ scale: 1.15, y: -5 }}
                    className="group flex cursor-pointer flex-col items-center gap-1.5"
                  >
                    <div className="transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(0,232,157,0.5)]">
                      {tool.icon}
                    </div>
                    <span className="text-[10px] text-gray-500 transition-colors group-hover:text-[#00e89d]">
                      {tool.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ───── Interactive Code Terminal ───── */}
      <section className="mx-auto mt-16 max-w-5xl px-12 sm:px-20 lg:px-36">
        <AnimatedSection>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 flex items-center gap-3 text-2xl font-black text-white sm:text-3xl">
                <Code2 size={28} className="text-[#00e89d]" />
                Who Am I?
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                A developer who turns ideas into reality. I write clean,
                maintainable code and build full-stack applications that users
                love.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Problem Solver",
                  "Team Player",
                  "Fast Learner",
                  "Detail-Oriented",
                ].map((trait, i) => (
                  <motion.span
                    key={trait}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="cursor-default rounded-full border px-4 py-2 text-xs font-bold"
                    style={{
                      borderColor:
                        i % 2 === 0
                          ? "rgba(0,232,157,0.3)"
                          : "rgba(14,165,233,0.3)",
                      color: i % 2 === 0 ? "#00e89d" : "#0ea5e9",
                      background:
                        i % 2 === 0
                          ? "rgba(0,232,157,0.08)"
                          : "rgba(14,165,233,0.08)",
                    }}
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </div>
            <TypingCode />
          </div>
        </AnimatedSection>
      </section>

      {/* ───── Stats section (moox style) ───── */}
      <section className="relative mt-20 overflow-hidden bg-gradient-to-br from-[#00e89d]/15 via-[#0ea5e9]/10 to-[#a855f7]/15 py-20">
        <FloatingParticles />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 h-[400px] w-[400px] rounded-full bg-[#00e89d]/8 blur-[100px]" />
          <div className="absolute right-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-[#a855f7]/8 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-12 sm:px-20 lg:px-36">
          <AnimatedSection>
            <div className="grid grid-cols-2 items-end gap-8 lg:grid-cols-4">
              {/* Name / identity */}
              <div className="col-span-2 lg:col-span-1">
                <p className="text-sm text-gray-500">@RobynAwesome</p>
                <h3 className="text-3xl font-black text-[#00e89d] sm:text-4xl">
                  Kholofelo
                </h3>
                <p className="text-lg text-gray-400">Freelance</p>
                <p className="font-semibold text-[#0ea5e9]">since 2026</p>
              </div>

              {/* Stat: South African */}
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="mb-1 text-sm text-gray-500">South African</p>
                <motion.p
                  className="text-5xl leading-none font-black text-white sm:text-6xl"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, type: "spring" }}
                >
                  20
                  <span className="ml-1 text-xl text-gray-500">yo</span>
                </motion.p>
              </motion.div>

              {/* Stat: First website */}
              <motion.div
                className="rounded-2xl p-6 text-center"
                style={{
                  background: "rgba(15, 23, 42, 0.6)",
                  border: "2px solid rgba(0, 232, 157, 0.25)",
                  backdropFilter: "blur(20px)",
                }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(0, 232, 157, 0.5)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="mb-1 text-xs text-gray-500">First website</p>
                <motion.p
                  className="mb-1 text-4xl leading-none font-black text-white sm:text-5xl"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
                >
                  2
                </motion.p>
                <p className="text-sm font-semibold text-[#00e89d]">
                  years ago
                </p>
              </motion.div>

              {/* Stat: Professional */}
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="mb-1 text-sm text-gray-500">Professional for</p>
                <motion.p
                  className="text-5xl leading-none font-black text-white sm:text-6xl"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                >
                  1<span className="ml-1 text-2xl text-gray-500">+</span>
                </motion.p>
                <p className="text-lg font-semibold text-[#0ea5e9]">year</p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ───── Experience ───── */}
      <section className="mx-auto mt-20 max-w-5xl px-12 sm:px-20 lg:px-36">
        <AnimatedSection>
          <h2 className="mb-10 text-3xl font-black text-[#0ea5e9] sm:text-4xl">
            Experience
          </h2>

          <div className="relative border-l-2 border-[#0ea5e9]/20 pl-8">
            <motion.div
              className="absolute top-0 left-[-9px] h-4 w-4 rounded-full border-3 border-[#060d18] bg-[#00e89d]"
              animate={{
                boxShadow: [
                  "0 0 0px #00e89d",
                  "0 0 15px #00e89d",
                  "0 0 0px #00e89d",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <motion.div
              className="rounded-2xl p-7 sm:p-8"
              style={{
                background: "rgba(15, 23, 42, 0.4)",
                border: "1px solid rgba(14, 165, 233, 0.15)",
              }}
              whileHover={{
                borderColor: "rgba(14, 165, 233, 0.4)",
                boxShadow:
                  "0 0 30px rgba(14,165,233,0.1), 0 20px 60px rgba(0,0,0,0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4 flex flex-col justify-between sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-xl font-black text-white">
                    Freelance Web Developer
                  </h3>
                  <p className="mt-1 text-sm font-bold text-[#00e89d]">
                    5's Arena · Hellenic Football Club
                  </p>
                </div>
                <span className="mt-2 flex items-center gap-2 rounded-lg border border-[#0ea5e9]/20 bg-[#0ea5e9]/5 px-3 py-1.5 text-xs text-gray-500 sm:mt-0">
                  <Calendar size={12} />
                  Jan 2026 — Present
                </span>
              </div>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00e89d]" />
                  Building a full-stack booking and management system for a
                  5-a-side football venue
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0ea5e9]" />
                  Developing a community blog platform with authentication,
                  RBAC, and image uploads
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#a855f7]" />
                  Full MERN stack: React, Node.js, Express, MongoDB with
                  TailwindCSS
                </li>
              </ul>
            </motion.div>
          </div>
        </AnimatedSection>
      </section>

      {/* ───── Education ───── */}
      <section className="mx-auto mt-16 max-w-5xl px-12 sm:px-20 lg:px-36">
        <AnimatedSection>
          <h2 className="mb-10 text-3xl font-black text-[#a855f7] sm:text-4xl">
            Education
          </h2>

          <div className="relative border-l-2 border-[#a855f7]/20 pl-8">
            <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full border-3 border-[#060d18] bg-[#a855f7]" />

            <div
              className="rounded-2xl p-7 sm:p-8"
              style={{
                background: "rgba(15, 23, 42, 0.4)",
                border: "1px solid rgba(168, 85, 247, 0.15)",
              }}
            >
              <div className="mb-4 flex flex-col justify-between sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-xl font-black text-white">
                    Bachelor of Eng Tech — Computer Engineering
                  </h3>
                  <p className="mt-1 text-sm font-bold text-[#a855f7]">
                    Cape Peninsula University of Technology (CPUT)
                  </p>
                </div>
                <span className="mt-2 flex items-center gap-2 rounded-lg border border-[#a855f7]/20 bg-[#a855f7]/5 px-3 py-1.5 text-xs text-gray-500 sm:mt-0">
                  <Calendar size={12} />
                  2025 — Present
                </span>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                Studying computer engineering with a focus on software
                development, embedded systems, and full-stack web technologies.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ───── Certificates ───── */}
      <section className="mx-auto mt-16 max-w-5xl px-12 sm:px-20 lg:px-36">
        <AnimatedSection>
          <h2 className="mb-10 text-3xl font-black text-[#0ea5e9] sm:text-4xl">
            Certificates
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              {
                title: "AI Fluency",
                issuer: "Anthropic / Skilljar",
                color: "#00e89d",
              },
              {
                title: "Skill Certificate",
                issuer: "HackerRank",
                color: "#0ea5e9",
              },
              {
                title: "Level 5 Achievement",
                issuer: "HackerRank",
                color: "#a855f7",
              },
            ].map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group rounded-2xl p-6"
                style={{
                  background: "rgba(15, 23, 42, 0.5)",
                  border: `1px solid ${cert.color}25`,
                }}
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: `${cert.color}15` }}
                >
                  <Award size={22} style={{ color: cert.color }} />
                </div>
                <h3 className="mb-1 text-base font-bold text-white">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-500">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ───── Links ───── */}
      <section className="mx-auto mt-16 max-w-5xl px-12 sm:px-20 lg:px-36">
        <AnimatedSection>
          <h2 className="mb-10 text-3xl font-black text-white sm:text-4xl">
            Links & Profiles
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              {
                label: "GitHub",
                href: "https://github.com/RobynAwesome",
                icon: <Github size={20} />,
                color: "#fff",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/",
                icon: <Linkedin size={20} />,
                color: "#0ea5e9",
              },
              {
                label: "HackerRank",
                href: "https://www.hackerrank.com/profile/rkholofelo",
                icon: <Briefcase size={20} />,
                color: "#00e89d",
              },
              {
                label: "ORCID",
                href: "https://orcid.org/0009-0000-3995-6147",
                icon: <GraduationCap size={20} />,
                color: "#a3e635",
              },
              {
                label: "PayPal",
                href: "https://paypal.me/osheenviews",
                icon: <ExternalLink size={20} />,
                color: "#0ea5e9",
              },
              {
                label: "Ko-fi",
                href: "https://ko-fi.com/robynawesome",
                icon: <ExternalLink size={20} />,
                color: "#f97316",
              },
            ].map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -3, scale: 1.03 }}
                className="flex flex-col items-center gap-2 rounded-xl p-4 transition-all"
                style={{
                  background: "rgba(15, 23, 42, 0.4)",
                  border: `1px solid ${link.color}15`,
                }}
              >
                <div style={{ color: link.color }}>{link.icon}</div>
                <span className="text-xs font-medium text-gray-400">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ───── Latest Experiences (Stage 2 — moox style) ───── */}
      <section className="relative mt-24 overflow-hidden bg-gradient-to-b from-transparent via-[#0ea5e9]/5 to-transparent py-20">
        <div className="mx-auto max-w-5xl px-12 sm:px-20 lg:px-36">
          <AnimatedSection>
            <h2 className="mb-16 text-center text-4xl font-black sm:text-5xl">
              <span className="bg-gradient-to-r from-[#00e89d] via-[#0ea5e9] to-[#a855f7] bg-clip-text text-transparent">
                Latest Experiences
              </span>
            </h2>

            {/* Year marker */}
            <p className="mb-10 text-3xl font-black text-white">2026</p>

            {/* Project experience cards */}
            <div className="space-y-16">
              {/* Bookit — 5's Arena */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="overflow-hidden rounded-3xl"
                style={{
                  background: "rgba(15, 23, 42, 0.5)",
                  border: "1px solid rgba(14, 165, 233, 0.15)",
                }}
              >
                {/* Screenshot */}
                <div className="relative h-64 overflow-hidden sm:h-80">
                  <img
                    src="/web-image-5s.png"
                    alt="Bookit 5's Arena"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 sm:p-10">
                  <div className="mb-3 flex items-start justify-between">
                    <p className="text-xs font-bold tracking-widest text-[#0ea5e9] uppercase">
                      Full-Stack Booking Platform
                    </p>
                    <p className="text-xs text-gray-500 italic">5's Arena</p>
                  </div>
                  <h3 className="mb-2 text-2xl font-black text-white sm:text-3xl">
                    Bookit — Real-time venue booking system
                  </h3>
                  <p className="mb-6 text-sm text-gray-500">
                    3 months and counting
                  </p>
                  <p className="flex flex-wrap gap-2 text-sm text-gray-400">
                    {[
                      "React",
                      "Node.js",
                      "Express",
                      "MongoDB",
                      "CSS",
                      "JavaScript",
                    ].map((t) => (
                      <span key={t} className="text-[#0ea5e9]/70">
                        #{t}
                      </span>
                    ))}
                  </p>
                </div>
              </motion.div>

              {/* 5's Arena Blog */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="overflow-hidden rounded-3xl"
                style={{
                  background: "rgba(15, 23, 42, 0.5)",
                  border: "1px solid rgba(0, 232, 157, 0.15)",
                }}
              >
                <div className="relative h-64 overflow-hidden sm:h-80">
                  <img
                    src="/web-image-5s.png"
                    alt="5's Arena Blog"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
                </div>

                <div className="p-8 sm:p-10">
                  <div className="mb-3 flex items-start justify-between">
                    <p className="text-xs font-bold tracking-widest text-[#00e89d] uppercase">
                      Community Blog
                    </p>
                    <p className="text-xs text-gray-500 italic">5's Arena</p>
                  </div>
                  <h3 className="mb-2 text-2xl font-black text-white sm:text-3xl">
                    Community blog with auth, RBAC & rich text
                  </h3>
                  <p className="mb-6 text-sm text-gray-500">
                    3 months and counting
                  </p>
                  <p className="flex flex-wrap gap-2 text-sm text-gray-400">
                    {[
                      "React",
                      "Node.js",
                      "Express",
                      "MongoDB",
                      "TailwindCSS",
                    ].map((t) => (
                      <span key={t} className="text-[#00e89d]/70">
                        #{t}
                      </span>
                    ))}
                  </p>
                </div>
              </motion.div>

              {/* Portfolio */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="overflow-hidden rounded-3xl"
                style={{
                  background: "rgba(15, 23, 42, 0.5)",
                  border: "1px solid rgba(168, 85, 247, 0.15)",
                }}
              >
                <div className="relative h-64 overflow-hidden sm:h-80">
                  <img
                    src="/profile-banner-1.jpg"
                    alt="Portfolio Website"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
                </div>

                <div className="p-8 sm:p-10">
                  <div className="mb-3 flex items-start justify-between">
                    <p className="text-xs font-bold tracking-widest text-[#a855f7] uppercase">
                      Personal Brand
                    </p>
                    <p className="text-xs text-gray-500 italic">Personal</p>
                  </div>
                  <h3 className="mb-2 text-2xl font-black text-white sm:text-3xl">
                    Animated portfolio with Framer Motion
                  </h3>
                  <p className="mb-6 text-sm text-gray-500">Ongoing</p>
                  <p className="flex flex-wrap gap-2 text-sm text-gray-400">
                    {[
                      "React",
                      "TypeScript",
                      "TailwindCSS",
                      "Vite",
                      "Framer Motion",
                    ].map((t) => (
                      <span key={t} className="text-[#a855f7]/70">
                        #{t}
                      </span>
                    ))}
                  </p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ───── CTA Section (Stage 3 — moox style) ───── */}
      <section
        className="relative overflow-hidden py-24 sm:py-32"
        style={{
          backgroundImage: "url('/web-image-4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#060d18] via-[#060d18]/60 to-[#060d18]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00e89d]/10 via-transparent to-[#0ea5e9]/10" />

        <div className="relative mx-auto max-w-4xl px-12 text-center sm:px-20 lg:px-36">
          <AnimatedSection>
            {/* Avatar */}
            <div className="relative mb-8 inline-block">
              <div className="absolute inset-0 scale-125 rounded-full bg-[#00e89d] opacity-25 blur-2xl" />
              <div className="absolute inset-0 scale-105 rounded-full bg-[#00e89d]" />
              <img
                src="/web-image-2.JPG"
                alt="Kholofelo"
                className="relative h-24 w-24 rounded-full border-3 border-white object-cover object-top"
              />
            </div>

            <h2 className="mb-8 text-2xl font-black text-white sm:text-3xl">
              Ready to build something awesome together?
            </h2>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/5"
              >
                <Briefcase size={18} />
                More about me
              </a>
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#00e89d] px-8 py-4 text-base font-bold text-[#060d18] transition-all duration-300 hover:shadow-lg hover:shadow-[#0ea5e9]/20"
              >
                <MapPin size={18} />
                Hire me
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
