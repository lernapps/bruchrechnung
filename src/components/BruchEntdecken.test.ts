import { expect, test } from "vite-plus/test";
import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import Component from "./BruchEntdecken.vue";
test("models render with text alternatives and no browser globals", async () => {
  const html = await renderToString(
    createSSRApp(Component, {
      z: 3,
      n: 4,
      numerator: "Zähler",
      denominator: "Nenner",
      note: "Verändere den Bruch.",
      labels: {
        circle: "Kreis",
        strip: "Streifen",
        line: "Zahlenstrahl",
        set: "Menge",
        whole: "Ganzes",
        selected: "Markiert",
      },
    }),
  );
  expect(html).toContain("Zahlenstrahl");
  expect(html).toContain("Kreis");
  expect(html).toContain("3/4");
});
