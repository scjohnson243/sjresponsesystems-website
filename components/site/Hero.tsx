const statusItems = [
  { label: "Platform status", value: "Active development" },
  { label: "Focus area", value: "Coverage + mission intelligence" },
  { label: "Engagement", value: "Grants, pilot programs, partnerships" },
];

const miniCells = [
  "mini-cell active",
  "mini-cell active",
  "mini-cell revisit",
  "mini-cell active",
  "mini-cell alert",
  "mini-cell revisit",
  "mini-cell",
  "mini-cell active",
  "mini-cell",
];

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-panel">
          <div className="eyebrow">Autonomous Aerial Response Systems</div>
          <h1>Continuous coverage. Measurable intelligence.</h1>
          <p className="hero-subhead">
            Sentinel is an autonomous coverage and mission intelligence platform
            for wildfire detection, search and rescue, disaster response, and
            public-safety operations.
          </p>
          <p className="hero-copy">
            Sentinel is an aerial mission intelligence platform designed for continuous observation operations in high-risk environments.
            The system combines autonomous mission execution with persistent coverage analysis, helping operators understand what areas were actually observed, where coverage gaps remain, how quickly locations are revisited, and how conditions evolve over time.
            Instead of focusing only on aircraft movement, Sentinel is built to create an operational picture teams can use to support earlier detection, faster response, and more informed decision-making.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Discuss a pilot, grant, or partnership
            </a>
            <a className="button button-secondary" href="#platform">
              Explore the platform
            </a>
          </div>

          <div className="status-row">
            {statusItems.map((item) => (
              <div key={item.label} className="status-chip">
                <div className="status-label">
                  <span className="status-dot" />
                  {item.label}
                </div>
                <div className="status-value">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-side">
          <div className="signal-card">
            <div className="signal-label">Sentinel signal</div>
            <h2 className="signal-title">Built for measurable monitoring</h2>
            <p className="signal-copy">
              Sentinel is designed around continuous coverage, predictable
              revisit cycles, and mission evaluation rather than simple waypoint
              completion.
            </p>

            <div className="mini-grid" aria-hidden="true">
              {miniCells.map((className, index) => (
                <div key={`${className}-${index}`} className={className} />
              ))}
            </div>

            <div className="mini-grid-labels">
              <span>Observed</span>
              <span>Revisit</span>
              <span>Alert</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
