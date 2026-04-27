import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useState } from "react";
import {
  CheckCircle,
  Clock,
  Code2,
  Coffee,
  DollarSign,
  Github,
  Globe,
  Heart,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Send,
  Sparkles,
  Zap,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
    },
  }),
};

const contactBlocks = [
  {
    label: "Email",
    value: "rkholofelo@gmail.com",
    href: "mailto:rkholofelo@gmail.com",
    icon: Mail,
    color: "#00e89d",
    gradient: "from-[#00e89d]/25 to-[#00e89d]/5",
    borderColor: "#00e89d",
    span: "sm:col-span-2",
  },
  {
    label: "LinkedIn",
    value: "Kholofelo Robyn",
    href: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/",
    icon: Linkedin,
    color: "#0ea5e9",
    gradient: "from-[#0ea5e9]/25 to-[#0ea5e9]/5",
    borderColor: "#0ea5e9",
    span: "",
  },
  {
    label: "GitHub",
    value: "RobynAwesome",
    href: "https://github.com/RobynAwesome",
    icon: Github,
    color: "#ffffff",
    gradient: "from-white/15 to-white/5",
    borderColor: "#ffffff",
    span: "",
  },
  {
    label: "HackerRank",
    value: "rkholofelo",
    href: "https://www.hackerrank.com/profile/rkholofelo",
    icon: Code2,
    color: "#00e89d",
    gradient: "from-[#00e89d]/20 to-[#00e89d]/5",
    borderColor: "#00e89d",
    span: "",
  },
  {
    label: "ORCID",
    value: "0009-0000-3995-6147",
    href: "https://orcid.org/0009-0000-3995-6147",
    icon: Globe,
    color: "#a3e635",
    gradient: "from-[#a3e635]/20 to-[#a3e635]/5",
    borderColor: "#a3e635",
    span: "",
  },
  {
    label: "Location",
    value: "Cape Town, South Africa",
    href: "#",
    icon: MapPin,
    color: "#f97316",
    gradient: "from-[#f97316]/20 to-[#f97316]/5",
    borderColor: "#f97316",
    span: "sm:col-span-2",
  },
];

const supportLinks = [
  {
    label: "PayPal",
    description: "Send a tip via PayPal",
    href: "https://paypal.me/osheenviews",
    icon: DollarSign,
    color: "#0ea5e9",
    gradient: "from-[#0ea5e9]/25 to-[#0ea5e9]/5",
  },
  {
    label: "Ko-fi",
    description: "Buy me a coffee",
    href: "https://ko-fi.com/robynawesome",
    icon: Coffee,
    color: "#f97316",
    gradient: "from-[#f97316]/25 to-[#f97316]/5",
  },
];

const quickFacts = [
  { icon: Clock, label: "Response Time", value: "< 24 hours", color: "#00e89d" },
  { icon: Zap, label: "Availability", value: "Open to collaborations", color: "#0ea5e9" },
  { icon: Globe, label: "Timezone", value: "SAST (UTC+2)", color: "#a855f7" },
];

