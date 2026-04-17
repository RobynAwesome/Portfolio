import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [25, -25]);
  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0]
  );

  return (
    <section id="about" className="py-16 sm:py-20 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          transform: "skewY(-15deg)",
          transformOrigin: "top left",
          top: "-20%",
          bottom: "-20%",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          transform: "skewY(-15deg)",
          transformOrigin: "top left",
          top: "-20%",
          bottom: "-20%",
          boxShadow:
            "0 200px 500px rgba(0,232,157,0.35), 0 -100px 300px rgba(14,165,233,0.3), 0 100px 250px rgba(0,0,0,0.7), 0 -50px 150px rgba(0,0,0,0.5), 0 300px 600px rgba(0,232,157,0.2), 0 -200px 400px rgba(14,165,233,0.15)",
        }}
      />

      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00e89d]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0ea5e9]/20 rounded-full blur-3xl" />

      <div
        className="max-w-5xl mx-auto px-12 sm:px-20 lg:px-36 relative z-10"
        ref={ref}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch overflow-hidden">
          {/* Left — image with parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="relative self-stretch flex items-center overflow-hidden"
            style={{ perspective: 1200 }}
          >
            <motion.div
              className="relative h-full w-full"
              style={{ y: imageY, opacity: imageOpacity }}
            >
              <img
                src="/web-image-1.jpg"
                alt="Web development project showcase"
                className="h-full w-full rounded-3xl object-cover object-top shadow-2xl shadow-black/40"
                style={{
                  maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative z-10"
          >
            <h2 className="mb-2 text-3xl leading-tight font-black text-white sm:text-4xl md:text-5xl">
              From curiosity
            </h2>
            <h2 className="gradient-text mb-6 text-3xl leading-tight font-black sm:text-4xl md:text-5xl">
              to systems people use.
            </h2>

            <p className="text-white text-base sm:text-lg leading-relaxed mb-4">
              I started with visual curiosity: how websites feel, why some
              interfaces pull you in, and how a product can carry a story. That
              led me into real build work, then into the deeper layer underneath
              it: auth, state, booking logic, deployment, logs, and the tradeoffs
              that decide whether software actually survives contact with users.
            </p>
            <p className="text-white text-base sm:text-lg leading-relaxed mb-6">
              I am now studying Computer Engineering at CPUT while building
              client systems, product experiments, and{" "}
              <span className="text-[#F5A623] font-semibold">Kopano Context</span>, a
              multi-agent runtime that connects models, tools, and audit trails.
              The result is a portfolio that still loves motion and design, but
              is anchored by shipping work, not just styling.
            </p>

            <Link
              to="/resume"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold bg-[#060d18]/60 border-2 border-white/20 text-white hover:border-[#00e89d]/60 hover:bg-[#060d18]/80 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              More about me
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
