import { expect, test } from "vite-plus/test";
import { expanded } from "./KuchenTeilen.ts";
test("every original cake slice is divided equally while the amount stays constant", () => {
  for (let f = 1; f <= 6; f++) {
    const q = expanded(f);
    expect(q.z * 3).toBe(q.n * 2);
    expect(q.n).toBe(3 * f);
    expect(q.z).toBe(2 * f);
  }
  expect(expanded(2)).toEqual({ z: 4, n: 6 });
});
