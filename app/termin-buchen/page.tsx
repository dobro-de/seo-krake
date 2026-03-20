'use client';

import { useState, FormEvent } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const TRUST_PILLS = [
  "Kostenlos & unverbindlich",
  "In 30 Minuten konkrete Ergebnisse",
  "Seit 2020 500+ Beratungen",
];

const EXPECTS = [
  {
    label: "Was wir analysieren",
    desc: "Ihre aktuelle Erreichbarkeit, Routineprozesse und größte Zeitfresser — wo KI sofort ansetzen kann.",
  },
  {
    label: "Was Sie mitnehmen",
    desc: "Einen konkreten Maßnahmenplan mit 2–3 KI-Sofortmaßnahmen, die Sie auch ohne uns umsetzen könnten.",
  },
  {
    label: "Wie es weitergeht",
    desc: "Wenn es passt, besprechen wir nächste Schritte. Wenn nicht, haben Sie trotzdem einen wertvollen Aktionsplan.",
  },
];

type FormState = "idle" | "loading" | "success" | "error";

export default function TerminBuchenPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telefon: (form.elements.namedItem("telefon") as HTMLInputElement).value,
      unternehmen: (form.elements.namedItem("unternehmen") as HTMLInputElement).value,
      wunschtermin: (form.elements.namedItem("wunschtermin") as HTMLInputElement).value,
      nachricht: (form.elements.namedItem("nachricht") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setFormState("success");
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json?.message || "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.");
        setFormState("error");
      }
    } catch {
      setErrorMsg("Keine Verbindung möglich. Bitte versuchen Sie es erneut.");
      setFormState("error");
    }
  }

  return (
    <>
      <Nav />
      <main>

        {/* ── HERO (minimal) ── */}
        <section
          style={{
            minHeight: "40vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "7rem",
            paddingBottom: "3rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle glow */}
          <div style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 400,
            background: "radial-gradient(ellipse at center, rgba(249,115,22,0.09) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto" }}>
            <span className="section-eyebrow" style={{ marginBottom: "1.5rem" }}>
              Kostenloses Erstgespräch
            </span>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(36px, 5.5vw, 72px)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--text-white)",
                marginBottom: "1.25rem",
              }}
            >
              BUCHEN SIE IHR{" "}
              <span className="text-accent">KOSTENLOSES</span>
              <br />
              30-MINUTEN-GESPRÄCH
            </h1>
            <p
              style={{
                fontSize: "clamp(15px, 2vw, 18px)",
                color: "var(--text-gray)",
                lineHeight: 1.7,
                maxWidth: 540,
                margin: "0 auto",
              }}
            >
              Kein Verkaufsgespräch. Keine Verpflichtung. Nur ein konkreter Aktionsplan,
              wie KI Ihr Unternehmen entlastet.
            </p>
          </div>
        </section>

        {/* ── TRUST PILLS ── */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.75rem",
          flexWrap: "wrap",
          padding: "0 1.5rem 3.5rem",
        }}>
          {TRUST_PILLS.map((pill) => (
            <span
              key={pill}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-pill)",
                padding: "8px 18px",
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--text-white)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span style={{ color: "var(--accent)" }}>✓</span>
              {pill}
            </span>
          ))}
        </div>

        {/* ── MAIN CONTENT: WHAT TO EXPECT + FORM ── */}
        <section
          style={{
            padding: "0 1.5rem 5rem",
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "3rem",
            alignItems: "start",
          }}>

            {/* Left: What to expect */}
            <div>
              <span className="section-eyebrow" style={{ marginBottom: "1.25rem" }}>
                Was Sie erwartet
              </span>
              <h2
                style={{
                  fontSize: "clamp(22px, 2.5vw, 30px)",
                  fontWeight: 800,
                  color: "var(--text-white)",
                  letterSpacing: "-0.02em",
                  marginBottom: "2rem",
                  lineHeight: 1.25,
                }}
              >
                In 30 Minuten zu klaren nächsten Schritten
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {EXPECTS.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "var(--accent-dim)",
                        border: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--accent)",
                        fontWeight: 700,
                        fontSize: "14px",
                      }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          color: "var(--text-white)",
                          marginBottom: "0.35rem",
                        }}
                      >
                        {item.label}
                      </div>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--text-gray)",
                          lineHeight: 1.65,
                          margin: 0,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reassurance */}
              <div
                style={{
                  marginTop: "2.5rem",
                  padding: "1.25rem 1.5rem",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-card)",
                  fontSize: "0.875rem",
                  color: "var(--text-gray)",
                  lineHeight: 1.65,
                  textAlign: "center",
                  fontStyle: "italic",
                }}
              >
                &ldquo;Keine Verpflichtung. Keine versteckten Kosten. Einfach ein Gespräch.&rdquo;
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {formState === "success" ? (
                <div
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid rgba(249,115,22,0.4)",
                    borderRadius: "var(--radius-card)",
                    padding: "3rem 2rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: "var(--accent-dim)",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.5rem",
                      color: "var(--accent)",
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 800,
                      color: "var(--text-white)",
                      marginBottom: "0.75rem",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Danke! Wir melden uns innerhalb von 24h.
                  </h3>
                  <p style={{ color: "var(--text-gray)", lineHeight: 1.65, marginBottom: "1.5rem", fontSize: "0.9rem" }}>
                    Wir haben Ihre Anfrage erhalten und freuen uns auf das Gespräch.
                    Schauen Sie auch in Ihren Spam-Ordner, falls Sie keine Bestätigung erhalten.
                  </p>
                  <Link href="/" className="btn-ghost" style={{ display: "inline-flex" }}>
                    Zurück zur Startseite
                  </Link>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-card)",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--text-white)",
                      marginBottom: "0.25rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Termin anfragen
                  </h2>

                  {/* Name */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label htmlFor="name" style={labelStyle}>
                      Name <span style={{ color: "var(--accent)" }}>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Max Mustermann"
                      style={inputStyle}
                    />
                  </div>

                  {/* E-Mail */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label htmlFor="email" style={labelStyle}>
                      E-Mail <span style={{ color: "var(--accent)" }}>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="max@unternehmen.de"
                      style={inputStyle}
                    />
                  </div>

                  {/* Telefon (optional) */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label htmlFor="telefon" style={labelStyle}>
                      Telefon{" "}
                      <span style={{ color: "var(--text-gray)", fontWeight: 400 }}>(optional)</span>
                    </label>
                    <input
                      id="telefon"
                      name="telefon"
                      type="tel"
                      placeholder="+49 123 456789"
                      style={inputStyle}
                    />
                  </div>

                  {/* Unternehmen */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label htmlFor="unternehmen" style={labelStyle}>
                      Unternehmen <span style={{ color: "var(--accent)" }}>*</span>
                    </label>
                    <input
                      id="unternehmen"
                      name="unternehmen"
                      type="text"
                      required
                      placeholder="Muster GmbH"
                      style={inputStyle}
                    />
                  </div>

                  {/* Wunschtermin */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label htmlFor="wunschtermin" style={labelStyle}>
                      Wunschtermin <span style={{ color: "var(--accent)" }}>*</span>
                    </label>
                    <input
                      id="wunschtermin"
                      name="wunschtermin"
                      type="date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      style={{ ...inputStyle, colorScheme: "dark" }}
                    />
                  </div>

                  {/* Nachricht (optional) */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label htmlFor="nachricht" style={labelStyle}>
                      Nachricht{" "}
                      <span style={{ color: "var(--text-gray)", fontWeight: 400 }}>(optional)</span>
                    </label>
                    <textarea
                      id="nachricht"
                      name="nachricht"
                      rows={3}
                      placeholder="Kurz beschreiben, was Sie beschäftigt (z. B. viele Telefonanfragen, Prozesse die Zeit kosten, …)"
                      style={{
                        ...inputStyle,
                        resize: "vertical",
                        minHeight: 90,
                      }}
                    />
                  </div>

                  {/* Error */}
                  {formState === "error" && errorMsg && (
                    <div
                      style={{
                        background: "rgba(239,68,68,0.1)",
                        border: "1px solid rgba(239,68,68,0.35)",
                        borderRadius: 8,
                        padding: "0.75rem 1rem",
                        fontSize: "0.85rem",
                        color: "#fca5a5",
                      }}
                    >
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    style={{
                      background: formState === "loading"
                        ? "var(--accent-dim)"
                        : "linear-gradient(135deg, #f97316 0%, #ea6b0e 100%)",
                      color: formState === "loading" ? "var(--accent)" : "#fff",
                      border: "none",
                      borderRadius: "var(--radius-pill)",
                      padding: "14px 28px",
                      fontSize: "15px",
                      fontWeight: 700,
                      cursor: formState === "loading" ? "not-allowed" : "pointer",
                      width: "100%",
                      fontFamily: "inherit",
                      transition: "all 0.2s ease",
                      boxShadow: formState === "loading" ? "none" : "0 4px 20px rgba(249,115,22,0.25)",
                    }}
                  >
                    {formState === "loading" ? "Wird gesendet…" : "Termin anfragen →"}
                  </button>

                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-gray)",
                      textAlign: "center",
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    Mit dem Absenden stimmen Sie unserer{" "}
                    <Link href="/datenschutz" style={{ color: "var(--accent)", textDecoration: "none" }}>
                      Datenschutzerklärung
                    </Link>{" "}
                    zu. Keine Verpflichtung, keine Kosten.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

const labelStyle: React.CSSProperties = {
  fontSize: "0.8rem",
  fontWeight: 600,
  color: "var(--text-white)",
  letterSpacing: "0.02em",
};

const inputStyle: React.CSSProperties = {
  background: "var(--bg-primary)",
  border: "1px solid var(--border-subtle)",
  borderRadius: 8,
  padding: "11px 14px",
  fontSize: "0.9rem",
  color: "var(--text-white)",
  fontFamily: "inherit",
  outline: "none",
  width: "100%",
  transition: "border-color 0.2s ease",
};
