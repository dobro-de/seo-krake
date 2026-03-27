import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

export default function CTASection({ city }: Props) {
  return (
    <section
      id="kontakt"
      className="section-pad"
      style={{
        background: "var(--bg-card)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container" style={{ maxWidth: "700px", textAlign: "center" }}>
        <div className="section-eyebrow" style={{ display: "inline-flex", marginBottom: "20px" }}>
          Jetzt starten
        </div>

        <h2 className="section-heading section-heading-center" style={{ marginBottom: "20px" }}>
          Bereit, Ihren Dienstleistungsbetrieb in {city.name} mit KI zu transformieren?
        </h2>

        <p
          className="section-sub section-sub-center"
          style={{ marginBottom: "44px" }}
        >
          Sichern Sie sich jetzt eine kostenlose Erstberatung. Wir analysieren Ihre
          spezifische Situation in {city.name} und zeigen Ihnen konkrete KI-Potenziale
          mit realistischen ROI-Projektionen.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "center",
            marginBottom: "36px",
          }}
        >
          {[
            "Kostenlose 45-minütige Erstberatung",
            "Individuelle KI-Potenzialanalyse für Ihren Betrieb",
            "Konkreter Umsetzungsplan mit ROI-Schätzung",
            "Keine versteckten Kosten, kein Verkaufsgespräch",
          ].map((item, i) => (
            <div
              key={i}
              style={{
                fontSize: "15px",
                color: "var(--text-gray)",
                lineHeight: 1.5,
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M20 6 9 17l-5-5"/></svg>
              {item}
            </div>
          ))}
        </div>

        <a href="mailto:info@kiberatung.de" className="btn-primary" style={{ fontSize: "16px", padding: "16px 36px" }}>
          Kostenlose Erstberatung anfragen →
        </a>

        <p
          style={{
            marginTop: "20px",
            fontSize: "13px",
            color: "var(--text-gray)",
          }}
        >
          Oder rufen Sie uns an:{" "}
          <a
            href="tel:+4930000000"
            style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}
          >
            +49 30 000 000
          </a>
        </p>
      </div>
    </section>
  );
}
