import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AISection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden"
      ref={ref}
    >
      {/* Dark bg with subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060d18] via-[#0b1426] to-[#060d18]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#00e89d]/5 via-[#0ea5e9]/5 to-[#6366f1]/5" />

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
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Artificial Intelligence is reshaping how we build software, and
              I'm embracing it fully. By integrating tools like Claude, GitHub
              Copilot, and cutting-edge LLMs into my workflow, I'm able to
              prototype faster, debug smarter, and write cleaner code. This
              isn't about replacing the craft of development — it's about
              elevating it. AI allows me to focus on what truly matters: the
              details that transform a good app into a great one. The precision,
              the polish, the seamless user experience. Human creativity
              amplified by machine intelligence — that's the future I'm building
              toward.
            </p>
            <motion.a
              href="#"
              className="group inline-flex items-center gap-2 text-[#00e89d] font-semibold hover:text-[#34d399] transition-colors duration-300"
              whileHover={{ x: 4 }}
            >
              Learn more
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

          {/* RIGHT — Spinning ring image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <img
              src="/web-image-3.png"
              alt="AI Ring"
              className="w-[500px] h-[500px] animate-spin-slow drop-shadow-[0_0_60px_rgba(14,165,233,0.4)]"
              style={{ mixBlendMode: "screen" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
