import { expect, test } from "vite-plus/test";
import { equal, parse, reduce } from "./BruchMath.ts";
test("equivalent fractions, zero and invalid denominator", () => {
  expect(equal({ z: 3, n: 4 }, { z: 9, n: 12 })).toBe(true);
  expect(equal({ z: 3, n: 4 }, { z: 4, n: 3 })).toBe(false);
  expect(parse(" 6 / 8 ")).toEqual({ z: 6, n: 8 });
  expect(parse("1/0")).toBeUndefined();
  expect(parse("0.5")).toBeUndefined();
  expect(reduce(0, 8)).toEqual({ z: 0, n: 1 });
});
