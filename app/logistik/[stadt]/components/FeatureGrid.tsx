import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

const FEATURES = [
  {
    title: "Sendungsstatus-Bot",
    desc: "KI beantwortet Sendungsanfragen automatisch — per Website-Chat, WhatsApp oder E-Mail. Disponenten werden sofort entlastet.",
    stat: "−70 %",
    statLabel: "Telefonanfragen",
    icon: '<path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
  },
  {
    title: "Abholtermin-Koordination",
    desc: "Automatische Zeitfenstervergabe, Bestätigungs-SMS und Erinnerungen — ohne manuelle Abstimmung.",
    stat: "100 %",
    statLabel: "automatisch koordiniert",
    icon: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  },
  {
    title: "Reklamations-Erstannahme",
    desc: "KI nimmt Reklamationen strukturiert auf, kategorisiert sie und leitet sie priorisiert weiter — mit vollständiger Dokumentation.",
    stat: "−55 %",
    statLabel: "Bearbeitungszeit",
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
  },
  {
    title: "Lead-Qualifizierung",
    desc: "Neue Kundenanfragen werden automatisch qualifiziert — Volumen, Route, Dringlichkeit — bevor sie an den Vertrieb weitergegeben werden.",
    stat: "3×",
    statLabel: "mehr qualifizierte Leads",
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
            KI für Logistik in {city.name}
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
