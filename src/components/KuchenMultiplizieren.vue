<script setup lang="ts">
import { computed, ref, useId } from "vue";
import { cakeSelection } from "./KuchenMultiplizieren.ts";
import { sector, fill } from "./BruchMath.ts";
defineOptions({ nojs: "caption" });
const props = defineProps<{
  instruction: string;
  denominatorLabel: string;
  numeratorLabel: string;
  beforeLabel: string;
  afterLabel: string;
  imageLabel: string;
  resultLabel: string;
}>();
const d = ref(3);
const b = ref(3);
const patternId = useId();
const selection = computed(() => cakeSelection(3, 4, b.value, d.value));
</script>
<template>
  <div class="cake-product">
    <p>{{ instruction }}</p>
    <label
      >{{ denominatorLabel }}: {{ d }}<input v-model.number="d" type="range" min="1" max="6" @input="b = d"
    /></label>
    <label>{{ numeratorLabel }}: {{ b }}<input v-model.number="b" type="range" min="0" :max="d" /></label>
    <div class="cakes">
      <figure>
        <svg viewBox="0 0 120 120" role="img" :aria-label="fill(imageLabel, { z: 3, n: 4 })">
          <defs>
            <pattern :id="patternId" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect width="10" height="10" fill="#16765d" />
              <path
                d="M-5 5 L5 -5 M0 10 L10 0 M5 15 L15 5 M-5 5 L5 15 M0 0 L10 10 M5 -5 L15 5"
                stroke="white"
                stroke-opacity="0.25"
                stroke-width="0.6"
              />
            </pattern>
          </defs>
          <path
            v-for="i in 4"
            :key="i"
            :d="sector(i - 1, 4)"
            :style="{ fill: i <= 3 ? `url(#${patternId})` : 'var(--page-background)' }"
          />
        </svg>
        <figcaption>{{ beforeLabel }}: 3/4</figcaption>
      </figure>
      <figure>
        <svg viewBox="0 0 120 120" role="img" :aria-label="fill(imageLabel, { z: 3 * b, n: 4 * d })">
          <path
            v-for="(selected, index) in selection"
            :key="index"
            :d="sector(index, 4 * d)"
            :style="{ fill: selected ? `url(#${patternId})` : 'var(--page-background)' }"
          />
          <path v-for="i in 4" :key="`original-${i}`" :d="sector(i - 1, 4)" class="original" />
        </svg>
        <figcaption>{{ afterLabel }}: {{ b }}/{{ d }} · 3/4</figcaption>
      </figure>
    </div>
    <p aria-live="polite">{{ fill(resultLabel, { b, d, z: 3 * b, n: 4 * d }) }}</p>
  </div>
</template>
<style scoped>
.cake-product {
  border: 1px solid var(--page-border);
  border-radius: 0.375rem;
  padding: 1rem;
}
label {
  display: grid;
  gap: 0.5rem;
  margin: 1rem 0;
}
input {
  width: 100%;
  min-height: 44px;
  accent-color: var(--page-accent);
}
.cakes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
figure {
  margin: 0;
  min-width: 0;
  text-align: center;
}
svg {
  display: block;
  width: 100%;
  max-width: 240px;
  margin: auto;
}
svg > path {
  stroke: var(--page-text);
  stroke-width: 0.6;
}
.original {
  fill: none;
  stroke-width: 1.6;
}
figcaption {
  margin-top: 0.5rem;
}
</style>
