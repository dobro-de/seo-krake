import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Über uns | Everlast Consulting | KI-Beratung für den Mittelstand",
  description:
    "Everlast Consulting aus Mannheim — wir bringen KI-Technologie in den deutschen Mittelstand. Lernen Sie unser Team, unsere Mission und unsere Werte kennen.",
  alternates: {
    canonical: "https://kiberatung-v2.vercel.app/ueber-uns",
  },
};

const ACCENT = "#faef70";
const CARD_BG = "#111111";
const BORDER = "#222222";
const SUBTEXT = "#cccccc";

const timeline = [
  {
    year: "2020",
    title: "Gründung",
    desc: "Everlast Consulting gegründet, erste KI-Projekte im deutschen Mittelstand.",
  },
  {
    year: "2022",
    title: "50. Kundenprojekt",
    desc: "50. Kundenprojekt erfolgreich abgeschlossen — wachsende Expertise über Branchen hinweg.",
  },
  {
    year: "2024",
    title: "KI-Telefonassistenten",
    desc: "Fokus auf KI-Telefonassistenten — automatisierte Kundenkommunikation rund um die Uhr.",
  },
  {
    year: "2026",
    title: "500+ Implementierungen",
    desc: "500+ erfolgreiche Implementierungen in 8 Branchen. Der Mittelstand denkt um.",
  },
];

