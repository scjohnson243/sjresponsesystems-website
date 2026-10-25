# SJRS website — production status and operations

Last verified: 2026-10-24 (America/Chicago), after authorized launch.

## Canonical live state
- Public site: https://www.sjresponsesystems.com ; apex redirects to www over HTTPS.
- GitHub: https://github.com/scjohnson243/sjresponsesystems-website (private repository).
- Production: Vercel; production branch `main`, merge commit `94ff76d376c95ac18a6f44ba59f12b6efb1e7b0d`, PR #1.
- Approved brand: Midnight Titanium (deep navy, titanium, steel blue, champagne); SJRS is an AI/technology company, Sentinel Vision the flagship modular camera-intelligence product. ATLAS is strictly internal tooling, not for sale.
- Routes checked live with HTTP 200: `/`, `/sentinel`, `/partners`, `/privacy`.
- Potential modules shown as *concepts*: store counting/flow, dealership activity and heat maps, facility event awareness, and wildlife observation. Do not claim validated commercial accuracy or existing customers.
- Public contact: `info@sjresponsesystems.com`. Early Partner inquiry currently opens a user-controlled mailto draft; **does not send server-side**.
- No private Sentinel camera footage, ATLAS data, Microsoft 365 credentials or secret files intentionally included.

## Security launch gate and evidence
- Next.js updated to 16.4.3 and dependency tree repaired; subsequent npm audit returned zero known reported vulnerabilities (time-bounded result, not proof of immunity).
- `npm run lint`, TypeScript and `npm run build` passed; production deployment via Vercel succeeded.
- CSP, X-Frame-Options, X-Content-Type-Options, Strict-Transport-Security, Referrer-Policy, and Permissions-Policy observed on public response.
- Unused Microsoft Graph API endpoint removed; live `/api/pilot-inquiry` returns HTTP 404 on GET and POST.
- Three independent ATLAS architectural design reviews: Gemini 3.1 Flash-Lite, Mistral Ministral 8B, local Llama 3.2; independent Codex read-only scan stalled and was NOT counted.
- Simple website source screening showed no tracked env/credential/DB/video files or basic token-pattern matches; incomplete history-wide secret audit.
- Detailed evidence and residual risks: `docs/SECURITY_RELEASE_REVIEW.md`.

## Remaining work and cautions
1. Security is risk reduction, not a guarantee. Complete threat-focused penetration testing, MFA/role review for Vercel/GitHub, dependency alert monitoring, privacy notice review, comprehensive mobile/keyboard/browser QA.
2. CSP currently permits inline scripts/styles for Next.js hydration; revisit nonce/hash approach.
3. Do not add a direct server-side contact handler without rate limiting, abuse protection, limited Microsoft Graph mailbox permissions, real inbox delivery verification, and documented data retention.
4. Select and sanitize actual Sentinel demo footage only after explicit permission to publish.
5. Future changes: protected branch -> Vercel preview -> tests and inspection -> approved merge to `main` -> live HTTP and security-header checks. Vercel deployment history provides rollback options; test rollback controls before an incident.
6. Preserve the prior drone company's historical planning records, but do not reintroduce its obsolete marketing copy into the new homepage.

## Recovery links
- Original preview and concept diary: `DESIGN_PREVIEW.md` (historical stages, not current status).
- Launch/security specifics: `docs/SECURITY_RELEASE_REVIEW.md`.
- Contact backend requirements: `docs/CONTACT_DELIVERY_READINESS.md`.
- ATLAS local repo: `E:\Development\ATLAS`. Its independent computer-access gateway and generic non-Python test adapter are NOT yet verified/finished.
