# HOMEPAGE INTERACTION SPRINT RECEIPT

Date: 2026-09-09  
Branch: `forge/research-rune-homepage`  
PR: #14 (DRAFT — do not merge)  
Scope: Homepage experience only. CV / credential registry untouched.

## Freeze note

- No entry / security / orchard / gate sequence exists on this branch (`App.tsx` routes straight to pages).
- Freeze applied as: **do not invent or alter an entry experience**.
- Production baseline screenshot captured via browser on `https://www.krrababalela.com/` before homepage code edits (live surface differed from draft branch homepage).

## Assets fixed

| Item | Before | After |
|------|--------|-------|
| Project RUNE emblem | `raw.githubusercontent.com/.../project_rune_emblem.svg` hotlink | Vendored `public/project-banners/rune-emblem.svg` (11,321 bytes) |
| Featured cards | Broken remote risk | Local paths + `onError` fallback (category/title panel; no broken-image icon) |

## Interactive elements added

1. **`FaithPurposeOrbit`** — Faith / Purpose / People anchors; hover, tap, keyboard focus; selected sentence panel; orbit ring (Framer Motion + CSS perspective; no Three.js).
2. **`EcosystemDiagram` refactor** — selectable nodes (core + 5 orbit nodes), related-line highlight, detail panel + asset + CTA, Previous/Next + node dots, core tap cycles system.
3. **Execution lanes** — Kopano / Ama-Phu expand on hover / focus / tap.
4. **Featured cards** — compact one-line signal mode.

## Title / prose cuts

| Section | Before | After |
|---------|--------|-------|
| About H2 | "I architect systems that serve our people." | "Systems that serve people." |
| System map H3 | "A 3D read of how the portfolio lanes actually connect." | "The System." |
| Featured H2 | "Public work with clear operating context." | "Built. Shipped. Proven." |
| Lanes H2 | "The home page should close with both ecosystem lanes visible." | "Two Worlds. One Mission." |
| `homeHighlights` | 4 long paragraphs | 2 short sentences |
| Project card `detail` | paragraph-length | empty on homepage (compact) |
| Education notes | long | one line each |
| CV CTA body | long | one short sentence |
| Diagram side essay | 3 explanatory cards | removed; interaction replaces talk |

**Estimate:** homepage explanatory prose cut **>40%** vs pre-sprint copy in `HomePage.tsx` + `siteContent` home surfaces.

Preserved verbatim:
- "Technology is not neutral. It must heal, uplift and unite. That is our mandate."
- "Faith guides. Purpose drives. People first."

## Featured projects

| | Count | Set |
|-|-------|-----|
| Before | 4 | RUNE, Bookit, KasiLink, Kopano Context |
| After | 6 | + Harvest 4 All, + 5's Arena Blog |

All six use local `public/project-banners/*` images.

## Cape Town / Africa visual

- Searched: Portfolio `public/`, `23-Ecosystems/Kholofelo Robyn Rababalela`, `personal-projects`.
- **Result:** no approved owned Table Mountain / city landscape asset found.
- **Action:** `#cape-town` section with `data-asset-status="ASSET_REQUIRED"` placeholder + coordinates. **No stock photography inserted.**

## Gates held

- JH provisional wording retained.
- RKC withheld.
- `credential_total` / registry not touched.
- No Three.js dependency added.
- CV generation pipeline not touched.

## Verification

```text
npm run typecheck  → pass
npm run build      → pass (2026-09-09)
```

## Responsive widths

Manual layout intent covered in components for **375 / 430 / 768 / 1024 / 1440+** (grid stacks, touch min sizes on orbit anchors, system map min-heights). Owner visual review on preview required before calling widths done.

## Known remaining issues

1. Cape Town photo: `ASSET_REQUIRED`.
2. Owner must visually press every system-map node on preview (acceptance: stranger learns something different per node).
3. Phrase "Functional 3D diagram" removed until owner interaction pass; label now "Interactive system map".
4. Preview deploy: Vercel deployment completed for this push — see PR #14 deployment / Vercel dashboard. Owner visual review before merge.
5. PR #14 remains DRAFT — no merge.

## Next admissible action

Commit + push branch → open/refresh preview → owner visual review.
