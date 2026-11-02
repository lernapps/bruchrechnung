import { expect, test } from "vite-plus/test";
import { generate, check, solution, wrong } from "./BruchModelle.ts";
test("proper and over-one models check counts, never layout", () => {
  for (const mode of ["mark", "line", "mixed"])
    for (let seed = 1; seed <= 50; seed++) {
      const t = generate(seed, { task: "{z}/{n}", mode, mistakes: [] });
      expect(check(t, solution(t))).toBe(true);
      expect(check(t, wrong(t))).toBe(false);
      expect(check(t, "3")).toBe(false);
      if (mode === "mixed") expect(t.z).toBeGreaterThan(t.n);
      else expect(t.z).toBeLessThan(t.n);
    }
});

import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import Model from "./BruchModelle.vue";
test("no calculated answer before checking and one representation", async () => {
  const props = {
    task: "Markiere {z}/{n}.",
    mode: "mark",
    mistakes: [],
    seed: 1,
    checked: false,
    cell: "Teil {i}",
    counter: "ERGEBNIS: {z}/{n}",
    labels: {
      circle: "Kreis",
      strip: "Streifen",
      line: "Zahlenstrahl",
      set: "Menge",
      whole: "Ganzes",
      selected: "Ausgewählt",
    },
  };
  const html = await renderToString(createSSRApp(Model, props));
  expect(html).not.toContain("ERGEBNIS:");
  expect(html).toContain("Kreis");
  expect(html).not.toMatch(/<strong[^>]*>Streifen<\/strong>/);
  const checked = await renderToString(createSSRApp(Model, { ...props, checked: true }));
  expect(checked).toContain("ERGEBNIS:");
});
