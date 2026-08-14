import type { CoffeeIntent } from '../types/intention';
import type { CoffeeSymbolDrawn } from './reading';

/** Dense vs sparse coffee-ground density per cup region. */
export interface PatternDensity {
  upper: 'light' | 'medium' | 'dense';
  middle: 'light' | 'medium' | 'dense';
  bottom: 'light' | 'medium' | 'dense';
}

/**
 * A single observation produced by the vision model. Observations describe what
 * the model sees; they are NOT interpretations of future events.
 */
export interface CoffeeObservation {
  symbol: string;
  confidence: number;
  location: string;
  description: string;
}

/** Structured vision output (the model distinguishes observation vs interpretation). */
export interface CoffeeVisionResult {
  observations: CoffeeObservation[];
  patternDensity: PatternDensity;
}

/** Server response from `POST /readings/coffee/analyze`. */
export interface CoffeeAnalyzeResult {
  vision: CoffeeVisionResult;
  symbols: CoffeeSymbolDrawn[];
}

/** Canonical coffee-ground symbol from the symbol database. */
export interface CoffeeSymbol {
  id: string;
  code: string;
  traditionalMeaning: string;
  loveMeaning: string;
  careerMeaning: string;
  moneyMeaning: string;
  generalMeaning: string;
  positiveInterpretation: string;
  cautionInterpretation: string;
  keywords: string[];
}

export interface CoffeeReading {
  id: string;
  userId: string;
  intent: CoffeeIntent;
  personalQuestion: string | null;
  imageId: string | null;
  vision: CoffeeVisionResult | null;
  symbols: CoffeeSymbol[];
  createdAt: string;
}
