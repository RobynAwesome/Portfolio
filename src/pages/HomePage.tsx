import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import {
  ArrowRight,
  Copy,
  Check,
  ExternalLink,
  Github,
  Linkedin,
} from "lucide-react";

// ─── HERO SECTION ────────────────────────────────────────────────────────────
// All red-boxed elements from Image 1 now have heavy Framer Motion animations

function HeroSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("rkholofelo@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Stagger container
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.85, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col lg:flex-row"
    >
      {/* ── LEFT: Photo with cinematic reveal ── */}
      <motion.div
        className="relative w-full h-[60vh] lg:h-auto lg:w-[48%] xl:w-[46%] 2xl:w-[44%] flex-shrink-0 overflow-hidden"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
      >
        {/* Scan shimmer */}
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, rgba(0,232,157,0.18) 50%, transparent 100%)",
          }}
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ duration: 1.3, ease: "easeInOut", delay: 0.6 }}
        />

        {/* Corner accent lines that pop in */}
        {[
          "top-4 left-4 border-t-2 border-l-2",
          "top-4 right-4 border-t-2 border-r-2",
          "bottom-4 left-4 border-b-2 border-l-2",
          "bottom-4 right-4 border-b-2 border-r-2",
        ].map((cls, i) => (
          <motion.span
            key={i}
            className={`absolute w-8 h-8 border-[#00e89d] ${cls} z-10`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.9 + i * 0.08,
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
          />
        ))}

        {/* Breathing glow overlay */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none"
          animate={{
            background: [
              "radial-gradient(ellipse at 30% 70%, rgba(0,232,157,0.06) 0%, transparent 60%)",
              "radial-gradient(ellipse at 30% 70%, rgba(0,232,157,0.12) 0%, transparent 60%)",
              "radial-gradient(ellipse at 30% 70%, rgba(0,232,157,0.06) 0%, transparent 60%)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <img
          src="/profile.jpg"
          alt="Kholofelo Robyn Rababalela"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 15%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#060d18]" />
        <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-transparent via-transparent to-[#060d18]" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#060d18]/60 to-transparent" />
      </motion.div>

      {/* ── RIGHT: Content ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-14 xl:px-20 2xl:px-28 pt-8 pb-20 lg:pt-28 lg:pb-16 bg-[#060d18]">
        {/* Ambient glow blobs */}
        <div
          className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] pointer-events-none"
          style={{ background: "radial-gradient(circle, #0ea5e9, transparent)" }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full opacity-15 blur-[80px] pointer-events-none"
          style={{ background: "radial-gradient(circle, #00e89d, transparent)" }}
        />

        <motion.div
          className="relative max-w-xl xl:max-w-2xl"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* ── BADGE: "FULL-STACK MERN DEVELOPER" ── */}
          {/* Red box #1 — crossover dash animation */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50, skewX: -6 },
              show: {
                opacity: 1,
                x: 0,
                skewX: 0,
                transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] },
              },
            }}
            className="font-mono text-[#00e89d] text-xs sm:text-sm tracking-[0.25em] uppercase mb-6 flex items-center gap-3"
          >
            {/* Left dash — pulses and extends on loop */}
            <motion.span
              className="inline-block h-[1px] bg-[#00e89d]"
              animate={{ width: ["2rem", "3rem", "2rem"], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              animate={{ letterSpacing: ["0.25em", "0.35em", "0.25em"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Full-Stack MERN Developer
            </motion.span>
            {/* Right dash — opposite phase */}
            <motion.span
              className="inline-block h-[1px] bg-[#00e89d]"
              animate={{ width: ["2rem", "3rem", "2rem"], opacity: [1, 0.5, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>

          {/* ── NAME BLOCK ── */}
          {/* Red box #2 — each word rises with 3D perspective, crossover on hover */}
          <div className="overflow-hidden mb-1">
            <motion.h1
              className="font-black leading-[0.88] tracking-tight text-white"
              style={{ fontSize: "clamp(2.8rem, 6vw, 6.5rem)" }}
              initial={{ y: 100, opacity: 0, rotateX: -20 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{
                x: [0, -4, 6, -2, 0],
                transition: { duration: 0.45 },
              }}
            >
              Kholofelo
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-1">
            <motion.h1
              className="font-black leading-[0.88] tracking-tight"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 6.5rem)",
                background:
                  "linear-gradient(135deg, #00e89d 0%, #0ea5e9 60%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              initial={{ y: 100, opacity: 0, rotateX: -20 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.85, delay: 0.13, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{
                /* crossover: slide right, come back, slide left, come back */
                x: [0, 10, -6, 4, 0],
                filter: [
                  "brightness(1)",
                  "brightness(1.4)",
                  "brightness(1)",
                ],
                transition: { duration: 0.55, ease: "easeInOut" },
              }}
            >
              Robyn
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-8">
            <motion.h1
              className="font-black leading-[0.88] tracking-tight text-white"
              style={{ fontSize: "clamp(2.8rem, 6vw, 6.5rem)" }}
              initial={{ y: 100, opacity: 0, rotateX: -20 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.85, delay: 0.18, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ x: [0, 3, -3, 0], transition: { duration: 0.35 } }}
            >
              Rababalela
              {/* Pulsing dot */}
              <motion.span
                className="text-[#00e89d]"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [1, 0.5, 1],
                  textShadow: [
                    "0 0 0px #00e89d",
                    "0 0 20px #00e89d",
                    "0 0 0px #00e89d",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                .
              </motion.span>
            </motion.h1>
          </div>

          {/* Divider line that grows in */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="origin-left h-[1px] w-16 mb-8"
            style={{
              background: "linear-gradient(90deg, #00e89d, #0ea5e9)",
            }}
          />

          {/* Description */}
          <motion.p
            variants={slideUp}
            className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-md"
          >
            I build scalable, production-grade web applications with the{" "}
            <motion.span
              className="text-white font-semibold"
              whileHover={{ color: "#00e89d" }}
            >
              MERN stack
            </motion.span>{" "}
            — from RESTful APIs to polished, animated frontends.
          </motion.p>

          {/* ── CTA BUTTONS ── */}
          {/* Red box #3 */}
          <motion.div
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 0.0 } },
            }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-14"
          >
            {/* Hire Me */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.85 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 16,
                    delay: 0.38,
                  },
                },
              }}
              whileHover={{
                scale: 1.07,
                boxShadow:
                  "0 0 36px rgba(0,232,157,0.45), 0 0 12px rgba(0,232,157,0.3)",
              }}
              whileTap={{ scale: 0.94 }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm text-[#060d18] transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #00e89d, #34d399)",
                }}
              >
                Hire Me
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </Link>
            </motion.div>

            {/* Copy Email */}
            <motion.button
              onClick={copyEmail}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.85 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 16,
                    delay: 0.48,
                  },
                },
              }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(0,232,157,0.5)",
                color: "#fff",
              }}
              whileTap={{ scale: 0.94 }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm border border-white/10 text-gray-300 hover:border-[#00e89d]/40 hover:text-white transition-all duration-300"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span
                    key="check"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0 }}
                    className="text-[#00e89d]"
                  >
                    <Check size={16} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <Copy size={16} />
                  </motion.span>
                )}
              </AnimatePresence>
              {copied ? "Copied!" : "Copy Email"}
            </motion.button>
          </motion.div>

          {/* ── TECH STACK PILLS ── */}
          {/* Red box #4 — 3D flip-in stagger */}
          <motion.div
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0 } },
            }}
            className="flex items-center gap-8 sm:gap-12"
          >
            {[
              { value: "MERN", label: "Core Stack" },
              { value: "React", label: "Frontend" },
              { value: "Node.js", label: "Backend" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                variants={{
                  hidden: { opacity: 0, y: 50, rotateY: -25, scale: 0.85 },
                  show: {
                    opacity: 1,
                    y: 0,
                    rotateY: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 160,
                      damping: 16,
                      delay: 0.6 + i * 0.12,
                    },
                  },
                }}
                whileHover={{
                  y: -6,
                  scale: 1.06,
                  transition: { type: "spring", stiffness: 300, damping: 18 },
                }}
                className="cursor-default"
              >
                {/* Value pulses subtly */}
                <motion.p
                  className="text-2xl sm:text-3xl font-black text-white leading-none mb-1"
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{
                    duration: 2.5 + i * 0.4,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  {item.value}
                </motion.p>
                <p className="text-[11px] text-gray-500 uppercase tracking-widest font-medium">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-2"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#00e89d] to-transparent" />
          <span
            className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-mono"
            style={{ writingMode: "vertical-rl" }}
          >
            scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}

// ─── TECH TICKER ─────────────────────────────────────────────────────────────

const TECHS = [
  { text: "React", color: "#61dafb" },
  { text: "Node.js", color: "#00e89d" },
  { text: "TypeScript", color: "#0ea5e9" },
  { text: "MongoDB", color: "#00e89d" },
  { text: "Express", color: "#00e89d" },
  { text: "Next.js", color: "#ffffff" },
  { text: "TailwindCSS", color: "#0ea5e9" },
  { text: "Vite", color: "#a855f7" },
  { text: "Framer Motion", color: "#a855f7" },
  { text: "JavaScript", color: "#f7df1e" },
  { text: "Docker", color: "#0ea5e9" },
  { text: "Firebase", color: "#f97316" },
  { text: "Git", color: "#f97316" },
  { text: "Figma", color: "#a855f7" },
  { text: "REST APIs", color: "#00e89d" },
  { text: "Full-Stack", color: "#00e89d" },
  { text: "MERN Stack", color: "#0ea5e9" },
  { text: "Vercel", color: "#ffffff" },
];

function TechTicker() {
  const doubled = [...TECHS, ...TECHS];
  return (
    <section className="relative py-10 overflow-hidden border-y border-[#1a2744]">
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#060d18] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#060d18] to-transparent" />
      <motion.div
        className="flex gap-6 mb-5"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
      >
        {doubled.map((t, i) => (
          <div
            key={`top-${i}`}
            className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-full border-2 whitespace-nowrap"
            style={{ borderColor: `${t.color}40`, backgroundColor: `${t.color}10` }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full shadow-lg"
              style={{ backgroundColor: t.color, boxShadow: `0 0 10px ${t.color}60` }}
            />
            <span className="text-sm font-bold" style={{ color: t.color }}>
              {t.text}
            </span>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex gap-6"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" } }}
      >
        {[...doubled].reverse().map((t, i) => (
          <div
            key={`bot-${i}`}
            className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-full border-2 whitespace-nowrap"
            style={{ borderColor: `${t.color}40`, backgroundColor: `${t.color}10` }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full shadow-lg"
              style={{ backgroundColor: t.color, boxShadow: `0 0 10px ${t.color}60` }}
            />
            <span className="text-sm font-bold" style={{ color: t.color }}>
              {t.text}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

// ─── ABOUT / CRAFT SECTION ───────────────────────────────────────────────────
// Image 2 changes:
//  1 → Popping background with SVG blob + glowing strokes
//  2 → Light mode font fix (explicit color on all text)
//  3 → Phone on RIGHT side, moves opposite to scroll, fades out at section end

function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Phone: moves UP as user scrolls DOWN (opposite direction)
  const rawPhoneY = useTransform(scrollYProgress, [0, 1], [80, -120]);
  const phoneY = useSpring(rawPhoneY, { stiffness: 70, damping: 18 });
  const phoneOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.72, 1],
    [0, 1, 1, 0]
  );
  const phoneScale = useTransform(
    scrollYProgress,
    [0, 0.12, 0.8, 1],
    [0.88, 1, 1, 0.9]
  );

  // Text: gentle drift, fades out near end
  const textY = useTransform(scrollYProgress, [0, 1], [30, -40]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 overflow-hidden"
      ref={ref}
    >
      {/* ── POPPING BACKGROUND (change #1) ── */}
      {/* Main skewed gradient layer */}
      <div
        className="absolute inset-0"
        style={{
          transform: "skewY(-15deg)",
          transformOrigin: "top left",
          top: "-20%",
          bottom: "-20%",
        }}
      />

      {/* SVG blob shape with glowing animated stroke edges */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1400 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="blobFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00e89d" stopOpacity="0.14" />
            <stop offset="40%" stopColor="#0ea5e9" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.06" />
          </linearGradient>
          <filter id="blobGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Filled blob */}
        <motion.path
          d="M 1100 40 Q 1380 100 1400 350 Q 1420 600 1250 700 Q 1080 800 850 740 Q 620 680 580 520 Q 540 360 660 230 Q 780 100 1100 40 Z"
          fill="url(#blobFill)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />

        {/* Outer glowing stroke — the "beautiful edges" */}
        <motion.path
          d="M 1100 40 Q 1380 100 1400 350 Q 1420 600 1250 700 Q 1080 800 850 740 Q 620 680 580 520 Q 540 360 660 230 Q 780 100 1100 40 Z"
          fill="none"
          stroke="#00e89d"
          strokeWidth="1.5"
          strokeOpacity="0.55"
          filter="url(#blobGlow)"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 2.2, ease: "easeInOut", delay: 0.3 }}
        />

        {/* Inner secondary stroke — #0ea5e9 */}
        <motion.path
          d="M 1090 65 Q 1360 120 1375 360 Q 1390 590 1230 685 Q 1070 780 855 720 Q 640 660 606 508 Q 570 350 685 228 Q 800 110 1090 65 Z"
          fill="none"
          stroke="#0ea5e9"
          strokeWidth="0.8"
          strokeOpacity="0.3"
          strokeDasharray="6 4"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.6 }}
        />

        {/* Dot grid inside blob */}
        {Array.from({ length: 5 }).map((_, row) =>
          Array.from({ length: 8 }).map((_, col) => (
            <motion.circle
              key={`${row}-${col}`}
              cx={720 + col * 70}
              cy={160 + row * 90}
              r="1.8"
              fill="#00e89d"
              opacity="0.22"
              animate={{ opacity: [0.1, 0.35, 0.1] }}
              transition={{
                duration: 2 + (row * 8 + col) * 0.07,
                repeat: Infinity,
                delay: (row * 8 + col) * 0.06,
              }}
            />
          ))
        )}
      </svg>

      {/* Shadow glow layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: "skewY(-15deg)",
          transformOrigin: "top left",
          top: "-20%",
          bottom: "-20%",
          boxShadow:
            "0 200px 500px rgba(0,232,157,0.35), 0 -100px 300px rgba(14,165,233,0.3), 0 100px 250px rgba(0,0,0,0.7), 0 -50px 150px rgba(0,0,0,0.5), 0 300px 600px rgba(0,232,157,0.2), 0 -200px 400px rgba(14,165,233,0.15)",
        }}
      />

      {/* Radial corner glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00e89d]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0ea5e9]/20 rounded-full blur-3xl" />

      {/* ── CONTENT GRID ── */}
      <div className="max-w-5xl mx-auto px-12 sm:px-20 lg:px-36 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch overflow-hidden">

          {/* ── LEFT: Text (change #2 — explicit colors for light mode) ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
            style={{ y: textY, opacity: textOpacity }}
            className="relative z-10"
          >
            {/* Light mode text fix (#2) — using style={{ color }} so it overrides both themes */}
            <h2
              className="mb-2 text-3xl leading-tight font-black sm:text-4xl md:text-5xl"
              style={{ color: "var(--heading-color, white)" }}
            >
              You dream it.
            </h2>
            <h2 className="gradient-text mb-6 text-3xl leading-tight font-black sm:text-4xl md:text-5xl">
              I craft it.
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed mb-6"
              style={{ color: "var(--body-color, rgb(156 163 175))" }}
            >
              I am a Bachelor of Eng Tech in Computer Engineering (Student) at
              Cape Peninsula University of Technology and a Freelance Web
              Developer specializing in the MERN stack. Working primarily with
              Node.js, MongoDB, JavaScript, HTML, and CSS, my focus is on
              building scalable backend architectures, gorgeous frontends and
              intuitive, user-centered designs. Since January 2026, I have been
              building a comprehensive digital platform for 5's Arena associated
              with Hellenic Football club, developing a custom full-stack
              solution that features a community blog and an integrated booking
              system.
            </p>

            {/* Feature tags */}
            <motion.div
              className="flex flex-wrap gap-2 mb-8"
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07 } },
              }}
            >
              {[
                "Clean Architecture",
                "Smooth Animations",
                "Full-Stack",
                "API Design",
                "Mobile-First",
              ].map((tag) => (
                <motion.span
                  key={tag}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, y: 8 },
                    show: { opacity: 1, scale: 1, y: 0 },
                  }}
                  whileHover={{
                    scale: 1.07,
                    borderColor: "#00e89d",
                    color: "#00e89d",
                  }}
                  className="px-3 py-1 rounded-full text-xs font-medium border border-white/15 text-gray-400 cursor-default transition-colors"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <Link
              to="/resume"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold bg-[#060d18]/60 border-2 border-white/20 text-white hover:border-[#00e89d]/60 hover:bg-[#060d18]/80 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              More about me
            </Link>
          </motion.div>

          {/* ── RIGHT: Phone (change #3 — parallax, right side, fades at border) ── */}
          <div className="flex items-center justify-center lg:justify-end">
            <motion.div
              style={{ y: phoneY, opacity: phoneOpacity, scale: phoneScale }}
              className="relative w-[280px] sm:w-[300px]"
            >
              {/* Glow halo */}
              <div
                className="absolute inset-0 rounded-[42px] pointer-events-none"
                style={{
                  boxShadow:
                    "0 0 80px rgba(0,232,157,0.28), 0 0 160px rgba(14,165,233,0.14)",
                  filter: "blur(3px)",
                }}
              />

              {/* Phone shell */}
              <div
                className="relative rounded-[42px] border overflow-hidden"
                style={{
                  borderColor: "rgba(0,232,157,0.4)",
                  background: "#0f172a",
                  boxShadow:
                    "inset 0 0 20px rgba(0,0,0,0.6), 0 32px 80px rgba(0,0,0,0.7)",
                }}
              >
                {/* Dynamic Island */}
                <div className="relative pt-3 flex justify-center">
                  <div className="w-28 h-7 bg-black rounded-full" />
                </div>

                {/* Screen */}
                <div
                  className="px-2 pb-4 pt-2"
                  style={{ background: "white" }}
                >
                  {/* URL bar */}
                  <div
                    className="flex items-center gap-1 px-2 py-1.5 rounded mb-2"
                    style={{ background: "#f1f5f9" }}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ background: "#94a3b8" }}
                    />
                    <span
                      className="text-[9px]"
                      style={{ color: "#64748b" }}
                    >
                      linkedin.com/feed/
                    </span>
                    <span className="ml-auto text-[10px]" style={{ color: "#94a3b8" }}>
                      ↻
                    </span>
                  </div>

                  {/* LinkedIn banner */}
                  <div
                    className="h-12 rounded-t"
                    style={{
                      background:
                        "linear-gradient(to right, #1e3a5f, #2563eb)",
                    }}
                  />

                  {/* Profile */}
                  <div
                    className="px-2 pb-2"
                    style={{ background: "white", borderBottom: "1px solid #e2e8f0" }}
                  >
                    <div className="flex items-end gap-2 -mt-5 mb-2">
                      <div
                        className="w-10 h-10 rounded-full border-2"
                        style={{
                          borderColor: "white",
                          background:
                            "linear-gradient(135deg, #f59e0b, #d97706)",
                        }}
                      />
                      <div className="mb-0.5">
                        <p
                          className="text-[10px] font-bold leading-none"
                          style={{ color: "#0f172a" }}
                        >
                          Musa Dlamini
                        </p>
                        <p className="text-[8px]" style={{ color: "#64748b" }}>
                          Lead Frontend Engineer | Cape Town
                        </p>
                      </div>
                    </div>
                    {/* Nav icons */}
                    <div className="flex justify-around py-1">
                      {["Home", "Network", "Post", "Notif", "Jobs"].map((n) => (
                        <div key={n} className="flex flex-col items-center gap-0.5">
                          <div
                            className="w-3.5 h-3.5 rounded"
                            style={{ background: "#cbd5e1" }}
                          />
                          <span className="text-[7px]" style={{ color: "#94a3b8" }}>
                            {n}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Feed cards */}
                  {[
                    { name: "Mark R.", sub: "2h", bg: "#818cf8" },
                    { name: "Mary Chen", sub: "US Manager @ Airbnb", bg: "#fb7185" },
                  ].map((card, ci) => (
                    <div
                      key={ci}
                      className="rounded p-2 mb-1.5 shadow-sm"
                      style={{ background: "white", border: "1px solid #f1f5f9" }}
                    >
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <div
                          className="w-5 h-5 rounded-full flex-shrink-0"
                          style={{ background: card.bg }}
                        />
                        <div>
                          <p
                            className="text-[9px] font-semibold leading-none"
                            style={{ color: "#0f172a" }}
                          >
                            {card.name}
                          </p>
                          <p className="text-[7px]" style={{ color: "#94a3b8" }}>
                            {card.sub}
                          </p>
                        </div>
                      </div>
                      {ci === 1 && (
                        <div
                          className="h-10 rounded mb-1"
                          style={{ background: "#e2e8f0" }}
                        />
                      )}
                      {[70, 55, 80].slice(0, ci === 0 ? 3 : 2).map((w, j) => (
                        <div
                          key={j}
                          className="h-1.5 rounded mb-0.5"
                          style={{
                            background: "#e2e8f0",
                            width: `${w}%`,
                          }}
                        />
                      ))}
                      <div
                        className="flex justify-around mt-1.5 pt-1"
                        style={{ borderTop: "1px solid #f1f5f9" }}
                      >
                        {["Like", "Comment", "Share", "Send"].map((a) => (
                          <span
                            key={a}
                            className="text-[7px]"
                            style={{ color: "#94a3b8" }}
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── SKILLS SECTION (unchanged from original) ────────────────────────────────

const SKILL_DATA = [
  {
    category: "JavaScript & TypeScript",
    description:
      "I code in modern ES2024+ JavaScript across all environments. I now use TypeScript for type-safe, maintainable codebases — a requirement for production-grade applications.",
    techs: ["TypeScript", "Node.js", "HTML5", "CSS3"],
    bg: "linear-gradient(135deg, #0c1a35 0%, #0f2240 50%, #0a1628 100%)",
    accent: "#f7df1e",
  },
  {
    category: "React Ecosystem",
    description:
      "Building component-driven UIs with React 18+, hooks, and the broader ecosystem. From SPAs to SSR with Next.js and Vite for blazing-fast development.",
    techs: ["React", "Next.js", "Vite", "Redux", "Framer Motion"],
    bg: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 50%, #0c1a35 100%)",
    accent: "#61dafb",
  },
  {
    category: "Backend & APIs",
    description:
      "As a Full-Stack Developer, I build robust server-side architectures. From RESTful APIs to database design with MongoDB, I handle the complete backend pipeline.",
    techs: ["Node.js", "Express", "MongoDB", "REST APIs", "Firebase"],
    bg: "linear-gradient(135deg, #0c1a35 0%, #0a1e30 50%, #0f2240 100%)",
    accent: "#00e89d",
  },
];

function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [tab, setTab] = useState<"skills" | "github">("skills");

  const REPOS = [
    {
      name: "Bookit-5s-Arena",
      description: "Full-stack booking system for 5's Arena football facility",
      lang: "JavaScript",
      langColor: "#f7df1e",
      url: "https://github.com/RobynAwesome/Bookit-5s-Arena",
    },
    {
      name: "5s-Arena-Blog",
      description: "Community blog platform for 5's Arena",
      lang: "JavaScript",
      langColor: "#f7df1e",
      url: "https://github.com/RobynAwesome/5s-Arena-Blog",
    },
    {
      name: "Portfolio",
      description: "Personal portfolio built with React + Vite + TailwindCSS",
      lang: "TypeScript",
      langColor: "#3178c6",
      url: "https://github.com/RobynAwesome/Portfolio",
    },
  ];

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-12 sm:px-20 lg:px-36">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="mb-4 text-center text-2xl leading-tight font-black sm:text-3xl md:text-4xl">
            Full-Stack{" "}
            <span className="gradient-text">Architect.</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-base leading-relaxed text-gray-400 sm:text-lg">
            My experience across the entire MERN stack gives me confidence in
            the technologies & tools I use. Whether you need help bootstrapping
            your project or building production-grade features, I bring both
            frontend finesse and backend backbone.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 flex justify-center"
        >
          <div className="relative inline-flex rounded-full border border-[#1a2744] bg-[#0b1426]/80 p-1">
            <motion.div
              className="absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-[#0ea5e9]/20 to-[#00e89d]/20 border border-[#0ea5e9]/30"
              animate={{ x: tab === "skills" ? 0 : "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ width: "calc(50% - 2px)" }}
            />
            <button
              onClick={() => setTab("skills")}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                tab === "skills" ? "text-white" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              Tech Stack
            </button>
            <button
              onClick={() => setTab("github")}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 flex items-center gap-2 ${
                tab === "github" ? "text-white" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              <Github size={14} />
              GitHub
            </button>
          </div>
        </motion.div>

        {tab === "skills" && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {SKILL_DATA.map((s, i) => (
              <motion.div
                key={s.category}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{
                  y: -8,
                  boxShadow: `0 0 40px ${s.accent}33, 0 0 80px ${s.accent}14`,
                  borderColor: `${s.accent}72`,
                }}
                className="group relative rounded-2xl border border-[#1a2744] overflow-hidden"
                style={{ background: s.bg }}
              >
                <motion.div
                  className="h-[2px] w-full origin-left"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${s.accent}, transparent)`,
                  }}
                  initial={{ scaleX: 0.3, opacity: 0.4 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="relative flex min-h-[320px] flex-col p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-white mb-4">
                    {s.category}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-400">
                    {s.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
                    {s.techs.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[#0ea5e9]/8 px-2 py-0.5 text-[10px] font-medium text-[#0ea5e9]/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {tab === "github" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div
              className="mb-6 overflow-hidden rounded-2xl border border-[#1a2744]"
              style={{ background: "linear-gradient(135deg, #0c1a35, #0f2240)" }}
            >
              <div className="flex items-center gap-5 p-6 sm:p-8">
                <img
                  src="/web-image-2.JPG"
                  alt="GitHub avatar"
                  className="h-16 w-16 rounded-full border-2 border-[#0ea5e9]/30 object-cover object-top"
                />
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    RobynAwesome
                  </h3>
                  <p className="text-sm text-gray-400">
                    Full-Stack MERN Developer | Cape Town, South Africa
                  </p>
                </div>
                <a
                  href="https://github.com/RobynAwesome/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto hidden items-center gap-2 rounded-lg border border-[#1a2744] px-4 py-2 text-sm font-medium text-gray-300 transition-all hover:border-[#00e89d]/40 hover:text-white sm:flex"
                >
                  <Github size={14} />
                  View Profile
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {REPOS.map((repo, i) => (
                <motion.a
                  key={repo.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-[#1a2744] p-5 transition-all duration-300 hover:border-[#0ea5e9]/40"
                  style={{ background: "linear-gradient(135deg, #0c1a35, #0a1628)" }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-sm font-bold text-[#0ea5e9] group-hover:text-[#00e89d] transition-colors">
                      {repo.name}
                    </span>
                    <ExternalLink
                      size={12}
                      className="text-gray-600 group-hover:text-[#00e89d] transition-colors"
                    />
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    {repo.description}
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: repo.langColor }}
                    />
                    <span className="text-xs text-gray-500">{repo.lang}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 flex justify-center"
        >
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#00e89d]/40 px-8 py-4 text-base font-bold text-[#00e89d] transition-all duration-300 hover:border-[#00e89d]/60 hover:bg-[#00e89d]/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Check my resume
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── JOURNEY SECTION (unchanged) ─────────────────────────────────────────────

const JOURNEY = [
  {
    year: "2022",
    title: "The Spark",
    description:
      "Asked myself 'how do websites work?' — dove into HTML, CSS, and JavaScript. Built my first static pages and caught the coding bug.",
    color: "#0ea5e9",
  },
  {
    year: "2023",
    title: "Going Full-Stack",
    description:
      "Learned React and Node.js. Built small CRUD apps and discovered the power of the MERN stack. Started studying Computer Engineering at CPUT.",
    color: "#00e89d",
  },
  {
    year: "2024",
    title: "Leveling Up",
    description:
      "Mastered MongoDB, Express, and TypeScript. Explored Docker, Firebase, and modern tooling. Started freelancing and taking on real client work.",
    color: "#6366f1",
  },
  {
    year: "2025–26",
    title: "Building for Production",
    description:
      "Shipped a full-stack booking system and community blog for 5's Arena / Hellenic FC. Integrated AI tools into my workflow to ship faster and write cleaner code.",
    color: "#00e89d",
  },
];

function JourneySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(0 4%, 100% 0, 100% 96%, 0 100%)",
          background:
            "linear-gradient(135deg, rgba(0,232,157,0.10) 0%, rgba(14,165,233,0.12) 50%, rgba(0,232,157,0.08) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(0 4%, 100% 0, 100% 96%, 0 100%)",
          background: "rgba(6, 13, 24, 0.75)",
        }}
      />
      <div className="relative max-w-5xl mx-auto px-12 sm:px-20 lg:px-36" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6 text-white">
            Passionate and{" "}
            <span className="gradient-text">Curious.</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
            My journey into tech started with a simple question — how do websites
            work? That curiosity led me from HTML basics to mastering the full
            MERN stack. Today, as a BEng Tech Computer Engineering student and
            Freelance Web Developer, I build technology that fosters community
            engagement and creates meaningful connections.
          </p>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/resume"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-sm font-semibold text-white hover:bg-white/10 hover:border-[#00e89d]/40 transition-all duration-300"
          >
            Discover my story
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#0ea5e9]/40 via-[#00e89d]/40 to-transparent" />
          <div className="space-y-8">
            {JOURNEY.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="relative pl-14 sm:pl-16"
              >
                <div
                  className="absolute left-2.5 sm:left-4.5 top-1.5 w-3.5 h-3.5 rounded-full border-2"
                  style={{
                    borderColor: item.color,
                    backgroundColor: `${item.color}30`,
                    boxShadow: `0 0 10px ${item.color}40`,
                  }}
                />
                <div className="rounded-2xl border border-[#1a2744] bg-[#0b1426]/60 backdrop-blur-sm p-5 sm:p-6">
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: item.color }}
                  >
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 text-center"
        >
          <a
            href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0ea5e9] hover:text-[#0ea5e9]/70 transition-colors"
          >
            <Linkedin size={16} />
            Follow my journey on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── AI SECTION (unchanged) ──────────────────────────────────────────────────

function AiSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden py-24 sm:py-32" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#060d18] via-[#0b1426] to-[#060d18]" />
      <div className="dot-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-5xl px-12 sm:px-20 lg:px-36">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-xs font-semibold tracking-widest text-[#0ea5e9] uppercase">
              Next-Gen Workflow
            </p>
            <h2 className="mb-6 text-4xl font-black sm:text-5xl md:text-6xl">
              <span className="gradient-text">AI-Augmented</span>{" "}
              <span className="gradient-text-green">Development.</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-400">
              Artificial Intelligence is reshaping how we build software, and
              I'm embracing it fully. By integrating tools like Claude, GitHub
              Copilot, and cutting-edge LLMs into my workflow, I'm able to
              prototype faster, debug smarter, and write cleaner code. This
              isn't about replacing the craft of development — it's about
              elevating it.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Claude · GPT · Gemini", "CLI-powered", "MCP Protocol"].map(
                (tag, i) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                      i === 0
                        ? "border-[#0ea5e9]/20 bg-[#0ea5e9]/5 text-[#0ea5e9]"
                        : i === 1
                        ? "border-[#00e89d]/20 bg-[#00e89d]/5 text-[#00e89d]"
                        : "border-[#6366f1]/20 bg-[#6366f1]/5 text-[#6366f1]"
                    }`}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="flex items-center justify-center"
          >
            <img
              src="/web-image-3.png"
              alt="AI Ring"
              className="animate-spin-slow h-[500px] w-[500px] drop-shadow-[0_0_60px_rgba(14,165,233,0.4)]"
              style={{ mixBlendMode: "screen" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA SECTION (unchanged) ─────────────────────────────────────────────────

function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#060d18] via-[#060d18]/70 to-[#060d18]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#00e89d]/10 via-transparent to-[#0ea5e9]/10" />
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-12 sm:px-20 lg:px-36">
        <div className="rounded-3xl led-border-outer p-[1px]">
          <div className="rounded-[22px] led-border-inner p-[1px]">
            <div className="rounded-[20px] bg-[#0b1426]/80 backdrop-blur-sm p-10 sm:p-16 flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="relative mb-8"
              >
                <div className="absolute inset-0 rounded-full bg-[#00e89d] blur-2xl scale-125 opacity-20" />
                <div className="absolute inset-0 rounded-full bg-[#00e89d] scale-105" />
                <img
                  src="/web-image-2.JPG"
                  alt="Kholofelo Robyn Rababalela"
                  className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover object-top border-3 border-white"
                />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4"
              >
                Let's Build Something{" "}
                <span className="gradient-text">Amazing</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-400 text-sm sm:text-base max-w-md mb-10"
              >
                Ready to bring your ideas to life? Let's collaborate and create
                something incredible together.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <Link
                  to="/resume"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-white/20 text-white hover:border-white/40 hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
                >
                  More about me
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-[#00e89d] to-[#34d399] text-[#060d18] hover:shadow-lg hover:shadow-[#00e89d]/20 transition-all duration-300"
                >
                  Hire me
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PAGE EXPORT ──────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TechTicker />
      <AboutSection />
      <SkillsSection />
      <JourneySection />
      <AiSection />
      <CtaSection />
    </main>
  );
}