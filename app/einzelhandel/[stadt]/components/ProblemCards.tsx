import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

const problems = [
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
    title: "Online-Konkurrenz",
    desc: "Amazon und Co. kennen jeden Kunden besser als jeder Händler. KI gibt lokalen Einzelhändlern dieselben Personalisierungstools — erschwinglich und sofort einsetzbar.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4"/><path d="M7 13 5.4 5M7 13l-1.293 1.293A1 1 0 0 0 6.414 16H17"/><circle cx="9" cy="19" r="1"/><circle cx="17" cy="19" r="1"/></svg>,
    title: "Fehleinkäufe & Überbestände",
    desc: "Zu viel vom Falschen, zu wenig vom Richtigen. KI-Prognosemodelle berechnen den exakten Bedarf auf Basis von Verkaufsdaten, Saisonalität und lokalen Trends.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
    title: "Geringe Kundenbindung",
    desc: "Einmalige Käufer zu Stammkunden machen ist der effektivste Hebel im Einzelhandel. KI-Loyalty-Systeme sprechen Kunden zum richtigen Zeitpunkt mit dem richtigen Angebot an.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9M12 17V5M6 17v-3"/></svg>,
    title: "Fehlende Datengrundlage",
    desc: "Ohne Echtzeit-Verkaufsanalysen bleiben Entscheidungen Bauchgefühl. KI-Dashboards liefern sofort actionable Insights zu Umsatz, Lagerumschlag und Kundenwert.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    title: "Manuelle Kundenkommunikation",
    desc: "Newsletter, Bewertungsantworten und Produktanfragen binden wertvolle Zeit. KI automatisiert diese Kommunikation ohne Qualitätsverlust — rund um die Uhr.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    title: "Ineffizientes Marketing",
    desc: "Streuverluste durch generische Werbung kosten Budget ohne Ergebnis. KI-Marketing trifft genau die Kunden, die kaufbereit sind — mit den Produkten, die sie wollen.",
  },
];

export default function ProblemCards({ city }: Props) {
  return (
    <section className="problem-section">
      <div className="container">
        <div style={{ maxWidth: "560px", marginBottom: "56px" }}>
          <div className="section-eyebrow">Die größten Herausforderungen</div>
          <h2 className="section-heading">
            Was Einzelhändler in {city.name} heute wirklich bremst
          </h2>
          <p className="section-sub">
            Wir kennen die typischen Pain Points des {city.name}er Einzelhandels — und haben für jeden
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
