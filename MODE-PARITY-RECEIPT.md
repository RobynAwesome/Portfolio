# MODE PARITY RECEIPT

Date: 2026-09-09  
Branch: `forge/research-rune-homepage`  
PR: #14 (DRAFT — do not merge)

## Goal

Make Dark / Light / Crazy / Read hold on homepage interaction surfaces introduced in the interaction sprint.

## Changes

### Semantic colour replacement

| File | Action |
|------|--------|
| `FaithPurposeOrbit.tsx` | Removed `rgba(6,9,10…)`, `rgba(8,11,12…)`; stage/anchors/panel use `--brand-*` + `.faith-orbit*` CSS |
| `EcosystemDiagram.tsx` | Selected nodes use `--brand-surface` / `--brand-accent-soft`; relation lines use `.mode-relation-line` theme strokes; asset well uses `--brand-surface` |
| `HomePage.tsx` | Section `#070909` / `#080b0c` → `var(--brand-bg)`; metrics strip + Cape Town placeholder + lane panels → brand vars |

### CSS additions (`index.css`)

- `.mode-relation-line` / `--lit`
- `.mode-core-card--selected` / `.mode-node-card--selected`
- `.faith-orbit__*` mode-aware surfaces
- Crazy / Read overrides for faith orbit
- `.kpgs-stage canvas` sizing

## Mode expectations (static audit)

| Mode | Notes |
|------|-------|
| Dark | Default brand tokens |
| Light | Surfaces flip via html.light brand vars + existing light orbit rules |
| Crazy | Neon orbit CSS retained; faith stage gets cyan/magenta wash; KPGS emissive bump |
| Read | Motion off via existing `isReadMode`; faith/system stay interactive; KPGS forced to DOM text alternative |

## Regression matrix (20 states)

Modes × widths: Dark/Light/Crazy/Read × 375 / 430 / 768 / 1024 / 1440.

| Check | Status |
|-------|--------|
| Homepage load | Agent static pass — owner visual still required |
| Faith/Purpose/People click | Code path intact |
| Every System node click | Code path intact |
| Previous/Next | Code path intact |
| Execution lane expand | Code path intact |
| Project images | Local banners unchanged |
| Keyboard focus | focus-visible rings retained |

**Owner visual proof still required** before calling matrix complete. Agent did not capture 20 screenshots in this pass (no automated multi-mode browser matrix run). Treat this receipt as engineering readiness, not owner-proof.

## Verification

```text
npm run typecheck → pass
npm run build → pass
```

## Known remaining

1. Accent copper rgba accents remain in some hero gradients (atmosphere, not dark islands). Acceptable for this pass; further tokenisation optional.
2. Cape Town still `ASSET_REQUIRED`.
3. Unrelated CI ESLint `scripts/*.mjs` no-undef still fails outside this sprint.
