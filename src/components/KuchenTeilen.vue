<script setup lang="ts">
import { computed, ref } from "vue";
import { expanded } from "./KuchenTeilen.ts";
import { sector, fill } from "./BruchMath.ts";
const props = defineProps<{
  beforeLabel: string;
  afterLabel: string;
  factorLabel: string;
  explanation: string;
  imageLabel: string;
}>();
const factor = ref(1);
const result = computed(() => expanded(factor.value));
</script>
<template>
  <div class="cake-lab">
    <label
      >{{ factorLabel }}: {{ factor }}<input v-model.number="factor" type="range" min="1" max="6" step="1"
    /></label>
    <div class="cakes">
      <figure>
        <svg viewBox="0 0 120 120" role="img" :aria-label="fill(imageLabel, { z: 2, n: 3 })">
          <path v-for="i in 3" :key="i" :d="sector(i - 1, 3)" :class="{ selected: i <= 2 }" />
        </svg>
        <figcaption>{{ beforeLabel }}: 2/3</figcaption>
      </figure>
      <figure>
        <svg viewBox="0 0 120 120" role="img" :aria-label="fill(imageLabel, { z: result.z, n: result.n })">
          <path v-for="i in result.n" :key="i" :d="sector(i - 1, result.n)" :class="{ selected: i <= result.z }" />
          <path v-for="i in 3" :key="`outline-${i}`" :d="sector(i - 1, 3)" class="original" />
        </svg>
        <figcaption>{{ afterLabel }}: {{ result.z }}/{{ result.n }}</figcaption>
      </figure>
    </div>
    <p aria-live="polite">{{ fill(explanation, { f: factor, z: result.z, n: result.n }) }}</p>
  </div>
</template>
<style scoped>
.cake-lab {
  border: 1px solid var(--vp-c-divider, #777);
  padding: 1rem;
  border-radius: 8px;
}
.cake-lab label {
  display: block;
}
.cake-lab input {
  display: block;
  width: 100%;
  min-height: 44px;
}
.cakes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.cakes figure {
  margin: 0;
  min-width: 0;
  text-align: center;
}
.cakes svg {
  width: 100%;
  max-width: 220px;
}
path {
  fill: var(--vp-c-bg, #fff);
  stroke: currentColor;
  stroke-width: 0.6;
}
.selected {
  fill: #16765d;
}
.original {
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
}
figcaption {
  font-weight: bold;
}
</style>
