/**
 * Canonical coffee-ground symbols.
 * Codes are stable, language-independent identifiers; localized meanings are
 * resolved at interpretation time.
 */

export interface CoffeeSymbolDef {
  code: string;
  keywords: string[];
}

export const COFFEE_SYMBOLS: readonly CoffeeSymbolDef[] = [
  { code: 'bird', keywords: ['news', 'freedom'] },
  { code: 'heart', keywords: ['love', 'affection'] },
  { code: 'ring', keywords: ['commitment', 'partnership'] },
  { code: 'road', keywords: ['journey', 'movement', 'transition'] },
  { code: 'tree', keywords: ['growth', 'family'] },
  { code: 'mountain', keywords: ['obstacle', 'achievement'] },
  { code: 'fish', keywords: ['abundance', 'luck'] },
  { code: 'snake', keywords: ['warning', 'transformation'] },
  { code: 'flower', keywords: ['joy', 'new beginnings'] },
  { code: 'star', keywords: ['wish', 'hope'] },
  { code: 'eye', keywords: ['awareness', 'insight'] },
  { code: 'face', keywords: ['encounter', 'connection'] },
  { code: 'house', keywords: ['home', 'security'] },
  { code: 'key', keywords: ['solution', 'opportunity'] },
  { code: 'ship', keywords: ['voyage', 'arrival'] },
  { code: 'circle', keywords: ['completion', 'cycle'] },
  { code: 'cross', keywords: ['burden', 'protection'] },
  { code: 'crown', keywords: ['recognition', 'success'] },
  { code: 'arrow', keywords: ['direction', 'purpose'] },
  { code: 'butterfly', keywords: ['transformation', 'lightness'] },
  { code: 'dog', keywords: ['loyalty', 'friendship'] },
  { code: 'cat', keywords: ['intuition', 'mystery'] },
  { code: 'horse', keywords: ['energy', 'speed'] },
  { code: 'sun', keywords: ['success', 'vitality'] },
  { code: 'moon', keywords: ['emotion', 'intuition'] },
  { code: 'cloud', keywords: ['uncertainty', 'thoughts'] },
  { code: 'letter', keywords: ['message', 'news'] },
  { code: 'number', keywords: ['time', 'measure'] },
] as const;

export function findCoffeeSymbol(code: string): CoffeeSymbolDef | undefined {
  return COFFEE_SYMBOLS.find((s) => s.code === code);
}
