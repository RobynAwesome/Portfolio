import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React core — changes rarely, long-lived cache
          "vendor-react": ["react", "react-dom"],

          // Router — separate from react core
          "vendor-router": ["react-router-dom"],

          // Framer Motion — largest dep, isolate so it caches independently
          "vendor-motion": ["framer-motion"],

          // Icons — lucide ships individual files, still worth isolating
          "vendor-icons": ["lucide-react"],
        },
      },
    },
    // Warn when any chunk exceeds 200kb (down from Vite's 500kb default)
    chunkSizeWarningLimit: 200,
  },
});