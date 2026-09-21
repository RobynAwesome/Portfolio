---
document_id: krr-three-evidence-relay-receipt-2026-09-21
canonical_id: krr_three_evidence_relay_receipt
document_type: KDT-03
title: Three.js evidence relay implementation and validation receipt
version: 0.1.0
status: watch
proof_state: poc
owner: Kholofelo Robyn Rababalela
author: Codex GPT-5, stateless renter
source_repository: RobynAwesome/Portfolio
source_ref: feat/three-evidence-relay
authority_class: A0
evidence_class: verified-source
kpefs:
  primary_vector: V4_DIASPORA
  secondary_vectors: [V1_PLANT, V3_HOMO_SAPIENS]
protocols: [ALP, CBP, BMP, PKAP, PvF]
renter_assertion: I_AM_STATELESS_RENTER_NOT_LANDLORD
---

# Three.js evidence relay implementation and validation receipt

## Governing law

The relay is a public-facing visual explanation of evidence provenance. It is not a public GSMB console and does not claim live MAO execution, live Drive synchronisation, or production authority.

## Scope

The existing Portfolio system map now contains an **Evidence Relay** lane with three selectable sources: **Cloud**, **Local**, and **Drive**. The browser receives only public-safe descriptions and a dated snapshot note. It does not receive private source IDs, Drive URLs, absolute filesystem paths, credentials, or raw GSMB instructions.

The progressive Three.js stage adds source beacons, line geometry, and bounded instanced pulses. The DOM card remains the canonical explanation and is available when WebGL is unavailable, when the user chooses Read mode, or when reduced motion is requested.

## Source observations

| Surface | Observation | Evidence state |
|---|---|---|
| Portfolio cloud | Draft PR #14 baseline at `2ba5c83f22d0d9d4700f88615b17903ce8b890d6`; CI, GitGuardian, and Vercel checks were green at the observed head | verified-source |
| GSMB cloud | `RobynAwesome/Introduction-to-MCP` master observed at `617092ce0094e32c9be8a7386cad241dbfe575cf` on 19 Sep 2026 | verified-source |
| GSMB local metal | Inspected browser-metal checkout was detached at `40a31fe8`; root `NOW.md` is dated 5 Sep and is retained as stale testimony until reconciled | partial |
| Google Drive | Authenticated search returned the KPGS × Kopano Labs weekly orientation dated 21–27 Sep 2026, whose evidence cutoff is 20 Sep and which records the local/cloud NOW contradiction | verified-source |
| MAO route | Local `mao_dispatch.route_task` routed the bounded relay request to Cassy with `V4_DIASPORA`, witness LPH, and a KPGS hood entry; no external model execution was claimed | POC |

## Implementation

- `src/data/evidenceRelay.ts` holds the typed public-safe snapshot contract.
- `src/components/EcosystemDiagram.tsx` adds the Evidence Relay node, source selection, selected state, and DOM explanation.
- `src/components/KpgsSpatialStage.tsx` adds the progressive beacon/line/pulse layer with source highlighting, hidden-tab and viewport pause inherited from the existing stage, and explicit cleanup for relay resources.
- `scripts/verify-evidence-relay.mjs` drives the local production preview with Edge/Puppeteer and records viewport, keyboard, reduced-motion, WebGL/fallback, and snapshot-copy evidence.

## Validation evidence

- `npm run build` passed; Vite emitted the existing large Three.js chunk warning.
- `npm run typecheck` passed.
- `npm run lint` passed with the existing `react-refresh/only-export-components` warning in `src/components/theme/ThemeModeProvider.tsx:55`.
- `node scripts/verify-evidence-relay.mjs` passed with no failures:
  - 375, 390, 430, 768, 1024, and 1440 px had no horizontal overflow.
  - Cloud, Local, and Drive buttons each exposed `aria-pressed="true"` and changed the live detail card.
  - Space-key activation selected Local.
  - The progressive canvas was present in the desktop run.
  - The snapshot disclaimer was present.
  - Reduced-motion rendered the DOM-only fallback and all three source descriptions.
- Focused GSMB validation passed: `17 passed` across MAO/MMAO reflection, Google Drive MCP, KPGS governance, and MMAO identity-governance tests.

Local screenshot artifacts are retained under `artifacts/evidence-relay/` for visual review. They are generated evidence, not public source data.

## PKA / unresolved state

```text
X = exact cloud/local/Drive observations plus local browser and KPGS test receipts
Y = public-safe snapshot contract and promotion gates
X + Y = MAYBE for live multi-surface synchronization
needed evidence = authenticated runtime connector contract, capability lease, end-to-end receipt, and exact deployed-SHA verification
```

## Promotion state

- Current proof state: `poc`.
- Preview deployment: READY at Vercel deployment `dpl_7Xwz2wRAUqSXeHWnH4tgkh8xsMtW`, serving the implementation branch commit `97b8d90b89e524b42fa93c672e08a3f7cf9ae225` at `https://personal-portfolio-1i3l091m0-robynawesomes-projects.vercel.app`.
- Owner visual review: pending.
- Production promotion: not authorized by this receipt.
- Merge of PR #14: remains out of scope.

## Next admissible action

Keep the preview URL and exact branch head available for owner visual review. Do not promote to the public domain or merge PR #14 until owner review and the required promotion evidence are present.

/s/ Kholofelo Robyn Rababalela

