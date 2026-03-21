import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Story() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-[#00e89d]/30 via-[#0ea5e9]/35 to-[#00e89d]/25">
      <div className="relative max-w-5xl mx-auto px-12 sm:px-20 lg:px-36" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-8 text-white">
              Passionate and{" "}
              <span className="gradient-text">Curious.</span>
            </h2>

            <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-8">
              My journey into tech started with a simple question — how do websites work?
              That curiosity led me from HTML basics to mastering the full MERN stack.
              Today, as a Computer Engineering student at Cape Peninsula University of
              Technology and a Freelance Web Developer, I build technology that fosters
              community engagement and creates meaningful connections. Since January 2026,
              I've been architecting a comprehensive digital platform for 5's Arena,
              developing full-stack solutions with community blogs and integrated booking
              systems. Every line of code I write is fueled by the same passion that sparked
              my very first webpage — the drive to create something that matters.
            </p>

            {/* LinkedIn posts */}
            <div className="mb-8 rounded-2xl border border-[#0ea5e9]/30 bg-[#0b1426]/60 backdrop-blur-sm overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-[#0ea5e9]/20">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#0ea5e9]" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-xs font-bold tracking-widest uppercase text-[#0ea5e9]">
                  Latest from LinkedIn
                </span>
              </div>

              {/* Post cards */}
              <div className="divide-y divide-[#0ea5e9]/10">
                {[
                  {
                    text: "Excited to share my latest project — a full-stack booking system for 5's Arena! Built with React, Node.js, and MongoDB.",
                    time: "2d",
                    likes: 24,
                  },
                  {
                    text: "Just completed my HackerRank JavaScript certification. Always learning, always growing in the MERN ecosystem.",
                    time: "1w",
                    likes: 18,
                  },
                  {
                    text: "Reflecting on my journey from writing my first HTML page to building production-grade full-stack applications. The tech community is incredible.",
                    time: "2w",
                    likes: 31,
                  },
                ].map((post, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 px-5 py-4 hover:bg-white/[0.02] transition-colors"
                  >
                    <img
                      src="/web-image-2.JPG"
                      alt="Profile"
                      className="w-9 h-9 rounded-full object-cover object-top flex-shrink-0 border border-[#0ea5e9]/30"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-white">Kholofelo Robyn</span>
                        <span className="text-xs text-gray-500">{post.time}</span>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                        {post.text}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="flex items-center gap-1 text-[10px] text-[#0ea5e9]/70">
                          <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor">
                            <path d="M14 9V5a3 3 0 00-6 0v1H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2v-5a2 2 0 00-2-2h-4zm-4-4a1 1 0 012 0v4H10V5z" />
                          </svg>
                          {post.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/resume"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-sm font-semibold text-white hover:bg-white/10 hover:border-[#00e89d]/40 transition-all duration-300"
            >
              Discover my story
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Right — Decorative rotating rings */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              {/* Rotating rings — bright and visible */}
              <div className="absolute inset-0 rounded-full border-2 border-[#00e89d]/60 animate-spin-slow" />
              <div
                className="absolute inset-4 rounded-full border-2 border-[#0ea5e9]/55 animate-spin-slow"
                style={{ animationDirection: "reverse", animationDuration: "25s" }}
              />
              <div
                className="absolute inset-8 rounded-full border-2 border-[#00e89d]/45 animate-spin-slow"
                style={{ animationDuration: "30s" }}
              />
              <div
                className="absolute inset-12 rounded-full border-2 border-[#0ea5e9]/40 animate-spin-slow"
                style={{ animationDirection: "reverse", animationDuration: "35s" }}
              />

              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-gradient-to-br from-[#00e89d]/35 via-[#0ea5e9]/30 to-[#00e89d]/20 blur-xl" />
              </div>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#00e89d] to-[#0ea5e9] flex items-center justify-center mb-3">
                    <svg className="w-10 h-10 text-[#060d18]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-white">Augmented</p>
                  <p className="text-xs text-gray-300">with AI</p>
                </div>
              </div>

              {/* Floating dots — brighter */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-[#00e89d]/70"
                  style={{
                    top: `${15 + Math.sin((i * Math.PI) / 3) * 40}%`,
                    left: `${50 + Math.cos((i * Math.PI) / 3) * 40}%`,
                  }}
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.3, 0.8],
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
