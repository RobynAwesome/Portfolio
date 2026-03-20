import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Story() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Gradient background — moox.io style magenta/purple sweep → adapted to green/blue */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00e89d]/10 via-[#0ea5e9]/15 to-[#6366f1]/10" />
      <div className="absolute inset-0 bg-[#060d18]/70" />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-8">
              Passionate and{" "}
              <span className="gradient-text">Curious.</span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-4">
              I am deeply passionate about leveraging full-stack development to build
              technology that fosters community engagement and creates meaningful connections.
            </p>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-4">
              My journey into tech started with a curiosity for how things work, and it
              evolved into a career in building them. From learning HTML & CSS to mastering
              the full MERN stack, every step has been driven by a hunger to create.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Now, with AI augmenting my workflow, I'm able to build faster, think bigger,
              and deliver polished products that push the boundaries of what's possible
              on the web.
            </p>

            <a
              href="https://orcid.org/0009-0000-3995-6147"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-sm font-semibold text-white hover:bg-white/5 transition-all duration-300"
            >
              Discover my story
            </a>
          </motion.div>

          {/* Right — Decorative image / AI ring */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[#00e89d]/20 animate-spin-slow" />
              <div
                className="absolute inset-3 rounded-full border-2 border-[#0ea5e9]/15 animate-spin-slow"
                style={{ animationDirection: "reverse", animationDuration: "25s" }}
              />
              <div className="absolute inset-6 rounded-full border border-[#6366f1]/10 animate-spin-slow" style={{ animationDuration: "30s" }} />

              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#00e89d]/20 via-[#0ea5e9]/15 to-[#6366f1]/10 blur-xl" />
              </div>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#00e89d] to-[#0ea5e9] flex items-center justify-center mb-3">
                    <svg className="w-8 h-8 text-[#060d18]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-xs font-semibold text-white">Augmented</p>
                  <p className="text-[10px] text-gray-500">with AI</p>
                </div>
              </div>

              {/* Floating dots */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-[#00e89d]/40"
                  style={{
                    top: `${15 + Math.sin((i * Math.PI) / 3) * 40}%`,
                    left: `${50 + Math.cos((i * Math.PI) / 3) * 40}%`,
                  }}
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
