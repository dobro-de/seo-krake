"use client";
import { useEffect } from "react";
import { parseUTMFromSearch, storeUTM } from "@/lib/utm";

/**
 * Reads UTM parameters from the current URL on first render and stores them
 * in sessionStorage so they can be forwarded to CTAs and Calendly embeds.
 * Renders nothing — mount once in the root layout.
 */
export default function UTMTracker() {
  useEffect(() => {
    const utm = parseUTMFromSearch(window.location.search);
    storeUTM(utm);
  }, []);

  return null;
}
