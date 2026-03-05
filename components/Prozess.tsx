const steps = [
  {
    num: "01",
    icon: "🔍",
    title: "Analyse",
    duration: "2 Wochen",
    description:
      "Wir analysieren Ihre aktuellen Prozesse, Datenstrukturen und IT-Infrastruktur. Gemeinsam identifizieren wir die größten KI-Hebel für Ihr Unternehmen.",
  },
  {
    num: "02",
    icon: "🗺️",
    title: "Strategie",
    duration: "1 Woche",
    description:
      "Auf Basis der Analyse erstellen wir Ihre individuelle KI-Roadmap: priorisierte Use Cases, Budget-Rahmen, Technologie-Empfehlungen und einen klaren Umsetzungsplan.",
  },
  {
    num: "03",
    icon: "🚀",
    title: "Umsetzung",
    duration: "ab 4 Wochen",
    description:
      "Wir begleiten Sie durch die Implementierung — von der Technologieauswahl über die Integration bis zum Go-live und darüber hinaus. Mit regelmäßigem Reporting.",
  },
];

export default function Prozess() {
  return (
    <section className="prozess-section" id="prozess" aria-labelledby="prozess-heading">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <span className="section-eyebrow">So arbeiten wir</span>
          <h2 id="prozess-heading" className="section-heading section-heading-center">
            In 3 Schritten zur KI
          </h2>
          <p className="section-sub section-sub-center">
            Unser bewährter Prozess bringt Klarheit in jede Phase Ihrer KI-Transformation.
          </p>
        </div>

        <div className="prozess-timeline">
          {steps.map((step, i) => (
            <div key={i} className="prozess-step fade-up">
              <div className="prozess-num" aria-label={`Schritt ${step.num}`}>
                <span className="prozess-num-big">{step.num}</span>
              </div>
              <div className="prozess-icon" aria-hidden="true">{step.icon}</div>
              <h3>{step.title}</h3>
              <span className="prozess-duration">{step.duration}</span>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
