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
    const onScroll = () => setVisible(window.scrollY > 180);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <motion.div
      initial={false}
      animate={{
        y: visible ? 0 : 120,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className="fixed inset-x-0 bottom-4 z-40 px-4 md:hidden"
    >
      <div
        className="mx-auto max-w-sm rounded-full border border-white/10 bg-[#0b1412]/88 px-2 py-2 shadow-[0_16px_40px_rgba(0,0,0,0.28)]"
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
                className={`flex flex-col items-center justify-center rounded-full px-2 py-2 text-[11px] font-medium transition-colors ${
                  active ? "bg-[#7fe0b1]/12 text-[#eef1eb]" : "text-[#9aa49e]"
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
