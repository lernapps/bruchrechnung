import { expect, test } from "vite-plus/test";
import { generate, check, solution, wrong } from "./BruchModelle.ts";
test("proper and over-one models check counts, never layout", () => {
  for (const mode of ["mark", "line"])
    for (let seed = 1; seed <= 50; seed++) {
      const t = generate(seed, { task: "{z}/{n}", mode, mistakes: [] });
      expect(check(t, solution(t))).toBe(true);
      expect(check(t, wrong(t))).toBe(false);
      expect(check(t, "3")).toBe(false);
      if (mode === "line") expect(t.z).toBeGreaterThan(t.n);
      else expect(t.z).toBeLessThan(t.n);
    }
});
