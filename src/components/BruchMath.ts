/** Exact arithmetic for small, nonnegative fractions; never compare drawing pixels. */
export type Fraction = { z: number; n: number };
export function gcd(a: number, b: number): number {
  while (b !== 0) {
    const rest = a % b;
    a = b;
    b = rest;
  }
  return Math.abs(a);
}
export function reduce(z: number, n: number): Fraction {
  const d = gcd(z, n);
  return { z: z / d, n: n / d };
}
export function parse(text: string): Fraction | undefined {
  const match = /^\s*(\d+)(?:\s*\/\s*(\d+))?\s*$/.exec(text);
  if (!match) return undefined;
  const z = Number(match[1]);
  const n = Number(match[2] ?? 1);
  return Number.isSafeInteger(z) && Number.isSafeInteger(n) && n > 0 && z <= 100000 && n <= 100000
    ? { z, n }
    : undefined;
}
export function equal(a: Fraction, b: Fraction): boolean {
  return a.z * b.n === b.z * a.n;
}
export function sector(index: number, total: number): string {
  if (total === 1) return "M 60 5 A 55 55 0 1 1 59.999 5 Z";
  const a = -Math.PI / 2 + (2 * Math.PI * index) / total;
  const b = a + (2 * Math.PI) / total;
  return `M 60 60 L ${60 + 55 * Math.cos(a)} ${60 + 55 * Math.sin(a)} A 55 55 0 ${total === 1 ? 1 : 0} 1 ${60 + 55 * Math.cos(b)} ${60 + 55 * Math.sin(b)} Z`;
}
export function fill(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{([A-Za-z]+)\}/g, (whole, name: string) => String(values[name] ?? whole));
}
