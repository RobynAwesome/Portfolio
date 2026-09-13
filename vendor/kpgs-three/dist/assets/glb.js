import { Group, LoadingManager } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
/** Loads a Blender-exported GLB while keeping the Three.js loader at the boundary. */
export async function loadGlb(url, manager) {
    const loader = new GLTFLoader(manager);
    const gltf = await loader.loadAsync(url);
    return { scene: gltf.scene, animations: gltf.animations };
}
//# sourceMappingURL=glb.js.map