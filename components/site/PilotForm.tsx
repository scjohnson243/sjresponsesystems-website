"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";

const subscribe = () => () => {};

export default function PilotForm() {
  const [ready, setReady] = useState(false);
  const [draft, setDraft] = useState("");
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  function openEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();
    const body = [
      "Hello SJ Response Systems,", "", "I would like to discuss a potential Sentinel Vision pilot.", "",
      `Name: ${value("name")}`, `Organization: ${value("organization")}`, `Reply email: ${value("email")}`,
      `Use case: ${value("useCase")}`, "", "Operational question and desired outcome:", value("challenge"), "",
      "Footage / site context:", value("context") || "To be discussed.", "",
      "I understand Sentinel Vision is in development and pilot scope, feasibility, privacy requirements, and terms must be agreed individually.",
    ].join("\r\n");
    setDraft(body);
    setReady(true);
    window.location.href = `mailto:info@sjresponsesystems.com?subject=${encodeURIComponent("Sentinel Vision — Early Partner Program inquiry")}&body=${encodeURIComponent(body)}`;
  }

  return <form className="pilot-form" onSubmit={openEmail} action="mailto:info@sjresponsesystems.com" method="get" aria-labelledby="inquiry-title" aria-describedby="email-explanation">
    <h2 id="inquiry-title">Start a pilot conversation.</h2>
    <p id="email-explanation">This form opens your own email client with a fully composed draft to <a href="mailto:info@sjresponsesystems.com">info@sjresponsesystems.com</a>. There is no server submission. You must review and send the email yourself.</p>
    <p>All fields are required unless marked optional. Please do not include sensitive information or footage.</p>
    <fieldset disabled={!mounted}>
      <legend>Your contact and pilot idea</legend>
      <div className="form-grid">
        <label htmlFor="pilot-name">Name<input id="pilot-name" name="name" autoComplete="name" required maxLength={80}/></label>
        <label htmlFor="pilot-organization">Organization<input id="pilot-organization" name="organization" autoComplete="organization" required maxLength={120}/></label>
        <label htmlFor="pilot-email">Email<input id="pilot-email" name="email" type="email" autoComplete="email" required maxLength={160}/></label>
        <label htmlFor="pilot-use-case">Use case<select id="pilot-use-case" name="useCase" required defaultValue=""><option value="" disabled>Select a use case</option><option>Retail / venues</option><option>Dealerships / property</option><option>Facilities / operations</option><option>Wildlife / land</option><option>Other / exploring</option></select></label>
      </div>
      <label htmlFor="pilot-challenge">Operational question and desired outcome<textarea id="pilot-challenge" name="challenge" required rows={4} maxLength={700} aria-describedby="challenge-help"/></label>
      <p id="challenge-help" className="field-help">What decision would this support, and how would you judge a useful result? Maximum 700 characters.</p>
      <label htmlFor="pilot-context">Footage / site context (optional)<textarea id="pilot-context" name="context" rows={3} maxLength={400} aria-describedby="context-help"/></label>
      <p id="context-help" className="field-help">Describe available cameras, conditions, and permission constraints. Do not attach or link footage yet. Maximum 400 characters.</p>
      <button className="pilot-button" type="submit">Open email draft <span aria-hidden="true">↗</span></button>
    </fieldset>
    <noscript><p>JavaScript is needed to compose this draft. Email info@sjresponsesystems.com directly with your name, organization, use case, and pilot question.</p></noscript>
    <p role="status">{ready ? "Email handoff requested. Nothing has been submitted by this website. Review and send the draft in your email app; we cannot confirm whether it opened or was sent." : "Nothing is sent until you send it from your email app."}</p>
    <p>No email app configured? Email <a href="mailto:info@sjresponsesystems.com">info@sjresponsesystems.com</a> from your preferred service.</p>
    {ready && <div className="email-fallback"><label htmlFor="email-draft">Copyable email body</label><p>Subject: Sentinel Vision — Early Partner Program inquiry</p><textarea id="email-draft" readOnly value={draft} rows={12} onFocus={event => event.currentTarget.select()}/></div>}
  </form>;
}
