import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Copy, Check, ExternalLink, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import TransparentImage from "./TransparentImage";

interface SkillBadge {
  label: string;
  sublabel: string;
  description: string;
  repoUrl: string;
  repoName: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  delay: number;
  color: string;
}

const skillBadges: SkillBadge[] = [
  {
    label: "Web Developer",
    sublabel: "Professional",
    description:
      "Component-driven UIs with React 18+, hooks, state management, and Framer Motion animations. Used across all my projects.",
    repoUrl: "https://github.com/RobynAwesome/Bookit-5s-Arena",
    repoName: "Bookit-5s-Arena",
    position: { top: "22%", left: "-18%" },
    delay: 0,
    color: "#0ea5e9",
  },
  {
    label: "MERN Stack",
    sublabel: "Full-Stack",
    description:
      "Server-side JavaScript with Express.js, building RESTful APIs, authentication systems, and real-time features.",
    repoUrl: "https://github.com/RobynAwesome/5s-Arena-Blog",
    repoName: "5s-Arena-Blog",
    position: { top: "8%", right: "-8%" },
    delay: 0.8,
    color: "#00e89d",
  },
  {
    label: "React & Node.js",
    sublabel: "Core Stack",
    description:
      "NoSQL database design, schema modeling with Mongoose, aggregation pipelines, and optimized queries for scalable apps.",
    repoUrl: "https://github.com/RobynAwesome/Bookit-5s-Arena",
    repoName: "Bookit-5s-Arena",
    position: { top: "50%", right: "-14%" },
    delay: 1.6,
    color: "#0ea5e9",
  },
  {
    label: "MongoDB & APIs",
    sublabel: "Backend",
    description:
      "Modern ES2024+, async/await patterns, clean architecture, DOM manipulation, and TypeScript for type safety.",
    repoUrl: "https://github.com/RobynAwesome/Portfolio",
    repoName: "Portfolio",
    position: { top: "72%", left: "5%" },
    delay: 2.4,
    color: "#00e89d",
  },
];

