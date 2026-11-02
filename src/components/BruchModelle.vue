<script setup lang="ts">
import { computed, ref } from "vue";
import { generate } from "./BruchModelle.ts";
import { fill } from "./BruchMath.ts";
import BruchBild from "./BruchBild.vue";
const props = defineProps<{
  task: string;
  mode?: string;
  mistakes: string[];
  seed: number;
  checked: boolean;
  cell: string;
  counter: string;
  labels: { circle: string; strip: string; line: string; set: string; whole: string; selected: string };
}>();
const emit = defineEmits<{ answer: [number] }>();
const current = computed(() =>
  generate(props.seed, { task: props.task, mode: props.mode ?? "mark", mistakes: props.mistakes }),
);
const selected = ref<number[]>([]);
const position = ref(0);
const count = computed(() => (current.value.mode === "line" ? position.value : selected.value.length));
const total = computed(() => (current.value.mode === "line" ? current.value.n * 3 : current.value.n));
function toggle(i: number): void {
  if (current.value.mode === "line") {
    position.value = i;
  } else {
    selected.value = selected.value.includes(i) ? selected.value.filter((x) => x !== i) : [...selected.value, i];
  }
  emit("answer", count.value);
}
</script>
<template>
  <div>
    <p>{{ fill(task, { z: current.z, n: current.n }) }}</p>
    <div class="cells">
      <button
        v-for="i in current.mode === 'line' ? total + 1 : total"
        :key="i"
        type="button"
        :aria-pressed="current.mode === 'line' ? position === i - 1 : selected.includes(i)"
        :aria-label="fill(cell, { i: current.mode === 'line' ? i - 1 : i, n: current.n })"
        @click="toggle(current.mode === 'line' ? i - 1 : i)"
      >
        {{ current.mode === "line" ? `${i - 1}/${current.n}` : selected.includes(i) ? "✓" : "○" }}
      </button>
    </div>
    <p aria-live="polite">{{ fill(counter, { z: count, n: current.n }) }}</p>
    <BruchBild :z="count" :n="current.n" :total="current.n * 2" :labels="props.labels" />
  </div>
</template>
<style scoped>
.cells {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 1rem 0;
}
.cells button {
  min-width: 44px;
  min-height: 44px;
  border: 1px solid currentColor;
  border-radius: 6px;
  padding: 0.4rem;
  background: var(--vp-c-bg, #fff);
  color: inherit;
}
.cells button[aria-pressed="true"] {
  background: #16765d;
  color: white;
}
.cells button:focus-visible {
  outline: 3px solid #d39d12;
  outline-offset: 2px;
}
</style>
