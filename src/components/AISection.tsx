import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AIPromptCircle from "./AIPromptCircle";
import type { CircleConfig } from "./AIPromptCircle";

const circleConfigs: CircleConfig[] = [
  {
    colors: ["#00e89d", "#0ea5e9"],
    radiusRatio: 0.42,
    deformationRatio: 0.09,
    opacity: 0.6,
    duration: 5000,
  },
  {
    colors: ["#6366f1", "#0ea5e9"],
    radiusRatio: 0.32,
    deformationRatio: 0.07,
    opacity: 0.8,
    duration: 3500,
    hollow: true,
    borderWidth: 12,
  },
];

export default function AISection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#060d18] via-[#0b1426] to-[#060d18]" />
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-12 sm:px-20 lg:px-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[#0ea5e9] mb-3">
              Next-Gen Workflow
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="gradient-text">AI-Augmented</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-4">
              I built <span className="text-[#00e89d] font-semibold">orch</span> — a multi-AI collaboration platform that runs Claude, GPT, and Gemini in a private group, orchestrating coordinated discussions where multiple AIs learn from each other's perspectives.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Beyond building AI tools, I integrate Claude into every stage of my development workflow — from prototyping and debugging to shipping production-grade code. AI amplifies the craft; it doesn't replace it.
            </p>

            {/* orch feature badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { label: "Claude · GPT · Gemini", color: "#00e89d" },
                { label: "CLI-powered", color: "#0ea5e9" },
                { label: "MCP Protocol", color: "#6366f1" },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: `${badge.color}10`,
                    border: `1px solid ${badge.color}30`,
                    color: badge.color,
                  }}
                >
                  {badge.label}
                </span>
              ))}
            </div>

            <motion.a
              href="https://github.com/RobynAwesome/Introduction-to-MCP"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[#00e89d] font-semibold hover:text-[#34d399] transition-colors duration-300"
              whileHover={{ x: 4 }}
            >
              View orch on GitHub
              <svg
                className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>

          {/* RIGHT — Morphing circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            {/* Desktop size */}
            <div className="hidden sm:block">
              <AIPromptCircle circles={circleConfigs} size={400} />
            </div>
            {/* Mobile size */}
            <div className="sm:hidden">
              <AIPromptCircle circles={circleConfigs} size={300} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
