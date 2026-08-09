/**
 * Tarot domain types. Card identity is canonical and language-independent;
 * display names/meanings are localized separately.
 */

export type TarotArcana = 'MAJOR' | 'MINOR';

export type TarotSuit = 'CUPS' | 'WANDS' | 'SWORDS' | 'PENTACLES';

export const TAROT_SUITS: readonly TarotSuit[] = [
  'CUPS',
  'WANDS',
  'SWORDS',
  'PENTACLES',
] as const;

export type CardOrientation = 'UPRIGHT' | 'REVERSED';

/** Canonical spread position role within a spread. */
export type SpreadPosition = string;
