const companyDetails = [
  { label: "Platform", value: "Sentinel" },
  { label: "Status", value: "Active development" },
  { label: "Focus", value: "Grants, pilots, partnerships" },
];

const contactDetails = [
  {
    label: "Email",
    value: (
      <a href="mailto:info@sjresponsesystems.com">
        info@sjresponsesystems.com
      </a>
    ),
  },
  { label: "Website", value: <span>sjresponsesystems.com</span> },
  {
    label: "Inquiry types",
    value: (
      <span>Grant, pilot, partnership, research, Join the Sentinel Team</span>
    ),
  },
];

export function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head">
          <div className="section-intro">
            <div className="section-kicker">Contact</div>
            <h2 className="section-title section-intro-title">
              Start a conversation
            </h2>
            <p className="section-copy section-intro-copy">
              If you are interested in grants, pilot opportunities, research
              collaboration, or learning more about the Sentinel platform, we
              would be glad to connect.
            </p>
          </div>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>SJ Response Systems</h3>
            <p>
              Autonomous aerial response systems focused on continuous coverage,
              early detection, and mission intelligence for critical
              environments.
            </p>

            <div className="contact-list">
              {companyDetails.map((item) => (
                <div key={item.label} className="contact-line">
                  <strong>{item.label}</strong>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-card">
            <h3>Contact information</h3>
            <p>
              SJ Response Systems is actively building partnerships, pilot
              programs, and expanding the Sentinel team.
            </p>

            <div className="contact-list">
              {contactDetails.map((item) => (
                <div key={item.label} className="contact-line">
                  <strong>{item.label}</strong>
                  {item.value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
