import { useEffect, useRef, useState } from "react";

interface TransparentImageProps {
  src: string;
  alt: string;
  className?: string;
  threshold?: number;
}

/**
 * Renders an image with its background removed at runtime via canvas.
 * Detects the checkered/light background pattern and makes those pixels transparent.
 */
export default function TransparentImage({
  src,
  alt,
  className = "",
  threshold = 200,
}: TransparentImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Detect checkered pattern: alternating light gray (#C0C0C0 ~192) and white (#FFFFFF)
        // Both are high-value, low-saturation pixels
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const saturation = max === 0 ? 0 : (max - min) / max;
        const brightness = (r + g + b) / 3;

        // If pixel is very light and low saturation = background
        if (brightness > threshold && saturation < 0.15) {
          data[i + 3] = 0; // Make transparent
        }
        // Soften edges: semi-transparent for slightly darker bg pixels
        else if (brightness > threshold - 30 && saturation < 0.2) {
          const fade = (brightness - (threshold - 30)) / 30;
          data[i + 3] = Math.round(255 * (1 - fade * 0.9));
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setLoaded(true);
    };
    img.src = src;
  }, [src, threshold]);

  return (
    <canvas
      ref={canvasRef}
      className={`${className} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
      style={{ maxWidth: "100%", height: "auto" }}
      aria-label={alt}
      role="img"
    />
  );
}
