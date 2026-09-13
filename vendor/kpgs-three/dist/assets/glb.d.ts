import { Group, LoadingManager } from "three";
export interface GlbAsset {
    readonly scene: Group;
    readonly animations: readonly import("three").AnimationClip[];
}
/** Loads a Blender-exported GLB while keeping the Three.js loader at the boundary. */
export declare function loadGlb(url: string, manager?: LoadingManager): Promise<GlbAsset>;
//# sourceMappingURL=glb.d.ts.map