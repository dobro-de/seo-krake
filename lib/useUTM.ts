"use client";
import { useCallback } from "react";
import { appendUTMToURL, getStoredUTM } from "./utm";

/**
 * Returns a helper that appends stored UTM params to any URL.
 * Use in client components for CTA links and Calendly embeds.
 *
 * @example
 * const withUTM = useUTM();
 * <a href={withUTM("https://calendly.com/kiberatung/30min")}>Termin buchen</a>
 */
export function useUTM() {
  return useCallback((url: string) => {
    return appendUTMToURL(url, getStoredUTM());
  }, []);
}
