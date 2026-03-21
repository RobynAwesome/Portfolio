import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Code2,
  Globe,
  Heart,
  MapPin,
  Send,
  CheckCircle,
  DollarSign,
  Coffee,
  ArrowRight,
  Sparkles,
  Phone,
  Clock,
  Zap,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] },
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
  { icon: Zap, label: "Availability", value: "Open to Work", color: "#0ea5e9" },
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
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:rkholofelo@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <main className="pt-28 pb-20 min-h-screen">
      {/* Hero Header */}
      <section className="relative overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#00e89d]/15 via-[#0ea5e9]/10 to-[#a855f7]/15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#0ea5e9]/5 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-12 sm:px-20 lg:px-36 py-20 sm:py-28">
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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00e89d]/30 bg-[#00e89d]/10 text-xs font-bold tracking-widest uppercase text-[#00e89d] mb-6"
            >
              <Sparkles size={12} />
              Get in Touch
            </motion.p>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 leading-tight">
              Let's{" "}
              <span className="bg-gradient-to-r from-[#00e89d] via-[#0ea5e9] to-[#a855f7] bg-clip-text text-transparent">
                Talk
              </span>
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
              I'm available for freelance projects, collaborations, and new
              opportunities. Let's build something great together.
            </p>

            {/* Availability badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={heroInView ? { scale: 1 } : {}}
              transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border-2 border-[#00e89d]/40 bg-[#00e89d]/10 shadow-lg shadow-[#00e89d]/20"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e89d] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00e89d]" />
              </span>
              <span className="text-sm font-bold text-[#00e89d]">
                Available for Work
              </span>
            </motion.div>
          </motion.div>

          {/* Quick facts row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-[#1a2744] bg-[#0b1426]/80"
              >
                <fact.icon size={16} style={{ color: fact.color }} />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">{fact.label}</p>
                  <p className="text-sm font-bold text-white">{fact.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-12 sm:px-20 lg:px-36 space-y-24">
        {/* Contact Bento Grid — bright colored blocks */}
        <SectionBlock>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-10 flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#00e89d]/20 flex items-center justify-center">
              <Mail size={22} className="text-[#00e89d]" />
            </div>
            Reach Me
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {contactBlocks.map((block, i) => (
              <motion.a
                key={block.label}
                href={block.href}
                target={block.href.startsWith("mailto") || block.href === "#" ? undefined : "_blank"}
                rel={block.href.startsWith("mailto") || block.href === "#" ? undefined : "noopener noreferrer"}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ scale: 1.03, y: -4 }}
                className={`group relative overflow-hidden p-7 rounded-3xl border-2 bg-gradient-to-br ${block.gradient} transition-all duration-500 hover:shadow-2xl ${block.span}`}
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
                {/* Large background icon */}
                <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-15 transition-opacity duration-500">
                  <block.icon size={100} />
                </div>

                <div className="relative">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${block.color}20` }}
                  >
                    <block.icon size={26} style={{ color: block.color }} />
                  </div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-2">
                    {block.label}
                  </p>
                  <p className="text-white font-bold text-lg group-hover:text-[#00e89d] transition-colors">
                    {block.value}
                  </p>
                </div>
                {block.href !== "#" && (
                  <ArrowRight
                    size={18}
                    className="absolute top-7 right-7 text-gray-600 group-hover:text-[#00e89d] group-hover:translate-x-1 transition-all"
                  />
                )}
              </motion.a>
            ))}
          </div>
        </SectionBlock>

        {/* Support Section — bright cards */}
        <SectionBlock delay={0.1}>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-10 flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#f97316]/20 flex items-center justify-center">
              <Heart size={22} className="text-[#f97316]" />
            </div>
            Support My Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {supportLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ scale: 1.03, y: -4 }}
                className={`group relative overflow-hidden p-10 rounded-3xl border-2 bg-gradient-to-br ${link.gradient} transition-all duration-500 hover:shadow-2xl`}
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
                <div className="absolute -bottom-6 -right-6 opacity-5 group-hover:opacity-15 transition-opacity duration-500">
                  <link.icon size={120} />
                </div>

                <div className="relative">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${link.color}20` }}
                  >
                    <link.icon size={30} style={{ color: link.color }} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2 group-hover:text-[#00e89d] transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-gray-400 text-base">{link.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </SectionBlock>

        {/* Contact Form — enhanced */}
        <SectionBlock delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border-2 border-[#0ea5e9]/30 bg-gradient-to-br from-[#0ea5e9]/10 via-transparent to-[#00e89d]/5 p-8 sm:p-12">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0ea5e9]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#00e89d]/5 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0ea5e9]/20 flex items-center justify-center">
                  <Send size={22} className="text-[#0ea5e9]" />
                </div>
                Send a Message
              </h2>
              <p className="text-gray-400 mb-10 max-w-lg">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-5 py-4 rounded-2xl border-2 border-[#1a2744] bg-[#0b1426]/80 text-white placeholder-gray-600 focus:outline-none focus:border-[#00e89d]/50 focus:shadow-lg focus:shadow-[#00e89d]/10 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-5 py-4 rounded-2xl border-2 border-[#1a2744] bg-[#0b1426]/80 text-white placeholder-gray-600 focus:outline-none focus:border-[#00e89d]/50 focus:shadow-lg focus:shadow-[#00e89d]/10 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-5 py-4 rounded-2xl border-2 border-[#1a2744] bg-[#0b1426]/80 text-white placeholder-gray-600 focus:outline-none focus:border-[#00e89d]/50 focus:shadow-lg focus:shadow-[#00e89d]/10 transition-all"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-5 py-4 rounded-2xl border-2 border-[#1a2744] bg-[#0b1426]/80 text-white placeholder-gray-600 focus:outline-none focus:border-[#00e89d]/50 focus:shadow-lg focus:shadow-[#00e89d]/10 transition-all resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-base font-bold bg-gradient-to-r from-[#00e89d] to-[#34d399] text-[#060d18] shadow-xl shadow-[#00e89d]/30 hover:shadow-2xl hover:shadow-[#00e89d]/40 transition-all duration-300"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </SectionBlock>

        {/* Hire Me CTA — massive */}
        <SectionBlock delay={0.1}>
          <div className="relative overflow-hidden p-10 sm:p-16 rounded-3xl border-2 border-[#00e89d]/40 text-center">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00e89d]/20 via-[#0ea5e9]/15 to-[#a855f7]/20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#00e89d]/10 blur-3xl" />

            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-[#00e89d]/40 bg-[#00e89d]/15 mb-8"
              >
                <CheckCircle size={16} className="text-[#00e89d]" />
                <span className="text-sm font-bold text-[#00e89d]">
                  Available for hire
                </span>
              </motion.div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
                Ready to{" "}
                <span className="bg-gradient-to-r from-[#00e89d] to-[#0ea5e9] bg-clip-text text-transparent">
                  work together?
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-lg mx-auto mb-10">
                I specialize in full-stack MERN development, building scalable
                web applications, and delivering polished user experiences.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="mailto:rkholofelo@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-bold bg-gradient-to-r from-[#00e89d] to-[#34d399] text-[#060d18] shadow-xl shadow-[#00e89d]/30 hover:shadow-2xl hover:shadow-[#00e89d]/40 transition-all duration-300"
                >
                  <Mail size={20} />
                  Hire Me
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-bold border-2 border-[#0ea5e9]/50 text-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all duration-300"
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
