import Image from "next/image";

import wildfirePanel from "@/public/images/sentinel-wildfire-panel.png";

const impactCards = [
  {
    top: "Wildfire",
    title: "Earlier detection",
    copy:
      "Identify events when they are still small, before they escalate into large-scale incidents.",
  },
  {
    top: "Search & rescue",
    title: "Documented coverage",
    copy:
      "Know what has been searched, when it was observed, and where gaps remain.",
  },
  {
    top: "Disaster response",
    title: "Faster clarity",
    copy:
      "Gain structured, repeatable visibility during rapidly changing situations.",
  },
  {
    top: "Critical infrastructure",
    title: "Continuous oversight",
    copy:
      "Maintain consistent monitoring across large or remote operational areas.",
  },
];

export function WhyItMatters() {
  return (
    <section className="section" id="why-it-matters">
      <div className="container">
        <div className="section-head">
          <div className="section-intro">
            <div className="section-kicker">Operational value</div>
            <h2 className="section-title section-intro-title">
              Why this matters
            </h2>
            <p className="section-copy section-intro-copy">
              Early detection changes everything. The difference between
              identifying a fire at initial ignition versus after it spreads is
              measured in cost, risk, and lives.
            </p>
          </div>
        </div>

        <div className="panel why-panel">
          <div>
            <h3>Catch it early. Contain it fast.</h3>
            <p className="section-copy">
              In environments like Oklahoma, wind-driven fire behavior can
              change in minutes. A small ignition can spread rapidly under
              shifting winds, turning a manageable event into a fast-moving,
              high-risk incident.
            </p>
            <p className="section-copy section-copy-spaced">
              A fire detected at a sub-acre level can often be contained
              quickly with minimal resources. The same fire, undetected, can
              grow exponentially, reaching 10+ acres, then 100+ acres, requiring
              significantly more personnel, equipment, and time, while
              increasing danger to responders and surrounding communities.
            </p>
            <p className="section-copy section-copy-spaced">
              Sentinel reduces that risk by enabling continuous aerial
              monitoring instead of static observation. Rather than relying on a
              single snapshot in time, Sentinel tracks change over time,
              helping detect events earlier and understand how conditions evolve
              in real-world environments.
            </p>
          </div>

          <div className="wildfire-visual">
            <Image
              src={wildfirePanel}
              alt="Sentinel wildfire monitoring interface panel"
              className="wildfire-image"
              sizes="(max-width: 1080px) 100vw, 38vw"
            />
            <div className="wildfire-overlay wildfire-overlay-dark" />
            <div className="wildfire-overlay wildfire-overlay-scan" />
            <div className="wildfire-overlay wildfire-overlay-frame" />
          </div>
        </div>

        <div className="card-grid">
          {impactCards.map((item) => (
            <article key={item.title} className="stat-card">
              <div className="stat-top">{item.top}</div>
              <h3 className="stat-title">{item.title}</h3>
              <p className="stat-copy">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