function SectionBlock({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function ContactPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
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
    <main className="min-h-screen pb-20 pt-28">
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00e89d]/15 via-[#0ea5e9]/10 to-[#a855f7]/15" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0ea5e9]/5 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-28 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="text-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00e89d]/30 bg-[#00e89d]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#00e89d]"
            >
              <Sparkles size={12} />
              Get in Touch
            </motion.p>

            <h1 className="mb-6 text-5xl font-black leading-tight sm:text-6xl md:text-8xl">
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-[#00e89d] via-[#0ea5e9] to-[#a855f7] bg-clip-text text-transparent">
                Talk
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400 sm:text-xl">
              I&apos;m available for studio partnerships, product architecture conversations,
              and resilient web platform collaborations.
            </p>

            <motion.div
              initial={{ scale: 0 }}
              animate={heroInView ? { scale: 1 } : {}}
              transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#00e89d]/40 bg-[#00e89d]/10 px-6 py-3 shadow-lg shadow-[#00e89d]/20"
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00e89d] opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#00e89d]" />
              </span>
              <span className="text-sm font-bold text-[#00e89d]">Open to collaborations</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-center gap-3 rounded-2xl border border-[#1a2744] bg-[#0b1426]/80 px-5 py-3"
              >
                <fact.icon size={16} style={{ color: fact.color }} />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                    {fact.label}
                  </p>
                  <p className="text-sm font-bold text-white">{fact.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-24 px-6 sm:px-8 lg:px-16">
        <SectionBlock>
          <h2 className="mb-10 flex items-center gap-3 text-2xl font-black text-white sm:text-3xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00e89d]/20">
              <Mail size={22} className="text-[#00e89d]" />
            </div>
            Reach Me
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contactBlocks.map((block, index) => (
              <motion.a
                key={block.label}
                href={block.href}
                target={block.href.startsWith("mailto") || block.href === "#" ? undefined : "_blank"}
                rel={block.href.startsWith("mailto") || block.href === "#" ? undefined : "noopener noreferrer"}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                whileHover={{ scale: 1.03, y: -4 }}
                className={`group relative overflow-hidden rounded-3xl border-2 bg-gradient-to-br p-7 transition-all duration-500 hover:shadow-2xl ${block.gradient} ${block.span}`}
                style={{
                  borderColor: `${block.borderColor}40`,
                  boxShadow: `0 0 0 0 ${block.color}00`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${block.borderColor}70`;
                  e.currentTarget.style.boxShadow = `0 8px 40px ${block.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${block.borderColor}40`;
                  e.currentTarget.style.boxShadow = `0 0 0 0 ${block.color}00`;
                }}
              >
                <div className="absolute -bottom-4 -right-4 opacity-5 transition-opacity duration-500 group-hover:opacity-15">
                  <block.icon size={100} />
                </div>

                <div className="relative">
                  <div
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: `${block.color}20` }}
                  >
                    <block.icon size={26} style={{ color: block.color }} />
                  </div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                    {block.label}
                  </p>
                  <p className="text-lg font-bold text-white transition-colors group-hover:text-[#00e89d]">
                    {block.value}
                  </p>
                </div>

                {block.href !== "#" && (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="absolute right-7 top-7 text-gray-600 transition-all group-hover:translate-x-1 group-hover:text-[#00e89d]"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </motion.a>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock delay={0.1}>
          <h2 className="mb-10 flex items-center gap-3 text-2xl font-black text-white sm:text-3xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f97316]/20">
              <Heart size={22} className="text-[#f97316]" />
            </div>
            Support My Work
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {supportLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                whileHover={{ scale: 1.03, y: -4 }}
                className={`group relative overflow-hidden rounded-3xl border-2 bg-gradient-to-br p-10 transition-all duration-500 hover:shadow-2xl ${link.gradient}`}
                style={{ borderColor: `${link.color}40` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${link.color}70`;
                  e.currentTarget.style.boxShadow = `0 8px 40px ${link.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${link.color}40`;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="absolute -bottom-6 -right-6 opacity-5 transition-opacity duration-500 group-hover:opacity-15">
                  <link.icon size={120} />
                </div>

                <div className="relative">
                  <div
                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: `${link.color}20` }}
                  >
                    <link.icon size={30} style={{ color: link.color }} />
                  </div>
                  <h3 className="mb-2 text-2xl font-black text-white transition-colors group-hover:text-[#00e89d]">
                    {link.label}
                  </h3>
                  <p className="text-base text-gray-400">{link.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border-2 border-[#0ea5e9]/30 bg-gradient-to-br from-[#0ea5e9]/10 via-transparent to-[#00e89d]/5 p-8 sm:p-12">
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#0ea5e9]/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-[#00e89d]/5 blur-3xl" />

            <div className="relative">
              <h2 className="mb-3 flex items-center gap-3 text-2xl font-black text-white sm:text-3xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0ea5e9]/20">
                  <Send size={22} className="text-[#0ea5e9]" />
                </div>
                Send a Message
              </h2>
              <p className="mb-10 max-w-lg text-gray-400">
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  tabIndex={-1}
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", opacity: 0 }}
                />

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-300">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-2xl border-2 border-[#1a2744] bg-[#0b1426]/80 px-5 py-4 text-white transition-all placeholder:text-gray-600 focus:border-[#00e89d]/50 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-300">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-2xl border-2 border-[#1a2744] bg-[#0b1426]/80 px-5 py-4 text-white transition-all placeholder:text-gray-600 focus:border-[#00e89d]/50 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-gray-300">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-2xl border-2 border-[#1a2744] bg-[#0b1426]/80 px-5 py-4 text-white transition-all placeholder:text-gray-600 focus:border-[#00e89d]/50 focus:outline-none"
                    placeholder="What&apos;s this about?"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-gray-300">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full resize-none rounded-2xl border-2 border-[#1a2744] bg-[#0b1426]/80 px-5 py-4 text-white transition-all placeholder:text-gray-600 focus:border-[#00e89d]/50 focus:outline-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                {status === "error" && <p className="text-sm text-red-400">{errorMsg}</p>}
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm font-semibold text-[#00e89d]"
                  >
                    <CheckCircle size={16} /> Message sent! I&apos;ll get back to you within 24 hours.
                  </motion.p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  whileHover={status === "idle" ? { scale: 1.05 } : {}}
                  whileTap={status === "idle" ? { scale: 0.95 } : {}}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00e89d] to-[#34d399] px-10 py-4 text-base font-bold text-[#060d18] shadow-xl shadow-[#00e89d]/30 transition-all duration-200 disabled:opacity-60"
                >
                  {status === "loading" ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                  {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : "Send Message"}
                </motion.button>
              </form>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border-2 border-[#00e89d]/40 p-10 text-center sm:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00e89d]/20 via-[#0ea5e9]/15 to-[#a855f7]/20" />
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00e89d]/10 blur-3xl" />

            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="mb-8 inline-flex items-center gap-2 rounded-full border-2 border-[#00e89d]/40 bg-[#00e89d]/15 px-5 py-2"
              >
                <CheckCircle size={16} className="text-[#00e89d]" />
                <span className="text-sm font-bold text-[#00e89d]">Open to collaborations</span>
              </motion.div>

              <h2 className="mb-6 text-4xl font-black text-white sm:text-5xl md:text-6xl">
                Ready to{" "}
                <span className="bg-gradient-to-r from-[#00e89d] to-[#0ea5e9] bg-clip-text text-transparent">
                  build together?
                </span>
              </h2>
              <p className="mx-auto mb-10 max-w-lg text-lg text-gray-300">
                I specialize in sovereign digital infrastructure, full-stack product systems,
                and shipping resilient web platforms.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <motion.a
                  href="mailto:rkholofelo@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00e89d] to-[#34d399] px-10 py-5 text-lg font-bold text-[#060d18] shadow-xl shadow-[#00e89d]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00e89d]/40"
                >
                  <Mail size={20} />
                  Start a conversation
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#0ea5e9]/50 px-10 py-5 text-lg font-bold text-[#0ea5e9] transition-all duration-300 hover:bg-[#0ea5e9]/10"
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </motion.a>
              </div>
            </div>
          </div>
        </SectionBlock>
      </div>
    </main>
  );
}
