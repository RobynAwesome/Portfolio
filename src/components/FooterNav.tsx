import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Home, FileText, FolderOpen, Globe, Award, Mail, Menu } from "lucide-react";
import { useState } from "react";

const mainItems = [
  { to: "/", label: "Home", icon: Home, isHash: false },
  { to: "/resume", label: "Resume", icon: FileText, isHash: false },
  { to: "/contact", label: "Contact", icon: Mail, isHash: false },
];

const moreItems = [
  { to: "/projects", label: "Projects", icon: FolderOpen, isHash: false },
  { to: "/open-source", label: "Open Source", icon: Globe, isHash: false },
  { to: "#certificates", label: "Certificates", icon: Award, isHash: true },
];

export default function FooterNav() {
  const location = useLocation();
  const [moreOpen, setMoreOpen] = useState(false);

  const isActive = (to: string, isHash: boolean) => {
    if (isHash) return location.hash === to;
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  // Check if any "more" item is active
  const moreActive = moreItems.some((item) => isActive(item.to, item.isHash));

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="fixed bottom-0 left-0 right-0 z-40"
    >
      {/* More menu popup */}
      {moreOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-30"
            onClick={() => setMoreOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-40 rounded-2xl border border-[#1a2744] overflow-hidden"
            style={{
              background: "rgba(11, 20, 38, 0.95)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
            }}
          >
            {moreItems.map((item) => {
              const active = isActive(item.to, item.isHash);
              const Icon = item.icon;

              const content = (
                <span className="flex items-center gap-3 px-5 py-3.5 min-w-[180px]">
                  <Icon
                    size={18}
                    className={active ? "text-[#00e89d]" : "text-gray-400"}
                  />
                  <span
                    className={`text-sm font-medium ${
                      active ? "text-[#00e89d]" : "text-gray-300"
                    }`}
                  >
                    {item.label}
                  </span>
                </span>
              );

              if (item.isHash) {
                return (
                  <a
                    key={item.to}
                    href={item.to}
                    onClick={() => setMoreOpen(false)}
                    className="block hover:bg-white/5 transition-colors"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMoreOpen(false)}
                  className="block hover:bg-white/5 transition-colors"
                >
                  {content}
                </Link>
              );
            })}
          </motion.div>
        </>
      )}

      {/* Main bottom bar — centered floating pill */}
      <nav
        className="flex justify-center pb-5"
      >
        <div
          className="flex items-center gap-1 px-3 py-2.5 rounded-full"
          style={{
            background: "rgba(11, 20, 38, 0.92)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            border: "1px solid rgba(14, 165, 233, 0.15)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(14,165,233,0.05)",
          }}
        >
          {mainItems.map((item) => {
            const active = isActive(item.to, item.isHash);
            const Icon = item.icon;

            return (
              <Link
                key={item.to}
                to={item.to}
                className="relative p-3 rounded-full transition-colors duration-200 group"
              >
                {active && (
                  <motion.div
                    layoutId="footer-tab-bg"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "rgba(0, 232, 157, 0.12)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon
                  size={20}
                  className={`relative z-10 transition-colors duration-200 ${
                    active
                      ? "text-[#00e89d]"
                      : "text-gray-500 group-hover:text-white"
                  }`}
                />
              </Link>
            );
          })}

          {/* More button */}
          <button
            onClick={() => setMoreOpen(!moreOpen)}
            className="relative p-3 rounded-full transition-colors duration-200 group"
          >
            {(moreActive || moreOpen) && (
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: "rgba(0, 232, 157, 0.12)" }}
              />
            )}
            <Menu
              size={20}
              className={`relative z-10 transition-colors duration-200 ${
                moreActive || moreOpen
                  ? "text-[#00e89d]"
                  : "text-gray-500 group-hover:text-white"
              }`}
            />
          </button>
        </div>
      </nav>
    </motion.div>
  );
}
