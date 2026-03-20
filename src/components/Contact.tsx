import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens mailto as a fallback — replace with your form backend
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.open(`mailto:your@email.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* CTA Banner */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-10 sm:p-16 overflow-hidden mb-16"
          style={{
            background: "linear-gradient(135deg, #6366f1, #a855f7, #ec4899)",
          }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative text-center text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-base sm:text-lg opacity-80 max-w-xl mx-auto mb-8">
              I'm currently open to freelance projects, full-time roles, and exciting
              collaboration opportunities. Let's create something amazing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/RobynAwesome"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 font-semibold text-sm hover:scale-105 transition-transform"
              >
                View GitHub
                <ArrowUpRight size={16} />
              </a>
              <a
                href="https://linkedin.com/in/kholofelo-robyn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Connect on LinkedIn
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-2">Send a Message</h3>
          <p className="text-sm opacity-40 text-center mb-8">
            Have a question or want to collaborate? Drop me a line.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-5 py-3 rounded-xl border text-sm outline-none transition-colors focus:border-accent"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
                color: "inherit",
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-5 py-3 rounded-xl border text-sm outline-none transition-colors focus:border-accent"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
                color: "inherit",
              }}
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-5 py-3 rounded-xl border text-sm outline-none transition-colors resize-none focus:border-accent"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
                color: "inherit",
              }}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #6366f1, #a855f7)",
              }}
            >
              {submitted ? "Message Sent!" : "Send Message"}
              <Send size={16} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
