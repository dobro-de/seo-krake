import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

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
  openGraph: {
    title: "KI Beratung für Unternehmen | Strategie & Implementierung",
    description:
      "Professionelle KI Beratung für Unternehmen. Kostenlose Erstberatung.",
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
        {children}
      </body>
    </html>
  );
}
