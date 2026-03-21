import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Github,
  GitPullRequest,
  GitMerge,
  Star,
  ExternalLink,
  Award,
  Code2,
  Users,
  Zap,
  Shield,
  Sparkles,
  ArrowUpRight,
  Heart,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] },
  }),
};

const contributions = [
  {
    title: "Bookit — 5's Arena",
    description:
      "Full-stack booking system for 5-a-side football. Open source with active development and community contributions.",
    techs: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/RobynAwesome/Bookit-5s-Arena",
    color: "#00e89d",
    gradient: "from-[#00e89d]/25 via-[#00e89d]/10 to-transparent",
    icon: Code2,
  },
  {
    title: "5's Arena Blog",
    description:
      "Community blog platform with auth, RBAC, and image uploads. Open for contributions and feature requests.",
    techs: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    github: "https://github.com/RobynAwesome/5s-Arena-Blog",
    color: "#0ea5e9",
    gradient: "from-[#0ea5e9]/25 via-[#0ea5e9]/10 to-transparent",
    icon: GitPullRequest,
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio — fully open source. Built with React, TypeScript, TailwindCSS, and Framer Motion.",
    techs: ["React", "TypeScript", "TailwindCSS", "Vite", "Framer Motion"],
    github: "https://github.com/RobynAwesome/Portfolio",
    color: "#a855f7",
    gradient: "from-[#a855f7]/25 via-[#a855f7]/10 to-transparent",
    icon: Star,
  },
];

const achievements = [
  {
    title: "Pull Shark",
    description: "Opened pull requests that have been merged",
    icon: GitMerge,
    color: "#00e89d",
    gradient: "from-[#00e89d]/20 to-[#00e89d]/5",
  },
  {
    title: "YOLO",
    description: "Merged a pull request without code review",
    icon: Zap,
    color: "#f7df1e",
    gradient: "from-[#f7df1e]/20 to-[#f7df1e]/5",
  },
  {
    title: "Pair Extraordinaire",
    description: "Co-authored commits on merged pull requests",
    icon: Users,
    color: "#0ea5e9",
    gradient: "from-[#0ea5e9]/20 to-[#0ea5e9]/5",
  },
];

const hackerRankSkills = [
  { name: "Problem Solving", level: "Verified", color: "#00e89d" },
  { name: "JavaScript", level: "Verified", color: "#f7df1e" },
  { name: "React", level: "Verified", color: "#61dafb" },
  { name: "Node.js", level: "Verified", color: "#00e89d" },
  { name: "CSS", level: "Verified", color: "#0ea5e9" },
  { name: "SQL", level: "Verified", color: "#a855f7" },
];

