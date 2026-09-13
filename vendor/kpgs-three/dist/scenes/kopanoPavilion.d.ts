import { Group } from "three";
import { ConstructionTimeline, type ConstructionFrame } from "../core/timeline.js";
import type { KpgsSceneContract } from "../contracts/scene.js";
export declare const kopanoPavilionContract: KpgsSceneContract;
export interface KopanoPavilion {
    readonly root: Group;
    readonly timeline: ConstructionTimeline;
    readonly contract: KpgsSceneContract;
    update(deltaMs: number, reducedMotion?: boolean): ConstructionFrame;
    dispose(): void;
}
/** Original KPGS demonstrator and first Blender-to-GLB construction contract. */
export declare function createKopanoPavilion(): KopanoPavilion;
//# sourceMappingURL=kopanoPavilion.d.ts.map