const values = [
  {
    title: "Ergebnis vor Technik",
    desc: "Wir verkaufen keine KI-Produkte. Wir liefern messbare Ergebnisse.",
  },
  {
    title: "Praxisnähe",
    desc: "Jede Lösung muss am ersten Tag einsatzbereit sein. Keine 6-Monats-Projekte.",
  },
  {
    title: "Ehrlichkeit",
    desc: "Wenn KI nicht die Antwort ist, sagen wir das. Vertrauen ist unsere wichtigste Ressource.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <Nav />
      <main style={{ background: "#000000", color: "#ffffff", fontFamily: "var(--font-inter), sans-serif" }}>

        {/* ── HERO ── */}
        <section
          style={{
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "140px 24px 80px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "700px",
              height: "500px",
              background: "radial-gradient(ellipse at center, rgba(250,239,112,0.10) 0%, transparent 70%)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          <div style={{ position: "relative", zIndex: 1, maxWidth: "860px", margin: "0 auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(250,239,112,0.10)",
                border: "1px solid rgba(250,239,112,0.25)",
                borderRadius: "999px",
                padding: "5px 16px",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: ACCENT,
                marginBottom: "28px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: ACCENT,
                  display: "inline-block",
                }}
              />
              Everlast Consulting · Mannheim
            </div>

            <h1
              style={{
                fontSize: "clamp(40px, 6.5vw, 80px)",
                fontWeight: 900,
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
                color: "#ffffff",
                marginBottom: "28px",
              }}
            >
              Wir bringen KI in den{" "}
              <span style={{ color: ACCENT }}>deutschen Mittelstand</span>
            </h1>

            <p
              style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                color: SUBTEXT,
                maxWidth: "640px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Everlast Consulting aus Mannheim. Gegründet mit einer Mission: KI-Technologie für alle zugänglich machen, nicht nur für Großkonzerne.
            </p>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section
          style={{
            padding: "100px 24px",
            background: "#000000",
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(250,239,112,0.10)",
                  border: "1px solid rgba(250,239,112,0.25)",
                  borderRadius: "999px",
                  padding: "5px 14px",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: ACCENT,
                  marginBottom: "20px",
                }}
              >
                Das Team
              </span>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  color: "#ffffff",
                  marginBottom: "16px",
                }}
              >
                Die Menschen hinter Everlast
              </h2>
              <p style={{ fontSize: "17px", color: SUBTEXT, maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
                Kleine Mannschaft. Große Wirkung.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              {/* Vincent — Founder */}
              <div
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "16px",
                  padding: "36px 32px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)`,
                  }}
                />
                {/* Placeholder photo */}
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "rgba(250,239,112,0.12)",
                    border: "2px solid rgba(250,239,112,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    fontSize: "32px",
                    fontWeight: 700,
                    color: ACCENT,
                  }}
                >
                  V
                </div>
                <div
                  style={{
                    display: "inline-block",
                    background: "rgba(250,239,112,0.12)",
                    border: "1px solid rgba(250,239,112,0.25)",
                    borderRadius: "999px",
                    padding: "3px 12px",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: ACCENT,
                    marginBottom: "12px",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Gründer &amp; KI-Stratege
                </div>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "12px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Vincent
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: SUBTEXT,
                    lineHeight: 1.65,
                    marginBottom: "24px",
                  }}
                >
                  &ldquo;Digitale Transformation ist nicht optional. Ich helfe Unternehmen, die Chancen der KI zu nutzen, bevor ihre Konkurrenz es tut.&rdquo;
                </p>
                <div>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: SUBTEXT,
                      marginBottom: "10px",
                    }}
                  >
                    Experte in:
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {["KI-Implementierung", "Prozessautomatisierung", "Vertriebsoptimierung"].map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          border: `1px solid ${BORDER}`,
                          borderRadius: "999px",
                          padding: "4px 12px",
                          fontSize: "13px",
                          color: "#ffffff",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Vacant — KI-Entwicklung */}
              <div
                style={{
                  background: CARD_BG,
                  border: `1px dashed ${BORDER}`,
                  borderRadius: "16px",
                  padding: "36px 32px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.04)",
                    border: `2px dashed ${BORDER}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: SUBTEXT,
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      background: "rgba(255,255,255,0.06)",
                      border: `1px solid ${BORDER}`,
                      borderRadius: "999px",
                      padding: "3px 12px",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: SUBTEXT,
                      marginBottom: "12px",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    KI-Entwicklung
                  </span>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "10px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Wir wachsen
                  </h3>
                  <p style={{ fontSize: "15px", color: SUBTEXT, lineHeight: 1.65 }}>
                    Wir suchen talentierte KI-Entwickler, die unsere Vision teilen. Interesse? Melde dich bei uns.
                  </p>
                </div>
              </div>

              {/* Vacant — Support Team */}
              <div
                style={{
                  background: CARD_BG,
                  border: `1px dashed ${BORDER}`,
                  borderRadius: "16px",
                  padding: "36px 32px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.04)",
                    border: `2px dashed ${BORDER}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: SUBTEXT,
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      background: "rgba(255,255,255,0.06)",
                      border: `1px solid ${BORDER}`,
                      borderRadius: "999px",
                      padding: "3px 12px",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: SUBTEXT,
                      marginBottom: "12px",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    Support Team
                  </span>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "10px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Wir wachsen
                  </h3>
                  <p style={{ fontSize: "15px", color: SUBTEXT, lineHeight: 1.65 }}>
                    Unser Support-Team entsteht gerade. Wir suchen Menschen mit Begeisterung für KI und Kundennähe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FIRMENGESCHICHTE TIMELINE ── */}
        <section
          style={{
            padding: "100px 24px",
            background: "#080808",
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(250,239,112,0.10)",
                  border: "1px solid rgba(250,239,112,0.25)",
                  borderRadius: "999px",
                  padding: "5px 14px",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: ACCENT,
                  marginBottom: "20px",
                }}
              >
                Firmengeschichte
              </span>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  color: "#ffffff",
                  marginBottom: "16px",
                }}
              >
                Von der Vision zur Realität
              </h2>
            </div>

            <div
              style={{
                position: "relative",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              {/* Vertical line */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  bottom: 0,
                  width: "1px",
                  background: BORDER,
                  transform: "translateX(-50%)",
                }}
              />

              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  style={{
                    display: "flex",
                    justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
                    marginBottom: "40px",
                    position: "relative",
                  }}
                >
                  {/* Dot */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "24px",
                      transform: "translateX(-50%)",
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      background: ACCENT,
                      border: "3px solid #080808",
                      zIndex: 1,
                    }}
                  />

                  <div
                    style={{
                      width: "46%",
                      background: CARD_BG,
                      border: `1px solid ${BORDER}`,
                      borderRadius: "12px",
                      padding: "24px 28px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "clamp(28px, 4vw, 40px)",
                        fontWeight: 900,
                        color: ACCENT,
                        letterSpacing: "-0.03em",
                        display: "block",
                        lineHeight: 1,
                        marginBottom: "6px",
                      }}
                    >
                      {item.year}
                    </span>
                    <h3
                      style={{
                        fontSize: "17px",
                        fontWeight: 700,
                        color: "#ffffff",
                        marginBottom: "8px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ fontSize: "14px", color: SUBTEXT, lineHeight: 1.65 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MISSION STATEMENT ── */}
        <section
          style={{
            padding: "120px 24px",
            background: "#000000",
            borderTop: `1px solid ${BORDER}`,
            borderBottom: `1px solid ${BORDER}`,
            textAlign: "center",
          }}
        >
          <div className="container">
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <svg
                aria-hidden="true"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill={ACCENT}
                style={{ opacity: 0.6, marginBottom: "32px" }}
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote
                style={{
                  fontSize: "clamp(22px, 3.5vw, 44px)",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: "-0.025em",
                  color: ACCENT,
                  marginBottom: "32px",
                  fontStyle: "normal",
                }}
              >
                KI ist kein Luxus. Es ist der Unterschied zwischen einem Unternehmen das 2030 noch existiert und einem das nicht mehr existiert.
              </blockquote>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: SUBTEXT,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                &mdash; Vincent, Gründer Everlast Consulting
              </p>
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section
          style={{
            padding: "100px 24px",
            background: "#000000",
          }}
        >
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(250,239,112,0.10)",
                  border: "1px solid rgba(250,239,112,0.25)",
                  borderRadius: "999px",
                  padding: "5px 14px",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: ACCENT,
                  marginBottom: "20px",
                }}
              >
                Unsere Werte
              </span>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  color: "#ffffff",
                  marginBottom: "16px",
                }}
              >
                Wofür wir stehen
              </h2>
              <p style={{ fontSize: "17px", color: SUBTEXT, maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
                Drei Prinzipien, die jede Entscheidung bei Everlast Consulting leiten.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              {values.map((value) => (
                <div
                  key={value.title}
                  style={{
                    background: CARD_BG,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "16px",
                    padding: "36px 32px",
                  }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      background: "rgba(250,239,112,0.10)",
                      border: "1px solid rgba(250,239,112,0.2)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "24px",
                      color: ACCENT,
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "12px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {value.title}
                  </h3>
                  <p style={{ fontSize: "15px", color: SUBTEXT, lineHeight: 1.65 }}>
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          style={{
            padding: "120px 24px",
            background: "#080808",
            borderTop: `1px solid ${BORDER}`,
            textAlign: "center",
          }}
        >
          <div className="container">
            <div style={{ maxWidth: "640px", margin: "0 auto" }}>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  color: "#ffffff",
                  marginBottom: "20px",
                }}
              >
                Lernen Sie uns kennen &mdash;{" "}
                <span style={{ color: ACCENT }}>kostenloses Gespräch</span>
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  color: SUBTEXT,
                  lineHeight: 1.7,
                  marginBottom: "40px",
                }}
              >
                In 30 Minuten zeigen wir Ihnen, welche KI-Möglichkeiten in Ihrem Unternehmen schlummern &mdash; konkret, ohne Fachchinesisch.
              </p>
              <Link
                href="/termin-buchen"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: ACCENT,
                  color: "#000000",
                  padding: "16px 36px",
                  borderRadius: "999px",
                  fontSize: "16px",
                  fontWeight: 700,
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                }}
              >
                Kostenloses Erstgespräch buchen →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
