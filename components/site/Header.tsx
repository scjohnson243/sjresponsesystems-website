const navItems = [
  { href: "#platform", label: "Platform" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#status", label: "Development" },
  { href: "#partners", label: "Partners" },
  { href: "#credibility", label: "Company" },
];

export function Header() {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <div className="brand">
          <span className="brand-kicker">SJ Response Systems</span>
          <span className="brand-name">Sentinel Platform</span>
        </div>

        <nav className="nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
