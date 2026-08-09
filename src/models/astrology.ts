import type {
  AspectType,
  AstrologyPeriodKind,
  ChartVersion,
  Planet,
  ZodiacSign,
} from '../types/astro';

export interface PlanetaryPosition {
  planet: Planet;
  sign: ZodiacSign;
  /** Longitude in degrees 0-360. */
  longitude: number;
  /** Degrees within the sign 0-30. */
  degree: number;
}

export interface Aspect {
  planetA: Planet;
  planetB: Planet;
  type: AspectType;
  orb: number;
}

export interface HousePosition {
  house: number;
  sign: ZodiacSign;
  cuspLongitude: number;
}

/** Natal chart computed by the calculation engine (never by an LLM). */
export interface AstrologyChart {
  userId: string;
  chartVersion: ChartVersion;
  birthDate: string;
  birthTime: string | null;
  timezone: string;
  latitude: number | null;
  longitude: number | null;
  /** Present only when birthTime is known. */
  ascendant: ZodiacSign | null;
  positions: PlanetaryPosition[];
  houses: HousePosition[] | null;
  aspects: Aspect[];
  computedAt: string;
}

export interface AstrologyReading {
  id: string;
  userId: string;
  kind: AstrologyPeriodKind;
  /** Local period key, e.g. YYYY-MM-DD for daily or YYYY-Www for weekly. */
  periodKey: string;
  chartVersion: ChartVersion;
  moonPhase: string | null;
  transits: Array<{
    planet: Planet;
    sign: ZodiacSign;
    longitude: number;
  }>;
  content: unknown;
  createdAt: string;
}
