const branchen = [
  { icon: "🔨", name: "Handwerk" },
  { icon: "🏢", name: "Mittelstand" },
  { icon: "🛍️", name: "Einzelhandel" },
  { icon: "🏥", name: "Gesundheitswesen" },
  { icon: "🏘️", name: "Immobilien" },
  { icon: "🚚", name: "Logistik" },
  { icon: "🍽️", name: "Gastronomie" },
  { icon: "💼", name: "Dienstleistungen" },
];

export default function Branchen() {
  return (
    <section className="branchen-section" id="branchen" aria-labelledby="branchen-heading">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <span className="section-eyebrow">Branchen</span>
          <h2 id="branchen-heading" className="section-heading section-heading-center">
            KI Beratung für Ihre Branche
          </h2>
          <p className="section-sub section-sub-center">
            Wir kennen die spezifischen Herausforderungen und Chancen in jeder
            Branche — und liefern maßgeschneiderte KI-Lösungen.
          </p>
        </div>

        <div className="branchen-grid" role="list" aria-label="Branchen für KI Beratung">
          {branchen.map((b, i) => (
            <div key={i} className="branche-card fade-up" role="listitem" aria-label={b.name}>
              <span className="branche-icon" aria-hidden="true">{b.icon}</span>
              <h4>{b.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
