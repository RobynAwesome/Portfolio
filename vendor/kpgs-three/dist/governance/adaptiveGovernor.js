const lower = { high: "balanced", balanced: "low", low: "low" };
const higher = { high: "high", balanced: "high", low: "balanced" };
/**
 * A renderer-agnostic quality governor. Product integrations decide how a
 * tier maps to renderer settings; this class makes the decision explainable.
 */
export class AdaptiveGovernor {
    targetFrameMs;
    samplesBeforeChange;
    #tier;
    #pressure = 0;
    #headroom = 0;
    constructor(options = {}) {
        this.#tier = options.initialTier ?? "balanced";
        this.targetFrameMs = options.targetFrameMs ?? 20;
        this.samplesBeforeChange = options.samplesBeforeChange ?? 30;
        if (this.targetFrameMs <= 0 || this.samplesBeforeChange <= 0) {
            throw new RangeError("Governor targets must be positive.");
        }
    }
    get tier() {
        return this.#tier;
    }
    observe(frameMs, observation = {}) {
        if (!Number.isFinite(frameMs) || frameMs < 0)
            throw new RangeError("frameMs must be a non-negative finite number.");
        if (observation.reducedMotion) {
            this.#pressure = 0;
            this.#headroom = 0;
            return { previous: this.#tier, next: this.#tier, reason: "reduced-motion" };
        }
        if (frameMs > this.targetFrameMs) {
            this.#pressure += 1;
            this.#headroom = 0;
            if (this.#pressure >= this.samplesBeforeChange)
                return this.#set(lower[this.#tier], "sustained-frame-pressure");
        }
        else if (frameMs < this.targetFrameMs * 0.6) {
            this.#headroom += 1;
            this.#pressure = 0;
            if (this.#headroom >= this.samplesBeforeChange * 4)
                return this.#set(higher[this.#tier], "sustained-frame-headroom");
        }
        else {
            this.#pressure = 0;
            this.#headroom = 0;
        }
        return { previous: this.#tier, next: this.#tier, reason: "stable" };
    }
    #set(next, reason) {
        const previous = this.#tier;
        this.#tier = next;
        this.#pressure = 0;
        this.#headroom = 0;
        return { previous, next, reason: previous === next ? "stable" : reason };
    }
}
//# sourceMappingURL=adaptiveGovernor.js.map