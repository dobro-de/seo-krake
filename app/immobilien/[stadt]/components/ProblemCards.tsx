import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

const problems = [
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    title: "Zeitraubende Exposé-Erstellung",
    desc: "2–3 Stunden pro Exposé sind die Regel. KI erstellt professionelle Exposés aus Fotos und Basisdaten in 10 Minuten — mit besserem Text als die meisten händischen Vorlagen.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    title: "Unqualifizierte Interessenten",
    desc: "Besichtigungen mit Interessenten, die kein Budget haben oder in 2 Jahren kaufen wollen, kosten Stunden. KI qualifiziert und filtert — nur ernsthafte Käufer kommen zur Besichtigung.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
    title: "Fehlende Marktdaten",
    desc: "Preisempfehlungen aus dem Bauchgefühl riskieren Über- oder Unterbewertung. KI-Marktanalysen liefern präzise Preisspannen aus aktuellen Transaktionsdaten — in Minuten.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    title: "Anfragen nach Bürozeiten",
    desc: "Kaufentscheidungen fallen abends und am Wochenende. Ohne 24/7-Reaktion verlieren Sie Interessenten an schnellere Wettbewerber. KI antwortet sofort — zu jeder Uhrzeit.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    title: "Manuelle Besichtigungskoordination",
    desc: "Terminabsprachen per Telefon kosten unverhältnismäßig viel Zeit. KI-Terminbuchung koordiniert Besichtigungen automatisch — inklusive Bestätigung und Erinnerung.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
    title: "Schwache Online-Sichtbarkeit",
    desc: "Exposés, die nicht für Immobilienportale und Suchmaschinen optimiert sind, werden weniger gefunden. KI-generierte Texte sind automatisch SEO-optimiert und portalgerecht formatiert.",
  },
];

export default function ProblemCards({ city }: Props) {
  return (
    <section className="problem-section">
      <div className="container">
        <div style={{ maxWidth: "560px", marginBottom: "56px" }}>
          <div className="section-eyebrow">Die größten Herausforderungen</div>
          <h2 className="section-heading">
            Was Immobilienmakler in {city.name} heute wirklich bremst
          </h2>
          <p className="section-sub">
            Wir kennen die typischen Pain Points des {city.name}er Immobilienmarkts — und haben für jeden
            eine KI-gestützte Antwort.
          </p>
        </div>

        <div className="problem-grid">
          {problems.map((p, i) => (
            <div key={i} className="problem-card">
              <div style={{ width: 36, height: 36, color: "var(--accent)", marginBottom: "16px" }}>{p.svg}</div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--text-white)",
                  marginBottom: "10px",
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-gray)", lineHeight: 1.65 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
