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
