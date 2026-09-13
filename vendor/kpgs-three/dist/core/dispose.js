import { Material, Object3D, Texture } from "three";
function disposeMaterial(material, disposedTextures) {
    for (const value of Object.values(material)) {
        if (value instanceof Texture && !disposedTextures.has(value)) {
            disposedTextures.add(value);
            value.dispose();
        }
    }
    material.dispose();
}
/** Releases geometries, materials, and textures created for a scene subtree. */
export function disposeObjectTree(root) {
    const disposedMaterials = new Set();
    const disposedTextures = new Set();
    root.traverse((object) => {
        const mesh = object;
        mesh.geometry?.dispose();
        const materials = mesh.material ? (Array.isArray(mesh.material) ? mesh.material : [mesh.material]) : [];
        for (const material of materials) {
            if (!disposedMaterials.has(material)) {
                disposedMaterials.add(material);
                disposeMaterial(material, disposedTextures);
            }
        }
    });
}
//# sourceMappingURL=dispose.js.map