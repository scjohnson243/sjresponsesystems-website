# Contact delivery readiness — PRIVATE PREVIEW ONLY

Status: 2026-10-24. No production deployment authorized.

## Current behavior
The partner form uses a client-side mailto: draft to info@sjresponsesystems.com. This depends on the visitor having an email application; it does not persist or send inquiries server-side. Do not describe this as a working hosted contact form.

## Recommended production path
Use a server-side Next.js route with a dedicated transactional-email service or authenticated Microsoft Graph SendMail permissions, scoped to a designated SJRS mailbox. Microsoft 365 account access alone does not confer server-side API permissions. Do not expose client secrets to browser code or commit credentials. Obtain explicit permission before configuring a provider.

## Requirements before changing form behavior
- Validate and cap all fields server-side; reject unknown input and oversized bodies.
- Prevent bot abuse with rate limits, a honeypot and provider-side abuse protections; only add CAPTCHA after assessing accessibility.
- Use fixed destination info@sjresponsesystems.com; never let a visitor control recipient, sender, or HTML.
- Set Reply-To only after validating email; escape user content.
- Use deployment secrets, not NEXT_PUBLIC environment variables, for authentication.
- Respond with truthful success/error states; idempotency if provider offers it; avoid logging user inquiry bodies unnecessarily.
- Add a privacy disclosure and retention policy before collecting personal information.
- Test delivery to the real mailbox and failure behavior in a private deployment before production.
- Continue to keep the preview and production environments separate.

## Product demonstration policy
Existing wildlife camera evidence may include identifiable home/location information. Do not copy raw footage to a public web repository. Publish only manually reviewed, permission-cleared excerpts with explicit model/prototype status.

## Acceptance gates
1. Accessibility/keyboard mobile and desktop review.
2. No fabricated capabilities or performance data.
3. HTTP 200 for homepage, /sentinel, /partners.
4. Lint and production build passing.
5. Working pilot submission with end-to-end receipt in info mailbox, followed by a user-approved deployment.
