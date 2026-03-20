import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Gradient divider at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1a2744] to-transparent" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Phone mockup (moox.io style) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="flex justify-center"
          >
            <div className="relative w-72 sm:w-80">
              {/* Phone frame */}
              <div className="rounded-[2.5rem] border-2 border-[#1a2744] bg-[#0b1426] p-3 shadow-2xl shadow-black/50">
                {/* Notch */}
                <div className="flex items-center justify-between px-4 pt-2 pb-3">
                  <span className="text-[10px] text-gray-400 font-mono">12:06</span>
                  <div className="w-20 h-5 rounded-full bg-[#060d18] border border-[#1a2744]" />
                  <span className="text-[10px] text-gray-400 font-medium">Robyn Pro</span>
                </div>
                {/* Screen content */}
                <div className="rounded-[2rem] bg-gradient-to-b from-[#0f1a30] to-[#060d18] p-5 min-h-[320px]">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-gray-400">Developer</span>
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#00e89d]/10 border border-[#00e89d]/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00e89d]" />
                      <span className="text-[10px] font-semibold text-[#00e89d]">AVAILABLE FOR WORK</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-white">@RobynAwesome</h3>
                      <p className="text-[11px] text-gray-400 leading-snug mt-0.5">
                        Freelance Full-Stack Developer for Web & Mobile apps.
                      </p>
                    </div>
                    <img
                      src="/profile.png"
                      alt="Robyn"
                      className="w-10 h-10 rounded-full border border-[#1a2744] object-cover"
                    />
                  </div>

                  <div className="flex gap-2 mt-4">
                    <a
                      href="#contact"
                      className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#00e89d] text-[#060d18] text-[11px] font-semibold hover:bg-[#34d399] transition-colors"
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      Hire Me
                    </a>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText("rkholofelo@gmail.com");
                      }}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#1a2744] text-gray-300 text-[11px] font-medium hover:border-[#00e89d]/40 transition-colors"
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Copy Email
                    </button>
                  </div>

                  {/* Services list */}
                  <div className="mt-5 pt-4 border-t border-[#1a2744]">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">Services</p>
                    {["Full-Stack Web Development", "MERN Stack Applications", "API Design & Integration", "UI/UX Implementation"].map((s) => (
                      <div key={s} className="flex items-center gap-2 py-1">
                        <span className="w-1 h-1 rounded-full bg-[#00e89d]" />
                        <span className="text-[11px] text-gray-300">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-2">
              You dream it.
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight gradient-text mb-8">
              I craft it.
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-4">
              I am a Computer Engineering student at Cape Peninsula University of Technology
              and a Freelance Web Developer specializing in the MERN stack.
            </p>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-4">
              Since January 2026, I have been building a comprehensive digital platform
              for 5's Arena, developing a custom full-stack solution that features a
              community blog and an integrated booking system.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Working primarily with Node.js, MongoDB, JavaScript, HTML, and CSS, my focus
              is on building scalable backend architectures, gorgeous frontends and
              intuitive, user-centered designs.
            </p>

            <a
              href="#skills"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#1a2744] text-sm font-semibold text-white hover:border-[#00e89d]/40 hover:bg-[#00e89d]/5 transition-all duration-300"
            >
              More about me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
