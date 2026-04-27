import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  ExternalLink,
  FolderOpen,
  Globe,
  Home,
  Mail,
  Map,
  Menu,
  Moon,
  Sun,
  UserSquare2,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { studioLinks } from "../data/siteContent";

type Theme = "dark" | "light" | "system";

const themeOrder: Theme[] = ["dark", "light", "system"];

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/kopano-labs", label: "Kopano Labs", icon: Building2 },
  { to: "/projects", label: "Projects", icon: FolderOpen },
  { to: "/resume", label: "Resume", icon: UserSquare2 },
  { to: "/open-source", label: "Open Source", icon: Globe },
  { to: "/roadmap", label: "Roadmap", icon: Map },
  { to: "/contact", label: "Contact", icon: Mail },
];

function applyTheme(theme: Theme) {
  const root = document.documentElement;

  if (theme === "system") {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    root.className = systemTheme;
    return;
  }

  root.className = theme;
}

function ThemeIcon({ theme }: { theme: Theme }) {
  if (theme === "light") {
    return <Sun size={16} />;
  }

  if (theme === "system") {
    return <Globe size={16} />;
  }

  return <Moon size={16} />;
}

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return saved === "light" || saved === "system" || saved === "dark"
      ? saved
      : "dark";
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  const cycleTheme = () => {
    setTheme((current) => {
      const index = themeOrder.indexOf(current);
      return themeOrder[(index + 1) % themeOrder.length];
    });
  };

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`rounded-[28px] border px-4 transition-all duration-300 sm:px-5 ${
            scrolled
              ? "border-white/12 bg-[#0b1412]/88 shadow-[0_18px_50px_rgba(0,0,0,0.24)]"
              : "border-white/10 bg-[#0b1412]/70"
          }`}
          style={{
            backdropFilter: "blur(18px) saturate(140%)",
            WebkitBackdropFilter: "blur(18px) saturate(140%)",
          }}
        >
          <div className="flex h-16 items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="relative overflow-hidden rounded-full border border-[#7fe0b1]/35">
                <img
                  src="/profile.jpg"
                  alt='Kholofelo "Robyn" Rababalela'
                  className="h-10 w-10 object-cover"
                  style={{ objectPosition: "center 14%" }}
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold tracking-tight text-[#f1f3ed]">
                  Kholofelo Rababalela
                </p>
                <p className="text-[11px] tracking-[0.18em] uppercase text-[#92a098]">
                  Chief Architect
                </p>
              </div>
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const active = isActive(link.to);
                const Icon = link.icon;

                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-[#7fe0b1]/12 text-[#e8ece7]"
                        : "text-[#a7b2ab] hover:text-[#f2f4ee]"
                    }`}
                  >
                    <Icon size={15} />
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="hidden items-center gap-2 lg:flex">
              <button
                onClick={cycleTheme}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#cad1cc] transition-colors hover:border-[#7fe0b1]/30 hover:text-[#f2f4ee]"
                aria-label="Cycle theme"
              >
                <ThemeIcon theme={theme} />
              </button>
              <a
                href={studioLinks.kopanoLabs}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#7fe0b1] px-4 py-2.5 text-sm font-semibold text-[#07100d]"
              >
                Kopano Labs
                <ExternalLink size={15} />
              </a>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={cycleTheme}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#cad1cc]"
                aria-label="Cycle theme"
              >
                <ThemeIcon theme={theme} />
              </button>
              <button
                onClick={() => setMenuOpen((current) => !current)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#edf1ea]"
                aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28 }}
                className="overflow-hidden border-t border-white/8 lg:hidden"
              >
                <div className="flex flex-col gap-2 py-4">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    const active = isActive(link.to);

                    return (
                      <Link
                        key={link.to}
                        to={link.to}
                        className={`inline-flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                          active
                            ? "bg-[#7fe0b1]/12 text-[#eef1eb]"
                            : "text-[#b4bdb7] hover:bg-white/[0.03] hover:text-[#f2f4ee]"
                        }`}
                      >
                        <Icon size={16} />
                        {link.label}
                      </Link>
                    );
                  })}

                  <a
                    href={studioLinks.kopanoLabs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#7fe0b1] px-5 py-3 text-sm font-semibold text-[#07100d]"
                  >
                    Visit Kopano Labs
                    <ExternalLink size={15} />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
