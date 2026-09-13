export interface ConstructionStage {
    readonly id: string;
    readonly label: string;
    /** Normalized point from 0 to 1 at which this stage becomes complete. */
    readonly completeAt: number;
}
export interface ConstructionFrame {
    readonly progress: number;
    readonly elapsedMs: number;
    readonly activeStage: ConstructionStage | undefined;
    readonly completedStages: readonly ConstructionStage[];
}
export type TimelineListener = (frame: ConstructionFrame) => void;
/** A deterministic, seekable construction timeline with no renderer state. */
export declare class ConstructionTimeline {
    #private;
    readonly stages: readonly ConstructionStage[];
    readonly durationMs: number;
    constructor(stages: readonly ConstructionStage[], durationMs: number);
    get progress(): number;
    get frame(): ConstructionFrame;
    seek(progress: number): ConstructionFrame;
    advance(deltaMs: number, reducedMotion?: boolean): ConstructionFrame;
    subscribe(listener: TimelineListener): () => void;
}
//# sourceMappingURL=timeline.d.ts.map