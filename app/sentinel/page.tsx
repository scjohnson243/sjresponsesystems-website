import type { Metadata } from "next";
import Link from "next/link";
import ProductShell from "@/components/site/ProductShell";

export const metadata: Metadata = {
  title: "Sentinel Vision | SJ Response Systems",
  description: "Explore Sentinel Vision, a visual-intelligence platform in development, its proposed use cases, and the questions a focused pilot would test.",
};

const applications = [
  { sector: "01 / RETAIL & VENUES", title: "Understand how a space is used.", question: "When do entrances become busy, and where do visitors spend time?", proposal: "Explore entry and exit counts, zone occupancy, and dwell patterns from an authorized view of a defined area.", validation: "Compare observations with manual counts. Test crowding, occlusion, camera placement, and changing light before relying on trends." },
  { sector: "02 / DEALERSHIPS & PROPERTY", title: "Put lot activity in context.", question: "Which areas attract activity, and how does traffic change through the day?", proposal: "Explore vehicle and pedestrian movement across agreed lot zones, with time-based summaries and reviewable footage references.", validation: "Separate passing traffic from on-site activity. Check night conditions and overlapping vehicles; movement alone does not establish purchase intent." },
  { sector: "03 / FACILITIES & OPERATIONS", title: "Review the events that matter.", question: "What activity occurs around an access point or a restricted operational zone?", proposal: "Explore zone-based event candidates and supporting visual context for staff review, using site-defined rules and authorized footage.", validation: "Measure missed events and false positives with operators. Any alerts or workflow integrations require separate scoping and validation; this is not a certified safety system." },
  { sector: "04 / WILDLIFE & LAND", title: "Make observation easier to review.", question: "When are animals active, and which observations deserve a closer look?", proposal: "Explore animal-activity timelines and species candidates from fixed cameras or recorded clips, with evidence retained for human review.", validation: "Check species candidates against expert labels. Weather, vegetation, distance, and infrared imagery can change results; candidates are not confirmed identifications." },
];

export default function SentinelPage() {
  return <ProductShell current="sentinel">
    <section className="product-hero">
      <p className="eyebrow">SENTINEL VISION / ACTIVE DEVELOPMENT</p>
      <h1>From visible activity<br/>to <em>useful understanding.</em></h1>
      <p className="product-lead">A modular visual-intelligence platform being developed to turn authorized camera footage into observations people can inspect, question, and use.</p>
      <div className="product-actions"><Link className="pilot-button" href="/partners">Explore a potential pilot <span aria-hidden="true">↗</span></Link><a className="text-link" href="#use-cases">Explore use cases</a></div>
      <aside className="status-note"><strong>Development status</strong><p>Sentinel Vision is in active development. The applications below describe intended directions for evaluation, not validated commercial modules. Production availability, supported hardware, integrations, and performance have not been established here. A pilot requires an individual feasibility review.</p></aside>
    </section>
    <section className="product-section" aria-labelledby="workflow-title">
      <p className="eyebrow">THE PROPOSED WORKFLOW</p><h2 id="workflow-title">A shared foundation.<br/>A specific operational question.</h2>
      <div className="product-grid three-columns">
        <article><span className="eyebrow">01 / DEFINE</span><h3>Start with the source.</h3><p>Agree on the question, authorized footage, relevant zones, and operating conditions. Camera compatibility and local processing requirements need assessment for each site.</p></article>
        <article><span className="eyebrow">02 / OBSERVE</span><h3>Develop useful signals.</h3><p>Evaluate candidate counts, activity patterns, or events against reviewed examples. Keep uncertainty visible and connect observations to evidence where feasible.</p></article>
        <article><span className="eyebrow">03 / EVALUATE</span><h3>Test against reality.</h3><p>Compare outputs with human review and an agreed baseline. Decide whether the results answer the original question before expanding scope.</p></article>
      </div>
    </section>
    <section id="use-cases" className="product-section alternate" aria-labelledby="cases-title">
      <p className="eyebrow">APPLICATIONS UNDER EXPLORATION</p><h2 id="cases-title">Concrete questions.<br/>Measurable pilot work.</h2>
      <div className="product-grid">{applications.map(item => <article key={item.sector}><p className="eyebrow">{item.sector}</p><h3>{item.title}</h3><p className="use-question">{item.question}</p><h4>Proposed scope</h4><p>{item.proposal}</p><h4>What needs validation</h4><p>{item.validation}</p></article>)}</div>
    </section>
    <section className="product-section" aria-labelledby="boundaries-title"><p className="eyebrow">REAL-WORLD BOUNDARIES</p><h2 id="boundaries-title">The environment is part of the problem.</h2><div className="product-grid"><article><h3>Footage, compute, and reliability</h3><p>Resolution, viewing angle, lighting, bandwidth, and available hardware affect feasibility. Local-first processing is a design direction; deployment architecture, retention, uptime expectations, and integrations must be agreed for a specific pilot.</p></article><article><h3>Permission and human judgment</h3><p>Partners must have authority to use the footage. Access, privacy, retention, and review responsibilities should be defined before any data is shared. Observations need human interpretation and do not establish identity, intent, or safety.</p></article></div><Link className="text-link" href="/partners">Help define a focused evaluation <span aria-hidden="true">↗</span></Link></section>
  </ProductShell>;
}
