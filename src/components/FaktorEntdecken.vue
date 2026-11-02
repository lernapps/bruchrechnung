<script setup lang="ts">
import { computed, ref } from "vue";
import { divisors, isPrime, split } from "./FaktorEntdecken.ts";
import { fill } from "./BruchMath.ts";
const props = defineProps<{
  numberLabel: string;
  instruction: string;
  chooseLabel: string;
  splitLabel: string;
  primeLabel: string;
  finishedLabel: string;
  resetLabel: string;
}>();
const number = ref(12);
const leaves = ref<number[]>([12]);
const selected = ref(0);
const choices = computed(() => divisors(leaves.value[selected.value] ?? number.value));
const finished = computed(() => leaves.value.every(isPrime));
function reset(): void {
  leaves.value = [number.value];
  selected.value = 0;
}
function divide(factor: number): void {
  leaves.value = split(leaves.value, selected.value, factor);
  selected.value = Math.max(
    0,
    leaves.value.findIndex((n) => !isPrime(n)),
  );
}
</script>
<template>
  <div class="factor-lab">
    <p>{{ instruction }}</p>
    <label
      >{{ numberLabel }}: {{ number }}<input v-model.number="number" type="range" min="2" max="48" @input="reset"
    /></label>
    <p class="product">
      <strong>{{ number }} = </strong
      ><template v-for="(leaf, i) in leaves" :key="i"
        ><span v-if="i > 0"> · </span
        ><button
          type="button"
          :aria-pressed="selected === i"
          :aria-label="fill(chooseLabel, { n: leaf })"
          @click="selected = i"
        >
          {{ leaf }}<span v-if="isPrime(leaf)"> ★</span>
        </button></template
      >
    </p>
    <p v-if="choices.length">{{ splitLabel }}</p>
    <div class="choices">
      <button v-for="factor in choices" :key="factor" type="button" @click="divide(factor)">
        {{ factor }} · {{ (leaves[selected] ?? number) / factor }}
      </button>
    </div>
    <p v-if="choices.length === 0" aria-live="polite">{{ fill(primeLabel, { n: leaves[selected] ?? number }) }}</p>
    <p v-if="finished" aria-live="polite">{{ finishedLabel }}</p>
    <button type="button" @click="reset">{{ resetLabel }}</button>
  </div>
</template>
<style scoped>
.factor-lab {
  border: 1px solid var(--vp-c-divider, #777);
  border-radius: 8px;
  padding: 1rem;
}
.factor-lab label {
  display: block;
}
.factor-lab input {
  display: block;
  min-height: 44px;
  width: 100%;
}
.product,
.choices {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
}
.factor-lab button {
  min-width: 44px;
  min-height: 44px;
  padding: 0.4rem 0.7rem;
  border: 1px solid currentColor;
  border-radius: 6px;
  background: var(--vp-c-bg, #fff);
  color: inherit;
}
.factor-lab button[aria-pressed="true"] {
  outline: 2px solid #16765d;
}
.factor-lab button:focus-visible {
  outline: 3px solid #d39d12;
  outline-offset: 3px;
}
</style>
