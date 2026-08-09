/**
 * Core Falina domain types shared between the web app and the API.
 * Plain TypeScript only — no framework dependencies.
 */

/**
 * The three reading modalities Falina offers.
 */
export type ReadingType = 'COFFEE' | 'TAROT' | 'ASTROLOGY';

export const READING_TYPES: readonly ReadingType[] = [
  'COFFEE',
  'TAROT',
  'ASTROLOGY',
] as const;

/** Lifecycle state of a unified reading record. */
export type ReadingStatus =
  | 'PENDING'
  | 'PROCESSING'
  | 'COMPLETED'
  | 'FAILED';

export const READING_STATUSES: readonly ReadingStatus[] = [
  'PENDING',
  'PROCESSING',
  'COMPLETED',
  'FAILED',
] as const;

/** Lifecycle state of a coffee reading flow. */
export type CoffeeState =
  | 'IDLE'
  | 'UPLOADING'
  | 'PROCESSING'
  | 'ANALYZING'
  | 'GENERATING'
  | 'COMPLETED'
  | 'FAILED';

export const COFFEE_STATES: readonly CoffeeState[] = [
  'IDLE',
  'UPLOADING',
  'PROCESSING',
  'ANALYZING',
  'GENERATING',
  'COMPLETED',
  'FAILED',
] as const;

/** Lifecycle state of a tarot reading flow. */
export type TarotState =
  | 'IDLE'
  | 'CHOOSING_INTENTION'
  | 'SHUFFLING'
  | 'SELECTING'
  | 'REVEALING'
  | 'INTERPRETING'
  | 'COMPLETED'
  | 'FAILED';

export const TAROT_STATES: readonly TarotState[] = [
  'IDLE',
  'CHOOSING_INTENTION',
  'SHUFFLING',
  'SELECTING',
  'REVEALING',
  'INTERPRETING',
  'COMPLETED',
  'FAILED',
] as const;

/** Lifecycle state of an astrology flow. */
export type AstrologyState =
  | 'PROFILE_REQUIRED'
  | 'CALCULATING'
  | 'READY'
  | 'GENERATING'
  | 'COMPLETED'
  | 'ERROR';

export const ASTROLOGY_STATES: readonly AstrologyState[] = [
  'PROFILE_REQUIRED',
  'CALCULATING',
  'READY',
  'GENERATING',
  'COMPLETED',
  'ERROR',
] as const;
