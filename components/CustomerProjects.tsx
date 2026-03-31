import Image from "next/image";
import FadeInSection from "./ui/FadeInSection";

const projects = [
  {
    name: "Dimitri Kuzin",
    company: "Mysolarexpress GmbH",
    image: "/images/customers/dimitri-kuzin.avif",
    problem: "Zu wenig Kapazitäten sowie Unzuverlässigkeit im Vertrieb sorgten dafür, dass viel Umsatz an den Wettbewerb verloren ging.",
    solution: "Eine Flotte von KI-Telefonagenten & automatisierten Prozessen wurde implementiert, welche systematisch \u201etote Kontakte\u201c reaktivierten.",
    result: "Hoher sechsstelliger Umsatz nur durch KI-Telefonagenten + 10K+ monatlich an Fixkosten eingespart.",
  },
  {
    name: "René Wieland",
    company: "Autoschmiede",
    image: "/images/customers/rene-wieland.avif",
    problem: "Im operativen Tagesgeschäft gefangen — strategisches Arbeiten am Unternehmen war nicht möglich.",
    solution: "Engpasskonzentriert digitale Prozesse & KI-Automatisierungen in allen wichtigen Bereichen eingeführt.",
    result: "Mit weniger Personal mehr geschafft. Rene konnte sich aus dem operativen Geschäft lösen.",
  },
  {
    name: "Marco Heer",
    company: "Synclaro",
    image: "/images/customers/marco-heer.avif",
    problem: "Agenturprozesse waren sehr zeitintensiv und manuell.",
    solution: "Automatisierte KI-Workflows zur drastischen Effizienzsteigerung in der operativen Abwicklung.",
    result: "Massive Zeitersparnis bei Routineaufgaben — Team kann sich auf strategische Aufgaben konzentrieren.",
  },
  {
    name: "Yannik Huber",
    company: "Blinkk AI",
    image: "/images/customers/yannik-huber.avif",
    problem: "Wollte eine KI-Agentur gründen, scheiterte aber an technischen Hürden und fehlendem Praxiswissen.",
    solution: "Intensive technische und strategische Begleitung — Live-Calls, Coaching, automatisierte Prozesse.",
    result: "Erfolgreiche Gründung und Etablierung einer eigenen KI-Agentur.",
  },
  {
    name: "Kerstin Reisinger",
    company: "Gib21",
    image: "/images/customers/kerstin-reisinger.avif",
    problem: "Administrative Aufgaben, insbesondere Terminvereinbarung am Telefon, hielten Berater von der Kernaufgabe ab.",
    solution: "DSGVO-konforme \u201eKI-Kollegin\u201c (Voice Agent) als erste Kontaktstelle — nimmt Anrufe in mehreren Sprachen entgegen.",
    result: "Personalressourcen fließen wieder zu 100 % in die Beratung. Prozesse laufen deutlich schneller.",
  },
  {
    name: "Philip Dedekind",
    company: "Physiotherapie",
    image: "/images/customers/philip-dedekind.avif",
    problem: "Hoher administrativer Aufwand und zeitfressende manuelle Prozesse.",
    solution: "Maßgeschneiderte KI-Infrastruktur: KI-App zur Beleganalyse + AI Voice Agents für die Telefonzentrale.",
    result: "Signifikante Reduzierung der manuellen Arbeitszeit und klarer Wettbewerbsvorteil gesichert.",
  },
  {
    name: "Samuel Kochenburger",
    company: "Knochenstark",
    image: "/images/customers/samuel-kochenburger.avif",
    problem: "Verdiente Geld, aber ohne klare Struktur und Skalierbarkeit.",
    solution: "KI-Automatisierungen, Voice Agents + strategische Neuausrichtung durch Everlast AI.",
    result: "Sprung vom Einzelkämpfer zum Team-Inhaber mit deutlich gesteigerten Umsätzen.",
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
                <div className="customer-project-image">
                  <Image
                    src={p.image}
                    alt={`${p.name}, ${p.company}`}
                    width={400}
                    height={225}
                    style={{ width: "100%", height: "auto", borderRadius: "12px" }}
                  />
                </div>
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
