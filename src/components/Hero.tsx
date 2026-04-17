import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, FileText } from "lucide-react";
import type { ReactNode } from "react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/portfolioContent";

const easeCurve = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeCurve },
  },
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [imgError, setImgError] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden px-6 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-32 lg:px-12 lg:pb-28 lg:pt-36"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ y: glowY }}
      >
        <div className="absolute left-[-10%] top-[10%] h-64 w-64 rounded-full bg-[#00e89d]/10 blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute right-[-8%] top-[18%] h-72 w-72 rounded-full bg-[#0ea5e9]/14 blur-3xl sm:h-[26rem] sm:w-[26rem]" />
        <div className="absolute bottom-[4%] left-[28%] h-56 w-56 rounded-full bg-white/5 blur-3xl" />
      </motion.div>

      <div className="absolute inset-0 opacity-40">
        <motion.div
          className="absolute inset-x-0 top-[8%] h-px bg-gradient-to-r from-transparent via-white/18 to-transparent"
          animate={{ opacity: [0.25, 0.6, 0.25], scaleX: [0.96, 1, 0.96] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[12%] top-[22%] h-28 w-28 rounded-full border border-white/10"
          animate={{ rotate: 360, scale: [1, 1.06, 1] }}
          transition={{
            rotate: { duration: 24, repeat: Infinity, ease: "linear" },
            scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -36, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: easeCurve }}
          className="relative order-2 mx-auto w-full max-w-[30rem] lg:order-1 lg:max-w-none"
        >
          <motion.div
            style={{ y: portraitY }}
            className="relative overflow-hidden rounded-[8px] border border-white/10 bg-[#0b1426]"
          >
            {!imgError ? (
              <img
                src="/profile.jpg"
                alt="Kholofelo Robyn Rababalela"
                onError={() => setImgError(true)}
                className="aspect-[4/5] w-full object-cover"
                style={{ objectPosition: "center 18%" }}
              />
            ) : (
              <div className="aspect-[4/5] w-full bg-[linear-gradient(145deg,#10203d,#060d18)]" />
            )}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,13,24,0.04),rgba(6,13,24,0.18))]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="absolute -bottom-5 right-4 max-w-[16rem] rounded-[8px] border border-white/10 bg-[#091325]/88 px-4 py-3 backdrop-blur-xl"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#00e89d]">
              Current Focus
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              Shipping web products and AI tooling that can be audited, tested, and handed over cleanly.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="order-1 lg:order-2"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-semibold uppercase tracking-[0.24em] text-[#00e89d]"
          >
            Cape Town-based product engineer
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mt-5 max-w-4xl text-[clamp(2.9rem,6vw,6rem)] font-black leading-[0.92] text-white"
          >
            I build hiring-ready proof through shipped products and AI systems.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg"
          >
            {profile.name} is a freelance web developer and AI infrastructure builder creating booking flows,
            product systems, and multi-agent tooling with visible quality habits.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-3"
          >
            <HeroButton
              to="/contact"
              label="Hire Me"
              icon={<ArrowRight size={16} />}
              primary
            />
            <HeroButton
              to="/projects"
              label="Projects"
              icon={<BriefcaseBusiness size={16} />}
            />
            <HeroButton
              to="/resume"
              label="Resume"
              icon={<FileText size={16} />}
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-xl border-t border-white/8 pt-5 text-sm leading-7 text-gray-400"
          >
            Start with Bookit for shipped delivery, then move to Kopano Context for prompts, tools, evals,
            failure modes, and trust controls.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function HeroButton({
  to,
  label,
  icon,
  primary = false,
}: {
  to: string;
  label: string;
  icon: ReactNode;
  primary?: boolean;
}) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <Link
        to={to}
        className={`group inline-flex items-center gap-2 rounded-[8px] px-5 py-3 text-sm font-semibold transition-colors duration-200 ${
          primary
            ? "bg-[#00e89d] text-[#06101d] hover:bg-[#34f0af]"
            : "border border-white/12 bg-white/[0.03] text-white hover:border-white/24 hover:bg-white/[0.06]"
        }`}
      >
        <span>{label}</span>
        <motion.span
          className="inline-flex"
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {icon}
        </motion.span>
      </Link>
    </motion.div>
  );
}
