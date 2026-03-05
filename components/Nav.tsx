"use client";
import { useState } from "react";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="nav-wrapper">
      <div className="nav-inner">
        {/* Logo */}
        <a href="/" className="nav-logo" aria-label="KI Beratung – Startseite">
          KI <span>Beratung</span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li><a href="#leistungen">Leistungen</a></li>
          <li><a href="#referenzen">Referenzen</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>

        {/* CTA + Mobile Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a href="#kontakt" className="nav-cta">
            Kostenlos anfragen
          </a>
          <button
            className="nav-mobile-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü öffnen"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {mobileOpen ? (
                <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            background: "rgba(12,15,22,0.98)",
            borderTop: "1px solid rgba(249,115,22,0.15)",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <a href="#leistungen" style={{ color: "#94a3b8", fontSize: "15px", textDecoration: "none" }} onClick={() => setMobileOpen(false)}>Leistungen</a>
          <a href="#referenzen" style={{ color: "#94a3b8", fontSize: "15px", textDecoration: "none" }} onClick={() => setMobileOpen(false)}>Referenzen</a>
          <a href="#faq" style={{ color: "#94a3b8", fontSize: "15px", textDecoration: "none" }} onClick={() => setMobileOpen(false)}>FAQ</a>
          <a href="#kontakt" className="nav-cta" style={{ textAlign: "center" }} onClick={() => setMobileOpen(false)}>Kostenlos anfragen</a>
        </div>
      )}
    </nav>
  );
}
