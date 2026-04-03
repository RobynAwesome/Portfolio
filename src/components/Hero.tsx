import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Copy, Check, ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 32, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("rkholofelo@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col lg:flex-row"
    >
      {/* ── PHOTO — Full-bleed left panel ── */}
      <div className="relative w-full h-[60vh] lg:h-auto lg:w-[48%] xl:w-[46%] 2xl:w-[44%] flex-shrink-0 overflow-hidden">
        {!imgError ? (
          <img
            src="/profile.jpg"
            alt="Kholofelo Robyn Rababalela"
            onError={() => setImgError(true)}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 15%" }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1a36] to-[#060d18]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#060d18]" />
        <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-transparent via-transparent to-[#060d18]" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#060d18]/60 to-transparent" />
      </div>

      {/* ── TEXT — Right panel ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-14 xl:px-20 2xl:px-28 pt-8 pb-20 lg:pt-28 lg:pb-16 bg-[#060d18]">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] pointer-events-none"
          style={{ background: "radial-gradient(circle, #0ea5e9, transparent)" }} />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full opacity-15 blur-[80px] pointer-events-none"
          style={{ background: "radial-gradient(circle, #00e89d, transparent)" }} />

        <div className="relative max-w-xl xl:max-w-2xl">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="font-mono text-[#00e89d] text-xs sm:text-sm tracking-[0.25em] uppercase mb-6 flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-[#00e89d] inline-block" />
            Full-Stack MERN Developer
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
            className="font-black leading-[0.88] tracking-tight text-white mb-1"
            style={{ fontSize: "clamp(2.8rem, 6vw, 6.5rem)" }}
          >
            Kholofelo
          </motion.h1>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
            className="font-black leading-[0.88] tracking-tight mb-1"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 6.5rem)",
              background: "linear-gradient(135deg, #00e89d 0%, #0ea5e9 60%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Robyn
          </motion.h1>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.85, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
            className="font-black leading-[0.88] tracking-tight text-white mb-8"
            style={{ fontSize: "clamp(2.8rem, 6vw, 6.5rem)" }}
          >
            Rababalela<span className="text-[#00e89d]">.</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="origin-left h-[1px] w-16 mb-8"
            style={{ background: "linear-gradient(90deg, #00e89d, #0ea5e9)" }}
          />

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-md"
          >
            I build scalable, production-grade web applications with the{" "}
            <span className="text-white font-semibold">MERN stack</span> —
            from RESTful APIs to polished, animated frontends.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.36, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-14"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm text-[#060d18] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#00e89d]/25"
              style={{ background: "linear-gradient(135deg, #00e89d, #34d399)" }}
            >
              Hire Me
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm border border-white/10 text-gray-300 hover:border-[#00e89d]/40 hover:text-white transition-all duration-300"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="text-[#00e89d]"
                  >
                    <Check size={16} />
                  </motion.span>
                ) : (
                  <motion.span key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <Copy size={16} />
                  </motion.span>
                )}
              </AnimatePresence>
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.44, ease: [0.23, 1, 0.32, 1] }}
            className="flex items-center gap-8 sm:gap-12"
          >
            {[
              { value: "MERN", label: "Core Stack" },
              { value: "React", label: "Frontend" },
              { value: "Node.js", label: "Backend" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-black text-white leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-[11px] text-gray-500 uppercase tracking-widest font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-2"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#00e89d] to-transparent" />
        <span className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-mono" style={{ writingMode: "vertical-rl" }}>
          scroll
        </span>
      </motion.div>
    </section>
  );
}