import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.5, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 16 }}
          whileHover={{
            scale: 1.12,
            boxShadow: "0 0 28px #00e89d66, 0 0 8px #00e89d44",
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="fixed bottom-8 right-8 z-[9999] w-12 h-12 rounded-full flex items-center justify-center border border-[#00e89d]/40 bg-[#060d18]/90 backdrop-blur-sm shadow-lg shadow-[#00e89d]/20 cursor-pointer"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,232,157,0.15) 0%, rgba(14,165,233,0.10) 100%)",
          }}
        >
          {/* Pulse ring */}
          <motion.span
            className="absolute inset-0 rounded-full border border-[#00e89d]/30"
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 14V4M9 4L4 9M9 4L14 9"
              stroke="#00e89d"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}