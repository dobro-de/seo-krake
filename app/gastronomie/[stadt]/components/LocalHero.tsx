import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

export default function LocalHero({ city }: Props) {
  return (
    <section
      style={{
        minHeight: "72vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "140px 24px 80px",
        background: "var(--bg-primary)",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "650px",
          height: "420px",
          background:
            "radial-gradient(ellipse at center, rgba(249,115,22,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: "880px",
          margin: "0 auto",
        }}
      >
        {/* Eyebrow */}
        <div className="section-eyebrow" style={{ marginBottom: "24px" }}>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--accent)",
              display: "inline-block",
            }}
          />
          KI Beratung · Gastronomie · {city.name}
        </div>

        {/* H1 */}
        <h1
          style={{
            fontSize: "clamp(36px, 5.5vw, 72px)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "var(--text-white)",
            marginBottom: "24px",
          }}
        >
          {city.h1}
        </h1>

        {/* Featured intro — prominent display */}
        <p
          style={{
            fontSize: "clamp(16px, 2vw, 19px)",
            color: "var(--text-gray)",
            maxWidth: "700px",
            margin: "0 auto 44px",
            lineHeight: 1.75,
          }}
        >
          {city.intro}
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "56px",
          }}
        >
          <a href="#kontakt" className="btn-primary">
            Kostenlos beraten lassen →
          </a>
          <a href="#case-study" className="btn-ghost">
            Fallstudie ansehen
          </a>
        </div>

        {/* "Warum in [Stadt]?" subsection */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "40px",
            textAlign: "left",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(18px, 2vw, 22px)",
              fontWeight: 700,
              color: "var(--text-white)",
              marginBottom: "16px",
              letterSpacing: "-0.01em",
            }}
          >
            Warum in {city.name}?
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "20px 24px",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(26px, 3vw, 36px)",
                  fontWeight: 900,
                  color: "var(--accent)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  marginBottom: "6px",
                }}
              >
                {city.stats.betriebe}
              </span>
              <span
                style={{
                  fontSize: "13px",
                  color: "var(--text-gray)",
                  lineHeight: 1.4,
                }}
              >
                {city.stats.label1}
              </span>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "20px 24px",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(26px, 3vw, 36px)",
                  fontWeight: 900,
                  color: "var(--accent)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  marginBottom: "6px",
                }}
              >
                {city.stats.mitarbeiter}
              </span>
              <span
                style={{
                  fontSize: "13px",
                  color: "var(--text-gray)",
                  lineHeight: 1.4,
                }}
              >
                {city.stats.label2}
              </span>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "20px 24px",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(26px, 3vw, 36px)",
                  fontWeight: 900,
                  color: "var(--accent)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  marginBottom: "6px",
                }}
              >
                {city.stats.markttrend}
              </span>
              <span
                style={{
                  fontSize: "13px",
                  color: "var(--text-gray)",
                  lineHeight: 1.4,
                }}
              >
                {city.stats.label3}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
