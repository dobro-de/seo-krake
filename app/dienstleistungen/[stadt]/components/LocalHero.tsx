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
            "radial-gradient(ellipse at center, rgba(250,239,112,0.08) 0%, transparent 70%)",
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
          KI Beratung · Dienstleistungen · {city.name}
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

        {/* Intro */}
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
          }}
        >
          <a href="#kontakt" className="btn-primary">
            Kostenlos beraten lassen →
          </a>
          <a href="#case-study" className="btn-ghost">
            Fallstudie ansehen
          </a>
        </div>
      </div>
    </section>
  );
}
