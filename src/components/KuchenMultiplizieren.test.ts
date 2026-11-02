import { expect, test } from "vite-plus/test";
import { cakeSelection } from "./KuchenMultiplizieren.ts";
test("each original piece is subdivided and only the requested portion of those pieces remains", () => {
  for (let d = 1; d <= 6; d++)
    for (let b = 0; b <= d; b++) {
      const pieces = cakeSelection(3, 4, b, d);
      expect(pieces).toHaveLength(4 * d);
      expect(pieces.filter(Boolean)).toHaveLength(3 * b);
      for (let quarter = 0; quarter < 4; quarter++) {
        expect(pieces.slice(quarter * d, (quarter + 1) * d).filter(Boolean)).toHaveLength(quarter < 3 ? b : 0);
      }
    }
  expect(cakeSelection(3, 4, 2, 3)).toEqual([
    true,
    true,
    false,
    true,
    true,
    false,
    true,
    true,
    false,
    false,
    false,
    false,
  ]);
});
