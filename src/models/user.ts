/**
 * User and profile models. Timestamps are stored in UTC.
 */

/** Core account record (no birth data here — that lives in the birth profile). */
export interface User {
  id: string;
  email: string;
  role: 'USER' | 'ADMIN';
  createdAt: string;
  updatedAt: string;
}

/** Onboarding/profile data used to personalize astrology. */
export interface UserProfile {
  id: string;
  userId: string;
  displayName: string;
  /** YYYY-MM-DD. */
  birthDate: string;
  /** HH:mm (24h) in the birth location's local time. Nullable — may be unknown. */
  birthTime: string | null;
  birthLocation: string | null;
  latitude: number | null;
  longitude: number | null;
  /** IANA timezone id, e.g. Europe/Istanbul. */
  timezone: string;
  /** ISO 8601 UTC timestamp of last update. */
  updatedAt: string;
}

/** Lightweight personalization preferences (non-invasive). */
export interface UserPreferences {
  favoriteReadingType?: 'COFFEE' | 'TAROT' | 'ASTROLOGY' | null;
  favoriteTopic?: string | null;
  readingLength: 'SHORT' | 'STANDARD' | 'DETAILED';
  notificationPreferences: {
    dailyReading: boolean;
    weeklyReading: boolean;
    reminders: boolean;
  };
}
