import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const contributions = [
  {
    name: "Bookit-5s-Arena",
    description: "Full-stack management system with CMS and business engine for 5-a-side football.",
    highlight: "4 stars",
  },
  {
    name: "5s-Arena-Blog",
    description: "Role-aware blog system with authentication, RBAC, image uploads, and infinite scroll.",
    highlight: "4 stars",
  },
  {
    name: "Portfolio",
    description: "Modern React + TypeScript portfolio with Framer Motion & TailwindCSS.",
    highlight: "Open Source",
  },
];

export default function OpenSource() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Gradient background transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1426]/50 to-transparent" />

      <div className="max-w-5xl mx-auto px-12 sm:px-20 lg:px-36 relative" ref={ref}>
        {/* Open Source card — moox.io style large card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl border border-[#1a2744] overflow-hidden"
        >
          {/* Card gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00e89d]/8 via-[#0ea5e9]/10 to-[#6366f1]/5" />
          {/* Large watermark */}
          <div className="absolute -bottom-10 -right-10 opacity-[0.03]">
            <svg className="w-64 h-64" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </div>

          <div className="relative p-8 sm:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00e89d]/20 to-[#0ea5e9]/20 flex items-center justify-center border border-[#1a2744]">
                <svg className="w-5 h-5 text-[#00e89d]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Open Source</h2>
            </div>

            <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed mb-2">
              I believe in the power of open source and building in public.
              All my projects are open source, and I actively contribute to the developer community.
            </p>
            <p className="text-white font-semibold mb-8">
              My work is publicly available and I'm proud to share my code with the world.
            </p>

            {/* Contributions list */}
            <div className="space-y-4 mb-8">
              {contributions.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00e89d] shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-white">
                      {c.name}
                      {c.highlight && (
                        <span className="ml-2 text-[11px] font-normal text-[#00e89d]">
                          {c.highlight}
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-gray-500">{c.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* GitHub Achievements */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["Pull Shark", "Quickdraw", "Pair Extraordinaire"].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 rounded-full text-xs font-medium border border-[#00e89d]/20 text-[#00e89d] bg-[#00e89d]/5"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Check resume CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/RobynAwesome"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#1a2744] text-sm font-semibold text-white hover:border-[#00e89d]/40 hover:bg-[#00e89d]/5 transition-all duration-300"
          >
            Check my GitHub
            <ArrowUpRight size={14} />
          </a>
        </motion.div>

        {/* HackerRank Skills showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16"
        >
          <p className="text-center text-xs font-medium tracking-[0.2em] uppercase text-gray-500 mb-8">
            Skills Verified On
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-40 hover:opacity-60 transition-opacity duration-500">
            {["HackerRank", "GitHub", "Anthropic", "Skilljar"].map((name) => (
              <span key={name} className="text-lg sm:text-xl font-bold text-gray-300 tracking-wide">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
