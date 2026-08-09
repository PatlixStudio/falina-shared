/**
 * Monetization entitlements. The backend is the source of truth; the frontend
 * only ever asks "does the user hold entitlement X?".
 */

export type EntitlementCode =
  | 'COFFEE_UNLIMITED'
  | 'TAROT_ADVANCED'
  | 'ASTROLOGY_ADVANCED'
  | 'ORACLE_MEMORY'
  | 'PATTERN_INSIGHTS'
  | 'YEAR_AHEAD'
  | 'DEEP_READING'
  | 'AD_FREE';

export const ENTITLEMENT_CODES: readonly EntitlementCode[] = [
  'COFFEE_UNLIMITED',
  'TAROT_ADVANCED',
  'ASTROLOGY_ADVANCED',
  'ORACLE_MEMORY',
  'PATTERN_INSIGHTS',
  'YEAR_AHEAD',
  'DEEP_READING',
  'AD_FREE',
] as const;

export type ProductKind = 'SUBSCRIPTION' | 'ONE_OFF';

export type SubscriptionTier = 'FREE' | 'PREMIUM';
