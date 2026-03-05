const logos = [
  { name: "Acme GmbH", letter: "A" },
  { name: "BrandCo", letter: "B" },
  { name: "CloudTech", letter: "C" },
  { name: "DataSystems", letter: "D" },
  { name: "EuroMedia", letter: "E" },
  { name: "FastGrow", letter: "F" },
  { name: "GreenLogic", letter: "G" },
  { name: "HubWorks", letter: "H" },
];

function LogoItem({ name, letter }: { name: string; letter: string }) {
  return (
    <div
      className="logo-placeholder"
      role="img"
      aria-label={name}
      title={name}
    >
      <svg
        viewBox="0 0 120 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="0" y="8" width="20" height="20" rx="4" fill="currentColor" opacity="0.6" />
        <text x="26" y="24" fontSize="16" fontWeight="700" fill="currentColor" fontFamily="sans-serif">
          {name}
        </text>
      </svg>
    </div>
  );
}

export default function TrustBar() {
  const allLogos = [...logos, ...logos];

  return (
    <section className="trust-bar-section" aria-label="Unsere Kunden vertrauen uns">
      <p className="trust-bar-label">Vertrauen von führenden Unternehmen</p>
      <div style={{ overflow: "hidden" }}>
        <div className="marquee-wrapper">
          {allLogos.map((logo, i) => (
            <LogoItem key={i} name={logo.name} letter={logo.letter} />
          ))}
        </div>
      </div>
    </section>
  );
}
