import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Heart,
  Coffee,
} from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );
    window.open(`mailto:rkholofelo@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socials = [
    {
      icon: <Github size={18} />,
      href: "https://github.com/RobynAwesome",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={18} />,
      href: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={18} />,
      href: "mailto:rkholofelo@gmail.com",
      label: "Email",
    },
    {
      icon: (
        <svg
          className="w-[18px] h-[18px]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
      href: "https://orcid.org/0009-0000-3995-6147",
      label: "ORCID",
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="max-w-5xl mx-auto px-12 sm:px-20 lg:px-36">
        {/* CTA Banner */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="relative rounded-3xl overflow-hidden mb-16"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00e89d] via-[#0ea5e9] to-[#6366f1]" />
          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative p-10 sm:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-[#060d18]">
              Let's Work Together
            </h2>
            <p className="text-base sm:text-lg text-[#060d18]/70 max-w-xl mx-auto mb-8">
              I'm currently open to freelance projects, full-time roles, and
              exciting collaboration opportunities. Let's create something
              amazing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="https://github.com/RobynAwesome"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#060d18] text-sm font-semibold text-white shadow-lg transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} />
                View GitHub
                <ArrowUpRight size={14} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#060d18]/30 text-[#060d18] font-semibold text-sm hover:bg-[#060d18]/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={16} />
                Connect on LinkedIn
                <ArrowUpRight size={14} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-2 text-white">
              Send a Message
            </h3>
            <p className="text-sm text-gray-500 mb-8">
              Have a question or want to collaborate? Drop me a line.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-5 py-3.5 rounded-xl border border-[#1a2744] bg-[#0f1a30]/50 text-sm text-white outline-none transition-all focus:border-[#00e89d]/50 focus:shadow-[0_0_0_3px_rgba(0,232,157,0.1)] placeholder-gray-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-5 py-3.5 rounded-xl border border-[#1a2744] bg-[#0f1a30]/50 text-sm text-white outline-none transition-all focus:border-[#00e89d]/50 focus:shadow-[0_0_0_3px_rgba(0,232,157,0.1)] placeholder-gray-600"
              />
              <textarea
                placeholder="Your Message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-5 py-3.5 rounded-xl border border-[#1a2744] bg-[#0f1a30]/50 text-sm text-white outline-none transition-all resize-none focus:border-[#00e89d]/50 focus:shadow-[0_0_0_3px_rgba(0,232,157,0.1)] placeholder-gray-600"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-[#060d18] transition-all duration-300 bg-gradient-to-r from-[#00e89d] to-[#0ea5e9] hover:shadow-lg hover:shadow-[#00e89d]/20"
              >
                {submitted ? "Message Sent!" : "Send Message"}
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>

          {/* Right — Connect & Support */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-2 text-white">
              Connect With Me
            </h3>
            <p className="text-sm text-gray-500 mb-8">
              Find me on these platforms.
            </p>

            <div className="space-y-3 mb-10">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label === "LinkedIn" ? "LinkedIn-updated" : s.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.03, x: 4 }}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-[#1a2744] bg-[#0f1a30]/30 hover:border-[#00e89d]/30 hover:bg-[#00e89d]/5 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-[#1a2744] text-gray-400 group-hover:text-[#00e89d] group-hover:bg-[#00e89d]/10 transition-all">
                    {s.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {s.label}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto text-gray-600 group-hover:text-[#00e89d] transition-colors"
                  />
                </motion.a>
              ))}
            </div>

            {/* Support section */}
            <div className="rounded-xl border border-[#1a2744] bg-[#0f1a30]/30 p-6">
              <div className="flex items-center gap-2 mb-3">
                <Heart size={16} className="text-red-400" />
                <h4 className="text-sm font-bold text-white">
                  Support My Work
                </h4>
              </div>
              <p className="text-xs text-gray-500 mb-4">
                If you find my work valuable, consider supporting me!
              </p>
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="https://paypal.me/osheenviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1a2744] text-xs font-medium text-gray-300 hover:border-[#00e89d]/30 hover:text-[#00e89d] transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797H9.603c-.564 0-1.04.408-1.13.964L7.076 21.337z" />
                  </svg>
                  PayPal
                </motion.a>
                <motion.a
                  href="https://ko-fi.com/robynawesome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1a2744] text-xs font-medium text-gray-300 hover:border-[#00e89d]/30 hover:text-[#00e89d] transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Coffee size={14} />
                  Ko-fi
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
