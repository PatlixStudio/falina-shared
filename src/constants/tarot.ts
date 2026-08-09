/**
 * Canonical 78-card Tarot deck identity data.
 *
 * This is the language-independent source of truth for card IDs and order.
 * Upright/reversed meanings and localized names live in the seed database
 * (falina-api), not here.
 */

export interface TarotCardDef {
  id: string;
  name: string;
  arcana: 'MAJOR' | 'MINOR';
  suit: 'CUPS' | 'WANDS' | 'SWORDS' | 'PENTACLES' | null;
  number: number;
}

export const MAJOR_ARCANA: readonly string[] = [
  'The Fool',
  'The Magician',
  'The High Priestess',
  'The Empress',
  'The Emperor',
  'The Hierophant',
  'The Lovers',
  'The Chariot',
  'Strength',
  'The Hermit',
  'Wheel of Fortune',
  'Justice',
  'The Hanged Man',
  'Death',
  'Temperance',
  'The Devil',
  'The Tower',
  'The Star',
  'The Moon',
  'The Sun',
  'Judgement',
  'The World',
];

export const MINOR_SUITS: readonly ('CUPS' | 'WANDS' | 'SWORDS' | 'PENTACLES')[] = [
  'CUPS',
  'WANDS',
  'SWORDS',
  'PENTACLES',
];

/** Lowercase suit names for IDs, matching rider-waite conventions. */
const SUIT_ID: Record<(typeof MINOR_SUITS)[number], string> = {
  CUPS: 'cups',
  WANDS: 'wands',
  SWORDS: 'swords',
  PENTACLES: 'pentacles',
};

const RANK_NAMES = [
  'Ace',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Page',
  'Knight',
  'Queen',
  'King',
];

function buildMinorCards(): TarotCardDef[] {
  const cards: TarotCardDef[] = [];
  for (const suit of MINOR_SUITS) {
    for (let number = 1; number <= 14; number++) {
      cards.push({
        id: `minor-${SUIT_ID[suit]}-${String(number).padStart(2, '0')}`,
        name: `${RANK_NAMES[number - 1]} of ${suit[0] + suit.slice(1).toLowerCase()}`,
        arcana: 'MINOR',
        suit,
        number,
      });
    }
  }
  return cards;
}

export const TAROT_CARDS: readonly TarotCardDef[] = [
  ...MAJOR_ARCANA.map((name, index) => ({
    id: `major-${String(index).padStart(2, '0')}`,
    name,
    arcana: 'MAJOR' as const,
    suit: null,
    number: index,
  })),
  ...buildMinorCards(),
];

export function findTarotCard(id: string): TarotCardDef | undefined {
  return TAROT_CARDS.find((c) => c.id === id);
}
