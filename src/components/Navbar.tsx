import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Monitor, Github, Linkedin } from "lucide-react";

type Theme = "dark" | "light" | "system";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = ["about", "skills", "projects", "certificates", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.className = prefersDark ? "dark" : "light";
    } else {
      root.className = theme;
    }
  }, [theme]);

  const cycleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : t === "light" ? "system" : "dark"));
  };

  const themeIcon =
    theme === "dark" ? <Moon size={16} /> : theme === "light" ? <Sun size={16} /> : <Monitor size={16} />;

  const links = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Floating Navbar Pill — moox.io style */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
      >
        <div
          className={`navbar-pill rounded-2xl transition-all duration-500 ${
            scrolled ? "shadow-2xl shadow-black/30" : ""
          }`}
        >
          <div className="px-4 sm:px-6 h-14 flex items-center justify-between">
            {/* Logo + Status */}
            <a href="#hero" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00e89d] to-[#0ea5e9] flex items-center justify-center text-[#060d18] font-black text-xs">
                KR
              </div>
              <span className="font-bold text-sm text-white group-hover:text-[#00e89d] transition-colors">
                Robyn
              </span>
              <span className="w-2 h-2 rounded-full bg-[#00e89d] pulse-glow" title="Available for work" />
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {links.map((l) => {
                const isActive = activeSection === l.href.replace("#", "")
                  || (l.href === "#hero" && !activeSection);
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 bg-white/10 rounded-lg"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{l.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://github.com/RobynAwesome"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <button
                onClick={cycleTheme}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Toggle theme"
              >
                {themeIcon}
              </button>
              <a
                href="#contact"
                className="ml-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-[#00e89d] text-[#060d18] hover:bg-[#34d399] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00e89d]/20"
              >
                Let's talk
              </a>
            </div>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center gap-2">
              <button onClick={cycleTheme} className="p-2 text-gray-400" aria-label="Toggle theme">
                {themeIcon}
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 text-gray-400"
                aria-label="Menu"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-[#1a2744]"
              >
                <div className="px-4 py-4 flex flex-col gap-1">
                  {links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                    >
                      {l.label}
                    </a>
                  ))}
                  <div className="flex items-center gap-3 px-3 pt-3 border-t border-[#1a2744] mt-2">
                    <a
                      href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-white"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href="https://github.com/RobynAwesome"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-white"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="mt-2 mx-3 px-4 py-2.5 rounded-full text-sm font-semibold bg-[#00e89d] text-[#060d18] text-center hover:bg-[#34d399] transition-colors"
                  >
                    Let's talk
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Services floating banner — LinkedIn-inspired */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 hidden sm:block"
      >
        <a
          href="#about"
          className="glass flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#1a2744] bg-[#0b1426]/90 hover:border-[#00e89d]/40 transition-all duration-300 group hover:shadow-lg hover:shadow-[#00e89d]/10"
        >
          <span className="w-2 h-2 rounded-full bg-[#00e89d] pulse-glow" />
          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
            <span className="font-semibold text-[#00e89d]">Available</span> — View my services
          </span>
          <svg
            className="w-4 h-4 text-gray-500 group-hover:text-[#00e89d] transition-colors group-hover:translate-y-[-2px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </a>
      </motion.div>
    </>
  );
}
