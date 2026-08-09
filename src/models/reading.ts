import type { ReadingStatus, ReadingType } from '../types/reading';

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
  content: unknown;
  /** Feature-specific structured data (symbols, cards, chart refs...). */
  metadata: unknown;
  isFavorite: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Page<T> {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
}
