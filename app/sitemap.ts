import type { MetadataRoute } from "next";
import { BRANCHEN } from "@/lib/branchen";
import { LOESUNGEN } from "@/lib/loesungen";
import { blogPosts } from "@/lib/blog";
import { cities as gastronomieStaedte } from "./gastronomie/[stadt]/cityData";
import { VARIANTEN_SLUGS as gastronomieVarianten } from "./gastronomie/[stadt]/variantenData";
import { cities as handwerkStaedte } from "./handwerk/[stadt]/cityData";
import { VARIANTEN_SLUGS as handwerkVarianten } from "./handwerk/[stadt]/variantenData";
import { cities as gesundheitswesenStaedte } from "./gesundheitswesen/[stadt]/cityData";
import { VARIANTEN_SLUGS as gesundheitswesenVarianten } from "./gesundheitswesen/[stadt]/variantenData";
import { cities as einzelhandelStaedte } from "./einzelhandel/[stadt]/cityData";
import { VARIANTEN_SLUGS as einzelhandelVarianten } from "./einzelhandel/[stadt]/variantenData";
import { cities as immobilienStaedte } from "./immobilien/[stadt]/cityData";
import { VARIANTEN_SLUGS as immobilienVarianten } from "./immobilien/[stadt]/variantenData";
import { cities as rechtsanwaelteStaedte } from "./rechtsanwaelte/[stadt]/cityData";
import { cities as logistikStaedte } from "./logistik/[stadt]/cityData";
import { VARIANTEN_SLUGS as logistikVarianten } from "./logistik/[stadt]/variantenData";
import { cities as bildungStaedte } from "./bildung/[stadt]/cityData";
import { cities as dienstleistungenStaedte } from "./dienstleistungen/[stadt]/cityData";
import { VARIANTEN_SLUGS as dienstleistungenVarianten } from "./dienstleistungen/[stadt]/variantenData";
import { allSlugs as mittelstandSlugs } from "./mittelstand/[slug]/slugData";

const BASE = "https://kiberatung.de";

type ChangeFreq =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

function url(
  path: string,
  priority: number,
  changeFrequency: ChangeFreq = "monthly"
): MetadataRoute.Sitemap[number] {
  return { url: `${BASE}${path}`, priority, changeFrequency };
}

function stadtUrls(
  branche: string,
  staedte: { slug: string }[],
  varianten: string[] = []
): MetadataRoute.Sitemap {
  return [
    ...staedte.map((c) => url(`/${branche}/${c.slug}`, 0.7, "monthly")),
    ...varianten.map((s) => url(`/${branche}/${s}`, 0.7, "monthly")),
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Static pages ──────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    url("/", 1.0, "weekly"),
    url("/branchen", 0.9, "weekly"),
    url("/loesungen", 0.9, "weekly"),
    url("/leistungen", 0.8, "weekly"),
    url("/preise", 0.8, "monthly"),
    url("/ueber-uns", 0.7, "monthly"),
    url("/ki-chatbot", 0.8, "weekly"),
    url("/ki-telefonassistent", 0.8, "weekly"),
    url("/termin-buchen", 0.8, "monthly"),
    url("/blog", 0.8, "weekly"),
  ];

  // ── Branche main pages ────────────────────────────────────────────────────
  const branchePages: MetadataRoute.Sitemap = BRANCHEN.map((b) =>
    url(`/${b.slug}`, 0.9, "weekly")
  );

  // ── Dedicated branche/[stadt] pages ──────────────────────────────────────
  const stadtPages: MetadataRoute.Sitemap = [
    ...stadtUrls("gastronomie", gastronomieStaedte, gastronomieVarianten),
    ...stadtUrls("handwerk", handwerkStaedte, handwerkVarianten),
    ...stadtUrls("gesundheitswesen", gesundheitswesenStaedte, gesundheitswesenVarianten),
    ...stadtUrls("einzelhandel", einzelhandelStaedte, einzelhandelVarianten),
    ...stadtUrls("immobilien", immobilienStaedte, immobilienVarianten),
    ...stadtUrls("rechtsanwaelte", rechtsanwaelteStaedte),
    ...stadtUrls("logistik", logistikStaedte, logistikVarianten),
    ...stadtUrls("bildung", bildungStaedte),
    ...stadtUrls("dienstleistungen", dienstleistungenStaedte, dienstleistungenVarianten),
  ];

  // ── Mittelstand sub-pages ─────────────────────────────────────────────────
  const mittelstandPages: MetadataRoute.Sitemap = mittelstandSlugs.map((s) =>
    url(`/mittelstand/${s.slug}`, 0.7, "monthly")
  );

  // ── Lösungen pages ────────────────────────────────────────────────────────
  const loesungenPages: MetadataRoute.Sitemap = LOESUNGEN.map((l) =>
    url(`/${l.slug}`, 0.8, "weekly")
  );

  // ── Blog pages ────────────────────────────────────────────────────────────
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) =>
    url(`/blog/${p.slug}`, 0.7, "monthly")
  );

  return [
    ...staticPages,
    ...branchePages,
    ...stadtPages,
    ...mittelstandPages,
    ...loesungenPages,
    ...blogPages,
  ];
}
