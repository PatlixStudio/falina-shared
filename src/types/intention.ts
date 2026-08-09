/**
 * Intentions a user can select before a reading.
 * Intentions are language-independent canonical codes.
 */

/** Coffee reading intentions. */
export type CoffeeIntent =
  | 'LOVE'
  | 'CAREER'
  | 'MONEY'
  | 'GENERAL'
  | 'PERSONAL';

export const COFFEE_INTENTS: readonly CoffeeIntent[] = [
  'LOVE',
  'CAREER',
  'MONEY',
  'GENERAL',
  'PERSONAL',
] as const;

/** Tarot reading intentions. */
export type TarotIntent =
  | 'LOVE'
  | 'CAREER'
  | 'MONEY'
  | 'PERSONAL_GROWTH'
  | 'DECISION'
  | 'GENERAL'
  | 'CUSTOM';

export const TAROT_INTENTS: readonly TarotIntent[] = [
  'LOVE',
  'CAREER',
  'MONEY',
  'PERSONAL_GROWTH',
  'DECISION',
  'GENERAL',
  'CUSTOM',
] as const;

/** Optional astrological focus areas for readings. */
export type AstrologyFocus =
  | 'ALL'
  | 'LOVE'
  | 'CAREER'
  | 'MONEY'
  | 'EMOTIONAL';

export const ASTROLOGY_FOCUSES: readonly AstrologyFocus[] = [
  'ALL',
  'LOVE',
  'CAREER',
  'MONEY',
  'EMOTIONAL',
] as const;
