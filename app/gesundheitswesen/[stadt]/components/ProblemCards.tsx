import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

const problems = [
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: "Fachkräftemangel im Gesundheitswesen",
    desc: "Arztpraxen und Kliniken kämpfen mit steigendem Personaldruck. KI übernimmt administrative Aufgaben, sodass medizinisches Fachpersonal sich auf die Patientenversorgung konzentrieren kann.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>,
    title: "Überlastete Terminvergabe",
    desc: "Manuelle Terminplanung und Wartelisten binden wertvolle Ressourcen. KI-Systeme optimieren den Patientenfluss und reduzieren Wartezeiten auf ein Minimum.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    title: "Bürokratie und Dokumentationslast",
    desc: "Arztbriefe, Abrechnungen und Formulare fressen Zeit, die für Patienten fehlt. KI-Dokumentationsassistenten erstellen Berichte automatisch aus Sprachnotizen und Patientendaten.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9M12 17V5M6 17v-3"/></svg>,
    title: "Fehlende Behandlungsanalysen",
    desc: "Ohne strukturierte Auswertung von Patientendaten bleiben Verbesserungspotenziale ungenutzt. KI-Analytics decken Optimierungsmöglichkeiten in Behandlungsabläufen auf.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
    title: "Niedrige Patientenbindung",
    desc: "Ohne proaktive Kommunikation und Recall-Systeme bleiben Patienten aus. KI-gestützte Patientenkommunikation erhöht die Bindungsrate und reduziert No-Shows deutlich.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: "Datenschutz und Compliance",
    desc: "DSGVO, MDR und medizinische Dokumentationspflichten stellen hohe Anforderungen. KI-Lösungen für das Gesundheitswesen sind von Grund auf compliant und sicher konzipiert.",
  },
];

export default function ProblemCards({ city }: Props) {
  return (
    <section className="problem-section">
      <div className="container">
        <div style={{ maxWidth: "560px", marginBottom: "56px" }}>
          <div className="section-eyebrow">Die größten Herausforderungen</div>
          <h2 className="section-heading">
            Was Gesundheitseinrichtungen in {city.name} heute wirklich bremst
          </h2>
          <p className="section-sub">
            Wir kennen die typischen Pain Points des {city.name}er Gesundheitswesens — und haben für jeden
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
