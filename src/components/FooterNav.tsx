import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FileText, FolderOpen, Globe, Home, Mail, Map, Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/resume", label: "Resume", icon: FileText },
  { to: "/projects", label: "Projects", icon: FolderOpen },
  { to: "/open-source", label: "Open Source", icon: Globe },
  { to: "/roadmap", label: "Roadmap", icon: Map },
  { to: "/contact", label: "Contact", icon: Mail },
];

export default function FooterNav() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(true);

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  useEffect(() => {
    const onScroll = () => setVisible(true);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 80, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
        >
          <div
            className="overflow-hidden rounded-[8px] border border-[#0ea5e9]/15 bg-[rgba(11,20,38,0.92)]"
            style={{
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(14,165,233,0.05)",
            }}
          >
            <div className="border-b border-white/6 px-3 py-3">
              {!expanded ? (
                <>
                  <span className="pointer-events-none text-[10px] font-semibold uppercase tracking-[0.2em] text-[#00e89d]/80">
                    Navigate
                  </span>
                  <p className="mt-1 text-xs text-gray-500">Fast route access</p>
                </>
              ) : (
                <>
                  <span className="pointer-events-none text-[10px] font-semibold uppercase tracking-[0.2em] text-[#00e89d]/80">
                    Sections
                  </span>
                  <p className="mt-1 text-xs text-gray-500">Keep the main paths close.</p>
                </>
              )}
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="relative m-2 flex h-11 w-11 items-center justify-center rounded-[8px] transition-colors duration-200 hover:bg-white/5"
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

              {!expanded && (
                <motion.span
                  className="absolute inset-0 rounded-[8px] border border-[#00e89d]/30"
                  animate={{ scale: [1, 1.32, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
            </button>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-1 px-2 pb-2">
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
                            className="group relative flex items-center gap-3 rounded-[8px] px-3 py-3 transition-colors duration-200"
                          >
                            {active && (
                              <motion.div
                                layoutId="side-tab-bg"
                                className="absolute inset-0 rounded-[8px]"
                                style={{ background: "rgba(0, 232, 157, 0.12)" }}
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                              />
                            )}
                            <Icon
                              size={18}
                              className={`relative z-10 transition-colors duration-200 ${
                                active ? "text-[#00e89d]" : "text-gray-500 group-hover:text-white"
                              }`}
                            />
                            <span
                              className={`relative z-10 text-sm font-semibold transition-colors duration-200 ${
                                active ? "text-white" : "text-gray-400 group-hover:text-white"
                              }`}
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
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
