import { expect, test } from "vite-plus/test";
import { count } from "./BruchteilEntdecken.ts";
test("equal groups give one, three or four quarters without counting a group twice", () => {
  expect(count([])).toBe(0);
  expect(count([1])).toBe(3);
  expect(count([1, 3, 4])).toBe(9);
  expect(count([1, 2, 3, 4])).toBe(12);
  expect(count([1, 1, 9])).toBe(3);
});
