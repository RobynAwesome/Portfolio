import { useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

interface CVDownloadButtonProps {
  variant: "inline" | "floating";
  onClick: () => void;
}

export default function CVDownloadButton({
  variant,
  onClick,
}: CVDownloadButtonProps) {
  const [hovered, setHovered] = useState(false);

  if (variant === "floating") {
    return (
      <motion.button
        type="button"
        onClick={onClick}
        aria-label="Open CV download options"
        className="fixed bottom-4 right-4 z-50 flex max-w-[calc(100vw-2rem)] items-center gap-2 rounded-full px-4 py-3 text-[11px] font-bold shadow-2xl sm:bottom-6 sm:right-6 sm:px-5 sm:text-xs"
        style={{
          background: "linear-gradient(135deg, #00e89d, #34d399)",
          color: "#060d18",
          boxShadow: "0 4px 24px rgba(0,232,157,0.3)",
        }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Download size={14} />
        Download CV
      </motion.button>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label="Open CV download options"
      className="mt-3 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 w-full justify-center"
      style={{
        background: hovered
          ? "linear-gradient(135deg, #00e89d, #34d399)"
          : "rgba(0,232,157,0.1)",
        border: "1px solid rgba(0,232,157,0.3)",
        color: hovered ? "#060d18" : "#00e89d",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      animate={{
        boxShadow: [
          "0 0 0px #00e89d00",
          "0 0 14px #00e89d44",
          "0 0 0px #00e89d00",
        ],
      }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <Download size={13} />
      Download CV
    </motion.button>
  );
}
