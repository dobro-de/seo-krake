import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

const PROBLEMS = [
  {
    num: "01",
    title: "Kursbuchungschaos",
    desc: "Anfragen per E-Mail, Telefon und WhatsApp — manuell bearbeitet, fehleranfällig und zeitaufwendig. KI automatisiert den gesamten Buchungsprozess.",
  },
  {
    num: "02",
    title: "Immer dieselben Fragen",
    desc: "Fragen zu Kursinhalten, Preisen und Voraussetzungen wiederholen sich täglich und binden wertvolle Lehrkraft-Zeit. KI beantwortet sie sofort.",
  },
  {
    num: "03",
    title: "Prüfungsvorbereitung ohne Skalierung",
    desc: "Individuelle Prüfungsbegleitung ist zeitintensiv — KI skaliert die Prüfungsunterstützung für alle Lernenden gleichzeitig.",
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
            Was hält Bildungseinrichtungen in {city.name} zurück?
          </h2>
          <p className="section-sub section-sub-center">
            Diese drei Engpässe kosten Bildungseinrichtungen täglich Stunden — und lassen sich mit KI elegant lösen.
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
