const snapshotCards = [
  {
    top: "Location",
    title: "Oklahoma-based",
    copy:
      "Rooted in a region where wildfire, severe weather, and rural response challenges make better aerial coverage genuinely valuable.",
  },
  {
    top: "Direction",
    title: "Integrated mission intelligence system",
    copy:
      "Sentinel is built to support planning, execution, live monitoring, measurable coverage accountability, and after-action understanding in one operational system.",
  },
  {
    top: "Engagement",
    title: "Early outreach underway",
    copy:
      "Current conversations include grant alignment, pilot opportunities, and collaborative relationships that support validation and growth.",
  },
  {
    top: "Mission scope",
    title: "One core system, multiple mission types",
    copy:
      "The same mission system can support wildfire monitoring, search and rescue, tornado damage assessment, and infrastructure observation because it is designed around mission execution, continuous awareness, and measurable coverage rather than a single aircraft task.",
  },
];

export function CompanySnapshot() {
  return (
    <section className="section" id="credibility">
      <div className="container">
        <div className="section-head">
          <div className="section-intro">
            <div className="section-kicker">Company snapshot</div>
            <h2 className="section-title section-intro-title">
              Built in Oklahoma. Focused on real-world response.
            </h2>
            <p className="section-copy section-intro-copy">
              SJ Response Systems is building Sentinel as an integrated mission
              intelligence system for teams that need to plan missions, run
              them with execution visibility, understand what was actually
              observed, and improve how operations are performed over time.
            </p>
            <p className="section-copy section-copy-spaced section-intro-copy">
              The platform is designed to help teams establish coverage
              quickly, maintain continuous awareness during active operations,
              evaluate mission effectiveness, and carry those lessons forward
              through replay, analysis, and operator-assisted mission
              improvement.
            </p>
          </div>
        </div>

        <div className="card-grid">
          {snapshotCards.map((item) => (
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
