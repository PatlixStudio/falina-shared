/** Canonical tarot spreads. Extensible — add spreads without schema changes. */
export interface SpreadDefinition {
  code: string;
  cardCount: number;
  positions: string[];
}

export const TAROT_SPREADS: readonly SpreadDefinition[] = [
  { code: 'one-card', cardCount: 1, positions: ['guidance'] },
  {
    code: 'three-past-present-future',
    cardCount: 3,
    positions: ['past', 'present', 'future'],
  },
  {
    code: 'three-situation-challenge-guidance',
    cardCount: 3,
    positions: ['situation', 'challenge', 'guidance'],
  },
  {
    code: 'five-card',
    cardCount: 5,
    positions: ['situation', 'challenge', 'hidden-influence', 'advice', 'outcome'],
  },
  {
    code: 'celtic-cross',
    cardCount: 10,
    positions: [
      'self',
      'crossing',
      'foundation',
      'recent-past',
      'crown',
      'immediate-future',
      'self-attitude',
      'environment',
      'hopes-fears',
      'outcome',
    ],
  },
];

export function findSpread(code: string): SpreadDefinition | undefined {
  return TAROT_SPREADS.find((s) => s.code === code);
}
