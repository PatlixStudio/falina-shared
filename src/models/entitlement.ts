import type { EntitlementCode, ProductKind, SubscriptionTier } from '../types/entitlements';

export interface Entitlement {
  code: EntitlementCode;
  /** When the entitlement expires, if time-bound (e.g. subscription period). */
  expiresAt: string | null;
}

export interface Product {
  /** Store product id (App Store / Google Play / config). */
  productId: string;
  kind: ProductKind;
  tier: SubscriptionTier;
  entitlements: EntitlementCode[];
}

export interface Subscription {
  id: string;
  userId: string;
  tier: SubscriptionTier;
  store: 'APP_STORE' | 'GOOGLE_PLAY' | 'MANUAL' | null;
  storeProductId: string | null;
  expiresAt: string | null;
  status: 'ACTIVE' | 'EXPIRED' | 'CANCELLED';
}

/** How many readings of a type the user has used today, against their limit. */
export interface TypeUsage {
  used: number;
  limit: number;
}

/** Per-modality usage today. */
export interface UsageSnapshot {
  coffee: TypeUsage;
  tarot: TypeUsage;
  astrology: TypeUsage;
}

/** The full monetization view served by `GET /entitlements`. */
export interface EntitlementsView {
  tier: SubscriptionTier;
  entitlements: EntitlementCode[];
  premiumUntil: string | null;
  usage: UsageSnapshot;
}
