import { useId, useState } from "react";
import { motion } from "framer-motion";
import { Compass, HeartHandshake, Users } from "lucide-react";
import { useThemeMode } from "./theme/ThemeModeProvider";

type Anchor = {
  id: "faith" | "purpose" | "people";
  label: string;
  sentence: string;
  icon: typeof Compass;
  x: string;
  y: string;
};

const anchors: Anchor[] = [
  {
    id: "faith",
    label: "Faith",
    sentence: "Stewardship before spectacle. Build what serves, not what merely impresses.",
    icon: HeartHandshake,
    x: "50%",
    y: "18%",
  },
  {
    id: "purpose",
    label: "Purpose",
    sentence: "Sovereign systems for African realities — proof before promotion.",
    icon: Compass,
    x: "78%",
    y: "68%",
  },
  {
    id: "people",
    label: "People",
    sentence: "Products must heal, uplift, and unite the communities they touch.",
    icon: Users,
    x: "22%",
    y: "68%",
  },
];

export default function FaithPurposeOrbit() {
  const { isReadMode, isCrazyMode } = useThemeMode();
  const [selected, setSelected] = useState<Anchor["id"]>("purpose");
  const labelId = useId();
  const active = anchors.find((a) => a.id === selected) ?? anchors[1];

  return (
    <div className="faith-orbit mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      <div
        className="faith-orbit__stage relative mx-auto aspect-[16/10] w-full max-w-3xl overflow-hidden rounded-[24px] border border-[var(--brand-line)]"
        style={{ perspective: "900px" }}
        role="group"
        aria-labelledby={labelId}
      >
        <p id={labelId} className="sr-only">
          Interactive faith, purpose, and people anchors
        </p>

        {!isReadMode && (
          <motion.div
            className="faith-orbit__ring pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--brand-line)]"
            animate={{ rotate: isCrazyMode ? 360 : 180 }}
            transition={{ duration: isCrazyMode ? 22 : 36, repeat: Infinity, ease: "linear" }}
          />
        )}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--brand-line)] opacity-70" />

        <div className="faith-orbit__core absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--brand-line)] text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--brand-olive)]">
            Mandate
          </span>
        </div>

        {anchors.map((anchor) => {
          const Icon = anchor.icon;
          const isActive = anchor.id === selected;
          return (
            <motion.button
              key={anchor.id}
              type="button"
              onClick={() => setSelected(anchor.id)}
              onFocus={() => setSelected(anchor.id)}
              onMouseEnter={() => setSelected(anchor.id)}
              aria-pressed={isActive}
              className={`faith-orbit__anchor absolute z-20 flex min-h-[72px] min-w-[72px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[18px] border px-3 py-3 text-center outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-[var(--brand-accent-soft)] sm:min-h-[88px] sm:min-w-[110px] ${
                isActive
                  ? "faith-orbit__anchor--active border-[var(--brand-accent-soft)]"
                  : "border-[var(--brand-line)] opacity-70 hover:opacity-100"
              }`}
              style={{ left: anchor.x, top: anchor.y }}
              animate={{
                scale: isActive ? 1.1 : 0.94,
                y: isReadMode ? 0 : isActive ? -6 : 0,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <Icon size={18} className="text-[var(--brand-accent-soft)]" />
              <span className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--brand-text)]">
                {anchor.label}
              </span>
            </motion.button>
          );
        })}
      </div>

      <motion.div
        key={active.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28 }}
        className="faith-orbit__panel rounded-[20px] border border-[var(--brand-line)] bg-[var(--brand-surface-soft)] px-5 py-5"
      >
        <p className="brand-kicker">{active.label}</p>
        <p className="mt-3 text-lg leading-7 text-[var(--brand-text)] sm:text-xl">{active.sentence}</p>
      </motion.div>
    </div>
  );
}
