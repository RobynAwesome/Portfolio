import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

type NavItem =
  | { type: "route"; to: string; label: string; highlight?: boolean }
  | { type: "anchor"; href: string; label: string };

const navItems: NavItem[] = [
  { type: "route", to: "/", label: "Home" },
  { type: "route", to: "/projects", label: "Projects" },
  { type: "route", to: "/kopano-labs", label: "Studio" },
  { type: "anchor", href: "/#about", label: "About" },
  { type: "route", to: "/roadmap", label: "Insights" },
  { type: "route", to: "/contact", label: "Contact", highlight: true },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isRouteActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  const linkClass = (active: boolean, highlight = false) =>
    highlight
      ? "rounded-[12px] border border-[rgba(208,133,77,0.45)] px-4 py-2.5 text-[12px] font-medium uppercase tracking-[0.2em] text-[var(--brand-text)] transition-colors hover:bg-[rgba(208,133,77,0.12)]"
      : `px-2 py-2 text-[12px] font-medium uppercase tracking-[0.18em] transition-colors ${
          active ? "text-[var(--brand-text)]" : "text-[var(--brand-muted)] hover:text-[var(--brand-text)]"
        }`;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6"
    >
      <div
        className={`mx-auto max-w-7xl rounded-[20px] border transition-all duration-300 ${
          scrolled
            ? "border-[rgba(208,133,77,0.18)] bg-[rgba(7,9,9,0.88)] shadow-[0_20px_55px_rgba(0,0,0,0.35)]"
            : "border-[rgba(208,133,77,0.12)] bg-[rgba(7,9,9,0.72)]"
        }`}
        style={{
          backdropFilter: "blur(20px) saturate(140%)",
          WebkitBackdropFilter: "blur(20px) saturate(140%)",
        }}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-5">
          <Link to="/" className="flex items-center gap-3">
            <img src="/favicon.svg" alt="Kopano Labs mark" className="h-10 w-10" />
            <div className="font-mono text-[11px] uppercase tracking-[0.36em] text-[var(--brand-text)]">
              <p>Kopano</p>
              <p>Labs</p>
            </div>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) =>
              item.type === "route" ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className={linkClass(isRouteActive(item.to), item.highlight)}
                >
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} className={linkClass(false)}>
                  {item.label}
                </a>
              ),
            )}
          </div>

          <button
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] border border-[rgba(234,223,207,0.1)] text-[var(--brand-text)] lg:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-[rgba(208,133,77,0.12)] lg:hidden"
            >
              <div className="flex flex-col gap-2 px-4 py-4">
                {navItems.map((item) =>
                  item.type === "route" ? (
                    <Link
                      key={item.label}
                      to={item.to}
                      className={`${linkClass(isRouteActive(item.to), item.highlight)} text-center`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`${linkClass(false)} text-center`}
                    >
                      {item.label}
                    </a>
                  ),
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
