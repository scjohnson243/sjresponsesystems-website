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

## W004 implementation checkpoint — 2026-10-24
A disabled-by-default Next.js API route is implemented at /api/pilot-inquiry. It accepts structured inquiry JSON, validates lengths and use case, fixes the destination to info@sjresponsesystems.com and, only when explicitly configured, obtains an OAuth token using Microsoft Entra client credentials and calls Microsoft Graph sendMail. No credentials have been installed. The endpoint returned HTTP 503 without configuration, as intended. The currently visible partner form continues to use a user-controlled mailto draft.

Activation requires authorization to configure an app registration and mailbox permissions, plus: SJRS_GRAPH_TENANT_ID, SJRS_GRAPH_CLIENT_ID, SJRS_GRAPH_CLIENT_SECRET, SJRS_GRAPH_SENDER (sender mailbox with permitted application access). Do not expose secrets in source, commit them, or enable online form submission until real delivery has been checked. Microsoft Graph app permissions must be restricted to the intended mailbox according to the tenant's supported access control. Before public enablement, implement durable rate limiting/abuse controls and success/failure UX. No production deployment has been performed.
