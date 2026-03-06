const SvgROI = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);
const SvgTools = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);
const SvgExpertise = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const painPoints = [
  { Icon: SvgROI, title: "Kein klarer ROI", description: "Viele Unternehmen investieren in KI-Projekte ohne klare Erfolgsmessung. Das Ergebnis: Millionenbudgets verpuffen, ohne messbaren Mehrwert zu liefern." },
  { Icon: SvgTools, title: "Falsche Tools", description: "Der KI-Markt ist überflutet mit Lösungen. Ohne fundiertes Know-how landen Unternehmen bei teuren, überdimensionierten Tools, die nicht zur Realität passen." },
  { Icon: SvgExpertise, title: "Keine interne Expertise", description: "KI-Projekte scheitern intern an fehlendem Wissen. Wer keine erfahrenen Partner hat, verliert Zeit, Geld und den Anschluss an den Wettbewerb." },
];

export default function ProblemSection() {
  return (
    <section className="problem-section" id="problem" aria-labelledby="problem-heading">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <span className="section-eyebrow">Das Problem</span>
          <div className="problem-stat" aria-label="73 Prozent der KI-Projekte scheitern">73%</div>
          <h2 id="problem-heading" className="section-heading section-heading-center">
            Warum scheitern 73% der KI-Projekte?
          </h2>
          <p className="section-sub section-sub-center" style={{ marginBottom: "0" }}>
            Die meisten KI-Initiativen scheitern nicht an der Technologie — sondern an mangelnder Strategie, falschen Tools und fehlender Expertise.
          </p>
        </div>
        <div className="problem-grid">
          {painPoints.map(({ Icon, title, description }, i) => (
            <div key={i} className="problem-card fade-up">
              <div className="problem-icon" aria-hidden="true"><Icon /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
