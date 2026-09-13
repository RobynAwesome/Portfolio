# KPGSthree.ts

KPGSthree.ts is the Kopano-Phu Governance System's TypeScript-first graphics platform for original, accessible 3D experiences.

It is deliberately a governed spatial-runtime layer, not a forked renderer. Three.js provides the established WebGL/WebGPU foundation; KPGSthree.ts owns typed scene contracts, staged construction behavior, quality governance, Blender asset provenance, lifecycle rules, and product integration patterns that are specific to KPGS.

## Runtime contracts

A KPGS scene declares more than meshes and camera values. `KpgsSceneContract` binds a scene to a spatial identity, accessibility behavior, performance envelope, and expected evidence. A required capability begins as `not-verified`; it is not treated as proof until an integration observes it. `AssetLedger` creates serializable receipts containing an asset's origin, source, licence, verification state, and SHA-256 digest. Registration records a declared digest; `verify()` calculates the SHA-256 from actual bytes and records either `verified` or `mismatch`. `AdaptiveGovernor` makes quality changes observable after sustained frame pressure, while reduced motion stays a separate accessibility reason.

## First public contract

The first original demonstrator is a procedural Kopano pavilion. It exposes a named construction sequence:

1. `foundation`
2. `columns`
3. `beams`
4. `roof`

Those names are the Blender handoff contract. A future Blender model can export matching nodes in a GLB, while the same timeline and accessibility behavior remains in TypeScript.

## Install and validate

```bash
npm install
npm run check
npm test
```

## Use

```ts
import { createKopanoPavilion, chooseQualityProfile, loadGlb } from "@kopano-labs/kpgs-three";

const quality = chooseQualityProfile({
  deviceMemoryGiB: navigator.deviceMemory,
  hardwareConcurrency: navigator.hardwareConcurrency,
  reducedMotion: matchMedia("(prefers-reduced-motion: reduce)").matches
});

const pavilion = createKopanoPavilion();
pavilion.update(16);

const asset = await loadGlb("/assets/kopano-pavilion.glb");
```

## Product rules

- Respect `prefers-reduced-motion`; reduced motion completes construction without a timed animation.
- Cap device pixel ratio before renderer allocation and select a conservative quality profile.
- Pause animation when a canvas is hidden or offscreen in site integrations.
- Dispose geometries, materials, and textures when a scene is unmounted.
- Keep original Blender `.blend` sources outside public build output and export optimized GLB assets for the web.
- Record external assets and licences in the consuming product's provenance record.

## Provenance

The pavilion is an original KPGS demonstrator. KPGSthree.ts includes no code, artwork, audio, textures, or models from Kage or Towers. Three.js remains an independent MIT-licensed dependency; see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## License

Apache-2.0. See [LICENSE](LICENSE).
