/** Turns canonical codes (`three-past-present-future`) into display text. */
export function humanizeCode(code: string): string {
  return code
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}
