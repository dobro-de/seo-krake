import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

const PROBLEMS = [
  {
    num: "01",
    title: "Sendungsanfragen überlasten Disponenten",
    desc: "Bis zu 70 % aller Telefonanfragen sind einfache Statusabfragen — wertvolle Disponenten-Zeit geht für Routinearbeit verloren.",
  },
  {
    num: "02",
    title: "Reklamationen ohne Struktur",
    desc: "Reklamationen kommen per Telefon, E-Mail und Fax — ohne einheitliche Erfassung entstehen Lücken und Verzögerungen.",
  },
  {
    num: "03",
    title: "Abholtermin-Chaos",
    desc: "Manuelle Abstimmung von Zeitfenstern kostet Zeit und führt zu Doppelbuchungen — besonders in Stoßzeiten.",
  },
];

export default function ProblemCards({ city }: Props) {
  return (
    <section
      style={{
        background: "var(--bg-primary)",
        padding: "80px 24px",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="section-eyebrow" style={{ display: "inline-flex", marginBottom: "16px" }}>
            Herausforderungen
          </div>
          <h2 className="section-heading section-heading-center">
            Was hält Logistiker in {city.name} zurück?
          </h2>
          <p className="section-sub section-sub-center">
            Diese drei Engpässe kosten Logistikunternehmen täglich Stunden — und lassen sich mit KI elegant lösen.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {PROBLEMS.map((p) => (
            <div
              key={p.num}
              className="branche-challenge-card"
            >
              <span className="branche-num">{p.num}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
