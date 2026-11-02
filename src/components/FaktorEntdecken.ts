/** Proper factors, excluding the trivial product 1 · n. */
export function divisors(n: number): number[] {
  return Array.from({ length: Math.max(0, n - 2) }, (_, i) => i + 2).filter((d) => n % d === 0);
}
export function isPrime(n: number): boolean {
  return Number.isInteger(n) && n > 1 && divisors(n).length === 0;
}
export function split(leaves: readonly number[], index: number, factor: number): number[] {
  const value = leaves[index];
  if (value === undefined || !divisors(value).includes(factor)) return [...leaves];
  return [...leaves.slice(0, index), factor, value / factor, ...leaves.slice(index + 1)];
}
