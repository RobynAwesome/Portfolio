import { BoxGeometry, Group, Mesh, MeshStandardMaterial, Object3D } from "three";
import { ConstructionTimeline } from "../core/timeline.js";
import { disposeObjectTree } from "../core/dispose.js";
export const kopanoPavilionContract = {
    id: "kopano-pavilion",
    title: "Kopano Pavilion",
    identity: { id: "kopano-labs", label: "Kopano Labs", embodiment: "product" },
    accessibility: {
        reducedMotion: "complete-immediately",
        keyboardNavigation: { required: true, observed: "not-verified" },
        textAlternative: "A Kopano pavilion assembling from its foundation, columns, beams, and roof."
    },
    performance: { defaultQuality: "balanced", targetFrameMs: 20, pixelRatioCap: 1.5, pauseWhenHidden: true },
    evidence: { telemetry: ["frame-time", "quality-change", "scene-lifecycle"], assetReceiptRequired: true }
};
const stages = [
    { id: "foundation", label: "Foundation", completeAt: 0.2 },
    { id: "columns", label: "Columns", completeAt: 0.45 },
    { id: "beams", label: "Beams", completeAt: 0.7 },
    { id: "roof", label: "Roof", completeAt: 1 }
];
function part(name, geometry, material) {
    const mesh = new Mesh(geometry, material);
    mesh.name = name;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
}
/** Original KPGS demonstrator and first Blender-to-GLB construction contract. */
export function createKopanoPavilion() {
    const root = new Group();
    root.name = "Kopano Pavilion";
    const stone = new MeshStandardMaterial({ color: 0x746c62, roughness: 0.88 });
    const timber = new MeshStandardMaterial({ color: 0x5b3824, roughness: 0.66 });
    const roof = new MeshStandardMaterial({ color: 0x173b3b, roughness: 0.58, metalness: 0.08 });
    const foundation = new Group();
    foundation.name = "foundation";
    foundation.add(part("plinth", new BoxGeometry(5.5, 0.45, 4.3), stone));
    foundation.position.y = 0.225;
    const columns = new Group();
    columns.name = "columns";
    for (const [x, z] of [[-2.15, -1.55], [2.15, -1.55], [-2.15, 1.55], [2.15, 1.55]]) {
        const column = part("column", new BoxGeometry(0.32, 3.4, 0.32), timber);
        column.position.set(x, 2.15, z);
        columns.add(column);
    }
    const beams = new Group();
    beams.name = "beams";
    for (const [width, depth, x, z] of [[5, 0.34, 0, -1.55], [5, 0.34, 0, 1.55], [0.34, 3.4, -2.15, 0], [0.34, 3.4, 2.15, 0]]) {
        const beam = part("beam", new BoxGeometry(width, 0.36, depth), timber);
        beam.position.set(x, 3.88, z);
        beams.add(beam);
    }
    const roofGroup = new Group();
    roofGroup.name = "roof";
    const roofSlab = part("roof-slab", new BoxGeometry(6.1, 0.44, 4.9), roof);
    roofSlab.position.y = 4.3;
    roofGroup.add(roofSlab);
    root.add(foundation, columns, beams, roofGroup);
    const timeline = new ConstructionTimeline(stages, 4500);
    const byStage = { foundation, columns, beams, roof: roofGroup };
    const unsubscribe = timeline.subscribe((frame) => {
        for (const stage of stages) {
            const node = byStage[stage.id];
            if (node)
                node.visible = frame.progress >= stage.completeAt;
        }
    });
    return {
        root,
        timeline,
        contract: kopanoPavilionContract,
        update: (deltaMs, reducedMotion = false) => timeline.advance(deltaMs, reducedMotion),
        dispose: () => {
            unsubscribe();
            disposeObjectTree(root);
            root.removeFromParent();
        }
    };
}
//# sourceMappingURL=kopanoPavilion.js.map