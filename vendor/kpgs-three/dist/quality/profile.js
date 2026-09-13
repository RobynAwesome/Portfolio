const profiles = {
    low: { tier: "low", pixelRatioCap: 1, shadowMapSize: 512, antialias: false, maxAnimatedLights: 1 },
    balanced: { tier: "balanced", pixelRatioCap: 1.5, shadowMapSize: 1024, antialias: true, maxAnimatedLights: 2 },
    high: { tier: "high", pixelRatioCap: 2, shadowMapSize: 2048, antialias: true, maxAnimatedLights: 4 }
};
export function getQualityProfile(tier) {
    return profiles[tier];
}
/** Chooses a conservative default before a renderer allocates GPU memory. */
export function chooseQualityProfile(options) {
    if (options.reducedMotion || (options.deviceMemoryGiB ?? 4) <= 2 || (options.hardwareConcurrency ?? 4) <= 2)
        return profiles.low;
    if ((options.deviceMemoryGiB ?? 4) >= 8 && (options.hardwareConcurrency ?? 4) >= 8)
        return profiles.high;
    return profiles.balanced;
}
//# sourceMappingURL=profile.js.map