import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "KI Beratung für Gastronomie & Restaurants | kiberatung.de",
  description:
    "KI-Lösungen für Restaurants, Hotels und Cafés: Reservierungsbot, Bewertungsmanagement, Speisekarten-KI. Kostenlos beraten lassen.",
  alternates: {
    canonical: "https://kiberatung-v2.vercel.app/gastronomie",
  },
};

export default function GastronomieLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
