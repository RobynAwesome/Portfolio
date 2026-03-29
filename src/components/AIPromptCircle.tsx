import { motion } from "framer-motion";

interface CircleConfig {
  colors: string[];
  radiusRatio: number;
  deformationRatio: number;
  duration: number;
  opacity?: number;
}

interface AIPromptCircleProps {
  circles: CircleConfig[];
  size?: number | string;
}

export default function AIPromptCircle({
  circles,
  size = 500,
}: AIPromptCircleProps) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {circles.map((config, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${config.radiusRatio * 100}%`,
            height: `${config.radiusRatio * 100}%`,
            background: `linear-gradient(135deg, ${config.colors[0]}, ${config.colors[1]})`,
            opacity: config.opacity || 0.4,
          }}
          animate={{
            scale: [1, 1 + config.deformationRatio, 1],
            rotate: [0, 180, 360],
            borderRadius: [
              "50%",
              "40% 60% 70% 30% / 40% 50% 60% 50%",
              "30% 70% 40% 60% / 50% 60% 30% 40%",
              "50%",
            ],
          }}
          transition={{
            duration: config.duration / 1000,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Central Core Glow */}
      <div className="absolute z-10 h-1/4 w-1/4 rounded-full bg-white/20 blur-3xl" />

      {/* Decorative Ring */}
      <div className="absolute inset-0 z-0 rounded-full border border-white/10" />
    </div>
  );
}
