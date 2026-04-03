import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, FileText, FolderOpen, Globe, Mail,
  Sun, Moon, Monitor, Menu, X
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type Theme = "dark" | "light" | "system";

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/resume", label: "Resume", icon: FileText },
  { to: "/projects", label: "Projects", icon: FolderOpen },
  { to: "/open-source", label: "Open Source", icon: Globe },
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

function NavIcon({ icon: Icon, active, onClick }: {
  icon: typeof Home;
  active: boolean;
  onClick?: () => void;
}) {
  const [rolling, setRolling] = useState(false);

  const handleClick = () => {
    setRolling(true);
    setTimeout(() => setRolling(false), 500);
    onClick?.();
  };

  return (
    <motion.div
      onClick={handleClick}
      className="cursor-pointer"
      animate={rolling ? { rotate: 360 } : { rotate: 0 }}
      transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
    >
      <Icon
        size={16}
        className={`transition-colors duration-200 ${
          active ? "text-[#00e89d]" : "text-gray-500 group-hover:text-white"
        }`}
      />
    </motion.div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      if (isHomepage) setHidden(y < 80);
    };
    setScrolled(window.scrollY > 50);
    setHidden(isHomepage && window.scrollY < 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomepage]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "system") {
      root.className = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } else {
      root.className = theme;
    }
  }, [theme]);

  const cycleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : t === "light" ? "system" : "dark"));

  const themeIcon =
    theme === "dark" ? <Moon size={16} /> :
    theme === "light" ? <Sun size={16} /> :
    <Monitor size={16} />;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? -120 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl xl:max-w-7xl"
    >
      <div
        className={`rounded-[28px] p-[1px] transition-all duration-500 ${
          scrolled ? "led-border-outer" : ""
        }`}
      >
        <div
          className={`rounded-[26px] p-[1px] transition-all duration-500 ${
            scrolled ? "led-border-inner" : ""
          }`}
        >
          <div
            className="rounded-[24px] transition-all duration-500"
            style={{
              background: scrolled
                ? "rgba(11, 20, 38, 0.92)"
                : "rgba(11, 20, 38, 0.25)",
              backdropFilter: scrolled ? "blur(28px) saturate(200%)" : "blur(8px)",
              WebkitBackdropFilter: scrolled ? "blur(28px) saturate(200%)" : "blur(8px)",
              boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.4)" : "none",
            }}
          >
            <div className="px-5 xl:px-8 h-[60px] xl:h-[66px] flex items-center justify-between gap-4">

              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
                <div className="relative">
                  <img
                    src="/web-image-2.JPG"
                    alt="Kholofelo"
                    className="w-9 h-9 xl:w-10 xl:h-10 rounded-full object-cover border-2 border-[#00e89d]/60 group-hover:border-[#00e89d] transition-colors"
                    style={{ objectPosition: "center top" }}
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e89d] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00e89d]" />
                  </span>
                </div>
                <span className="font-bold text-sm xl:text-base text-white group-hover:text-[#00e89d] transition-colors hidden sm:block">
                  Kholofelo
                </span>
              </Link>

              {/* Center nav — desktop */}
              <div className="hidden md:flex items-center gap-0.5 xl:gap-1 absolute left-1/2 -translate-x-1/2">
                {navLinks.map((link) => {
                  const active = isActive(link.to);
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="group relative flex items-center gap-2 px-3 xl:px-4 py-2 rounded-xl transition-all duration-200"
                    >
                      {active && (
                        <motion.div
                          layoutId="nav-active-pill"
                          className="absolute inset-0 rounded-xl"
                          style={{ background: "rgba(0,232,157,0.1)", border: "1px solid rgba(0,232,157,0.2)" }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ background: "rgba(255,255,255,0.04)" }} />
                      <NavIcon icon={Icon} active={active} />
                      <span className={`relative text-xs xl:text-sm font-semibold transition-colors duration-200 ${
                        active ? "text-[#00e89d]" : "text-gray-400 group-hover:text-white"
                      }`}>
                        {link.label}
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* Right controls */}
              <div className="hidden md:flex items-center gap-1 flex-shrink-0">
                
                  href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon size={16} />
                </a>
                
                  href="https://github.com/RobynAwesome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all"
                  aria-label="GitHub"
                >
                  <GitHubIcon size={16} />
                </a>
                <button
                  onClick={cycleTheme}
                  className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all"
                  aria-label="Toggle theme"
                >
                  {themeIcon}
                </button>
                <Link
                  to="/contact"
                  className="ml-2 px-5 xl:px-6 py-2 rounded-full text-xs xl:text-sm font-bold bg-[#00e89d] text-[#060d18] hover:bg-[#34ffb0] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#00e89d]/25 hover:shadow-xl hover:shadow-[#00e89d]/35"
                >
                  Hire Me
                </Link>
              </div>

              {/* Mobile controls */}
              <div className="md:hidden flex items-center gap-1">
                <button onClick={cycleTheme} className="p-2 text-gray-400 hover:text-white" aria-label="Toggle theme">
                  {themeIcon}
                </button>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-2 text-gray-400 hover:text-white"
                  aria-label="Menu"
                >
                  <AnimatePresence mode="wait">
                    {menuOpen ? (
                      <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <X size={20} />
                      </motion.div>
                    ) : (
                      <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <Menu size={20} />
                      </motion.div>
                    )}
                  </AnimatePresence>
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
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="overflow-hidden border-t border-white/5"
                >
                  <div className="px-4 py-4 flex flex-col gap-1">
                    {navLinks.map((link) => {
                      const active = isActive(link.to);
                      const Icon = link.icon;
                      return (
                        <Link
                          key={link.to}
                          to={link.to}
                          onClick={() => setMenuOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                            active
                              ? "bg-[#00e89d]/10 text-[#00e89d] border border-[#00e89d]/20"
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <Icon size={16} />
                          {link.label}
                        </Link>
                      );
                    })}

                    <div className="flex items-center gap-2 px-4 pt-3 mt-1 border-t border-white/5">
                      <a href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/" target="_blank" rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-white transition-colors">
                        <LinkedInIcon size={16} />
                      </a>
                      <a href="https://github.com/RobynAwesome" target="_blank" rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-white transition-colors">
                        <GitHubIcon size={16} />
                      </a>
                    </div>

                    <Link
                      to="/contact"
                      onClick={() => setMenuOpen(false)}
                      className="mx-2 mt-2 py-3 rounded-full text-sm font-bold bg-[#00e89d] text-[#060d18] text-center transition-all duration-300 shadow-lg shadow-[#00e89d]/25"
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