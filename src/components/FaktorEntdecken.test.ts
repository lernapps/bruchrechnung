import { expect, test } from "vite-plus/test";
import { divisors, isPrime, split } from "./FaktorEntdecken.ts";
test("factorisation preserves the product and stops only at primes", () => {
  let leaves = [24];
  leaves = split(leaves, 0, 4);
  expect(leaves).toEqual([4, 6]);
  leaves = split(leaves, 0, 2);
  leaves = split(leaves, 2, 2);
  expect(leaves).toEqual([2, 2, 2, 3]);
  expect(leaves.reduce((a, b) => a * b, 1)).toBe(24);
  expect(leaves.every(isPrime)).toBe(true);
  expect(split([13], 0, 2)).toEqual([13]);
  expect(isPrime(1)).toBe(false);
  expect(isPrime(2)).toBe(true);
  expect(divisors(13)).toEqual([]);
});
