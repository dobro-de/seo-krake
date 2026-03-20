import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

const features = [
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    title: "KI-Dokumentenanalyse",
    desc: "Verträge, Schriftsätze und Akten in Minuten analysiert: Extraktion relevanter Klauseln, Risikomarkierung und strukturierte Zusammenfassungen für die anwaltliche Prüfung.",
    highlight: "−85 % Dokumentenlesezeit",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    title: "Mandantenbot",
    desc: "24/7-KI-Assistent für Erstanfragen: Qualifiziert nach Rechtsgebiet und Mandatsgröße, beantwortet häufige Fragen und bucht Erstberatungstermine direkt in den Kalender.",
    highlight: "24/7 erreichbar",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
    title: "Vertragsprüfung",
    desc: "Automatische Risikoerkennung in Vertragswerken: KI markiert problematische Klauseln, vergleicht mit Marktstandards und schlägt Alternativformulierungen vor.",
    highlight: "3× mehr Verträge prüfen",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    title: "Zeiterfassung & Abrechnung",
    desc: "KI erfasst Tätigkeiten automatisch, schlägt korrekte Abrechnungsposten vor und erstellt konforme Rechnungen — keine manuelle Stundenrekonstruktion mehr.",
    highlight: "+28 % Abrechnungsquote",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
    title: "Rechtsprechungsrecherche",
    desc: "KI durchsucht Rechtsprechungsdatenbanken systematisch, findet relevante Urteile und Präzedenzfälle und erstellt strukturierte Rechercheberichte für die Fallstrategie.",
    highlight: "systematische Recherche",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    title: "Schriftsatz-Assistenz",
    desc: "KI unterstützt bei der Strukturierung von Schriftsätzen, formuliert Standardpassagen und prüft auf Vollständigkeit — damit Anwälte sich auf die juristische Argumentation konzentrieren.",
    highlight: "2× schnellere Schriftsätze",
  },
];

export default function FeatureGrid({ city }: Props) {
  return (
    <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="section-eyebrow" style={{ display: "inline-flex", marginBottom: "16px" }}>
            Unsere KI-Lösungen für {city.name}
          </div>
          <h2 className="section-heading section-heading-center">
            KI-Tools, die Ihre Kanzlei in {city.name} transformieren
          </h2>
          <p className="section-sub section-sub-center">
            Maßgeschneiderte KI-Lösungen für die spezifischen Anforderungen des {city.name}er
            Rechtsmarkts.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-card)",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                transition: "border-color 0.3s ease",
              }}
            >
              <div style={{ width: 36, height: 36, color: "var(--accent)", marginBottom: "4px" }}>{f.svg}</div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--text-white)",
                  lineHeight: 1.3,
                }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-gray)", lineHeight: 1.65, flex: 1 }}>
                {f.desc}
              </p>
              <div
                style={{
                  background: "var(--accent-dim)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-pill)",
                  padding: "4px 12px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--accent)",
                  alignSelf: "flex-start",
                }}
              >
                {f.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
