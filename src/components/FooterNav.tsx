import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Building2, FolderOpen, Home, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/projects", label: "Projects", icon: FolderOpen },
  { to: "/kopano-labs", label: "Studio", icon: Building2 },
  { to: "/contact", label: "Contact", icon: Mail },
];

export default function FooterNav() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <motion.div
      initial={false}
      animate={{ y: visible ? 0 : 120, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-x-0 bottom-4 z-40 px-4 md:hidden"
    >
      <div
        className="mx-auto max-w-sm rounded-[18px] border border-[rgba(208,133,77,0.14)] bg-[rgba(7,9,9,0.9)] px-2 py-2 shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
        style={{
          backdropFilter: "blur(18px) saturate(140%)",
          WebkitBackdropFilter: "blur(18px) saturate(140%)",
        }}
      >
        <div className="grid grid-cols-4 gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.to);

            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex flex-col items-center justify-center rounded-[12px] px-2 py-2 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors ${
                  active
                    ? "bg-[rgba(208,133,77,0.14)] text-[var(--brand-text)]"
                    : "text-[var(--brand-muted)]"
                }`}
              >
                <Icon size={16} />
                <span className="mt-1">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
