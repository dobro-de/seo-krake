const steps = [
  {
    num: "01",
    title: "Analyse",
    duration: "2 Wochen",
    description: "Wir analysieren Ihre aktuellen Prozesse, Datenstrukturen und IT-Infrastruktur. Gemeinsam identifizieren wir die größten KI-Hebel für Ihr Unternehmen.",
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  },
  {
    num: "02",
    title: "Strategie",
    duration: "1 Woche",
    description: "Auf Basis der Analyse erstellen wir Ihre individuelle KI-Roadmap: priorisierte Use Cases, Budget-Rahmen, Technologie-Empfehlungen und einen klaren Umsetzungsplan.",
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>,
  },
  {
    num: "03",
    title: "Umsetzung",
    duration: "ab 4 Wochen",
    description: "Wir begleiten Sie durch die Implementierung — von der Technologieauswahl über die Integration bis zum Go-live und darüber hinaus. Mit regelmäßigem Reporting.",
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
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
              <div className="prozess-icon" aria-hidden="true">{step.svg}</div>
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
