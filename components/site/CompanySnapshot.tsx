const snapshotCards = [
  {
    top: "Location",
    title: "Oklahoma-based",
    copy:
      "Rooted in a region where wildfire, severe weather, and rural response challenges make better aerial coverage genuinely valuable.",
  },
  {
    top: "Direction",
    title: "Mission-focused platform",
    copy:
      "Developed around continuous coverage, measurable mission performance, and response-oriented operational workflows.",
  },
  {
    top: "Engagement",
    title: "Early outreach underway",
    copy:
      "Current conversations include grant alignment, pilot opportunities, and collaborative relationships that support validation and growth.",
  },
  {
    top: "Outlook",
    title: "Built to expand",
    copy:
      "The same platform direction supports wildfire detection, search and rescue, disaster response, and future monitoring applications.",
  },
];

export function CompanySnapshot() {
  return (
    <section className="section" id="credibility">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-kicker">Company snapshot</div>
            <h2 className="section-title">
              Built in Oklahoma. Focused on real-world response.
            </h2>
            <p className="section-copy">
              SJ Response Systems is developing Sentinel with an emphasis on
              public-safety relevance, operational clarity, and practical field
              use. Early outreach is underway across grant, research, and
              mission-aligned partnership channels.
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
