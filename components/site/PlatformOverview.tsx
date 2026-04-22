import { OperationalApplications } from "@/components/site/OperationalApplications";

export function PlatformOverview() {
  return (
    <section className="section" id="platform">
      <div className="container">
        <div className="section-head">
          <div className="section-intro">
            <div className="section-kicker">Operational applications</div>
            <h2 className="section-title section-intro-title">
              Why teams use Sentinel
            </h2>
            <p className="section-copy section-intro-copy">
              Sentinel is built for teams that need measurable coverage
              accountability, persistent aerial awareness, and a clear record of
              what was actually observed during active operations.
            </p>
          </div>
        </div>

        <OperationalApplications />
      </div>
    </section>
  );
}
