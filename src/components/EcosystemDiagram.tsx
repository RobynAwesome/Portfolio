import { lazy, Suspense, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Link2,
  Music4,
  Orbit,
  Radar,
  ServerCog,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";
import { studioLinks } from "../data/siteContent";
import { useThemeMode } from "./theme/ThemeModeProvider";

const KpgsSpatialStage = lazy(() => import("./KpgsSpatialStage"));

type SystemNode = {
  id: string;
  title: string;
  body: string;
  icon: typeof Orbit;
  related: string[];
  href?: string;
  to?: string;
  cta?: string;
  asset?: string;
  assetAlt?: string;
};

const systemNodes: SystemNode[] = [
  {
    id: "core",
    title: "Kopano Context",
    body: "Multi-agent memory, audit logic, and receipt-backed product state at the centre.",
    icon: Orbit,
    related: ["labs", "graph", "rune"],
    href: studioLinks.github,
    cta: "View research repos",
  },
  {
    id: "labs",
    title: "Kopano Labs",
    body: "Studio strategy, delivery discipline, and sovereign product architecture.",
    icon: ServerCog,
    related: ["core", "bookit", "amaphu"],
    to: "/kopano-labs",
    cta: "Enter the studio",
    asset: "/kopano-labs-logo.png",
    assetAlt: "Kopano Labs logo",
  },
  {
    id: "amaphu",
    title: "Ama-Phu",
    body: "Music, culture, and public discovery — the creative lane of the same mission.",
    icon: Music4,
    related: ["labs", "bookit", "graph"],
    to: "/ama-phu-entertainment",
    cta: "Explore Ama-Phu",
  },
  {
    id: "bookit",
    title: "Bookit / FivesArena",
    body: "Live venue operations and 5-a-side booking proof in production.",
    icon: Trophy,
    related: ["labs", "amaphu", "graph"],
    href: studioLinks.fivesArena,
    cta: "Open live platform",
    asset: "/project-banners/bookit-banner-opt.png",
    assetAlt: "Bookit 5s Arena banner",
  },
  {
    id: "graph",
    title: "Public Graph",
    body: "Portfolio, GitHub, LinkedIn, ORCID — public lanes that stay verifiable.",
    icon: Link2,
    related: ["core", "rune", "labs"],
    href: studioLinks.portfolio,
    cta: "Identity root",
  },
  {
    id: "rune",
    title: "RUNE / Research",
    body: "Claim → evidence → state → action → receipt. Fail-closed endorsement for agents.",
    icon: Sparkles,
    related: ["core", "graph"],
    href: studioLinks.projectRune,
    cta: "Explore RUNE",
    asset: "/project-banners/rune-emblem.svg",
    assetAlt: "Project RUNE emblem",
  },
];

const orbitLayout: Record<string, { x: string; y: string }> = {
  labs: { x: "8%", y: "14%" },
  amaphu: { x: "72%", y: "12%" },
  bookit: { x: "6%", y: "68%" },
  graph: { x: "70%", y: "66%" },
  rune: { x: "38%", y: "78%" },
};

export default function EcosystemDiagram() {
  const { isReadMode, isCrazyMode } = useThemeMode();
  const [selectedId, setSelectedId] = useState("core");
  const selectedIndex = systemNodes.findIndex((n) => n.id === selectedId);
  const selected = systemNodes[selectedIndex] ?? systemNodes[0];
  const related = useMemo(() => new Set(selected.related), [selected]);

  const go = (delta: number) => {
    const next = (selectedIndex + delta + systemNodes.length) % systemNodes.length;
    setSelectedId(systemNodes[next].id);
  };

  const onCoreActivate = () => {
    go(1);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
        <div className="flex flex-col justify-between gap-5">
        <div>
          <p className="brand-kicker">System Map</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[var(--brand-text)] sm:text-4xl">
            The System.
          </h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-[var(--brand-soft-text)]">
            Press a node. Learn how the lanes connect.
          </p>
        </div>

        <Suspense fallback={null}>
          <KpgsSpatialStage selectedNodeId={selectedId} className="hidden lg:block" />
        </Suspense>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="rounded-[22px] border border-[var(--brand-line)] bg-[var(--brand-surface-soft)] p-5"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--brand-olive)]">
              Selected
            </p>
            <h4 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--brand-text)]">
              {selected.title}
            </h4>
            <p className="mt-3 text-sm leading-6 text-[var(--brand-soft-text)]">{selected.body}</p>

            {selected.asset && (
              <div className="mt-4 overflow-hidden rounded-[16px] border border-[var(--brand-line)] bg-[var(--brand-surface)]">
                <img
                  src={selected.asset}
                  alt={selected.assetAlt ?? selected.title}
                  className="mx-auto max-h-28 w-full object-contain p-3"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>
            )}

            {selected.cta && (selected.href || selected.to) && (
              <div className="mt-5">
                {selected.to ? (
                  <Link
                    to={selected.to}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-olive)] transition-colors hover:text-[var(--brand-text)]"
                  >
                    {selected.cta}
                    <ArrowUpRight size={14} />
                  </Link>
                ) : (
                  <a
                    href={selected.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-olive)] transition-colors hover:text-[var(--brand-text)]"
                  >
                    {selected.cta}
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            className="inline-flex items-center gap-2 rounded-[10px] border border-[var(--brand-line)] px-3 py-2 text-sm text-[var(--brand-soft-text)] transition-colors hover:border-[var(--brand-accent-soft)] hover:text-[var(--brand-text)]"
            aria-label="Previous system node"
          >
            <ArrowLeft size={15} />
            Previous
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="inline-flex items-center gap-2 rounded-[10px] border border-[var(--brand-line)] px-3 py-2 text-sm text-[var(--brand-soft-text)] transition-colors hover:border-[var(--brand-accent-soft)] hover:text-[var(--brand-text)]"
            aria-label="Next system node"
          >
            Next
            <ArrowRight size={15} />
          </button>
          <div className="flex items-center gap-1.5" aria-label="Node indicator">
            {systemNodes.map((node) => (
              <button
                key={node.id}
                type="button"
                aria-label={`Select ${node.title}`}
                aria-current={node.id === selectedId}
                onClick={() => setSelectedId(node.id)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  node.id === selectedId
                    ? "bg-[var(--brand-accent-soft)]"
                    : "bg-[rgba(234,223,207,0.22)] hover:bg-[rgba(234,223,207,0.45)]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mode-orbit-shell rounded-[28px] border border-[var(--brand-line)] p-4 sm:p-6"
      >
        <div
          className={`mode-orbit-stage relative min-h-[440px] overflow-hidden rounded-[24px] sm:min-h-[480px] ${
            isReadMode ? "mode-orbit-stage--read" : ""
          }`}
          style={{ perspective: "1100px" }}
        >
          {!isReadMode && <div className="mode-orbit-haze absolute inset-0" />}

          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            {Object.entries(orbitLayout).map(([id, pos]) => {
              const lit = selectedId === "core" || related.has(id) || selectedId === id;
              return (
                <line
                  key={id}
                  className={lit ? "mode-relation-line mode-relation-line--lit" : "mode-relation-line"}
                  x1="50"
                  y1="46"
                  x2={parseFloat(pos.x) + 10}
                  y2={parseFloat(pos.y) + 8}
                />
              );
            })}
          </svg>

          <motion.div
            animate={isReadMode ? {} : { rotate: isCrazyMode ? 360 : 180 }}
            transition={
              isReadMode
                ? undefined
                : { duration: isCrazyMode ? 18 : 28, repeat: Infinity, ease: "linear" }
            }
            className="mode-orbit-ring absolute left-1/2 top-[46%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[300px] sm:w-[300px]"
          />
          <motion.div
            animate={isReadMode ? {} : { rotate: isCrazyMode ? -360 : -180 }}
            transition={
              isReadMode
                ? undefined
                : { duration: isCrazyMode ? 14 : 22, repeat: Infinity, ease: "linear" }
            }
            className="mode-orbit-ring mode-orbit-ring--inner absolute left-1/2 top-[46%] h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[210px] sm:w-[210px]"
          />

          <motion.button
            type="button"
            onClick={onCoreActivate}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onCoreActivate();
              }
            }}
            aria-pressed={selectedId === "core"}
            className={`mode-core-card absolute left-1/2 top-[46%] z-30 flex w-[min(240px,78%)] -translate-x-1/2 -translate-y-1/2 flex-col rounded-[22px] border p-5 text-center outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent-soft)] ${
              selectedId === "core"
                ? "mode-core-card--selected border-[var(--brand-accent-soft)]"
                : "border-[var(--brand-line)] opacity-80"
            }`}
            animate={{
              scale: selectedId === "core" ? 1.06 : 0.94,
              z: selectedId === "core" ? 40 : 10,
            }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
          >
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--brand-line)] text-[var(--brand-accent-soft)]">
              <Orbit size={20} />
            </div>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-olive)]">
              Core
            </p>
            <h4 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-[var(--brand-text)]">
              Kopano Context
            </h4>
            <p className="mt-2 text-xs leading-5 text-[var(--brand-muted)]">Tap to cycle the system</p>
          </motion.button>

          {systemNodes
            .filter((node) => node.id !== "core")
            .map((node) => {
              const Icon = node.icon;
              const layout = orbitLayout[node.id];
              const isSelected = selectedId === node.id;
              const isRelated = related.has(node.id);
              const dimmed = !isSelected && !isRelated && selectedId !== "core";

              return (
                <motion.button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedId(node.id)}
                  onFocus={() => setSelectedId(node.id)}
                  aria-pressed={isSelected}
                  className={`mode-node-card absolute z-20 w-[148px] rounded-[18px] border p-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent-soft)] sm:w-[168px] sm:p-4 ${
                    isSelected
                      ? "mode-node-card--selected border-[var(--brand-accent-soft)]"
                      : "border-[var(--brand-line)]"
                  }`}
                  style={{ left: layout.x, top: layout.y }}
                  animate={{
                    opacity: dimmed ? 0.35 : 1,
                    scale: isSelected ? 1.08 : 1,
                    y: isSelected ? -8 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                >
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--brand-line)] text-[var(--brand-accent-soft)]">
                    <Icon size={16} />
                  </div>
                  <h5 className="mt-3 text-sm font-semibold text-[var(--brand-text)] sm:text-base">
                    {node.title}
                  </h5>
                </motion.button>
              );
            })}

          <div className="mode-orbit-tag absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-[var(--brand-line)] bg-[var(--brand-surface-soft)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-muted)]">
            <Radar size={14} />
            Interactive system map
          </div>
        </div>
      </motion.div>
    </div>
  );
}
