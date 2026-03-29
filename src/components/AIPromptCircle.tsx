import { useRef, useEffect, useCallback } from "react";

export interface CircleConfig {
  colors: string[];
  radiusRatio?: number;
  deformationRatio?: number;
  borderWidth?: number;
  opacity?: number;
  duration?: number;
  hollow?: boolean;
}

interface MorphingCircleProps {
  config: CircleConfig;
  size: number;
}

function generateMorphPath(
  cx: number,
  cy: number,
  radius: number,
  deformation: number,
  phases: number[]
): string {
  const points = 8;
  const angleStep = (Math.PI * 2) / points;
  const coords: [number, number][] = [];

  for (let i = 0; i < points; i++) {
    const angle = angleStep * i;
    const r = radius + deformation * Math.sin(phases[i]);
    coords.push([cx + r * Math.cos(angle), cy + r * Math.sin(angle)]);
  }

  let d = `M ${coords[0][0]},${coords[0][1]}`;
  for (let i = 0; i < points; i++) {
    const curr = coords[i];
    const next = coords[(i + 1) % points];
    const cpx = (curr[0] + next[0]) / 2;
    const cpy = (curr[1] + next[1]) / 2;
    d += ` Q ${curr[0]},${curr[1]} ${cpx},${cpy}`;
  }
  d += " Z";
  return d;
}

function MorphingCircle({ config, size }: MorphingCircleProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const maskPathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const phasesRef = useRef<number[]>(
    Array.from({ length: 8 }, () => Math.random() * Math.PI * 2)
  );
  const rafRef = useRef<number>(0);
  const isVisibleRef = useRef(true);

  const {
    colors,
    radiusRatio = 0.45,
    deformationRatio = 0.08,
    borderWidth = 0,
    opacity = 1,
    duration = 4000,
    hollow = false,
  } = config;

  const animate = useCallback(() => {
    if (!isVisibleRef.current) return;

    const cx = size / 2;
    const cy = size / 2;
    const radius = size * radiusRatio;
    const deformation = size * deformationRatio;
    const speed = (2 * Math.PI) / (duration / 16.67);

    const phases = phasesRef.current;
    for (let i = 0; i < phases.length; i++) {
      phases[i] += speed * (0.7 + 0.6 * Math.sin(i * 0.9));
    }

    const d = generateMorphPath(cx, cy, radius, deformation, phases);
    pathRef.current?.setAttribute("d", d);

    if (hollow && maskPathRef.current) {
      const innerRadius = radius - borderWidth;
      const innerDeformation = deformation * 0.8;
      const innerD = generateMorphPath(cx, cy, innerRadius, innerDeformation, phases);
      maskPathRef.current.setAttribute("d", innerD);
    }

    rafRef.current = requestAnimationFrame(animate);
  }, [size, radiusRatio, deformationRatio, duration, hollow, borderWidth]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          cancelAnimationFrame(rafRef.current);
        }
      },
      { threshold: 0.1 }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      if (el) observer.unobserve(el);
    };
  }, [animate]);

  const gradientId = `grad-${colors.join("-").replace(/#/g, "")}`;
  const maskId = `mask-${gradientId}`;

  return (
    <div ref={containerRef} style={{ width: size, height: size, opacity }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            {colors.map((color, i) => (
              <stop
                key={i}
                offset={`${(i / (colors.length - 1)) * 100}%`}
                stopColor={color}
              />
            ))}
          </linearGradient>
          {hollow && (
            <mask id={maskId}>
              <rect width={size} height={size} fill="white" />
              <path ref={maskPathRef} fill="black" />
            </mask>
          )}
        </defs>
        <path
          ref={pathRef}
          fill={`url(#${gradientId})`}
          mask={hollow ? `url(#${maskId})` : undefined}
        />
      </svg>
    </div>
  );
}

interface AIPromptCircleProps {
  circles: CircleConfig[];
  size?: number;
  className?: string;
}

export default function AIPromptCircle({
  circles,
  size = 400,
  className = "",
}: AIPromptCircleProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {circles.map((config, i) => (
        <div key={i} className="absolute inset-0 flex items-center justify-center">
          <MorphingCircle config={config} size={size} />
        </div>
      ))}
    </div>
  );
}
