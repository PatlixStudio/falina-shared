/**
 * Astrology domain types. Planetary positions, houses and aspects are produced
 * by the calculation engine — never by an LLM.
 */

export type Planet =
  | 'SUN'
  | 'MOON'
  | 'MERCURY'
  | 'VENUS'
  | 'MARS'
  | 'JUPITER'
  | 'SATURN'
  | 'URANUS'
  | 'NEPTUNE'
  | 'PLUTO'
  | 'ASCENDANT';

export const PLANETS: readonly Planet[] = [
  'SUN',
  'MOON',
  'MERCURY',
  'VENUS',
  'MARS',
  'JUPITER',
  'SATURN',
  'URANUS',
  'NEPTUNE',
  'PLUTO',
  'ASCENDANT',
] as const;

/** Western zodiac signs. */
export type ZodiacSign =
  | 'ARIES'
  | 'TAURUS'
  | 'GEMINI'
  | 'CANCER'
  | 'LEO'
  | 'VIRGO'
  | 'LIBRA'
  | 'SCORPIO'
  | 'SAGITTARIUS'
  | 'CAPRICORN'
  | 'AQUARIUS'
  | 'PISCES';

export const ZODIAC_SIGNS: readonly ZodiacSign[] = [
  'ARIES',
  'TAURUS',
  'GEMINI',
  'CANCER',
  'LEO',
  'VIRGO',
  'LIBRA',
  'SCORPIO',
  'SAGITTARIUS',
  'CAPRICORN',
  'AQUARIUS',
  'PISCES',
] as const;

export type AspectType =
  | 'CONJUNCTION'
  | 'OPPOSITION'
  | 'TRINE'
  | 'SQUARE'
  | 'SEXTILE';

export const ASPECT_TYPES: readonly AspectType[] = [
  'CONJUNCTION',
  'OPPOSITION',
  'TRINE',
  'SQUARE',
  'SEXTILE',
] as const;

/** Bumped whenever the calculation engine changes so caches can be invalidated. */
export type ChartVersion = string;

export type AstrologyPeriodKind = 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEAR_AHEAD';

export const ASTROLOGY_PERIOD_KINDS: readonly AstrologyPeriodKind[] = [
  'DAILY',
  'WEEKLY',
  'MONTHLY',
  'YEAR_AHEAD',
] as const;
