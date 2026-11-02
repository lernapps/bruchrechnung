/** Keep b of d subpieces of each of the z originally selected n-ths. */
export function cakeSelection(z: number, n: number, b: number, d: number): boolean[] {
  return Array.from({ length: n * d }, (_, i) => Math.floor(i / d) < z && i % d < b);
}
