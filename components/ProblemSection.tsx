const painPoints = [
  {
    icon: "💸",
    title: "Kein klarer ROI",
    description:
      "Viele Unternehmen investieren in KI-Projekte ohne klare Erfolgsmessung. Das Ergebnis: Millionenbudgets verpuffen, ohne messbaren Mehrwert zu liefern.",
  },
  {
    icon: "🔧",
    title: "Falsche Tools",
    description:
      "Der KI-Markt ist überflutet mit Lösungen. Ohne fundiertes Know-how landen Unternehmen bei teuren, überdimensionierten Tools, die nicht zur Realität passen.",
  },
  {
    icon: "🎓",
    title: "Keine interne Expertise",
    description:
      "KI-Projekte scheitern intern an fehlendem Wissen. Wer keine erfahrenen Partner hat, verliert Zeit, Geld und den Anschluss an den Wettbewerb.",
  },
];

export default function ProblemSection() {
  return (
    <section className="problem-section" id="problem" aria-labelledby="problem-heading">
      <div className="container">
        {/* Eyebrow */}
        <div style={{ textAlign: "center" }}>
          <span className="section-eyebrow">Das Problem</span>
          <div className="problem-stat" aria-label="73 Prozent der KI-Projekte scheitern">73%</div>
          <h2
            id="problem-heading"
            className="section-heading section-heading-center"
          >
            Warum scheitern 73% der KI-Projekte?
          </h2>
          <p className="section-sub section-sub-center" style={{ marginBottom: "0" }}>
            Die meisten KI-Initiativen scheitern nicht an der Technologie — sondern
            an mangelnder Strategie, falschen Tools und fehlender Expertise.
          </p>
        </div>

        {/* Cards */}
        <div className="problem-grid">
          {painPoints.map((point, i) => (
            <div key={i} className="problem-card fade-up">
              <div className="problem-icon" aria-hidden="true">
                {point.icon}
              </div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
