---
title: Comms Log — Portfolio-SUB-BRAIN
created: 2026-04-12
updated: 2026-04-12
author: Claude (Lead)
tags: [comms, log]
status: active
---

# Comms Log — Portfolio (Robyn)

> Newest first. Append only.

---

### 2026-04-16 | Codex | RESUME MOBILE AUDIT + CV FLOW HARDENING

**Delivered this session:**
- Resume page mobile overflow fixed on `src/pages/ResumePage.tsx`
- Decorative background blobs constrained so they no longer widen the viewport on phones
- Resume contact links, certificate rows, and project rows now wrap/stack correctly on narrow screens
- Floating CV button resized for mobile viewport safety
- CV picker controls now have explicit labels; recruiter form inputs now include `name`, `autocomplete`, and inline error wiring
- Placeholder certificate links no longer point to dead `#` anchors

**Verification:**
- `npm run check` ✅
- Local mobile screenshot retaken after patch ✅
- Ready to ship to Vercel / git deploy

---

### 2026-04-12 | Claude (Lead) | SESSION COMPLETE — FIXES DELIVERED

**Delivered this session:**
- OG image replaced with `profile-banner.jpg` — branded, shows Robyn name + title
- CV download fixed — root cause was `vercel.json` SPA rewrite intercepting `/api/` before serverless function. Rewrite order corrected.
- OpenSource terminal crash fixed — bounds check before array access + null-safe render
- `software-developer.pdf` — Owner confirmed correct file uploaded

**Build:** Vercel deploy READY ✅
**MAIN-BRAIN sync:** ✅ `07-Sessions By Day/2026-04-12.md` updated

---

### 2026-04-12 | Claude (Lead) | SUB-BRAIN CREATED

Sub-brain structure created and synced to MAIN-BRAIN.
