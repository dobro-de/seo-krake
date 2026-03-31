import FadeInSection from "./ui/FadeInSection";

const projects = [
  {
    name: "Dimitri Kuzin",
    company: "Mysolarexpress GmbH",
    problem: "Zu wenig Kapazitäten sowie Unzuverlässigkeit im Vertrieb sorgten dafür, dass viel Umsatz an den Wettbewerb verloren ging. Hohe Personalkosten und Ineffizienzen lähmten das Wachstum.",
    solution: "Eine Flotte von KI-Telefonagenten & automatisierten Prozessen wurde implementiert, welche systematisch \u201etote Kontakte\u201c reaktivierten und mit den bestehenden Skripten antrainiert wurden.",
    result: "Bereits nach wenigen Monaten wurde ein hoher sechsstelliger Umsatz nur durch die KI-Telefonagenten geschrieben sowie 10K+ jeden Monat an Fixkosten eingespart.",
  },
  {
    name: "René Wieland",
    company: "Autoschmiede",
    problem: "Rene war im operativen Tagesgeschäft gefangen, sodass ein strategisches Arbeiten am Unternehmen nicht möglich war. Ineffiziente Prozesse & Personalmangel sorgten für Überlastung.",
    solution: "Engpasskonzentriert wurden in allen wichtigen Bereichen digitale Prozesse & KI-Automatisierungen, bspw. zur Mitarbeiterschulung und effizientem Datenmanagement eingeführt.",
    result: "Alle Prozesse sind leichter geworden, sodass mit weniger Personal mehr geschafft wird. Rene konnte sich aus dem operativen Geschäft entnehmen und gewann mehr Zeit für die wichtigen Dinge.",
  },
  {
    name: "Marco Heer",
    company: "Synclaro",
    problem: "Marco stand vor der Herausforderung, dass seine Agenturprozesse sehr zeitintensiv und manuell waren.",
    solution: "Implementierung von automatisierten KI-Workflows zur drastischen Effizienzsteigerung in der operativen Abwicklung.",
    result: "Eine massive Zeitersparnis bei Routineaufgaben, wodurch Marco und sein Team sich auf strategische Aufgaben konzentrieren können.",
  },
  {
    name: "Yannik Huber",
    company: "Blinkk AI",
    problem: "Yannik wollte den Schritt in die Selbstständigkeit mit einer KI-Agentur wagen, scheiterte aber an technischen Hürden und fehlendem Praxiswissen.",
    solution: "Intensive technische und strategische Begleitung durch Everlast AI. Kernstück der Lösung waren die technischen Live-Calls zur schnellen Fehlerbehebung sowie ein fundiertes Coaching zum Aufbau automatisierter Prozesse.",
    result: "Erfolgreiche Gründung und Etablierung einer eigenen KI-Agentur. Yannik vollzog den Wandel vom Einzelkämpfer zum Unternehmer.",
  },
  {
    name: "Kerstin Reisinger",
    company: "Gib21",
    problem: "Administrative Aufgaben, insbesondere die Terminvereinbarung am Telefon, hielten die Berater von ihrer eigentlichen Kernaufgabe ab.",
    solution: "Einführung einer DSGVO-konformen \u201eKI-Kollegin\u201c (Voice Agent). Dieser KI-Telefonagent fungiert als erste Kontaktstelle, nimmt Anrufe in verschiedenen Sprachen entgegen und organisiert Termine direkt.",
    result: "Die wertvollen Personalressourcen fließen nun wieder zu 100 % in die Beratung. Die Prozesse im Unternehmen laufen deutlich schneller ab.",
  },
  {
    name: "Philip Dedekind",
    company: "Physiotherapie",
    problem: "Hoher administrativer Aufwand und zeitfressende manuelle Prozesse (z.B. Beleganalyse).",
    solution: "Implementierung einer maßgeschneiderten KI-Infrastruktur, bestehend aus einer eigenen KI-App zur automatisierten Beleganalyse sowie dem Einsatz von AI Voice Agents zur Entlastung der Telefonzentrale.",
    result: "Eine signifikante Reduzierung der manuellen Arbeitszeit im administrativen Bereich und die Sicherung eines klaren Wettbewerbsvorteils.",
  },
  {
    name: "Samuel Kochenburger",
    company: "Knochenstark",
    problem: "Samuel verdiente zwar Geld, aber ohne klare Struktur und Skalierbarkeit. Die administrativen Aufgaben hinderten ihn daran, sein Expertenwissen effizient weiterzugeben.",
    solution: "Implementierung von KI-Automatisierungen und Voice Agents zur Effizienzsteigerung sowie eine strategische Neuausrichtung durch Everlast AI.",
    result: "Der Sprung vom Einzelkämpfer zum Team-Inhaber mit deutlich gesteigerten Umsätzen.",
  },
];

export default function CustomerProjects() {
  return (
    <FadeInSection>
      <section className="customer-projects-section" id="kundenprojekte">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-eyebrow">Unsere Kundenprojekte</span>
            <h2 className="section-heading section-heading-center">
              So profitieren marktführende Unternehmen von unseren KI-Lösungen
            </h2>
          </div>

          <div className="customer-projects-grid">
            {projects.map((p, i) => (
              <div key={i} className="customer-project-card fade-up">
                <div className="customer-project-header">
                  <span className="customer-project-label">Everlast AI Erfahrung</span>
                  <h3 className="customer-project-name">{p.name}</h3>
                  <span className="customer-project-company">{p.company}</span>
                </div>
                <div className="customer-project-details">
                  <div className="customer-project-item">
                    <strong>Das Problem</strong>
                    <p>{p.problem}</p>
                  </div>
                  <div className="customer-project-item">
                    <strong>Die KI-Lösung</strong>
                    <p>{p.solution}</p>
                  </div>
                  <div className="customer-project-item customer-project-result">
                    <strong>Das Ergebnis</strong>
                    <p>{p.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="customer-projects-note">
            Bereits 1500+ KI-Champions erfolgreich beraten
          </p>
        </div>
      </section>
    </FadeInSection>
  );
}
