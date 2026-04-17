import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle, ExternalLink, Github, Linkedin, Loader2, Mail, Send } from "lucide-react";
import { profile, publicLinks } from "../data/portfolioContent";

const easeCurve = [0.22, 1, 0.36, 1] as const;

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: easeCurve },
};

const contactMethods = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    accent: "text-[#00e89d]",
  },
  {
    label: "LinkedIn",
    value: "Kholofelo Robyn",
    href: publicLinks.linkedin,
    icon: Linkedin,
    accent: "text-[#0ea5e9]",
  },
  {
    label: "GitHub",
    value: "RobynAwesome",
    href: publicLinks.github,
    icon: Github,
    accent: "text-white",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "", website: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-[#060d18] pb-20 pt-28 text-white">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeCurve }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#00e89d]">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl">
            Let&apos;s talk about the role, the team, or the build.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Best for hiring conversations, freelance product work, or engineering collaboration around web systems and AI tooling.
          </p>
        </motion.section>

        <section className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            {...reveal}
            className="rounded-[8px] border border-white/10 bg-white/[0.03] p-6 sm:p-7"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00e89d]">
              Primary Contact Methods
            </p>
            <div className="mt-6 space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;

                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={method.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="flex items-center justify-between rounded-[8px] border border-white/10 bg-[#081224] px-4 py-4 transition-colors hover:border-white/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-white/10 bg-white/[0.03]">
                        <Icon size={18} className={method.accent} />
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500">{method.label}</p>
                        <p className="mt-1 text-sm font-semibold text-white">{method.value}</p>
                      </div>
                    </div>
                    {!method.href.startsWith("mailto:") ? <ExternalLink size={15} className="text-gray-500" /> : null}
                  </a>
                );
              })}
            </div>

            <div className="mt-8 rounded-[8px] border border-[#00e89d]/20 bg-[#00e89d]/10 p-5">
              <p className="text-sm font-semibold text-white">Open to junior software engineering roles and focused freelance work.</p>
              <p className="mt-2 text-sm leading-7 text-gray-300">
                The clearest starting points are Bookit for shipped delivery and Kopano Context for AI systems depth.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.08 }}
            className="rounded-[8px] border border-white/10 bg-[linear-gradient(135deg,rgba(14,165,233,0.10),rgba(0,232,157,0.06))] p-6 sm:p-7"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0ea5e9]">
              Contact Form
            </p>
            <p className="mt-3 text-sm leading-7 text-gray-300">
              Use the form for hiring, project, or collaboration messages.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                tabIndex={-1}
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", opacity: 0 }}
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="contact-name"
                  label="Name"
                  value={formData.name}
                  onChange={(value) => setFormData({ ...formData, name: value })}
                  placeholder="Your name"
                  required
                />
                <Field
                  id="contact-email"
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(value) => setFormData({ ...formData, email: value })}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <Field
                id="contact-subject"
                label="Subject"
                value={formData.subject}
                onChange={(value) => setFormData({ ...formData, subject: value })}
                placeholder="Role, project, or collaboration"
              />

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-bold text-gray-300">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none rounded-[8px] border border-[#1a2744] bg-[#0b1426]/80 px-4 py-4 text-white placeholder-gray-600 transition-all focus:border-[#00e89d]/50 focus:outline-none"
                  placeholder="Tell me about the role, team, or product."
                />
              </div>

              {status === "error" ? <p className="text-sm text-red-400">{errorMsg}</p> : null}
              {status === "success" ? (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm font-semibold text-[#00e89d]"
                >
                  <CheckCircle size={16} /> Message sent. I&apos;ll reply as soon as I can.
                </motion.p>
              ) : null}

              <motion.button
                type="submit"
                disabled={status === "loading" || status === "success"}
                whileHover={status === "idle" ? { y: -2 } : {}}
                whileTap={status === "idle" ? { scale: 0.98 } : {}}
                className="inline-flex items-center gap-2 rounded-[8px] bg-[#00e89d] px-6 py-3 text-sm font-bold text-[#06101d] transition-colors hover:bg-[#34f0af] disabled:opacity-60"
              >
                {status === "loading" ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                {status === "loading" ? "Sending..." : status === "success" ? "Sent" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </section>

        <motion.section
          {...reveal}
          className="mt-12 rounded-[8px] border border-white/10 bg-white/[0.03] px-6 py-8 text-center sm:px-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#00e89d]">
            Hiring CTA
          </p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            Hiring for product engineering, frontend delivery, or AI-adjacent systems work.
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#00e89d] px-5 py-3 text-sm font-bold text-[#06101d] transition-colors hover:bg-[#34f0af]"
            >
              <Mail size={16} />
              Email Me
            </a>
            <a
              href={publicLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[8px] border border-white/12 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/24 hover:bg-white/[0.05]"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  required = false,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold text-gray-300">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-[8px] border border-[#1a2744] bg-[#0b1426]/80 px-4 py-4 text-white placeholder-gray-600 transition-all focus:border-[#00e89d]/50 focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
}
