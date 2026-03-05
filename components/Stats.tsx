const stats = [
  {
    number: "500+",
    label: "Abgeschlossene KI-Projekte",
    dataTarget: "500",
    suffix: "+",
  },
  {
    number: "98%",
    label: "Kundenzufriedenheit",
    dataTarget: "98",
    suffix: "%",
  },
  {
    number: "12+",
    label: "Jahre Erfahrung",
    dataTarget: "12",
    suffix: "+",
  },
  {
    number: "Ø 6 Mon.",
    label: "Bis zum ersten ROI",
    dataTarget: null,
    suffix: null,
  },
];

export default function Stats() {
  return (
    <section className="stats-section" id="referenzen" aria-labelledby="stats-heading">
      <div className="stats-glow" aria-hidden="true" />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="section-eyebrow">Zahlen &amp; Fakten</span>
          <h2 id="stats-heading" className="section-heading section-heading-center">
            KI Beratung mit nachweisbaren Ergebnissen
          </h2>
          <p className="section-sub section-sub-center">
            Nicht nur Versprechen — sondern belegbare Zahlen aus über einem Jahrzehnt
            KI Beratung.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-item fade-up"
              role="figure"
              aria-label={`${stat.number} ${stat.label}`}
            >
              <div
                className="stat-number"
                data-target={stat.dataTarget ?? undefined}
                data-suffix={stat.suffix ?? undefined}
              >
                {stat.number}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
