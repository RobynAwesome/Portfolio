import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, ArrowUpRight } from "lucide-react";

const certificates = [
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    date: "March 2026",
    link: "https://verify.skilljar.com/c/eg2hpc738332",
    description: "Completed Anthropic's AI Fluency course covering frameworks for effective, efficient, ethical, and safe AI interaction.",
    highlight: true,
  },
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    date: "March 2026",
    link: "https://verify.skilljar.com/c/t32humid3i99",
    description: "Comprehensive coverage of MCP — building servers and clients with the Python SDK using tools, resources, and prompts.",
    highlight: true,
  },
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "March 2026",
    link: "https://www.hackerrank.com/certificates/eb2baf4f04c3",
    description: "Role certification demonstrating proficiency in React, JavaScript, HTML, CSS, and testing. Building responsive UIs and managing state.",
    highlight: true,
  },
  {
    title: "Artificial Intelligence for Cybersecurity",
    issuer: "LinkedIn Learning",
    date: "March 2026",
    link: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/details/certifications/",
    description: "Applying AI to cybersecurity: ML, discriminative vs generative AI, and solving cybersecurity problems with AI.",
    highlight: false,
  },
  {
    title: "Azure Cloud Fundamentals: Explore Cloud Services",
    issuer: "LinkedIn Learning",
    date: "March 2026",
    link: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/details/certifications/",
    description: "Core Azure services, identity, governance, cloud security, management tools, and cost management.",
    highlight: false,
  },
  {
    title: "Understanding Generative AI in Cloud Computing",
    issuer: "LinkedIn Learning",
    date: "March 2026",
    link: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/details/certifications/",
    description: "AI agents and generative AI services in cloud computing environments.",
    highlight: false,
  },
  {
    title: "What is Generative AI?",
    issuer: "LinkedIn Learning",
    date: "March 2026",
    link: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/details/certifications/",
    description: "Foundations of generative AI and its impact across industries.",
    highlight: false,
  },
  {
    title: "React (Basic)",
    issuer: "HackerRank",
    date: "March 2026",
    link: "https://www.hackerrank.com/certificates/b52e37357999",
    description: "Basic Routing, Rendering Elements, State Management, Event Handling, ES6, and Form Validation.",
    highlight: false,
  },
  {
    title: "Node.js (Basic)",
    issuer: "HackerRank",
    date: "March 2026",
    link: "https://www.hackerrank.com/certificates/bc9391871061",
    description: "Package management, Callbacks, Event Loop, Event Emitter, Buffers, Streams, and File Systems.",
    highlight: false,
  },
  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    date: "March 2026",
    link: "https://www.hackerrank.com/certificates/400feb96b063",
    description: "Java classes, data structures, inheritance, and exception handling.",
    highlight: false,
  },
  {
    title: "CSS (Basic)",
    issuer: "HackerRank",
    date: "March 2026",
    link: "https://www.hackerrank.com/certificates/2fcac2281716",
    description: "Cascading and Inheritance, text styling, layouts, boxing, TailwindCSS.",
    highlight: false,
  },
  {
    title: "Bachelor of Eng Tech — Computer Engineering",
    issuer: "Cape Peninsula University of Technology",
    date: "2025 — Present",
    link: "https://orcid.org/0009-0000-3995-6147",
    description: "Formal education in Computer Engineering, building deep foundations in software and hardware.",
    highlight: false,
  },
];

export default function Certificates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="relative">
        <div ref={ref}>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-10 flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#00e89d]/20 flex items-center justify-center">
              <Award size={22} className="text-[#00e89d]" />
            </div>
            Certificates & Learning
          </h2>
        </div>

        {/* Highlighted certificates */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {certificates
            .filter((c) => c.highlight)
            .map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl border border-[#1a2744] overflow-hidden card-hover bg-[#0f1a30]/50"
              >
                {/* Gradient accent */}
                <div className="h-1 w-full bg-gradient-to-r from-[#00e89d] to-[#0ea5e9]" />

                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#00e89d]/15 to-[#0ea5e9]/15 flex items-center justify-center border border-[#1a2744]">
                      <Award size={22} className="text-[#00e89d]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-white group-hover:text-[#00e89d] transition-colors mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-[#0ea5e9] font-medium">{cert.issuer}</p>
                      <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
                      <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                        {cert.description}
                      </p>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-[#00e89d] hover:text-[#34d399] transition-colors"
                        >
                          Verify Certificate
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other credentials */}
        <div className="space-y-4">
          {certificates
            .filter((c) => !c.highlight)
            .map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                className="group flex items-center gap-4 p-4 sm:p-5 rounded-xl border border-[#1a2744] bg-[#0f1a30]/30 hover:border-[#00e89d]/20 transition-all duration-300"
              >
                <div className="shrink-0 p-2.5 rounded-lg bg-[#0ea5e9]/10 border border-[#1a2744]">
                  <Award size={18} className="text-[#0ea5e9]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-white">{cert.title}</h3>
                  <p className="text-xs text-gray-500">
                    {cert.issuer} &middot; {cert.date}
                  </p>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 p-2 rounded-lg text-gray-500 hover:text-[#00e89d] transition-colors"
                    aria-label={`View ${cert.title}`}
                  >
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </motion.div>
            ))}
        </div>

        {/* HackerRank embedded certificate */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 rounded-2xl border border-[#1a2744] overflow-hidden bg-[#0f1a30]/30"
        >
          <div className="p-4 border-b border-[#1a2744] flex items-center justify-between">
            <span className="text-sm font-semibold text-white">HackerRank Certificate Preview</span>
            <a
              href="https://www.hackerrank.com/certificates/eb2baf4f04c3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#00e89d] hover:text-[#34d399] transition-colors flex items-center gap-1"
            >
              Open Full
              <ExternalLink size={12} />
            </a>
          </div>
          <iframe
            src="https://www.hackerrank.com/certificates/iframe/eb2baf4f04c3"
            className="w-full h-64 sm:h-80 border-0"
            title="HackerRank Certificate"
            loading="lazy"
          />
        </motion.div>
    </section>
  );
}
