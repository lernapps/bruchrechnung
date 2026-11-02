import { expect, test } from "vite-plus/test";
import { generate, check, solution, wrong } from "./BruchUmformen.ts";
test("exact properties and alternate answers across all supported tasks", () => {
  for (const kind of ["expand", "reduce", "compare"])
    for (let seed = 1; seed <= 50; seed++) {
      const t = generate(seed, { kind, task: "Aufgabe", mistakes: [] });
      expect(check(t, solution(t))).toBe(true);
      expect(check(t, wrong(t))).toBe(false);
      expect(check(t, "1/0")).toBe(false);
      if (!["expand", "reduce", "compare"].includes(kind)) expect(check(t, `${t.rz * 2}/${t.rn * 2}`)).toBe(true);
    }
});

import { reason } from "./BruchUmformen.ts";
test("feedback distinguishes changed value from incomplete reduction", () => {
  const p = {
    kind: "reduce",
    task: "Kürze",
    mistakes: ["Wert verändert", "Ungültige Eingabe", "Noch kürzbar", "Faktor passt nicht"],
  };
  const t = generate(1, p);
  expect(reason(t, "6/5", p)).toBe("Wert verändert");
  expect(reason(t, "2/6", p)).toBe("Noch kürzbar");
  expect(reason(t, "1/0", p)).toBe("Ungültige Eingabe");
});
