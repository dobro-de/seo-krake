export const UTM_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export type UTMParam = (typeof UTM_PARAMS)[number];
export type UTMData = Partial<Record<UTMParam, string>>;

const SESSION_KEY = "kib_utm";

/** Read UTM params from a URL search string. Returns only present params. */
export function parseUTMFromSearch(search: string): UTMData {
  const params = new URLSearchParams(search);
  const result: UTMData = {};
  for (const key of UTM_PARAMS) {
    const val = params.get(key);
    if (val) result[key] = val;
  }
  return result;
}

/** Persist UTM data to sessionStorage. Only overwrites if new data is present. */
export function storeUTM(data: UTMData): void {
  if (typeof sessionStorage === "undefined") return;
  if (Object.keys(data).length === 0) return;
  try {
    const existing = getStoredUTM();
    const merged = { ...existing, ...data };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(merged));
  } catch {
    // sessionStorage may be blocked (private mode, etc.)
  }
}

/** Read stored UTM data from sessionStorage. */
export function getStoredUTM(): UTMData {
  if (typeof sessionStorage === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as UTMData;
  } catch {
    return {};
  }
}

/**
 * Append stored UTM params to a URL string.
 * Existing UTM params in the target URL are preserved (not overwritten).
 */
export function appendUTMToURL(url: string, utm?: UTMData): string {
  const data = utm ?? getStoredUTM();
  if (Object.keys(data).length === 0) return url;

  try {
    // Handle relative and absolute URLs
    const isAbsolute = /^https?:\/\//i.test(url);
    const base = isAbsolute ? url : `https://placeholder.local${url}`;
    const parsed = new URL(base);

    for (const [key, val] of Object.entries(data)) {
      if (val && !parsed.searchParams.has(key)) {
        parsed.searchParams.set(key, val);
      }
    }

    return isAbsolute
      ? parsed.toString()
      : `${parsed.pathname}${parsed.search}${parsed.hash}`;
  } catch {
    return url;
  }
}
