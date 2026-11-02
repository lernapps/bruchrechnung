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
  expect(html).not.toMatch(/<strong[^>]*>Zahlenstrahl<\/strong>/);
  expect(html).toContain("Kreis");
  expect(html).toContain("3/4");
});

test("later pages show only their own model", async () => {
  const labels = {
    circle: "Kreis",
    strip: "Streifen",
    line: "Zahlenstrahl",
    set: "Menge",
    whole: "Ganzes",
    selected: "Markiert",
  };
  const html = await renderToString(
    createSSRApp(Component, {
      stage: "line",
      numerator: "Zähler",
      denominator: "Nenner",
      note: "Position wählen.",
      labels,
    }),
  );
  expect(html).toContain("Zahlenstrahl");
  expect(html).not.toMatch(/<strong[^>]*>Kreis<\/strong>/);
});
