export const WHOLE = 12;
export const GROUPS = 4;
export function count(selected: readonly number[]): number {
  return new Set(selected.filter((n) => n >= 1 && n <= GROUPS)).size * (WHOLE / GROUPS);
}
