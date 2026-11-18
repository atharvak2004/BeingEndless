const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "Jun 1" — matches the Wix blog date style. Uses UTC so server and client agree. */
export function formatShortDate(iso: string) {
  const d = new Date(iso);
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}`;
}

/** "PT4M32S" -> "04:32" */
export function formatDuration(iso: string) {
  const m = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/.exec(iso);
  if (!m) return "";
  const [h, min, s] = [Number(m[1] ?? 0), Number(m[2] ?? 0), Number(m[3] ?? 0)];
  const pad = (n: number) => String(n).padStart(2, "0");
  return h ? `${h}:${pad(min)}:${pad(s)}` : `${pad(min)}:${pad(s)}`;
}

/** Decode a route param safely and normalize so it matches stored (decoded) slugs. */
export function decodeSlug(slug: string) {
  let s = slug;
  try {
    s = decodeURIComponent(slug);
  } catch {
    /* already decoded */
  }
  return s.normalize("NFC");
}
