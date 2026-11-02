import { expect, test } from "vite-plus/test";
import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import Component from "./BruchEingabe.vue";
test("preview preserves the typed fraction without solving or reducing it", async () => {
  const html = await renderToString(createSSRApp(Component, { value: "10/12", label: "So schreibst du das" }));
  expect(html).toContain("<math");
  expect(html).toContain("<mfrac");
  expect(html).toMatch(/<mn[^>]*>10<\/mn>/);
  expect(html).toMatch(/<mn[^>]*>12<\/mn>/);
  for (const value of ["", "4", "0", "3/", "2/0", "abc"]) {
    const hidden = await renderToString(createSSRApp(Component, { value, label: "So schreibst du das" }));
    expect(hidden).not.toContain("<math");
  }
});
