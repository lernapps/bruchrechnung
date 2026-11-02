import { expect, test } from "vite-plus/test";
import { grouping, fitsPartition } from "./TeilerVielfacheEntdecken.ts";
test("bundling preserves every unit and distinguishes common divisors", () => {
  for (const n of [12, 18])
    for (let size = 1; size <= 12; size++) {
      const { groups, rest } = grouping(n, size);
      expect(groups * size + rest).toBe(n);
      expect(rest).toBeLessThan(size);
    }
  expect(grouping(12, 6).rest).toBe(0);
  expect(grouping(18, 6).rest).toBe(0);
  expect(grouping(18, 4).rest).toBe(2);
});
test("a refined grid must preserve every old boundary in both strips", () => {
  expect(fitsPartition(4, 8)).toBe(true);
  expect(fitsPartition(6, 8)).toBe(false);
  expect(fitsPartition(4, 2)).toBe(false);
  for (const parts of [12, 24]) {
    expect(fitsPartition(4, parts)).toBe(true);
    expect(fitsPartition(6, parts)).toBe(true);
  }
});
