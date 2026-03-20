import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code2, Handshake } from "lucide-react";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const stats = [
  { icon: <Code2 size={24} />, value: "10+", label: "Projects Built" },
  { icon: <Briefcase size={24} />, value: "MERN", label: "Stack Specialist" },
  { icon: <Handshake size={24} />, value: "Open", label: "To Collaborate" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-sm font-medium tracking-widest uppercase gradient-text mb-4">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
            A passionate developer who
            <br />
            <span className="gradient-text">loves building things.</span>
          </h2>
          <p className="text-base sm:text-lg opacity-50 max-w-2xl leading-relaxed mb-16">
            I'm a Full-Stack Developer specializing in the MERN stack. I build
            responsive, accessible, and performant web applications that solve real
            problems. From concept to deployment, I bring ideas to life with clean
            code and modern best practices.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative p-8 rounded-2xl border transition-all duration-300 card-hover"
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--border-color)",
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(135deg, rgba(99,102,241,0.05), rgba(168,85,247,0.05))",
                  }}
                />
                <div className="relative">
                  <div className="mb-4 opacity-50 group-hover:opacity-100 transition-opacity gradient-text">
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm opacity-40">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        html.dark { --card-bg: #161616; --border-color: #222; }
        html.light { --card-bg: #fff; --border-color: #e5e7eb; }
      `}</style>
    </section>
  );
}
