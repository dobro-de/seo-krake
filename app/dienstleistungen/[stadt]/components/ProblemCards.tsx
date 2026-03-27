import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

const problems = [
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
    title: "Telefon klingelt ständig",
    desc: "Kundenanfragen, Terminwünsche und Routinefragen binden täglich Stunden. KI-Chatbots und automatisierter Support beantworten Standardanfragen sofort — ohne Personalaufwand.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>,
    title: "No-Shows und Terminausfälle",
    desc: "Gebuchte Termine werden vergessen oder kurzfristig abgesagt. KI-Terminerinnerungen per SMS/WhatsApp reduzieren No-Shows um bis zu 45 % — ohne manuelle Nachverfolgung.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    title: "Manuelle Angebotserstellung",
    desc: "Jedes neue Angebot kostet stunden — individuelle Kalkulation, Formatierung, Abstimmung. KI-Angebotsgeneratoren erstellen professionelle, individualisierte Angebote in Minuten.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: "Skalierung ohne mehr Personal",
    desc: "Mehr Kunden bedeuten mehr Mitarbeiter — ein lineares Verhältnis, das Wachstum bremst. KI durchbricht dieses Verhältnis: mehr Kapazität ohne proportionale Personalkosten.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    title: "Kundenfeedback unstrukturiert",
    desc: "Bewertungen, Beschwerden und Lob verteilen sich über E-Mail, Google und Social Media. KI-Feedbackmanagement aggregiert alles und leitet automatisch die richtigen Maßnahmen ein.",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: "Automatische Rechnungsstellung",
    desc: "Rechnungen manuell zu erstellen und zu versenden kostet Zeit und erzeugt Fehler. KI-gestützte Rechnungsautomatisierung sendet pünktlich, fehlerlos und DSGVO-konform.",
  },
];

export default function ProblemCards({ city }: Props) {
  return (
    <section className="problem-section">
      <div className="container">
        <div style={{ maxWidth: "560px", marginBottom: "56px" }}>
          <div className="section-eyebrow">Die größten Herausforderungen</div>
          <h2 className="section-heading">
            Was Dienstleister in {city.name} heute wirklich bremst
          </h2>
          <p className="section-sub">
            Wir kennen die typischen Pain Points des {city.name}er Dienstleistungsmarkts — und haben für jeden
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
