export type QualityTier = "low" | "balanced" | "high";
export interface QualityProfile {
    readonly tier: QualityTier;
    readonly pixelRatioCap: number;
    readonly shadowMapSize: 512 | 1024 | 2048;
    readonly antialias: boolean;
    readonly maxAnimatedLights: number;
}
export declare function getQualityProfile(tier: QualityTier): QualityProfile;
/** Chooses a conservative default before a renderer allocates GPU memory. */
export declare function chooseQualityProfile(options: {
    readonly deviceMemoryGiB?: number;
    readonly hardwareConcurrency?: number;
    readonly reducedMotion?: boolean;
}): QualityProfile;
//# sourceMappingURL=profile.d.ts.map