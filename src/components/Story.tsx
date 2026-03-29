import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const milestones = [
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

export default function Story() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      {/* Angled background */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(0 4%, 100% 0, 100% 96%, 0 100%)",
          background: "linear-gradient(135deg, rgba(0,232,157,0.10) 0%, rgba(14,165,233,0.12) 50%, rgba(0,232,157,0.08) 100%)",
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
        {/* Header */}
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
            My journey into tech started with a simple question — how do websites work?
            That curiosity led me from HTML basics to mastering the full MERN stack.
            Today, as a Computer Engineering student and Freelance Web Developer, I build
            technology that fosters community engagement and creates meaningful connections.
          </p>

          <Link
            to="/resume"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-sm font-semibold text-white hover:bg-white/10 hover:border-[#00e89d]/40 transition-all duration-300"
          >
            Discover my story
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#0ea5e9]/40 via-[#00e89d]/40 to-transparent" />

          <div className="space-y-8">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="relative pl-14 sm:pl-16"
              >
                {/* Dot on timeline */}
                <div
                  className="absolute left-2.5 sm:left-4.5 top-1.5 w-3.5 h-3.5 rounded-full border-2"
                  style={{
                    borderColor: milestone.color,
                    backgroundColor: `${milestone.color}30`,
                    boxShadow: `0 0 10px ${milestone.color}40`,
                  }}
                />

                <div className="rounded-2xl border border-[#1a2744] bg-[#0b1426]/60 backdrop-blur-sm p-5 sm:p-6 hover:border-[#1a2744]/80 transition-all duration-300">
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: milestone.color }}
                  >
                    {milestone.year}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* LinkedIn CTA */}
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
