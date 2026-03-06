"use client";
import { useEffect, useState } from "react";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookieConsent")) setVisible(true);
  }, []);

  const accept = (type: "necessary" | "all") => {
    localStorage.setItem("cookieConsent", type);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie-Einstellungen">
      <p className="cookie-text">
        Wir verwenden Cookies, um die Nutzererfahrung zu verbessern.{" "}
        <a href="/datenschutz" className="cookie-link">Mehr erfahren</a>
      </p>
      <div className="cookie-actions">
        <button onClick={() => accept("necessary")} className="cookie-btn-secondary">
          Nur notwendige
        </button>
        <button onClick={() => accept("all")} className="cookie-btn-primary">
          Alle akzeptieren
        </button>
      </div>
    </div>
  );
}
