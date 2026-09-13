const clamp = (value) => Math.min(1, Math.max(0, value));
/** A deterministic, seekable construction timeline with no renderer state. */
export class ConstructionTimeline {
    stages;
    durationMs;
    #elapsedMs = 0;
    #listeners = new Set();
    constructor(stages, durationMs) {
        if (!Number.isFinite(durationMs) || durationMs <= 0) {
            throw new RangeError("durationMs must be a positive finite number.");
        }
        const ordered = [...stages].sort((left, right) => left.completeAt - right.completeAt);
        for (const [index, stage] of ordered.entries()) {
            if (!stage.id || !stage.label || stage.completeAt < 0 || stage.completeAt > 1) {
                throw new RangeError("Every construction stage needs an id, label, and completeAt between 0 and 1.");
            }
            if (index > 0 && stage.completeAt === ordered[index - 1]?.completeAt) {
                throw new RangeError("Construction stage completion points must be unique.");
            }
        }
        this.stages = Object.freeze(ordered);
        this.durationMs = durationMs;
    }
    get progress() {
        return this.#elapsedMs / this.durationMs;
    }
    get frame() {
        const progress = this.progress;
        const completedStages = this.stages.filter((stage) => progress >= stage.completeAt);
        const activeStage = this.stages.find((stage) => progress < stage.completeAt);
        return { progress, elapsedMs: this.#elapsedMs, activeStage, completedStages };
    }
    seek(progress) {
        if (!Number.isFinite(progress))
            throw new RangeError("progress must be finite.");
        this.#elapsedMs = clamp(progress) * this.durationMs;
        return this.#emit();
    }
    advance(deltaMs, reducedMotion = false) {
        if (!Number.isFinite(deltaMs) || deltaMs < 0) {
            throw new RangeError("deltaMs must be a non-negative finite number.");
        }
        this.#elapsedMs = reducedMotion ? this.durationMs : Math.min(this.durationMs, this.#elapsedMs + deltaMs);
        return this.#emit();
    }
    subscribe(listener) {
        this.#listeners.add(listener);
        listener(this.frame);
        return () => this.#listeners.delete(listener);
    }
    #emit() {
        const frame = this.frame;
        for (const listener of this.#listeners)
            listener(frame);
        return frame;
    }
}
//# sourceMappingURL=timeline.js.map