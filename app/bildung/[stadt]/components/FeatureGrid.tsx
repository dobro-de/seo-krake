import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

const FEATURES = [
  {
    title: "KI-Kursbuchungssystem",
    desc: "Automatische Buchung, Stornierung, Wartelistenverwaltung und Zahlungsbestätigung — rund um die Uhr ohne Sekretariatsaufwand.",
    stat: "24/7",
    statLabel: "Buchungen automatisch",
    icon: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  },
  {
    title: "FAQ-Bot für Kursinhalte",
    desc: "KI beantwortet Fragen zu Kursinhalten, Voraussetzungen, Terminen und Preisen sofort — auf Ihrer Website, per WhatsApp oder E-Mail.",
    stat: "−80 %",
    statLabel: "Routineanfragen manuell",
    icon: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  },
  {
    title: "Prüfungsvorbereitungs-Assistent",
    desc: "KI erstellt personalisierte Lernpläne, beantwortet Übungsfragen und begleitet Lernende durch die Prüfungsvorbereitung.",
    stat: "+40 %",
    statLabel: "Prüfungserfolg",
    icon: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  },
  {
    title: "Elternkommunikation-Bot",
    desc: "KI beantwortet Elternanfragen zu Lernfortschritten, Terminen und Preisen automatisch und professionell — per WhatsApp oder E-Mail.",
    stat: "−60 %",
    statLabel: "Elternanfragen manuell",
    icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  },
];

export default function FeatureGrid({ city }: Props) {
  return (
    <section
      style={{
        background: "var(--bg-card)",
        padding: "80px 24px",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="section-eyebrow" style={{ display: "inline-flex", marginBottom: "16px" }}>
            KI-Lösungen
          </div>
          <h2 className="section-heading section-heading-center">
            KI für Bildungseinrichtungen in {city.name}
          </h2>
          <p className="section-sub section-sub-center">
            Vier praxiserprobte KI-Lösungen, die sofort Wirkung zeigen.
          </p>
        </div>

        <div className="branche-solutions-grid">
          {FEATURES.map((f, i) => (
            <div key={i} className="branche-solution-card">
              <div className="branche-sol-icon" style={{ color: "var(--accent)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
                  <g dangerouslySetInnerHTML={{ __html: f.icon }} />
                </svg>
              </div>
              <h3 className="branche-sol-title">{f.title}</h3>
              <p className="branche-sol-desc">{f.desc}</p>
              <div className="branche-sol-stat">
                <span className="branche-sol-val">{f.stat}</span>
                <span className="branche-sol-lbl">{f.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
