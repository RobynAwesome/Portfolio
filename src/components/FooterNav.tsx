import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Home, FileText, FolderOpen, Globe, Award, Mail } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/resume", label: "Resume", icon: FileText },
  { to: "/projects", label: "Projects", icon: FolderOpen },
  { to: "/open-source", label: "Open Source", icon: Globe },
  { to: "/contact", label: "Contact", icon: Mail },
];

export default function FooterNav() {
  const location = useLocation();

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="fixed bottom-0 left-0 right-0 z-40"
    >
      <nav className="flex justify-center pb-5">
        <div
          className="flex items-center gap-1 px-3 py-2.5 rounded-full"
          style={{
            background: "rgba(11, 20, 38, 0.92)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            border: "1px solid rgba(14, 165, 233, 0.15)",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(14,165,233,0.05)",
          }}
        >
          {navItems.map((item) => {
            const active = isActive(item.to);
            const Icon = item.icon;

            return (
              <Link
                key={item.to}
                to={item.to}
                className="relative p-3 rounded-full transition-colors duration-200 group"
                title={item.label}
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
        </div>
      </nav>
    </motion.div>
  );
}
