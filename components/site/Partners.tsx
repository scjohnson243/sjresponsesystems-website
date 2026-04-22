const partnerCards = [
  {
    top: "Grants",
    title: "Funding partners",
    copy:
      "Organizations supporting public-safety innovation, resilient infrastructure, autonomous systems, and field-ready technology development.",
  },
  {
    top: "Pilots",
    title: "Pilot opportunities",
    copy:
      "Teams interested in early pilot programs, operational feedback, and real-world validation of coverage-driven response workflows.",
  },
  {
    top: "Research",
    title: "Academic collaboration",
    copy:
      "Universities, labs, and applied research groups exploring autonomous mission systems, aerial sensing, and disaster-response technology.",
  },
  {
    top: "Public safety",
    title: "Agency relationships",
    copy:
      "Emergency management, fire service, and public-safety stakeholders interested in the next generation of measurable aerial response capability.",
  },
];

export function Partners() {
  return (
    <section className="section" id="partners">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-kicker">Partnering</div>
            <h2 className="section-title">Who we want to talk to</h2>
            <p className="section-copy">
              Sentinel is positioned for conversations with organizations
              focused on public safety, autonomous systems, applied research,
              and field validation of emerging response technology.
            </p>
          </div>
        </div>

        <div className="card-grid">
          {partnerCards.map((item) => (
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
