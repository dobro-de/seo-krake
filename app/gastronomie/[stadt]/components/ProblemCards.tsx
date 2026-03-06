import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

const problems = [
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: "Steigende Personalkosten",
    desc: "Fachkräftemangel und Mindestlohnsteigerungen fressen Margen. Manuelle Prozesse vervielfachen den Aufwand — KI automatisiert, wo Routinetätigkeiten dominieren.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4"/><path d="M7 13 5.4 5M7 13l-1.293 1.293A1 1 0 0 0 6.414 16H17"/><circle cx="9" cy="19" r="1"/><circle cx="17" cy="19" r="1"/></svg>,
    title: "Lebensmittelverschwendung",
    desc: "Fehlkalkulationen beim Einkauf führen zu bis zu 15 % Abfall. KI-Prognosemodelle berechnen den exakten Bedarf auf Basis von Reservierungen und historischen Daten.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    title: "Ineffiziente Abläufe",
    desc: "Bestellprozesse, Tischmanagement und Kommunikation zwischen Küche und Service kosten täglich wertvolle Zeit. KI-Automatisierung schafft nahtlose Workflows.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9M12 17V5M6 17v-3"/></svg>,
    title: "Fehlende Datengrundlage",
    desc: "Ohne Echtzeit-Analytics bleiben Entscheidungen Bauchgefühl. KI-Dashboards liefern sofort actionable Insights zu Umsatz, Foodcost und Gästezufriedenheit.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>,
    title: "Unplanbare Schwankungen",
    desc: "Saisonale Peaks, Events und Schlechtwettertage überraschen immer wieder. KI-Prognosen geben bis zu 8 Wochen im Voraus Planungssicherheit.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
    title: "Sinkende Gästebindung",
    desc: "Ohne personalisierte Kundenkommunikation verlieren Restaurants Stammgäste an die Konkurrenz. KI-Loyalty-Systeme halten Gäste nachhaltig gebunden.",
  },
];

export default function ProblemCards({ city }: Props) {
  return (
    <section className="problem-section">
      <div className="container">
        <div style={{ maxWidth: "560px", marginBottom: "56px" }}>
          <div className="section-eyebrow">Die größten Herausforderungen</div>
          <h2 className="section-heading">
            Was Gastronomen in {city.name} heute wirklich bremst
          </h2>
          <p className="section-sub">
            Wir kennen die typischen Pain Points der {city.name}er Gastronomie — und haben für jeden
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