function SectionBlock({
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

export default function OpenSourcePage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <main className="pt-28 pb-20 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#00e89d]/15 via-[#0ea5e9]/10 to-[#a855f7]/15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#00e89d]/5 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-12 sm:px-20 lg:px-36 py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="text-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00e89d]/30 bg-[#00e89d]/10 text-xs font-bold tracking-widest uppercase text-[#00e89d] mb-6"
            >
              <Heart size={12} />
              Community
            </motion.p>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 leading-tight">
              Open{" "}
              <span className="bg-gradient-to-r from-[#00e89d] via-[#0ea5e9] to-[#a855f7] bg-clip-text text-transparent">
                Source
              </span>
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
              Contributing to the developer community through open source
              projects, collaboration, and knowledge sharing.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-12 sm:px-20 lg:px-36 space-y-24">
        {/* Open Source Projects */}
        <SectionBlock>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-10 flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#00e89d]/20 flex items-center justify-center">
              <GitPullRequest size={22} className="text-[#00e89d]" />
            </div>
            Open Source Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {contributions.map((item, i) => (
              <motion.a
                key={item.title}
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`group relative overflow-hidden p-8 rounded-3xl border-2 bg-gradient-to-br ${item.gradient} transition-all duration-500 hover:shadow-2xl`}
                style={{ borderColor: `${item.color}40` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${item.color}70`;
                  e.currentTarget.style.boxShadow = `0 12px 50px ${item.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${item.color}40`;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Glow */}
                <div
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ backgroundColor: item.color }}
                />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <item.icon size={22} style={{ color: item.color }} />
                    </div>
                    <h3 className="text-white font-black text-lg group-hover:text-[#00e89d] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-full text-xs font-bold border"
                        style={{
                          borderColor: `${item.color}30`,
                          backgroundColor: `${item.color}10`,
                          color: item.color,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold" style={{ color: item.color }}>
                    <Github size={15} />
                    View Repository
                    <ArrowUpRight size={14} className="ml-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </SectionBlock>

        {/* GitHub Achievements — colorful cards */}
        <SectionBlock delay={0.1}>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-10 flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#0ea5e9]/20 flex items-center justify-center">
              <Award size={22} className="text-[#0ea5e9]" />
            </div>
            GitHub Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ y: -6, scale: 1.03 }}
                className={`group relative overflow-hidden p-8 rounded-3xl border-2 bg-gradient-to-br ${item.gradient} text-center transition-all duration-500 hover:shadow-2xl`}
                style={{ borderColor: `${item.color}40` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${item.color}70`;
                  e.currentTarget.style.boxShadow = `0 12px 50px ${item.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${item.color}40`;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity"
                  style={{ backgroundColor: item.color }}
                />
                <div className="relative">
                  <div
                    className="w-18 h-18 rounded-2xl mx-auto flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${item.color}20`, width: "72px", height: "72px" }}
                  >
                    <item.icon size={32} style={{ color: item.color }} />
                  </div>
                  <h3 className="text-white font-black text-xl mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionBlock>

        {/* HackerRank Skills — bright pills */}
        <SectionBlock delay={0.1}>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-10 flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#a855f7]/20 flex items-center justify-center">
              <Shield size={22} className="text-[#a855f7]" />
            </div>
            HackerRank Verified Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {hackerRankSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.08}
                whileHover={{ y: -4, scale: 1.05 }}
                className="p-5 rounded-2xl border-2 text-center transition-all duration-300"
                style={{
                  borderColor: `${skill.color}30`,
                  backgroundColor: `${skill.color}08`,
                }}
              >
                <div
                  className="w-4 h-4 rounded-full mx-auto mb-3 shadow-lg"
                  style={{
                    backgroundColor: skill.color,
                    boxShadow: `0 0 15px ${skill.color}50`,
                  }}
                />
                <p className="text-white text-sm font-bold mb-1">
                  {skill.name}
                </p>
                <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: skill.color }}>
                  {skill.level}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <motion.a
              href="https://www.hackerrank.com/profile/rkholofelo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold border-2 border-[#00e89d]/40 text-[#00e89d] hover:bg-[#00e89d]/10 transition-all duration-300"
            >
              View HackerRank Profile
              <ExternalLink size={16} />
            </motion.a>
          </motion.div>
        </SectionBlock>

        {/* GitHub CTA */}
        <SectionBlock delay={0.1}>
          <div className="relative overflow-hidden p-10 sm:p-14 rounded-3xl border-2 border-[#00e89d]/30 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00e89d]/15 via-[#0ea5e9]/10 to-[#a855f7]/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#00e89d]/5 blur-3xl" />

            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-[#00e89d]/20 mx-auto flex items-center justify-center mb-6">
                <Github size={36} className="text-[#00e89d]" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Contribution Graph{" "}
                <span className="gradient-text">Coming Soon</span>
              </h3>
              <p className="text-gray-400 text-lg max-w-md mx-auto mb-10">
                GitHub contribution graph and activity feed integration is in
                progress. Stay tuned!
              </p>
              <motion.a
                href="https://github.com/RobynAwesome"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-bold bg-gradient-to-r from-[#00e89d] to-[#34d399] text-[#060d18] shadow-xl shadow-[#00e89d]/30 hover:shadow-2xl hover:shadow-[#00e89d]/40 transition-all duration-300"
              >
                <Github size={22} />
                Visit GitHub Profile
              </motion.a>
            </div>
          </div>
        </SectionBlock>
      </div>
    </main>
  );
}
