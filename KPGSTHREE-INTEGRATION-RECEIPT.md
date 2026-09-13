# KPGSTHREE INTEGRATION RECEIPT

Date: 2026-09-09  
Branch: `forge/research-rune-homepage`  
PR: #14 (DRAFT — do not merge)

## Pin

```text
repo:   https://github.com/Kopano-Labs/KPGSthree.ts
commit: 8438843b72f9d89d75cc7b689a355f9e2ae5ecc3
package:@kopano-labs/kpgs-three@0.1.0
three:  0.185.1 (direct + transitive)
```

## Why vendored

`npm install github:Kopano-Labs/KPGSthree.ts#8438843…` installs an **empty package**: upstream `package.json` `files` lists only `dist/`, and that commit has **no committed `dist/`**.

Reproducible workaround:

1. Clone pin
2. `npm run build`
3. Vendor built `dist/` + package metadata under `vendor/kpgs-three/`
4. Depend via `"@kopano-labs/kpgs-three": "file:vendor/kpgs-three"`

See `vendor/kpgs-three/PIN.md`.

## Portfolio integration

| Piece | Role |
|-------|------|
| `src/components/KpgsSpatialStage.tsx` | Progressive host |
| `EcosystemDiagram.tsx` | Keeps DOM system map; KPGS stage sits beside it (lg+) and responds to `selectedNodeId` |

### Governance behaviours

- **Dark / Crazy / Light:** WebGL pavilion when available
- **Read + `prefers-reduced-motion`:** DOM-only using `kopanoPavilionContract.accessibility.textAlternative` — no mandatory WebGL
- **AdaptiveGovernor:** frame pressure → pixel-ratio cap
- **Offscreen:** IntersectionObserver pauses rAF
- **Hidden tab:** visibilitychange pauses rAF
- **Unmount:** pavilion.dispose + renderer.dispose + canvas remove
- **Information:** DOM panel remains canonical; canvas is `aria-hidden` when active

### Scene

First KRR scene uses `createKopanoPavilion()` — identity pavilion construction timeline. Selecting system nodes lerps camera yaw/pitch/zoom. Same information semantics across modes; Crazy only changes energy/palette.

## Explicit non-goals (this PR)

- No TypeScript 7 / React 19 upgrade on Portfolio
- No 5s-Arena-Blog MERN upgrades
- No CV generation changes
- Do not merge #14 without owner visual review across modes

## Verification

```text
npm run typecheck → pass
npm run build → pass
```
