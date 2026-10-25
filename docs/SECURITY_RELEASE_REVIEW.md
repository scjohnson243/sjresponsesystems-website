# SJRS website security release review — 2026-10-24

## Decision status
Release candidate for authorized public deployment. Security review reduces known risks but does not prove the site is immune from compromise.

## Evidence and mitigations
- Next.js upgraded from 16.2.4 to 16.4.3, eslint-config-next aligned, npm audit fix applied. Subsequent production dependency npm audit: 0 info / low / moderate / high / critical vulnerabilities.
- npm run lint, TypeScript, and npm run build: passed with four static routes: /, /sentinel, /partners, /privacy.
- Inactive Microsoft Graph email POST endpoint removed from deployable code; /api/pilot-inquiry returns 404. Contact form remains mailto: and explicitly tells visitor to send the email.
- Security response headers configured: CSP, X-Frame-Options DENY, nosniff, referrer policy, HSTS (no includeSubDomains), restrictive Permissions-Policy. Local checks confirmed headers delivered.
- Source scan of tracked files found no .env/key/database/video files in Git, and a simple known-token pattern scan of app/components/styles/public produced 0 hits. This does not replace historical secret scanning or credential rotation.
- Gemini 3.1 Flash-Lite, Mistral Ministral 8B, and local Llama 3.2 completed ATLAS Deep Review from sanitized public architectural context (job 20f3bbcf-e24f-4ec4-acaf-0b00beaa8ac5). Their shared principal concern, the unused API endpoint, was resolved. Their model judgments are not penetration-test evidence. An additional Codex read-only review stalled and was not counted as completed.
- Local HTTP checks: /, /sentinel, /partners, /privacy returned 200; obsolete API returned 404.
- Existing Microsoft 365 email sending from the separate SJ Command Center to the test Outlook mailbox was verified previously. Website does NOT reuse business email credentials or promise direct delivery.
- Existing private wildlife recordings, configuration, and ATLAS files stay outside website repo.

## Known residuals and follow-up
- CSP temporarily permits inline JavaScript/styles because the existing Next.js hydration relies on them; adopt nonce/hash-based CSP in a future security milestone. Google Fonts calls are permitted by CSP and should be disclosed in the fuller privacy notice.
- No third-party penetration test, production WAF assessment, Vercel security-configuration audit, full browser accessibility audit, or complete Git history secret scan completed.
- Contact form is mailto only; do not advertise as an independently delivered submission. A production contact API requires its own least-privilege Microsoft 365 permissions, abuse controls, and real delivery tests.
- Verify HTTPS, security headers, routes, public source contents, and rollback after Vercel deployment. Roll back to prior known-good deployment immediately if production smoke fails.
- Keep source private; restrict repository/Vercel access; enable dependency monitoring and MFA in GitHub/Vercel accounts.
