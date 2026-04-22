import { RadarMapPanel } from "@/components/site/RadarMapPanel";

const statusItems = [
  { label: "Platform status", value: "Active development" },
  { label: "Focus area", value: "Coverage + mission intelligence" },
  { label: "Engagement", value: "Grants, pilot programs, partnerships" },
];

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-panel">
          <div className="eyebrow">Autonomous Aerial Response Systems</div>
          <h1>Continuous coverage. Measurable intelligence.</h1>
          <p className="hero-subhead">
            Sentinel is an autonomous coverage and mission intelligence
            platform for wildfire detection, search and rescue, disaster
            response, and public-safety operations.
          </p>
          <p className="hero-copy">
            Sentinel is an aerial mission intelligence platform designed for
            continuous observation operations in high-risk environments. The
            system combines autonomous mission execution with persistent
            coverage analysis, helping operators understand what areas were
            actually observed, where coverage gaps remain, how quickly
            locations are revisited, and how conditions evolve over time.
            Instead of focusing only on aircraft movement, Sentinel is built
            to create an operational picture teams can use to support earlier
            detection, faster response, and more informed decision-making.
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
          <div className="signal-card signal-card-hero">
            <div className="signal-layout signal-layout-hero">
              <div className="signal-content signal-content-hero">
                <div className="signal-label">Operational capability</div>
                <h2 className="signal-title">
                  Rapid deployment. Continuous awareness.
                </h2>
                <p className="signal-copy">
                  Sentinel is built to help response teams establish persistent
                  aerial monitoring quickly in fast-moving operational
                  environments.
                </p>
                <p className="signal-copy">
                  Within minutes of arriving on scene, operators can define a
                  mission area, generate an optimized flight path, launch
                  autonomous aerial coverage, and begin receiving continuous
                  mission intelligence and live operational updates.
                </p>
                <p className="signal-copy signal-copy-last">
                  The system is designed for repeatable coverage, measurable
                  observation tracking, and sustained monitoring throughout the
                  full duration of an incident or deployment.
                </p>
              </div>

              <div className="signal-visual signal-visual-hero">
                <RadarMapPanel variant="deployment" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
