const useCases = [
  {
    top: "01",
    title: "Wildfire detection",
    copy:
      "Continuous aerial monitoring for early detection, repeated observation, and clearer understanding of changing conditions.",
  },
  {
    top: "02",
    title: "Search & rescue",
    copy:
      "Structured coverage to support accountability, revisit awareness, and more defensible search operations.",
  },
  {
    top: "03",
    title: "Public safety & disaster response",
    copy:
      "Mission planning and observation workflows for storm damage, flood response, and time-sensitive area monitoring.",
  },
  {
    top: "04",
    title: "Infrastructure monitoring",
    copy:
      "Coverage-based inspection concepts for pipelines, facilities, rural assets, and sensitive operating areas.",
  },
];

export function UseCases() {
  return (
    <section className="section" id="use-cases">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-kicker">Use cases</div>
            <h2 className="section-title">
              One platform, multiple mission types
            </h2>
            <p className="section-copy">
              Sentinel is being developed as a modular aerial response platform.
              Wildfire is the primary entry point, but the underlying coverage
              and mission-intelligence model extends naturally into adjacent
              response and monitoring problems.
            </p>
          </div>
        </div>

        <div className="card-grid">
          {useCases.map((item) => (
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
