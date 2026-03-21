import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BottomCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden"
      ref={ref}
      style={{
        backgroundImage: "url('/web-image-4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060d18] via-[#060d18]/70 to-[#060d18]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#00e89d]/10 via-transparent to-[#0ea5e9]/10" />

      <div className="relative max-w-4xl mx-auto px-12 sm:px-20 lg:px-36 flex flex-col items-center text-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-[#00e89d] blur-2xl scale-125 opacity-30" />
          <div className="absolute inset-0 rounded-full bg-[#00e89d] scale-105" />
          <img
            src="/web-image-2.JPG"
            alt="Avatar"
            className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover object-top border-3 border-white"
          />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
        >
          Let's Build Something{" "}
          <span className="gradient-text">Amazing</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 text-sm sm:text-base max-w-md mb-10"
        >
          Ready to bring your ideas to life? Let's collaborate and create something incredible together.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            to="/resume"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-white/20 text-white hover:border-white/40 hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
          >
            More about me
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-[#00e89d] to-[#34d399] text-[#060d18] hover:shadow-lg hover:shadow-[#00e89d]/20 transition-all duration-300"
          >
            Hire me
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
