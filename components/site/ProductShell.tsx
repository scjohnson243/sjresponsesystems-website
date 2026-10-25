import type { ReactNode } from "react";
import Link from "next/link";
import PreviewHeader, { Brand } from "./PreviewHeader";

export default function ProductShell({ current, children }: { current: "sentinel" | "partners"; children: ReactNode }) {
  return <div className="new-site product-site">
    <PreviewHeader current={current}/>
    <main id="main-content" tabIndex={-1}>{children}</main>
    <footer><Brand/><div><span>SENTINEL VISION / IN DEVELOPMENT</span><a href="mailto:info@sjresponsesystems.com">info@sjresponsesystems.com</a></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} SJ RESPONSE SYSTEMS LLC</span><Link href="/sentinel">Sentinel Vision</Link><Link href="/partners">Early Partner Program</Link><Link href="/">Home</Link></div>
    </footer>
  </div>;
}
