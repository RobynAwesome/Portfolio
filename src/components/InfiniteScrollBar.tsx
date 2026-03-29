import { motion } from "framer-motion";

const items = [
  { text: "React", color: "#61dafb" },
  { text: "Node.js", color: "#00e89d" },
  { text: "TypeScript", color: "#0ea5e9" },
  { text: "MongoDB", color: "#00e89d" },
  { text: "Express", color: "#00e89d" },
  { text: "Next.js", color: "#ffffff" },
  { text: "TailwindCSS", color: "#0ea5e9" },
  { text: "Vite", color: "#a855f7" },
  { text: "Framer Motion", color: "#a855f7" },
  { text: "JavaScript", color: "#f7df1e" },
  { text: "Docker", color: "#0ea5e9" },
  { text: "Firebase", color: "#f97316" },
  { text: "Git", color: "#f97316" },
  { text: "Figma", color: "#a855f7" },
  { text: "REST APIs", color: "#00e89d" },
  { text: "Full-Stack", color: "#00e89d" },
  { text: "MERN Stack", color: "#0ea5e9" },
  { text: "Vercel", color: "#ffffff" },
];

export default function InfiniteScrollBar() {
  // Double the items for seamless loop
  const doubled = [...items, ...items];

  return (
    <section className="relative py-10 overflow-hidden border-y border-[#1a2744]">
      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#060d18] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#060d18] to-transparent" />

      {/* Top row — scrolls left */}
      <motion.div
        className="flex gap-6 mb-5"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={`top-${i}`}
            className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-full border-2 whitespace-nowrap"
            style={{
              borderColor: `${item.color}40`,
              backgroundColor: `${item.color}10`,
            }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full shadow-lg"
              style={{
                backgroundColor: item.color,
                boxShadow: `0 0 10px ${item.color}60`,
              }}
            />
            <span
              className="text-sm font-bold"
              style={{ color: item.color }}
            >
              {item.text}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Bottom row — scrolls right */}
      <motion.div
        className="flex gap-6"
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 35,
            ease: "linear",
          },
        }}
      >
        {[...doubled].reverse().map((item, i) => (
          <div
            key={`bottom-${i}`}
            className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-full border-2 whitespace-nowrap"
            style={{
              borderColor: `${item.color}40`,
              backgroundColor: `${item.color}10`,
            }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full shadow-lg"
              style={{
                backgroundColor: item.color,
                boxShadow: `0 0 10px ${item.color}60`,
              }}
            />
            <span
              className="text-sm font-bold"
              style={{ color: item.color }}
            >
              {item.text}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
