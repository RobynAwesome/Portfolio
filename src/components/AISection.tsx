import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { aiProduct } from "../data/portfolioContent";

export default function AISection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden py-24 sm:py-32" ref={ref}>
      {/* Dark bg with subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060d18] via-[#0b1426] to-[#060d18]" />
      <div className="dot-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-5xl px-12 sm:px-20 lg:px-36">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}} // Added filter blur for consistency
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-xs font-semibold tracking-widest text-[#0ea5e9] uppercase">
              AI Product
            </p>
            <h2 className="mb-6 text-4xl font-black sm:text-5xl md:text-6xl">
              <span className="gradient-text">Kopano</span>{" "}
              <span className="gradient-text-green">Context.</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-400">
              {aiProduct.problem} On the homepage I want this to read as a teaser,
              not the full breakdown, so the architecture, evals, failure modes,
              and measurable results live on the projects page where they belong.
            </p>
            <motion.div
              className="mb-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 font-semibold text-[#00e89d] transition-colors duration-300 hover:text-[#34d399]"
              >
                Open the full KC breakdown
                <svg
                  className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <motion.a
                href="https://github.com/RobynAwesome/Introduction-to-MCP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-[#0ea5e9] transition-colors duration-300 hover:text-[#38bdf8]"
                whileHover={{ x: 4 }}
              >
                View repository
              </motion.a>
            </motion.div>
            <motion.div
              className="grid gap-3 sm:grid-cols-2"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {aiProduct.measurableResults.slice(0, 4).map((result) => (
                <div
                  key={result.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
                    {result.label}
                  </p>
                  <p className="mt-2 text-lg font-black text-white">{result.value}</p>
                </div>
              ))}
            </motion.div>
            {/* Feature badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#0ea5e9]/20 bg-[#0ea5e9]/5 px-3 py-1.5 text-xs font-medium text-[#0ea5e9]">
                Claude · Gemini · Grok
              </span>
              <span className="rounded-full border border-[#F5A623]/20 bg-[#F5A623]/5 px-3 py-1.5 text-xs font-medium text-[#F5A623]">
                Kopano Context
              </span>
              <span className="rounded-full border border-[#00e89d]/20 bg-[#00e89d]/5 px-3 py-1.5 text-xs font-medium text-[#00e89d]">
                SafeSkill Verified
              </span>
              <span className="rounded-full border border-[#6366f1]/20 bg-[#6366f1]/5 px-3 py-1.5 text-xs font-medium text-[#6366f1]">
                MCP Protocol
              </span>
            </div>
          </motion.div>

          {/* RIGHT — Morphing circles */}
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