function SkillBadgeComponent({ badge }: { badge: SkillBadge }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setExpanded(true)}
        animate={{ y: [0, badge.delay % 2 === 0 ? -6 : 6, 0] }}
        transition={{
          duration: 5 + badge.delay * 0.3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: badge.delay * 0.2,
        }}
        className="absolute rounded-2xl px-7 py-4 cursor-pointer transition-all duration-300 z-10 group text-center min-w-[160px]"
        style={{
          ...badge.position,
          background: `linear-gradient(135deg, rgba(10, 18, 36, 0.85) 0%, rgba(15, 26, 48, 0.75) 100%)`,
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: `2px solid ${badge.color}40`,
          boxShadow: `0 0 25px ${badge.color}12, inset 0 1px 0 0 rgba(255,255,255,0.08), 0 10px 40px rgba(0,0,0,0.5)`,
        }}
        whileHover={{
          scale: 1.08,
          boxShadow: `0 0 35px ${badge.color}35, 0 0 70px ${badge.color}12, inset 0 1px 0 0 rgba(255,255,255,0.12), 0 14px 50px rgba(0,0,0,0.6)`,
        }}
        whileTap={{ scale: 0.96 }}
      >
        {/* Outer glow border */}
        <div
          className="absolute -inset-[2px] rounded-2xl pointer-events-none"
          style={{
            border: `2px solid ${badge.color}25`,
            boxShadow: `0 0 20px ${badge.color}15`,
          }}
        />
        {/* Inner glass border */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            border: `1px solid rgba(255,255,255,0.08)`,
          }}
        />
        {/* Glossy shine */}
        <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />

        {/* Small top label */}
        <p className="text-[10px] text-gray-500 tracking-wide relative mb-0.5">
          {badge.sublabel}
        </p>
        {/* Bold main title */}
        <p
          className="text-base font-black relative tracking-wide leading-tight"
          style={{ color: badge.color }}
        >
          {badge.label}
        </p>
      </motion.button>

      {/* Expanded modal overlay */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setExpanded(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#060d18]/80 backdrop-blur-sm" />

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm rounded-2xl border border-[#1a2744] bg-[#0f1a30] p-6 shadow-2xl shadow-black/50"
            >
              {/* Close button */}
              <button
                onClick={() => setExpanded(false)}
                className="absolute top-3 right-3 p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={16} />
              </button>

              {/* Gradient accent */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-sm font-bold"
                style={{
                  backgroundColor: `${badge.color}15`,
                  color: badge.color,
                  border: `1px solid ${badge.color}30`,
                }}
              >
                {badge.label.charAt(0)}
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                {badge.label}
              </h3>
              <p
                className="text-xs font-medium mb-3"
                style={{ color: badge.color }}
              >
                {badge.sublabel}
              </p>

              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {badge.description}
              </p>

              {/* Link to repo */}
              <div className="rounded-xl border border-[#1a2744] bg-[#0b1426] p-4">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">
                  See it in action
                </p>
                <a
                  href={badge.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-[#00e89d] hover:text-[#34d399] transition-colors group/link"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  {badge.repoName}
                  <ExternalLink
                    size={12}
                    className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("rkholofelo@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-25 blur-[100px]"
          style={{
            background: "radial-gradient(circle, #00e89d, transparent)",
          }}
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
          style={{
            background: "radial-gradient(circle, #0ea5e9, transparent)",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-10 blur-[120px]"
          style={{
            background: "radial-gradient(circle, #6366f1, transparent)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-12 sm:px-20 lg:px-36 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side -- Text content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <p className="text-gray-400 text-base mb-4">Hey,</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.02] mb-3">
                I'm{" "}
                <span className="gradient-text-green">Kholofelo.</span>
              </h1>
              <p className="text-gray-400 text-lg sm:text-xl mb-1">
                A Full-Stack
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black gradient-text mb-3">
                MERN Developer.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-10">
                I build{" "}
                <span className="gradient-text">apps.</span>
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-3"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-[#00e89d] text-[#060d18] hover:bg-[#34d399] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00e89d]/20"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Hire Me
              </Link>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-[#1a2744] text-gray-300 hover:border-[#00e89d]/40 hover:text-white transition-all duration-300"
              >
                {copied ? (
                  <Check size={16} className="text-[#00e89d]" />
                ) : (
                  <Copy size={16} />
                )}
                {copied ? "Copied!" : "Copy Email"}
              </button>
            </motion.div>
          </div>

          {/* Right side -- Profile photo with concentric circles and floating skill badges */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="relative hidden lg:flex justify-center items-center"
          >
            <div
              className="relative flex items-center justify-center"
              style={{ width: "560px", height: "660px" }}
            >
              {/* Concentric rounded circles behind the person (moox-style) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ width: "520px", height: "520px" }}
              >
                {/* Outermost circle */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: "1.5px solid rgba(14, 165, 233, 0.15)",
                  }}
                />
                {/* Second circle */}
                <div
                  className="absolute rounded-full"
                  style={{
                    inset: "50px",
                    border: "1.5px solid rgba(14, 165, 233, 0.20)",
                  }}
                />
                {/* Third circle */}
                <div
                  className="absolute rounded-full"
                  style={{
                    inset: "100px",
                    border: "1.5px solid rgba(0, 232, 157, 0.18)",
                  }}
                />
                {/* Innermost circle */}
                <div
                  className="absolute rounded-full"
                  style={{
                    inset: "150px",
                    border: "1.5px solid rgba(0, 232, 157, 0.22)",
                  }}
                />
              </motion.div>

              {/* Subtle radial glow behind person */}
              <div
                className="absolute rounded-full blur-3xl"
                style={{
                  width: "300px",
                  height: "300px",
                  top: "20%",
                  left: "15%",
                  background:
                    "radial-gradient(circle, rgba(0,232,157,0.18), rgba(0,232,157,0.03), transparent)",
                }}
              />
              <div
                className="absolute rounded-full blur-3xl"
                style={{
                  width: "250px",
                  height: "250px",
                  bottom: "12%",
                  right: "10%",
                  background:
                    "radial-gradient(circle, rgba(14,165,233,0.14), rgba(14,165,233,0.03), transparent)",
                }}
              />

              {/* Profile image */}
              <div className="relative z-[5] flex justify-center items-center">
                <TransparentImage
                  src="/profile.png"
                  alt="Kholofelo Robyn Rababalela"
                  className="w-[420px] xl:w-[480px] object-contain drop-shadow-[0_0_40px_rgba(0,232,157,0.15)] hero-profile-img"
                  threshold={190}
                />
              </div>

              {/* Clickable floating skill badges */}
              {skillBadges.map((badge) => (
                <SkillBadgeComponent key={badge.label} badge={badge} />
              ))}

              {/* Subtle hint text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] text-gray-600 whitespace-nowrap"
              >
                Click any badge to explore my skills
              </motion.p>
            </div>
          </motion.div>

          {/* Mobile skill badges -- horizontal scroll */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:hidden flex flex-wrap gap-2 mt-4"
          >
            {skillBadges.map((badge) => (
              <MobileSkillBadge key={badge.label} badge={badge} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={20} className="text-[#00e89d] opacity-40" />
      </motion.div>
    </section>
  );
}

/* Mobile version of skill badge */
function MobileSkillBadge({ badge }: { badge: SkillBadge }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <button
        onClick={() => setExpanded(true)}
        className="px-4 py-2 rounded-full text-xs font-semibold hover:scale-105 transition-all duration-300"
        style={{
          color: badge.color,
          background: "rgba(15, 26, 48, 0.6)",
          border: `2px solid ${badge.color}40`,
          boxShadow: `0 0 12px ${badge.color}10`,
        }}
      >
        {badge.label}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setExpanded(false)}
          >
            <div className="absolute inset-0 bg-[#060d18]/80 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm rounded-2xl border border-[#1a2744] bg-[#0f1a30] p-6 shadow-2xl"
            >
              <button
                onClick={() => setExpanded(false)}
                className="absolute top-3 right-3 p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={16} />
              </button>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-sm font-bold"
                style={{
                  backgroundColor: `${badge.color}15`,
                  color: badge.color,
                  border: `1px solid ${badge.color}30`,
                }}
              >
                {badge.label.charAt(0)}
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                {badge.label}
              </h3>
              <p
                className="text-xs font-medium mb-3"
                style={{ color: badge.color }}
              >
                {badge.sublabel}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {badge.description}
              </p>
              <div className="rounded-xl border border-[#1a2744] bg-[#0b1426] p-4">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">
                  See it in action
                </p>
                <a
                  href={badge.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-[#00e89d] hover:text-[#34d399] transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  {badge.repoName}
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
