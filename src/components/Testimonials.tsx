import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "Robyn is a dedicated developer who doesn't just write code — he takes full ownership of the project and delivers quality work every time.",
    highlight: "dedicated developer",
    name: "5's Arena",
    role: "Client — Freelance Project",
  },
  {
    quote:
      "His ability to handle both frontend and backend systems is impressive. He builds fast, clean, and scalable solutions.",
    highlight: "frontend and backend systems",
    name: "Open Source Community",
    role: "GitHub Collaborators",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Gradient transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060d18] via-[#0b1426]/50 to-[#060d18]" />

      <div className="relative max-w-5xl mx-auto px-12 sm:px-20 lg:px-36" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 leading-tight">
            What People Say <span className="gradient-text">About Me.</span>
          </h2>
          <p className="text-gray-500 text-base mb-16">
            Real feedback from those who know my work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden card-hover"
            >
              {/* Card gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00e89d]/8 via-[#0ea5e9]/10 to-[#6366f1]/8" />
              <div className="absolute inset-0 bg-[#0f1a30]/80" />
              <div className="absolute inset-[1px] rounded-2xl border border-[#1a2744]" />

              <div className="relative p-6 sm:p-8">
                {/* Quote mark */}
                <div className="text-4xl font-black text-[#00e89d]/30 mb-4 leading-none">&ldquo;&ldquo;</div>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                  {t.quote.split(t.highlight).map((part, idx, arr) =>
                    idx < arr.length - 1 ? (
                      <span key={idx}>
                        {part}
                        <strong className="text-white font-bold">{t.highlight}</strong>
                      </span>
                    ) : (
                      <span key={idx}>{part}</span>
                    )
                  )}
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00e89d]/30 to-[#0ea5e9]/30 flex items-center justify-center border border-[#1a2744]">
                    <span className="text-xs font-bold text-white">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#00e89d]">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
