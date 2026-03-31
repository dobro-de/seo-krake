import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import CookieNotice from "@/components/CookieNotice";
import AmbientOrbs from "@/components/AmbientOrbs";
import AnimatedGrid from "@/components/AnimatedGrid";
import UTMTracker from "@/components/UTMTracker";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KI Beratung für Unternehmen | Strategie & Implementierung",
  description:
    "Professionelle KI Beratung für Unternehmen. Wir entwickeln Ihre KI-Strategie, automatisieren Prozesse und steigern die Effizienz. Kostenlose Erstberatung.",
  keywords:
    "KI Beratung, KI Beratung Unternehmen, KI Strategie, KI Implementierung, Künstliche Intelligenz Beratung",
  alternates: { canonical: "https://kiberatung.de" },
  openGraph: {
    title: "KI Beratung für Unternehmen | Strategie & Implementierung",
    description:
      "Professionelle KI Beratung für Unternehmen. Kostenlose Erstberatung.",
    url: "https://kiberatung.de",
    siteName: "kiberatung.de",
    type: "website",
    locale: "de_DE",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${bebasNeue.variable}`}>
        <AnimatedGrid />
        <AmbientOrbs />
        <UTMTracker />
        {children}
        <CookieNotice />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Everlast Consulting",
              "alternateName": "kiberatung.de",
              "description": "Professionelle KI Beratung für Unternehmen. Strategie, Implementierung und Prozessautomatisierung mit Künstlicher Intelligenz.",
              "url": "https://kiberatung.de",
              "email": "info@kiberatung.de",
              "areaServed": "DE",
              "knowsAbout": ["Künstliche Intelligenz", "KI Beratung", "Prozessautomatisierung", "KI-Strategie", "KI Chatbot", "KI Telefonassistent"],
              "sameAs": ["https://kiberatung.de"],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "Was kostet eine KI-Beratung?", "acceptedAnswer": { "@type": "Answer", "text": "Die Kosten einer KI-Beratung variieren je nach Projektumfang. Ein erstes Analysegespräch ist kostenlos und unverbindlich." } },
                { "@type": "Question", "name": "Wie lange dauert ein KI-Beratungsprojekt?", "acceptedAnswer": { "@type": "Answer", "text": "Die Analysephase dauert 2 Wochen, die Strategieentwicklung 1 Woche. Die Umsetzung beginnt ab 4 Wochen, je nach Komplexität." } },
                { "@type": "Question", "name": "Brauche ich IT-Kenntnisse für KI-Projekte?", "acceptedAnswer": { "@type": "Answer", "text": "Nein. Wir begleiten Sie von Anfang an und erklären alle Schritte verständlich — ohne technischen Hintergrund." } },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
