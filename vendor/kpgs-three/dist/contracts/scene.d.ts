import type { QualityTier } from "../quality/profile.js";
export type SpatialIdentityId = string;
export interface SpatialIdentity {
    readonly id: SpatialIdentityId;
    readonly label: string;
    readonly embodiment: "place" | "person" | "product" | "system";
}
export interface AccessibilityContract {
    readonly reducedMotion: "complete-immediately" | "static-fallback";
    readonly keyboardNavigation: CapabilityEvidence;
    readonly textAlternative: string;
}
/** Separates what a scene requires from what an integration has actually observed. */
export interface CapabilityEvidence {
    readonly required: boolean;
    readonly observed: "not-verified" | "verified";
    readonly observedAt?: string;
}
export interface PerformanceEnvelope {
    readonly defaultQuality: QualityTier;
    readonly targetFrameMs: number;
    readonly pixelRatioCap: number;
    readonly pauseWhenHidden: boolean;
}
export interface EvidenceContract {
    readonly telemetry: readonly ("frame-time" | "quality-change" | "asset-load" | "scene-lifecycle")[];
    readonly assetReceiptRequired: boolean;
}
export interface KpgsSceneContract {
    readonly id: string;
    readonly title: string;
    readonly identity: SpatialIdentity;
    readonly accessibility: AccessibilityContract;
    readonly performance: PerformanceEnvelope;
    readonly evidence: EvidenceContract;
}
//# sourceMappingURL=scene.d.ts.map