import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

const problems = [
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
    title: "Dokumentenflut",
    desc: "Hunderte Seiten Verträge, Schriftsätze und Akten täglich. KI analysiert, extrahiert und fasst zusammen — in Minuten statt Stunden. Anwälte prüfen nur noch die kritischen Stellen.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    title: "Anfragen nach Bürozeiten",
    desc: "Mandantenanfragen kommen abends und am Wochenende. Ohne 24/7-Reaktion verlieren Kanzleien potenzielle Mandate an schneller erreichbare Kollegen. KI antwortet sofort.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
    title: "Manuelle Zeiterfassung",
    desc: "Stundenzettel am Ende des Tages rekonstruieren kostet Zeit und führt zu Unterabrechnungen. KI erfasst Tätigkeiten automatisch und erhöht die Abrechnungsquote messbar.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    title: "Unqualifizierte Mandate",
    desc: "Erstanfragen ohne klares Mandat kosten wertvolle Beratungszeit. KI qualifiziert Anfragen nach Rechtsgebiet und Mandatsgröße — nur ernsthafte Mandate kommen zur Beratung.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
    title: "Fehlende Marktrecherche-Kapazität",
    desc: "Rechtsprechungsrecherche und Präzedenzfälle manuell zu recherchieren frisst Associates-Zeit. KI beschleunigt Recherchen und findet relevante Urteile systematisch.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
    title: "Kapazitätsdecke ohne Neueinstellungen",
    desc: "Mehr Mandate wären möglich, aber Associates sind ausgelastet. KI erweitert die effektive Kapazität jedes Teammitglieds — ohne Mehrstellen und ohne Qualitätsverlust.",
  },
];

export default function ProblemCards({ city }: Props) {
  return (
    <section className="problem-section">
      <div className="container">
        <div style={{ maxWidth: "560px", marginBottom: "56px" }}>
          <div className="section-eyebrow">Die größten Herausforderungen</div>
          <h2 className="section-heading">
            Was Rechtsanwälte in {city.name} heute wirklich bremst
          </h2>
          <p className="section-sub">
            Wir kennen die typischen Pain Points des {city.name}er Rechtsmarkts — und haben für jeden
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
