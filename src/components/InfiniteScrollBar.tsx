import { useRef, useState } from "react";
import { motion } from "framer-motion";

const items = [
  { text: "React", color: "#61dafb", desc: "UI component library" },
  { text: "Node.js", color: "#00e89d", desc: "Server-side JavaScript" },
  { text: "TypeScript", color: "#0ea5e9", desc: "Type-safe JavaScript" },
  { text: "MongoDB", color: "#00e89d", desc: "NoSQL document database" },
  { text: "Express", color: "#00e89d", desc: "Node.js web framework" },
  { text: "Next.js", color: "#ffffff", desc: "React meta-framework" },
  { text: "TailwindCSS", color: "#0ea5e9", desc: "Utility-first CSS" },
  { text: "Vite", color: "#a855f7", desc: "Lightning-fast bundler" },
  { text: "Framer Motion", color: "#a855f7", desc: "Production animation library" },
  { text: "JavaScript", color: "#f7df1e", desc: "The language of the web" },
  { text: "Docker", color: "#0ea5e9", desc: "Container platform" },
  { text: "Firebase", color: "#f97316", desc: "Google app platform" },
  { text: "Git", color: "#f97316", desc: "Version control" },
  { text: "Figma", color: "#a855f7", desc: "UI/UX design tool" },
  { text: "REST APIs", color: "#00e89d", desc: "HTTP API architecture" },
  { text: "Product Systems", color: "#00e89d", desc: "End-to-end delivery thinking" },
  { text: "MCP", color: "#0ea5e9", desc: "Model Context Protocol tooling" },
  { text: "FastAPI", color: "#00e89d", desc: "Python app framework" },
  { text: "SQLite", color: "#f7df1e", desc: "Persistent local data layer" },
  { text: "Bookings", color: "#00e89d", desc: "Operational product workflows" },
  { text: "AI Runtime", color: "#a855f7", desc: "Routing, tools, and evaluation surface" },
  { text: "Vercel", color: "#ffffff", desc: "Frontend deployment platform" },
];

const doubled = [...items, ...items];
const doubledRev = [...doubled].reverse();

function Pill({
  item,
  index,
  rowKey,
}: {
  item: (typeof items)[0];
  index: number;
  rowKey: string;
}) {
  const [hovered, setHovered] = useState(false);
  const [tipPos, setTipPos] = useState<{ x: number; y: number } | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    setHovered(true);
    if (ref.current) {
      const r = ref.current.getBoundingClientRect();
      setTipPos({ x: r.left + r.width / 2, y: r.top });
    }
  };

  return (
    <div
      ref={ref}
      key={`${rowKey}-${index}`}
      className="relative flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full border-2 whitespace-nowrap cursor-pointer select-none"
      style={{
        borderColor: hovered ? item.color : `${item.color}40`,
        backgroundColor: hovered ? `${item.color}18` : `${item.color}10`,
        transform: hovered ? "scale(1.1)" : "scale(1)",
        boxShadow: hovered ? `0 0 18px ${item.color}40, 0 4px 16px rgba(0,0,0,0.3)` : "none",
        transition: "all 0.2s cubic-bezier(0.23, 1, 0.32, 1)",
        zIndex: hovered ? 10 : 1,
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={() => { setHovered(false); setTipPos(null); }}
    >
      <span
        className="w-2 h-2 rounded-full"
        style={{
          backgroundColor: item.color,
          boxShadow: `0 0 ${hovered ? "12px" : "6px"} ${item.color}80`,
          transition: "box-shadow 0.2s",
        }}
      />
      <span className="text-sm font-bold" style={{ color: item.color }}>
        {item.text}
      </span>

      {/* Tooltip */}
      {hovered && tipPos && (
        <div
          className="fixed z-50 px-3 py-1.5 rounded-lg text-xs font-medium pointer-events-none"
          style={{
            left: tipPos.x,
            top: tipPos.y - 40,
            transform: "translateX(-50%)",
            background: "rgba(11,20,38,0.95)",
            border: `1px solid ${item.color}50`,
            color: item.color,
            boxShadow: `0 4px 20px rgba(0,0,0,0.4), 0 0 12px ${item.color}20`,
            whiteSpace: "nowrap",
          }}
        >
          {item.desc}
        </div>
      )}
    </div>
  );
}

function ScrollRow({
  items: rowItems,
  direction,
  duration,
  rowKey,
  paused,
}: {
  items: typeof doubled;
  direction: "left" | "right";
  duration: number;
  rowKey: string;
  paused: boolean;
}) {
  const from = direction === "left" ? "0%" : "-50%";
  const to = direction === "left" ? "-50%" : "0%";

  return (
    <motion.div
      className="flex gap-4"
      animate={paused ? {} : { x: [from, to] }}
      transition={{
        x: { repeat: Infinity, repeatType: "loop", duration, ease: "linear" },
      }}
      style={{ willChange: "transform" }}
    >
      {rowItems.map((item, i) => (
        <Pill key={`${rowKey}-${i}`} item={item} index={i} rowKey={rowKey} />
      ))}
    </motion.div>
  );
}

export default function InfiniteScrollBar() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      className="relative py-10 overflow-hidden border-y border-[#1a2744]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#060d18] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#060d18] to-transparent pointer-events-none" />

      {/* Pause indicator */}
      {paused && (
        <div
          className="absolute top-2 right-28 z-20 text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded"
          style={{ color: "#00e89d", background: "rgba(0,232,157,0.08)", border: "1px solid rgba(0,232,157,0.2)" }}
        >
          ⏸ paused
        </div>
      )}

      {/* Row 1 — scrolls left */}
      <div className="mb-4 overflow-hidden">
        <ScrollRow items={doubled} direction="left" duration={32} rowKey="top" paused={paused} />
      </div>

      {/* Row 2 — scrolls right */}
      <div className="overflow-hidden">
        <ScrollRow items={doubledRev} direction="right" duration={38} rowKey="bot" paused={paused} />
      </div>
    </section>
  );
}
