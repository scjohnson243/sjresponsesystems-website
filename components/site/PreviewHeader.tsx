import Link from "next/link";

export function Brand() {
  return <div className="brand"><span className="brand-symbol" aria-hidden="true"><i/><i/><i/><i/></span><span><strong>SJRS</strong><small>RESPONSE SYSTEMS</small></span></div>;
}

export default function PreviewHeader({ current }: { current?: "sentinel" | "partners" }) {
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="topbar preview-topbar">
      <Link href="/" aria-label="SJ Response Systems home"><Brand/></Link>
      <nav aria-label="Main navigation">
        <Link href="/sentinel" aria-current={current === "sentinel" ? "page" : undefined}>Sentinel Vision</Link>
        <Link href="/partners" aria-current={current === "partners" ? "page" : undefined}>Early Partner Program</Link>
        <Link href="/#company">Company</Link>
      </nav>
      <a className="nav-contact" href="mailto:info@sjresponsesystems.com">Contact us <span aria-hidden="true">↗</span></a>
    </header>
  </>;
}
