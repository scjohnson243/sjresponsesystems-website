const capabilities = [
  {
    title: "Generate mission coverage",
    copy:
      "Define an operating area, generate coverage geometry, and prepare mission-ready paths for autonomous execution.",
  },
  {
    title: "Track execution",
    copy:
      "Record the actual flown path, mission timing, and live runtime behavior rather than assuming the aircraft followed the plan perfectly.",
  },
  {
    title: "Measure coverage quality",
    copy:
      "Understand what was observed, how recently it was seen, and where gaps or weak areas may have existed.",
  },
  {
    title: "Improve the next mission",
    copy:
      "Use stored mission evidence, replay, and analysis to compare runs and support better decisions over time.",
  },
];

const diagramMeta = [
  { label: "Execute", value: "Coverage lanes + waypoints" },
  { label: "Observe", value: "Runtime footprint + events" },
  { label: "Evaluate", value: "Replay + mission analysis" },
];

export function PlatformOverview() {
  return (
    <section className="section" id="platform">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-kicker">Platform overview</div>
            <h2 className="section-title">What Sentinel does</h2>
            <p className="section-copy">
              Sentinel is an autonomous aerial response and mission intelligence
              platform for executing coverage missions and evaluating how
              effectively they performed in the field.
            </p>
          </div>
        </div>

        <div className="two-col">
          <div className="panel">
            <h3>Mission execution is only the beginning</h3>
            <p className="section-copy">
              Most systems stop at “mission complete.” Sentinel is being built
              to answer a more important question: did the mission actually
              provide effective coverage, and can that result be trusted?
            </p>

            <div className="split-list">
              {capabilities.map((item) => (
                <div key={item.title} className="list-item">
                  <strong>{item.title}</strong>
                  <span>{item.copy}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="diagram">
            <div className="diagram-frame" aria-hidden="true">
              <div className="sonar">
                <div className="sonar-ring" />
                <div className="sonar-ring r2" />
                <div className="sonar-ring r3" />
                <div className="sonar-dot" />
              </div>
            </div>

            <div className="diagram-meta">
              {diagramMeta.map((item) => (
                <div key={item.label} className="meta-pill">
                  <span className="label">{item.label}</span>
                  <span className="value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
