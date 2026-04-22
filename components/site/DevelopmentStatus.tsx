const coreProgress = [
  {
    tag: "Mission system",
    live: true,
    copy:
      "Coverage generation, path construction, and waypoint-based execution workflows are functional and actively evolving.",
  },
  {
    tag: "Runtime tracking",
    live: true,
    copy:
      "Live telemetry integration and coverage-state tracking provide visibility into how missions actually perform.",
  },
  {
    tag: "Analysis direction",
    live: true,
    copy:
      "Replay, benchmarking, and mission comparison are core parts of the platform roadmap.",
  },
];

const growthItems = [
  {
    tag: "Growth",
    live: true,
    copy:
      "We are actively expanding the Sentinel platform and are interested in connecting with developers, engineers, and collaborators aligned with autonomous systems and public-safety technology.",
  },
  {
    tag: "Opportunities",
    live: true,
    copy:
      "Areas of interest include Python backend development, geospatial systems, mission execution, simulation, and UI/UX for operational tools.",
  },
  {
    tag: "Get involved",
    live: true,
    copy:
      "If you're interested in contributing, collaborating, or exploring opportunities, reach out through the contact section below.",
  },
];

export function DevelopmentStatus() {
  return (
    <section className="section" id="status">
      <div className="container">
        <div className="section-head">
          <div className="section-intro">
            <div className="section-kicker">Development</div>
            <h2 className="section-title section-intro-title">
              Platform progress
            </h2>
            <p className="section-copy section-intro-copy">
              Sentinel is in active development with working system components,
              expanding mission-analysis capabilities, and a clear path toward
              operational validation.
            </p>
          </div>
        </div>

        <div className="panel status-panel">
          <div className="status-stack">
            {coreProgress.map((item) => (
              <div key={item.tag} className="status-box">
                <div className="tag">
                  {item.live ? <span className="live" /> : null}
                  {item.tag}
                </div>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>

          <div className="status-stack">
            {growthItems.map((item) => (
              <div key={item.tag} className="status-box">
                <div className="tag">
                  {item.live ? <span className="live" /> : null}
                  {item.tag}
                </div>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
