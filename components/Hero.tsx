"use client";
import { useEffect, useState } from "react";

const typewriterTexts = [
  "für Ihr Unternehmen",
  "die sich rechnet",
  "in 30 Tagen",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const target = typewriterTexts[currentIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= target.length) {
      setDisplayText(target.slice(0, charIndex));
      timer = setTimeout(() => setCharIndex((c) => c + 1), 60);
    } else if (isDeleting && charIndex >= 0) {
      setDisplayText(target.slice(0, charIndex));
      timer = setTimeout(() => setCharIndex((c) => c - 1), 35);
    }

    if (!isDeleting && charIndex > target.length) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setCharIndex(0);
      setCurrentIndex((i) => (i + 1) % typewriterTexts.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentIndex]);

  return (
    <section className="hero-section" aria-label="KI Beratung Startbereich">
      {/* Radial glow */}
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-content">
        {/* Badge */}
        <div className="hero-badge" aria-label="KI Beratung Experten">
          <span className="hero-badge-dot" />
          #1 KI Beratung in Deutschland
        </div>

        {/* Headline */}
        <h1 className="hero-h1">
          <span className="hero-h1-keyword">KI Beratung</span>
        </h1>
        <div className="hero-typewriter" aria-live="polite">
          {displayText}
          <span className="hero-typewriter-cursor" aria-hidden="true" />
        </div>

        {/* Subtext */}
        <p className="hero-sub">
          Wir helfen Unternehmen dabei, Künstliche Intelligenz strategisch einzusetzen.
          Von der ersten Analyse bis zur vollständigen Implementierung — messbare
          Ergebnisse, keine leeren Versprechen.
        </p>

        {/* CTAs */}
        <div className="hero-ctas">
          <a href="#kontakt" className="btn-primary">
            Kostenlose Erstberatung
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#leistungen" className="btn-ghost">
            Leistungen entdecken
          </a>
        </div>

        {/* Floating Stats Badges */}
        <div className="hero-stats" aria-label="KI Beratung Kennzahlen">
          <div className="hero-stat-badge">
            <span>10+</span> Jahre Erfahrung
          </div>
          <div className="hero-stat-badge">
            <span>800+</span> Beratungen
          </div>
          <div className="hero-stat-badge">
            <span>Ø 22%</span> Effizienzsteigerung
          </div>
        </div>
      </div>
    </section>
  );
}
