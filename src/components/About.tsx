import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Scroll-based parallax for the image
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="about"
      className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-br from-[#00e89d]/30 via-[#0ea5e9]/35 to-[#00e89d]/25"
    >
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00e89d]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0ea5e9]/20 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-12 sm:px-20 lg:px-36" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left -- Phone mockup / Image (like moox) — scroll parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="flex justify-center"
          >
            <motion.div
              className="relative"
              style={{ y: imageY, opacity: imageOpacity }}
            >
              {/* Soft glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#00e89d]/25 to-[#0ea5e9]/25 rounded-3xl blur-2xl" />
              <img
                src="/web-image-1.jpg"
                alt="Web development project showcase"
                className="relative w-full max-w-md rounded-2xl shadow-2xl shadow-black/30"
              />
            </motion.div>
          </motion.div>

          {/* Right -- Text content (like moox) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-2 text-white">
              You dream it.
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight gradient-text mb-8">
              I craft it.
            </h2>

            <p className="text-white text-base sm:text-lg leading-relaxed mb-8">
              I am a Computer Engineering student at Cape Peninsula University of Technology
              and a Freelance Web Developer specializing in the MERN stack. Working primarily
              with Node.js, MongoDB, JavaScript, HTML, and CSS, my focus is on building scalable
              backend architectures, gorgeous frontends and intuitive, user-centered designs.
              Since January 2026, I have been building a comprehensive digital platform for
              5's Arena associated with Hellenic Football club, developing a custom full-stack
              solution that features a community blog and an integrated booking system.
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
