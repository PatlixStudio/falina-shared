import {
  COFFEE_INTENTS,
  TAROT_INTENTS,
  type CoffeeIntent,
  type TarotIntent,
} from '../types/intention';

/** Canonical coffee intentions (language-independent codes). */
export const COFFEE_INTENTIONS: readonly CoffeeIntent[] = COFFEE_INTENTS;

/** Canonical tarot intentions. */
export const TAROT_INTENTIONS: readonly TarotIntent[] = TAROT_INTENTS;

/** Optional free-text questions are allowed but never required. */
export const MAX_INTENTION_QUESTION_LENGTH = 240;
