/**
 * Pure, dependency-free validation helpers shared by web and api.
 * Full DTO validation lives in falina-api (class-validator); these cover the
 * cross-cutting primitives only.
 */

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function isUuid(value: unknown): value is string {
  return typeof value === 'string' && UUID_RE.test(value);
}

/** Valid IANA timezone id, e.g. Europe/Istanbul. */
export function isTimezone(value: unknown): value is string {
  if (typeof value !== 'string' || value.length === 0 || value.length > 100) {
    return false;
  }
  try {
    Intl.DateTimeFormat(undefined, { timeZone: value });
    return true;
  } catch {
    return false;
  }
}

/** ISO date YYYY-MM-DD. */
export function isIsoDate(value: unknown): value is string {
  return (
    typeof value === 'string' &&
    /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    !Number.isNaN(Date.parse(`${value}T00:00:00Z`))
  );
}

/** 24h time HH:mm. */
export function isIsoTime(value: unknown): value is string {
  return typeof value === 'string' && /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(value);
}

export function isNonEmptyString(value: unknown, maxLength = 1000): value is string {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= maxLength;
}

/** MIME types accepted for coffee-ground photographs. */
export const ACCEPTED_IMAGE_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
] as const;

export const MAX_IMAGE_BYTES = 10 * 1024 * 1024;

export function isAcceptedImageMime(mime: unknown): mime is (typeof ACCEPTED_IMAGE_MIME_TYPES)[number] {
  return (
    typeof mime === 'string' && (ACCEPTED_IMAGE_MIME_TYPES as readonly string[]).includes(mime)
  );
}
