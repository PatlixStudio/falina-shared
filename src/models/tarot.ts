import type { CardOrientation, SpreadPosition } from '../types/tarot';

/** Canonical Tarot card. Meanings are canonical and interpreted by the LLM. */
export interface TarotCard {
  id: string;
  name: string;
  arcana: 'MAJOR' | 'MINOR';
  suit: 'CUPS' | 'WANDS' | 'SWORDS' | 'PENTACLES' | null;
  number: number;
  keywords: string[];
  uprightMeaning: string;
  reversedMeaning: string;
  loveMeaning: string;
  careerMeaning: string;
  moneyMeaning: string;
  spiritualMeaning: string;
  symbolism: string;
  archetype: string;
  frontImage: string | null;
  backImage: string | null;
}

export interface TarotSpreadPosition {
  key: SpreadPosition;
  label: string;
  order: number;
}

export interface TarotSpread {
  id: string;
  code: string;
  name: string;
  cardCount: number;
  description: string;
  positions: TarotSpreadPosition[];
}

/** Server-assigned card draw. The client must never pick random cards. */
export interface TarotReadingCard {
  id: string;
  cardId: string;
  positionKey: SpreadPosition;
  order: number;
  orientation: CardOrientation;
}

export interface TarotReading {
  id: string;
  spreadId: string;
  intent: string;
  customQuestion: string | null;
  cards: TarotReadingCard[];
  createdAt: string;
}
