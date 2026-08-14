import { ENTITLEMENT_CODES, type EntitlementCode } from '../types/entitlements';

export { ENTITLEMENT_CODES };
export type { EntitlementCode };

/** Free-tier daily consumption limits (single source of truth, adjustable). */
export const FREE_LIMITS = {
  coffeeReadingsPerDay: 2,
  tarotReadingsPerDay: 1,
  astrologyReadingsPerDay: 1,
  tarotSpreads: ['one-card', 'three-past-present-future', 'five-card'] as string[],
  oracleFollowupsPerReading: 3,
  historyDays: 30,
} as const;
