import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl animate-gradient"
          style={{ background: "linear-gradient(135deg, #6366f1, #a855f7, #ec4899)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-15 blur-3xl animate-gradient"
          style={{
            background: "linear-gradient(135deg, #ec4899, #6366f1, #a855f7)",
            animationDelay: "4s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl animate-gradient"
          style={{
            background: "linear-gradient(135deg, #a855f7, #ec4899, #6366f1)",
            animationDelay: "2s",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase opacity-50 mb-6">
            Full-Stack Developer
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6">
            <span className="gradient-text">Kholofelo</span>
            <br />
            <span className="gradient-text">Robyn</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-light opacity-70 max-w-2xl mx-auto mb-4">
            You dream it.{" "}
            <span className="font-semibold opacity-100 gradient-text">I build it.</span>
          </p>

          <p className="text-sm sm:text-base opacity-40 max-w-xl mx-auto mb-10">
            Crafting beautiful, performant web experiences with React, TypeScript, Node.js & modern technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:scale-105 glow"
            style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)" }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full font-semibold text-sm border border-current/20 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/RobynAwesome"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-40 hover:opacity-100 transition-opacity"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/kholofelo-robyn"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-40 hover:opacity-100 transition-opacity"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:your@email.com"
            className="opacity-40 hover:opacity-100 transition-opacity"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={20} className="opacity-30" />
      </motion.div>
    </section>
  );
}
