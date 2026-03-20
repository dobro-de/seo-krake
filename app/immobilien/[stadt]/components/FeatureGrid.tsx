import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

const features = [
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
    title: "KI-Exposé-Generator",
    desc: "Fotos hochladen, Basisdaten eingeben — fertiges, suchmaschinenoptimiertes Exposé in 10 Minuten. Professionelle Texte, die Kaufinteresse wecken.",
    highlight: "10 Minuten statt 3 Stunden",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    title: "Interessenten-Qualifizierung",
    desc: "KI-Bot nimmt Anfragen entgegen, stellt Qualifizierungsfragen zu Budget und Kaufzeitplan und bucht nur ernsthafte Interessenten zur Besichtigung.",
    highlight: "nur qualifizierte Leads",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
    title: "Echtzeit-Marktanalyse",
    desc: "Automatische Marktberichte mit aktuellen Transaktionspreisen, Nachfragetrends und vergleichbaren Objekten — für fundierte Preisempfehlungen.",
    highlight: "Live-Marktdaten",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    title: "KI-Objektbewertung",
    desc: "Datenbasierte Preisspannen auf Basis von Lage, Ausstattung, Baujahr und Marktdaten — in Minuten statt Tagen. Sicher in Preisverhandlungen.",
    highlight: "−80 % Bewertungszeit",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>,
    title: "Automatische Terminbuchung",
    desc: "Interessenten buchen Besichtigungstermine direkt in Ihren Kalender — inklusive automatischer Bestätigung, Erinnerung und Vorbereitung.",
    highlight: "24/7 Terminbuchung",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    title: "Portal-Syndizierung",
    desc: "KI-generierte Exposés werden automatisch für ImmobilienScout24, Immowelt und weitere Portale formatiert und können direkt übertragen werden.",
    highlight: "alle Portale gleichzeitig",
  },
];

export default function FeatureGrid({ city }: Props) {
  return (
    <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="section-eyebrow" style={{ display: "inline-flex", marginBottom: "16px" }}>
            Unsere KI-Lösungen für {city.name}
          </div>
          <h2 className="section-heading section-heading-center">
            KI-Tools, die Ihr Maklerbüro in {city.name} transformieren
          </h2>
          <p className="section-sub section-sub-center">
            Maßgeschneiderte KI-Lösungen für die spezifischen Anforderungen des {city.name}er
            Immobilienmarkts.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-card)",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                transition: "border-color 0.3s ease",
              }}
            >
              <div style={{ width: 36, height: 36, color: "var(--accent)", marginBottom: "4px" }}>{f.svg}</div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--text-white)",
                  lineHeight: 1.3,
                }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-gray)", lineHeight: 1.65, flex: 1 }}>
                {f.desc}
              </p>
              <div
                style={{
                  background: "var(--accent-dim)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-pill)",
                  padding: "4px 12px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--accent)",
                  alignSelf: "flex-start",
                }}
              >
                {f.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
