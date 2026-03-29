import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Home, FileText, FolderOpen, Globe, Mail, Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/resume", label: "Resume", icon: FileText },
  { to: "/projects", label: "Projects", icon: FolderOpen },
  { to: "/open-source", label: "Open Source", icon: Globe },
  { to: "/contact", label: "Contact", icon: Mail },
];

export default function FooterNav() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  // Show after scrolling past 150px
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 150);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close when navigating
  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 80, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="fixed right-5 top-1/2 -translate-y-1/2 z-40"
        >
          <div
            className="rounded-full overflow-hidden"
            style={{
              background: "rgba(11, 20, 38, 0.92)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              border: "1px solid rgba(14, 165, 233, 0.15)",
              boxShadow:
                "0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(14,165,233,0.05)",
            }}
          >
            {/* Toggle button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="relative flex items-center justify-center w-11 h-11 m-1 rounded-full transition-colors duration-200 hover:bg-white/5"
              aria-label={expanded ? "Close navigation" : "Open navigation"}
            >
              <AnimatePresence mode="wait">
                {expanded ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={18} className="text-[#00e89d]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={18} className="text-[#00e89d]" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Pulse ring when collapsed */}
              {!expanded && (
                <motion.span
                  className="absolute inset-0 rounded-full border border-[#00e89d]/30"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
            </button>

            {/* Expanded nav items */}
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col items-center gap-0.5 px-1 pb-2">
                    {/* Separator */}
                    <div className="w-6 h-[1px] mb-1" style={{ background: "linear-gradient(90deg, transparent, rgba(14,165,233,0.3), transparent)" }} />

                    {navItems.map((item, i) => {
                      const active = isActive(item.to);
                      const Icon = item.icon;

                      return (
                        <motion.div
                          key={item.to}
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: i * 0.05, duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        >
                          <Link
                            to={item.to}
                            onClick={() => setExpanded(false)}
                            className="relative flex items-center justify-center w-11 h-11 rounded-full transition-colors duration-200 group"
                            title={item.label}
                          >
                            {active && (
                              <motion.div
                                layoutId="side-tab-bg"
                                className="absolute inset-0 rounded-full"
                                style={{ background: "rgba(0, 232, 157, 0.12)" }}
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                              />
                            )}
                            <Icon
                              size={18}
                              className={`relative z-10 transition-colors duration-200 ${
                                active
                                  ? "text-[#00e89d]"
                                  : "text-gray-500 group-hover:text-white"
                              }`}
                            />

                            {/* Tooltip on hover */}
                            <span className="absolute right-full mr-3 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200"
                              style={{ background: "rgba(11, 20, 38, 0.95)", border: "1px solid rgba(14,165,233,0.2)" }}
                            >
                              {item.label}
                            </span>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
