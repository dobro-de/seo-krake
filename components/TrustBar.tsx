import Image from "next/image";

export default function TrustBar() {
  return (
    <section className="trust-bar-section" aria-label="Unsere Kunden vertrauen uns">
      <p className="trust-bar-label">Bereits 1500+ Unternehmen erfolgreich beraten</p>
      <div className="trust-bar-logos">
        <Image
          src="/images/trust/trust-kunden-logos.png"
          alt="Kundenlogos — Forbes, Hotel Lang, Team Nagel, physioaktiv und weitere"
          width={900}
          height={60}
          style={{ width: "100%", maxWidth: "900px", height: "auto", opacity: 0.5, margin: "0 auto", display: "block" }}
        />
      </div>
    </section>
  );
}
