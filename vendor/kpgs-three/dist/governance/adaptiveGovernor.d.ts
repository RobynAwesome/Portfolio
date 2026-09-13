import type { QualityTier } from "../quality/profile.js";
export interface AdaptiveGovernorOptions {
    readonly initialTier?: QualityTier;
    readonly targetFrameMs?: number;
    readonly samplesBeforeChange?: number;
}
export interface QualityDecision {
    readonly previous: QualityTier;
    readonly next: QualityTier;
    readonly reason: "reduced-motion" | "sustained-frame-pressure" | "sustained-frame-headroom" | "stable";
}
export interface GovernorObservation {
    readonly reducedMotion?: boolean;
}
/**
 * A renderer-agnostic quality governor. Product integrations decide how a
 * tier maps to renderer settings; this class makes the decision explainable.
 */
export declare class AdaptiveGovernor {
    #private;
    readonly targetFrameMs: number;
    readonly samplesBeforeChange: number;
    constructor(options?: AdaptiveGovernorOptions);
    get tier(): QualityTier;
    observe(frameMs: number, observation?: GovernorObservation): QualityDecision;
}
//# sourceMappingURL=adaptiveGovernor.d.ts.map