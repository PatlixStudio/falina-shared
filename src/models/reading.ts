import type { AstrologyFocus, CoffeeIntent, TarotIntent } from '../types/intention';
import type { ReadingStatus, ReadingType } from '../types/reading';
import type { SelectedTarotCard } from '../types/tarot';
import type { CoffeeVisionResult } from './coffee';

/**
 * Unified reading record. Every coffee/tarot/astrology reading persists through
 * this table so Falina can connect readings over time (reading memory).
 */
export interface Reading {
  id: string;
  userId: string;
  type: ReadingType;
  status: ReadingStatus;
  title: string;
  summary: string;
  /** Main body of the reading (structured sections, localized at generation time). */
  content: ReadingContent;
  /** Feature-specific structured data (symbols, cards, chart refs...). */
  metadata: ReadingMetadata;
  isFavorite: boolean;
  createdAt: string;
  updatedAt: string;
}

/** One headed block of a generated reading. */
export interface ReadingSection {
  heading: string;
  body: string;
}

/** Structured body of a completed reading. */
export interface ReadingContent {
  narrative: string;
  sections: ReadingSection[];
}

/** Birth details used by astrology readings. */
export interface BirthInfo {
  birthDate: string;
  birthTime: string | null;
  birthLocation: string | null;
}

/** Feature-specific structured data attached to a reading. */
export interface ReadingMetadata {
  intent?: CoffeeIntent | TarotIntent | string;
  spreadCode?: string;
  spreadName?: string;
  cards?: TarotDrawnCard[];
  symbols?: CoffeeSymbolDrawn[];
  birth?: BirthInfo;
  sunSign?: string;
  signName?: string;
  focus?: AstrologyFocus;
  /** Compressed coffee-cup photo (data URL), when the reading was image-driven. */
  imageDataUrl?: string;
  /** Structured vision observations from the coffee-cup analysis. */
  vision?: CoffeeVisionResult;
}

/** A tarot card drawn by the server for a reading. */
export interface TarotDrawnCard {
  positionKey: string;
  label: string;
  order: number;
  orientation: 'UPRIGHT' | 'REVERSED';
  cardId: string;
  cardName: string;
  arcana: 'MAJOR' | 'MINOR';
  suit: 'CUPS' | 'WANDS' | 'SWORDS' | 'PENTACLES' | null;
}

/** A coffee symbol present in a reading. */
export interface CoffeeSymbolDrawn {
  code: string;
  keywords: string[];
}

/**
 * Client payload for requesting a new reading. Mirrors the ReadingDraft that
 * the selection pages build, plus an optional free-text question.
 */
export interface CreateReadingInput {
  type: ReadingType;
  intent?: CoffeeIntent | TarotIntent | string;
  spreadCode?: string;
  symbols?: string[];
  focus?: AstrologyFocus;
  birth?: BirthInfo;
  question?: string;
  /** Reader-picked tarot cards (in spread order). Omitted → server draws. */
  cards?: SelectedTarotCard[];
  /** Compressed coffee-cup photo as a data URL (coffee image-driven reads). */
  imageDataUrl?: string;
}

export interface Page<T> {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
}
