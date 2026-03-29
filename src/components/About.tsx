import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <section
      id="about"
      className="py-16 sm:py-20 relative overflow-hidden"
    >
      {/* Angled background with clip-path */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(0 4%, 100% 0, 100% 96%, 0 100%)",
          background: "linear-gradient(135deg, rgba(0,232,157,0.12) 0%, rgba(14,165,233,0.15) 50%, rgba(0,232,157,0.10) 100%)",
        }}
      />
      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(0 4%, 100% 0, 100% 96%, 0 100%)",
          background: "rgba(6, 13, 24, 0.7)",
        }}
      />

      <div className="max-w-5xl mx-auto px-12 sm:px-20 lg:px-36 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch overflow-hidden">
          {/* Left -- Image with gentle parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="relative self-stretch flex items-center overflow-hidden"
          >
            <motion.div
              className="relative w-full h-full"
              style={{ y: imageY, opacity: imageOpacity }}
            >
              <img
                src="/web-image-1.jpg"
                alt="Web development project showcase"
                className="w-full h-full object-cover object-top rounded-3xl shadow-2xl shadow-black/40"
                style={{
                  maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right -- Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative z-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-2 text-white">
              You dream it.
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight gradient-text mb-6">
              I craft it.
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              I'm a 4th-year Computer Engineering student at Cape Peninsula University
              of Technology and a Freelance Web Developer specializing in the MERN stack.
              Since January 2026, I've been building a comprehensive digital platform for
              5's Arena associated with Hellenic Football Club — a custom full-stack solution
              featuring a community blog and an integrated booking system. I use AI tools
              like Claude and Copilot daily to ship faster and write cleaner code.
            </p>

            <Link
              to="/resume"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold bg-[#060d18]/60 border border-white/20 text-white hover:border-[#00e89d]/60 hover:bg-[#060d18]/80 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              More about me
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
