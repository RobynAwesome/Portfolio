import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Monitor } from "lucide-react";

type Theme = "dark" | "light" | "system";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
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

  const themeIcon = theme === "dark" ? <Moon size={18} /> : theme === "light" ? <Sun size={18} /> : <Monitor size={18} />;

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-dark-bg/80 dark:bg-dark-bg/80 border-b border-dark-border shadow-lg"
          : "bg-transparent"
      }`}
      style={
        !scrolled
          ? {}
          : document.documentElement.classList.contains("light")
          ? { backgroundColor: "rgba(250,250,250,0.85)", borderColor: "#e5e7eb" }
          : {}
      }
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-bold gradient-text">
          KR
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={cycleTheme}
            className="p-2 rounded-lg opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Toggle theme"
          >
            {themeIcon}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={cycleTheme} className="p-2 opacity-60 hover:opacity-100" aria-label="Toggle theme">
            {themeIcon}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2" aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-dark-border backdrop-blur-xl bg-dark-bg/95 dark:bg-dark-bg/95">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
