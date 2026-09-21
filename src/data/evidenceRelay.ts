export type EvidenceRelaySourceId = "cloud" | "local" | "drive";

export type EvidenceRelaySource = {
  id: EvidenceRelaySourceId;
  title: string;
  label: string;
  description: string;
  state: "observed" | "partial";
};

export const evidenceRelaySources: readonly EvidenceRelaySource[] = [
  {
    id: "cloud",
    title: "Cloud",
    label: "Versioned source",
    description: "Public commits, review history, and deployment records that can be checked again.",
    state: "observed",
  },
  {
    id: "local",
    title: "Local",
    label: "Working metal",
    description: "Local builds and repeatable checks, with drift kept visible when cloud has moved ahead.",
    state: "partial",
  },
  {
    id: "drive",
    title: "Drive",
    label: "Private continuity",
    description: "Research and continuity evidence used to orient the work while private details stay private.",
    state: "observed",
  },
];

export const evidenceRelaySnapshot = {
  observedAt: "21 September 2026",
  publicNote: "Evidence snapshot — these sources are not presented as live-synchronised.",
} as const;

