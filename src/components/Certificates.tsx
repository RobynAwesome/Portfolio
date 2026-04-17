import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Award, ExternalLink, ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import {
  courseworkCredentials,
  publicBadges,
  verifiedCredentials,
} from "../data/portfolioContent";

/* ── Brand icon components ── */
function AnthropicIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M13.8 3h-3.6L4 21h3.8l1.3-3.6h5.8l1.3 3.6H20L13.8 3zm-3.6 11.3 1.8-5 1.8 5H10.2z"
        fill="currentColor"
      />
    </svg>
  );
}

function HackerRankIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.282 5.4h.564l.564 1.128H11.154L11.718 5.4zm2.256 13.2h-3.948v-1.128h1.41V8.532h-1.41V7.404h3.948v1.128H13.02v9.94h1.41v1.128z" />
    </svg>
  );
}

function LinkedInIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const ISSUER_META: Record<string, { color: string; bg: string; Icon: React.FC<{ size?: number }> }> = {
  Anthropic: {
    color: "#f97316",
    bg: "rgba(249,115,22,0.12)",
    Icon: AnthropicIcon,
  },
  HackerRank: {
    color: "#00e89d",
    bg: "rgba(0,232,157,0.12)",
    Icon: HackerRankIcon,
  },
  "LinkedIn Learning": {
    color: "#0ea5e9",
    bg: "rgba(14,165,233,0.12)",
    Icon: LinkedInIcon,
  },
  "Cape Peninsula University of Technology": {
    color: "#a855f7",
    bg: "rgba(168,85,247,0.12)",
    Icon: GraduationCap as React.FC<{ size?: number }>,
  },
};

const certificates = [
  ...verifiedCredentials.map((credential) => ({
    title: credential.title,
    issuer: credential.issuer,
    date: credential.date,
    link: credential.href ?? "#",
    description: credential.note ?? `${credential.issuer} credential.`,
  })),
  ...courseworkCredentials.map((credential) => ({
    title: credential.title,
    issuer: credential.issuer,
    date: credential.date,
    link: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/details/certifications/",
    description: credential.note ?? `${credential.issuer} coursework.`,
  })),
  {
    title: "BEng Tech — Computer Engineering",
    issuer: "Cape Peninsula University of Technology",
    date: "2025 — Present",
    link: "https://orcid.org/0009-0000-3995-6147",
    description: "Formal education in Computer Engineering at CPUT.",
  },
];

const VISIBLE = 3; // cards shown at once on desktop

export default function Certificates() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = certificates.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((v) => (v + 1) % total);
    }, 4000);
    return () => clearInterval(id);
  }, [paused, total]);

  const prev = () => setActive((v) => (v - 1 + total) % total);
  const next = () => setActive((v) => (v + 1) % total);

  // get 3 visible indices (wrap around)
  const visibleIndices = Array.from({ length: VISIBLE }, (_, i) => (active + i) % total);

  return (
    <section id="certificates" className="relative" ref={sectionRef}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-10 flex-wrap gap-4"
      >
        <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#00e89d]/20 flex items-center justify-center">
            <Award size={22} className="text-[#00e89d]" />
          </div>
          Certificates & Learning
        </h2>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500 font-mono">
            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button
            onClick={prev}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </motion.div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6"
      >
        <AnimatePresence mode="popLayout">
          {visibleIndices.map((idx, slot) => {
            const cert = certificates[idx];
            const meta = ISSUER_META[cert.issuer] ?? {
              color: "#00e89d",
              bg: "rgba(0,232,157,0.12)",
              Icon: Award as React.FC<{ size?: number }>,
            };
            const { Icon } = meta;
            return (
              <motion.div
                key={`${idx}-${slot}`}
                layout
                initial={{ opacity: 0, x: 40, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -40, scale: 0.96 }}
                transition={{ duration: 0.38, ease: [0.23, 1, 0.32, 1] }}
                className={`relative group rounded-3xl overflow-hidden flex-col ${
                  slot === 0 ? "flex" : slot === 1 ? "hidden md:flex" : "hidden lg:flex"
                }`}
              >
                {/* Glossy background */}
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: `linear-gradient(135deg, ${meta.color}08 0%, rgba(6,13,24,0.7) 60%, ${meta.color}05 100%)`,
                    backdropFilter: "blur(24px) saturate(160%)",
                    WebkitBackdropFilter: "blur(24px) saturate(160%)",
                    border: `1px solid ${meta.color}20`,
                  }}
                />

                {/* Shine sweep on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl overflow-hidden"
                >
                  <div
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                    style={{
                      background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.07) 50%, transparent 70%)",
                    }}
                  />
                </div>

                {/* Float animation */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: slot * 1.2 }}
                  className="relative p-6 sm:p-7 flex flex-col flex-1"
                >
                  {/* Top row: icon + issuer badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: meta.bg, border: `1px solid ${meta.color}30`, color: meta.color }}
                    >
                      <Icon size={20} />
                    </div>
                    <span
                      className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full"
                      style={{ background: `${meta.color}15`, color: meta.color, border: `1px solid ${meta.color}25` }}
                    >
                      {cert.issuer === "Cape Peninsula University of Technology" ? "CPUT" : cert.issuer}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white mb-1 leading-snug group-hover:text-white/90 transition-colors flex-1">
                    {cert.title}
                  </h3>

                  {/* Date */}
                  <p className="text-xs font-mono mb-3" style={{ color: `${meta.color}99` }}>
                    {cert.date}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-gray-400 leading-relaxed mb-5 line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Verify link */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold transition-colors group/link"
                    style={{ color: meta.color }}
                  >
                    Verify Certificate
                    <ExternalLink size={11} className="group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-1.5 mb-10">
        {certificates.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === active ? "20px" : "6px",
              height: "6px",
              background: i === active ? "#00e89d" : "rgba(255,255,255,0.15)",
            }}
            aria-label={`Go to certificate ${i + 1}`}
          />
        ))}
      </div>

      {/* HackerRank iframe */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-4 rounded-2xl border border-[#1a2744] overflow-hidden bg-[#0f1a30]/30"
      >
        <div className="p-4 border-b border-[#1a2744] flex items-center justify-between">
          <span className="text-sm font-semibold text-white">HackerRank Certificate Preview</span>
          <a
            href={publicBadges[0]?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#00e89d] hover:text-[#34d399] transition-colors flex items-center gap-1"
          >
            Open Full
            <ExternalLink size={12} />
          </a>
        </div>
        <iframe
          src="https://www.hackerrank.com/certificates/iframe/eb2baf4f04c3"
          className="w-full h-64 sm:h-80 border-0"
          title="HackerRank Certificate"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}
