import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FileText,
  FolderOpen,
  Globe,
  Home,
  Mail,
  Map,
  Menu,
  Monitor,
  Moon,
  Sun,
  X,
} from "lucide-react";
import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

type Theme = "dark" | "light" | "system";

const THEME_ORDER: Theme[] = ["dark", "light", "system"];

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/resume", label: "Resume", icon: FileText },
  { to: "/projects", label: "Projects", icon: FolderOpen },
  { to: "/open-source", label: "Open Source", icon: Globe },
  { to: "/roadmap", label: "Roadmap", icon: Map },
  { to: "/contact", label: "Contact", icon: Mail },
];

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ThemeIcon({ theme }: { theme: Theme }) {
  const icons: Record<Theme, ReactNode> = {
    dark: <Moon size={16} />,
    light: <Sun size={16} />,
    system: <Monitor size={16} />,
  };

  return <>{icons[theme]}</>;
}

const THEME_LABELS: Record<Theme, string> = {
  dark: "Dark",
  light: "Light",
  system: "System",
};

function applyTheme(theme: Theme) {
  const root = document.documentElement;

  if (theme === "system") {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    root.className = systemTheme;
    return;
  }

  root.className = theme;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("portfolio-theme") as Theme | null;
    return saved && THEME_ORDER.includes(saved) ? saved : "dark";
  });

  const location = useLocation();
  const isHomepage = location.pathname === "/";

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      if (isHomepage) {
        setHidden(y < 72);
      }
    };

    setScrolled(window.scrollY > 50);
    setHidden(isHomepage && window.scrollY < 72);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomepage]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const cycleTheme = () => {
    setTheme((current) => {
      const idx = THEME_ORDER.indexOf(current);
      return THEME_ORDER[(idx + 1) % THEME_ORDER.length];
    });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? -120 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
      className="fixed left-1/2 top-4 z-50 w-[95%] max-w-6xl -translate-x-1/2 xl:max-w-7xl"
    >
      <div className={`rounded-[10px] p-[1px] transition-all duration-500 ${scrolled ? "led-border-outer" : ""}`}>
        <div className={`rounded-[9px] p-[1px] transition-all duration-500 ${scrolled ? "led-border-inner" : ""}`}>
          <div
            className="rounded-[8px] transition-all duration-500"
            style={{
              background: scrolled ? "rgba(11, 20, 38, 0.92)" : "rgba(11, 20, 38, 0.25)",
              backdropFilter: scrolled ? "blur(28px) saturate(200%)" : "blur(8px)",
              WebkitBackdropFilter: scrolled ? "blur(28px) saturate(200%)" : "blur(8px)",
              boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.4)" : "none",
            }}
          >
            <div className="flex h-[60px] items-center justify-between gap-4 px-5 xl:h-[66px] xl:px-8">
              <Link to="/" className="group flex flex-shrink-0 items-center gap-3">
                <div className="relative">
                  <img
                    src="/web-image-2.JPG"
                    alt="Kholofelo"
                    className="h-9 w-9 rounded-full border-2 border-[#00e89d]/60 object-cover transition-colors group-hover:border-[#00e89d] xl:h-10 xl:w-10"
                    style={{ objectPosition: "center top" }}
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00e89d] opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#00e89d]" />
                  </span>
                </div>
                <div className="hidden sm:block">
                  <span className="text-sm font-bold text-white transition-colors group-hover:text-[#00e89d] xl:text-base">
                    Kholofelo
                  </span>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-gray-500">
                    Product engineer
                  </p>
                </div>
              </Link>

              <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 md:flex xl:gap-1">
                {navLinks.map((link) => {
                  const active = isActive(link.to);
                  const Icon = link.icon;

                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="group relative flex items-center gap-2 rounded-[8px] px-3 py-2 transition-all duration-200 hover:bg-white/[0.04] xl:px-4"
                    >
                      {active && (
                        <motion.div
                          layoutId="nav-active-pill"
                          className="absolute inset-0 rounded-[8px]"
                          style={{
                            background: "rgba(0,232,157,0.1)",
                            border: "1px solid rgba(0,232,157,0.2)",
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <Icon
                        size={16}
                        className={`relative transition-colors duration-200 ${active ? "text-[#00e89d]" : "text-gray-500 group-hover:text-white"}`}
                      />
                      <span
                        className={`relative text-xs font-semibold transition-colors duration-200 xl:text-sm ${active ? "text-[#00e89d]" : "text-gray-400 group-hover:text-white"}`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="hidden flex-shrink-0 items-center gap-1 md:flex">
                <a
                  href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[8px] p-2 text-gray-500 transition-all hover:bg-white/5 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon size={16} />
                </a>
                <a
                  href="https://github.com/RobynAwesome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[8px] p-2 text-gray-500 transition-all hover:bg-white/5 hover:text-white"
                  aria-label="GitHub"
                >
                  <GitHubIcon size={16} />
                </a>
                <motion.button
                  onClick={cycleTheme}
                  className="flex items-center gap-1.5 rounded-[8px] px-2.5 py-1.5 text-xs font-medium text-gray-400 transition-all hover:bg-white/5 hover:text-white"
                  aria-label="Toggle theme"
                  whileTap={{ scale: 0.9 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={theme}
                      initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 20, scale: 0.8 }}
                      transition={{ duration: 0.18 }}
                    >
                      <ThemeIcon theme={theme} />
                    </motion.span>
                  </AnimatePresence>
                  <span className="hidden text-[11px] text-gray-500 xl:inline">
                    {THEME_LABELS[theme]}
                  </span>
                </motion.button>
                <HireMeButton />
              </div>

              <div className="flex items-center gap-1 md:hidden">
                <motion.button
                  onClick={cycleTheme}
                  className="p-2 text-gray-400 hover:text-white"
                  aria-label="Toggle theme"
                  whileTap={{ scale: 0.85 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={theme}
                      initial={{ opacity: 0, rotate: -20 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 20 }}
                      transition={{ duration: 0.15 }}
                    >
                      <ThemeIcon theme={theme} />
                    </motion.span>
                  </AnimatePresence>
                </motion.button>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-2 text-gray-400 hover:text-white"
                  aria-label="Menu"
                >
                  <AnimatePresence mode="wait">
                    {menuOpen ? (
                      <motion.div
                        key="x"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X size={20} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu size={20} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="overflow-hidden border-t border-white/5"
                >
                  <div className="flex flex-col gap-1 px-4 py-4">
                    {navLinks.map((link) => {
                      const active = isActive(link.to);
                      const Icon = link.icon;

                      return (
                        <Link
                          key={link.to}
                          to={link.to}
                          onClick={() => setMenuOpen(false)}
                          className={`flex items-center gap-3 rounded-[8px] px-4 py-3 text-sm font-semibold transition-all duration-200 ${active ? "border border-[#00e89d]/20 bg-[#00e89d]/10 text-[#00e89d]" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}
                        >
                          <Icon size={16} />
                          {link.label}
                        </Link>
                      );
                    })}
                    <div className="mt-1 flex items-center gap-2 border-t border-white/5 px-4 pt-3">
                      <a
                        href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 transition-colors hover:text-white"
                      >
                        <LinkedInIcon size={16} />
                      </a>
                      <a
                        href="https://github.com/RobynAwesome"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 transition-colors hover:text-white"
                      >
                        <GitHubIcon size={16} />
                      </a>
                    </div>
                    <Link
                      to="/contact"
                      onClick={() => setMenuOpen(false)}
                      className="mx-2 mt-2 rounded-[8px] bg-[#00e89d] py-3 text-center text-sm font-bold text-[#060d18] transition-all duration-300 shadow-lg shadow-[#00e89d]/25"
                    >
                      Hire Me
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function HireMeButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to="/contact"
      className="relative ml-2 inline-flex items-center gap-2 overflow-hidden rounded-[8px] px-5 py-2 text-xs font-bold text-[#060d18] transition-all duration-200 xl:px-6 xl:text-sm"
      style={{
        background: hovered
          ? "linear-gradient(135deg, #34ffb0, #00e89d)"
          : "linear-gradient(135deg, #00e89d, #00c882)",
        boxShadow: hovered
          ? "0 0 28px rgba(0,232,157,0.55), 0 4px 20px rgba(0,232,157,0.35)"
          : "0 0 14px rgba(0,232,157,0.3), 0 2px 10px rgba(0,232,157,0.2)",
        transform: hovered ? "scale(1.04)" : "scale(1)",
        transition: "all 0.2s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)",
          transform: hovered ? "translateX(100%)" : "translateX(-100%)",
          transition: "transform 0.45s ease",
        }}
      />
      Hire Me
      <motion.span
        animate={{ x: hovered ? 3 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </motion.span>
    </Link>
  );
}
