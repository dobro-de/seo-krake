"use client";
import { useEffect, useState } from "react";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookieConsent")) setVisible(true);
  }, []);

  const accept = (type: "necessary" | "all") => {
    localStorage.setItem("cookieConsent", type);
    if (type === "all") {
      localStorage.setItem("cookieAnalytics", "true");
    } else {
      localStorage.removeItem("cookieAnalytics");
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-modal="true"
      aria-label="Cookie-Einstellungen"
    >
      <p className="cookie-text">
        Wir verwenden notwendige Cookies, damit die Website funktioniert.
        Zusätzlich setzen wir mit Ihrer Zustimmung Analyse-Cookies ein, um
        unsere Website zu verbessern.{" "}
        <a href="/datenschutz" className="cookie-link">
          Datenschutzerklärung
        </a>
      </p>
      <div className="cookie-actions">
        <button
          onClick={() => accept("necessary")}
          className="cookie-btn-secondary"
        >
          Nur notwendige
        </button>
        <button
          onClick={() => accept("all")}
          className="cookie-btn-primary"
        >
          Alle akzeptieren
        </button>
      </div>
    </div>
  );
}
