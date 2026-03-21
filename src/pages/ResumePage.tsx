import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
} from "lucide-react";

/* ───── Toolbox icons (real SVGs) ───── */
const JSIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12">
    <rect width="48" height="48" rx="6" fill="#f7df1e" />
    <text x="24" y="32" textAnchor="middle" fontWeight="900" fontSize="18" fill="#1a1a1a" fontFamily="Inter, system-ui">JS</text>
  </svg>
);
const TSIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12">
    <rect width="48" height="48" rx="6" fill="#3178c6" />
    <text x="24" y="32" textAnchor="middle" fontWeight="900" fontSize="18" fill="#fff" fontFamily="Inter, system-ui">TS</text>
  </svg>
);
const CSSIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12">
    <rect width="48" height="48" rx="6" fill="#264de4" />
    <text x="24" y="32" textAnchor="middle" fontWeight="900" fontSize="16" fill="#fff" fontFamily="Inter, system-ui">CSS</text>
  </svg>
);
const ReactIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12">
    <circle cx="24" cy="24" r="4" fill="#61dafb" />
    <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="#61dafb" strokeWidth="1.6" />
    <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="#61dafb" strokeWidth="1.6" transform="rotate(60 24 24)" />
    <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="#61dafb" strokeWidth="1.6" transform="rotate(120 24 24)" />
  </svg>
);
const NodeIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12">
    <rect width="48" height="48" rx="6" fill="#333" />
    <text x="24" y="30" textAnchor="middle" fontWeight="700" fontSize="10" fill="#68a063" fontFamily="Inter, system-ui">Node</text>
  </svg>
);
const MongoIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12">
    <rect width="48" height="48" rx="6" fill="#023430" />
    <text x="24" y="30" textAnchor="middle" fontWeight="700" fontSize="9" fill="#00ed64" fontFamily="Inter, system-ui">Mongo</text>
  </svg>
);
const NextIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12">
    <rect width="48" height="48" rx="6" fill="#000" />
    <text x="24" y="32" textAnchor="middle" fontWeight="900" fontSize="16" fill="#fff" fontFamily="Inter, system-ui">N</text>
  </svg>
);
const ViteIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12">
    <rect width="48" height="48" rx="6" fill="#1a1a2e" />
    <text x="24" y="30" textAnchor="middle" fontWeight="700" fontSize="10" fill="#bd34fe" fontFamily="Inter, system-ui">Vite</text>
  </svg>
);
const TailwindIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12">
    <rect width="48" height="48" rx="6" fill="#0f172a" />
    <text x="24" y="30" textAnchor="middle" fontWeight="700" fontSize="8" fill="#38bdf8" fontFamily="Inter, system-ui">TW</text>
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
    <main className="pt-28 pb-28 min-h-screen">
      {/* ───── Hero: Name + Photo + Skills badges ───── */}
      <section className="relative overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#00e89d]/5 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#0ea5e9]/5 blur-[120px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-12 sm:px-20 lg:px-36 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                className="text-5xl sm:text-6xl md:text-7xl font-black leading-none mb-2"
              >
                <span className="bg-gradient-to-r from-[#00e89d] via-[#0ea5e9] to-[#a855f7] bg-clip-text text-transparent">
                  Full-Stack Developer.
                </span>
              </motion.h1>

              <p className="text-gray-500 text-sm mb-6">
                Freelance <span className="text-[#00e89d]">since 2026</span>
              </p>

              <h2 className="text-4xl sm:text-5xl font-black text-[#00e89d] mb-1">
                Kholofelo.
              </h2>
              <p className="text-2xl sm:text-3xl text-gray-400 font-light mb-6">
                Kholofelo Robyn
                <br />
                Rababalela
              </p>

              <div className="flex items-center gap-4 mb-6">
                <a
                  href="https://github.com/RobynAwesome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#00e89d] transition-colors"
                >
                  <Github size={16} />
                  github.com/RobynAwesome
                </a>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <a
                  href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#0ea5e9] transition-colors"
                >
                  <Linkedin size={16} />
                  linkedin.com/in/kholofelo
                </a>
              </div>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-[#00e89d]/30 text-[#00e89d] hover:bg-[#00e89d]/10 transition-all duration-300"
              >
                <Download size={16} />
                Download
              </motion.a>

              {/* Gradient line */}
              <div className="mt-10 h-[3px] w-48 bg-gradient-to-r from-[#00e89d] via-[#0ea5e9] to-[#a855f7] rounded-full" />
            </motion.div>

            {/* Right — Photo with floating badges */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:flex justify-center"
            >
              <div className="relative">
                {/* Concentric circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[360px] h-[360px] rounded-full border border-[#0ea5e9]/15" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[280px] h-[280px] rounded-full border border-[#0ea5e9]/20" />
                </div>

                {/* Photo */}
                <img
                  src="/web-image-2.JPG"
                  alt="Kholofelo"
                  className="w-64 h-64 rounded-full object-cover object-top relative z-10 border-4 border-[#0ea5e9]/20 grayscale"
                />

                {/* Floating badge — Web Developer */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 -left-16 z-20 rounded-2xl px-6 py-3 text-center min-w-[170px]"
                  style={{
                    background: "rgba(10, 18, 36, 0.85)",
                    backdropFilter: "blur(20px)",
                    border: "2px solid rgba(14, 165, 233, 0.35)",
                    boxShadow: "0 0 25px rgba(14,165,233,0.1), 0 10px 40px rgba(0,0,0,0.5)",
                  }}
                >
                  <p className="text-[10px] text-gray-500">Professional</p>
                  <p className="text-base font-black text-[#0ea5e9]">Web Developer</p>
                </motion.div>

                {/* Floating badge — First Website */}
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -top-6 -right-8 z-20 rounded-2xl px-5 py-2.5 text-center"
                  style={{
                    background: "rgba(10, 18, 36, 0.85)",
                    backdropFilter: "blur(20px)",
                    border: "2px solid rgba(0, 232, 157, 0.35)",
                    boxShadow: "0 0 25px rgba(0,232,157,0.1), 0 10px 40px rgba(0,0,0,0.5)",
                  }}
                >
                  <p className="text-xs font-bold text-[#00e89d]">First Website</p>
                  <p className="text-[10px] text-gray-500">2024</p>
                </motion.div>

                {/* Floating badge — MERN Stack */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-12 -right-20 z-20 rounded-2xl px-6 py-3 text-center min-w-[160px]"
                  style={{
                    background: "rgba(10, 18, 36, 0.85)",
                    backdropFilter: "blur(20px)",
                    border: "2px solid rgba(14, 165, 233, 0.35)",
                    boxShadow: "0 0 25px rgba(14,165,233,0.1), 0 10px 40px rgba(0,0,0,0.5)",
                  }}
                >
                  <p className="text-[10px] text-gray-500">Full-Stack</p>
                  <p className="text-base font-black text-[#0ea5e9]">MERN Stack</p>
                </motion.div>

                {/* Floating badge — Engineering */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute -bottom-8 -left-10 z-20 rounded-2xl px-5 py-2.5 text-center"
                  style={{
                    background: "rgba(10, 18, 36, 0.85)",
                    backdropFilter: "blur(20px)",
                    border: "2px solid rgba(168, 85, 247, 0.35)",
                    boxShadow: "0 0 25px rgba(168,85,247,0.1), 0 10px 40px rgba(0,0,0,0.5)",
                  }}
                >
                  <p className="text-xs font-bold text-[#a855f7]">Computer Eng</p>
                  <p className="text-[10px] text-gray-500">CPUT · Student</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── About Me + Interests + Toolbox (moox style) ───── */}
      <section className="max-w-5xl mx-auto px-12 sm:px-20 lg:px-36 mt-8">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-black text-[#00e89d] mb-8">
            About Me
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Bio text */}
            <div className="lg:col-span-1">
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                I am Kholofelo Robyn Rababalela. I live in Cape Town, South Africa.
                I am a Computer Engineering student specializing in full-stack web development.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                I love to design and develop UIs. I care about UX, responsiveness,
                performance, maintainability and scalability.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                When I'm not coding, I enjoy football, music, gaming,
                and exploring new technologies — especially AI-augmented workflows.
              </p>
            </div>

            {/* Interests grid */}
            <div>
              <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-5">
                Interests
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {interests.map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-1.5">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-[10px] text-gray-500">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Toolbox grid */}
            <div>
              <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-5">
                Toolbox
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {toolbox.map((tool) => (
                  <div key={tool.label} className="flex flex-col items-center gap-1.5">
                    {tool.icon}
                    <span className="text-[10px] text-gray-500">{tool.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ───── Stats section (moox style) ───── */}
      <section className="mt-20 py-20 relative overflow-hidden bg-gradient-to-br from-[#00e89d]/15 via-[#0ea5e9]/10 to-[#a855f7]/15">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-[#00e89d]/8 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-[#a855f7]/8 blur-[100px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-12 sm:px-20 lg:px-36">
          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-end">
              {/* Name / identity */}
              <div className="col-span-2 lg:col-span-1">
                <p className="text-gray-500 text-sm">@RobynAwesome</p>
                <h3 className="text-3xl sm:text-4xl font-black text-[#00e89d]">
                  Kholofelo
                </h3>
                <p className="text-gray-400 text-lg">Freelance</p>
                <p className="text-[#0ea5e9] font-semibold">since 2026</p>
              </div>

              {/* Stat: South African */}
              <div className="text-center">
                <p className="text-gray-500 text-sm mb-1">South African</p>
                <p className="text-5xl sm:text-6xl font-black text-white leading-none">
                  20
                  <span className="text-xl text-gray-500 ml-1">yo</span>
                </p>
              </div>

              {/* Stat: First website */}
              <div
                className="rounded-2xl p-6 text-center"
                style={{
                  background: "rgba(15, 23, 42, 0.6)",
                  border: "2px solid rgba(0, 232, 157, 0.25)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <p className="text-xs text-gray-500 mb-1">First website</p>
                <p className="text-4xl sm:text-5xl font-black text-white leading-none mb-1">
                  2
                </p>
                <p className="text-[#00e89d] text-sm font-semibold">years ago</p>
              </div>

              {/* Stat: Professional */}
              <div className="text-center">
                <p className="text-gray-500 text-sm mb-1">Professional for</p>
                <p className="text-5xl sm:text-6xl font-black text-white leading-none">
                  1
                  <span className="text-2xl text-gray-500 ml-1">+</span>
                </p>
                <p className="text-[#0ea5e9] text-lg font-semibold">year</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ───── Experience ───── */}
      <section className="max-w-5xl mx-auto px-12 sm:px-20 lg:px-36 mt-20">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0ea5e9] mb-10">
            Experience
          </h2>

          <div className="relative pl-8 border-l-2 border-[#0ea5e9]/20">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#00e89d] border-3 border-[#060d18]" />

            <div
              className="rounded-2xl p-7 sm:p-8"
              style={{
                background: "rgba(15, 23, 42, 0.4)",
                border: "1px solid rgba(14, 165, 233, 0.15)",
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-black text-white">
                    Freelance Web Developer
                  </h3>
                  <p className="text-[#00e89d] font-bold text-sm mt-1">
                    5's Arena · Hellenic Football Club
                  </p>
                </div>
                <span className="flex items-center gap-2 text-xs text-gray-500 mt-2 sm:mt-0 px-3 py-1.5 rounded-lg border border-[#0ea5e9]/20 bg-[#0ea5e9]/5">
                  <Calendar size={12} />
                  Jan 2026 — Present
                </span>
              </div>
              <ul className="text-gray-400 text-sm space-y-2.5">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00e89d] mt-1.5 flex-shrink-0" />
                  Building a full-stack booking and management system for a 5-a-side football venue
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] mt-1.5 flex-shrink-0" />
                  Developing a community blog platform with authentication, RBAC, and image uploads
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] mt-1.5 flex-shrink-0" />
                  Full MERN stack: React, Node.js, Express, MongoDB with TailwindCSS
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ───── Education ───── */}
      <section className="max-w-5xl mx-auto px-12 sm:px-20 lg:px-36 mt-16">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-black text-[#a855f7] mb-10">
            Education
          </h2>

          <div className="relative pl-8 border-l-2 border-[#a855f7]/20">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#a855f7] border-3 border-[#060d18]" />

            <div
              className="rounded-2xl p-7 sm:p-8"
              style={{
                background: "rgba(15, 23, 42, 0.4)",
                border: "1px solid rgba(168, 85, 247, 0.15)",
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-black text-white">
                    Bachelor of Eng Tech — Computer Engineering
                  </h3>
                  <p className="text-[#a855f7] font-bold text-sm mt-1">
                    Cape Peninsula University of Technology (CPUT)
                  </p>
                </div>
                <span className="flex items-center gap-2 text-xs text-gray-500 mt-2 sm:mt-0 px-3 py-1.5 rounded-lg border border-[#a855f7]/20 bg-[#a855f7]/5">
                  <Calendar size={12} />
                  2025 — Present
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Studying computer engineering with a focus on software development,
                embedded systems, and full-stack web technologies.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ───── Certificates ───── */}
      <section className="max-w-5xl mx-auto px-12 sm:px-20 lg:px-36 mt-16">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0ea5e9] mb-10">
            Certificates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { title: "AI Fluency", issuer: "Anthropic / Skilljar", color: "#00e89d" },
              { title: "Skill Certificate", issuer: "HackerRank", color: "#0ea5e9" },
              { title: "Level 5 Achievement", issuer: "HackerRank", color: "#a855f7" },
            ].map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-2xl p-6 group"
                style={{
                  background: "rgba(15, 23, 42, 0.5)",
                  border: `1px solid ${cert.color}25`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${cert.color}15` }}
                >
                  <Award size={22} style={{ color: cert.color }} />
                </div>
                <h3 className="text-white font-bold text-base mb-1">{cert.title}</h3>
                <p className="text-xs text-gray-500">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ───── Links ───── */}
      <section className="max-w-5xl mx-auto px-12 sm:px-20 lg:px-36 mt-16">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-10">
            Links & Profiles
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: "GitHub", href: "https://github.com/RobynAwesome", icon: <Github size={20} />, color: "#fff" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/", icon: <Linkedin size={20} />, color: "#0ea5e9" },
              { label: "HackerRank", href: "https://www.hackerrank.com/profile/rkholofelo", icon: <Briefcase size={20} />, color: "#00e89d" },
              { label: "ORCID", href: "https://orcid.org/0009-0000-3995-6147", icon: <GraduationCap size={20} />, color: "#a3e635" },
              { label: "PayPal", href: "https://paypal.me/osheenviews", icon: <ExternalLink size={20} />, color: "#0ea5e9" },
              { label: "Ko-fi", href: "https://ko-fi.com/robynawesome", icon: <ExternalLink size={20} />, color: "#f97316" },
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
                className="flex flex-col items-center gap-2 p-4 rounded-xl transition-all"
                style={{
                  background: "rgba(15, 23, 42, 0.4)",
                  border: `1px solid ${link.color}15`,
                }}
              >
                <div style={{ color: link.color }}>{link.icon}</div>
                <span className="text-xs text-gray-400 font-medium">{link.label}</span>
              </motion.a>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ───── Latest Experiences (Stage 2 — moox style) ───── */}
      <section className="mt-24 py-20 relative overflow-hidden bg-gradient-to-b from-transparent via-[#0ea5e9]/5 to-transparent">
        <div className="max-w-5xl mx-auto px-12 sm:px-20 lg:px-36">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-black text-center mb-16">
              <span className="bg-gradient-to-r from-[#00e89d] via-[#0ea5e9] to-[#a855f7] bg-clip-text text-transparent">
                Latest Experiences
              </span>
            </h2>

            {/* Year marker */}
            <p className="text-3xl font-black text-white mb-10">2026</p>

            {/* Project experience cards */}
            <div className="space-y-16">
              {/* Bookit — 5's Arena */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="rounded-3xl overflow-hidden"
                style={{
                  background: "rgba(15, 23, 42, 0.5)",
                  border: "1px solid rgba(14, 165, 233, 0.15)",
                }}
              >
                {/* Screenshot */}
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <img
                    src="/web-image-5s.png"
                    alt="Bookit 5's Arena"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 sm:p-10">
                  <div className="flex items-start justify-between mb-3">
                    <p className="text-xs font-bold tracking-widest uppercase text-[#0ea5e9]">
                      Full-Stack Booking Platform
                    </p>
                    <p className="text-xs italic text-gray-500">5's Arena</p>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                    Bookit — Real-time venue booking system
                  </h3>
                  <p className="text-sm text-gray-500 mb-6">3 months and counting</p>
                  <p className="text-sm text-gray-400 flex flex-wrap gap-2">
                    {["React", "Node.js", "Express", "MongoDB", "CSS", "JavaScript"].map((t) => (
                      <span key={t} className="text-[#0ea5e9]/70">#{t}</span>
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
                className="rounded-3xl overflow-hidden"
                style={{
                  background: "rgba(15, 23, 42, 0.5)",
                  border: "1px solid rgba(0, 232, 157, 0.15)",
                }}
              >
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <img
                    src="/web-image-5s.png"
                    alt="5's Arena Blog"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
                </div>

                <div className="p-8 sm:p-10">
                  <div className="flex items-start justify-between mb-3">
                    <p className="text-xs font-bold tracking-widest uppercase text-[#00e89d]">
                      Community Blog
                    </p>
                    <p className="text-xs italic text-gray-500">5's Arena</p>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                    Community blog with auth, RBAC & rich text
                  </h3>
                  <p className="text-sm text-gray-500 mb-6">3 months and counting</p>
                  <p className="text-sm text-gray-400 flex flex-wrap gap-2">
                    {["React", "Node.js", "Express", "MongoDB", "TailwindCSS"].map((t) => (
                      <span key={t} className="text-[#00e89d]/70">#{t}</span>
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
                className="rounded-3xl overflow-hidden"
                style={{
                  background: "rgba(15, 23, 42, 0.5)",
                  border: "1px solid rgba(168, 85, 247, 0.15)",
                }}
              >
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <img
                    src="/profile-banner.jpg"
                    alt="Portfolio Website"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
                </div>

                <div className="p-8 sm:p-10">
                  <div className="flex items-start justify-between mb-3">
                    <p className="text-xs font-bold tracking-widest uppercase text-[#a855f7]">
                      Personal Brand
                    </p>
                    <p className="text-xs italic text-gray-500">Personal</p>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                    Animated portfolio with Framer Motion
                  </h3>
                  <p className="text-sm text-gray-500 mb-6">Ongoing</p>
                  <p className="text-sm text-gray-400 flex flex-wrap gap-2">
                    {["React", "TypeScript", "TailwindCSS", "Vite", "Framer Motion"].map((t) => (
                      <span key={t} className="text-[#a855f7]/70">#{t}</span>
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
        className="relative py-24 sm:py-32 overflow-hidden"
        style={{
          backgroundImage: "url('/web-image-4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#060d18] via-[#060d18]/60 to-[#060d18]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00e89d]/10 via-transparent to-[#0ea5e9]/10" />

        <div className="relative max-w-4xl mx-auto px-12 sm:px-20 lg:px-36 text-center">
          <AnimatedSection>
            {/* Avatar */}
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 rounded-full bg-[#00e89d] blur-2xl scale-125 opacity-25" />
              <div className="absolute inset-0 rounded-full bg-[#00e89d] scale-105" />
              <img
                src="/web-image-2.JPG"
                alt="Kholofelo"
                className="relative w-24 h-24 rounded-full object-cover object-top border-3 border-white"
              />
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">
              Ready to build something awesome together?
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold border border-white/20 text-white hover:border-white/40 hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
              >
                <Briefcase size={18} />
                More about me
              </a>
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold bg-gradient-to-r from-[#0ea5e9] to-[#00e89d] text-[#060d18] hover:shadow-lg hover:shadow-[#0ea5e9]/20 transition-all duration-300"
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
