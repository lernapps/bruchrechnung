<script setup lang="ts">
import { computed, ref } from "vue";
import { generate } from "./BruchModelle.ts";
import { fill, sector } from "./BruchMath.ts";
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
const wholes = computed(() => Math.max(1, Math.ceil(current.value.z / current.value.n)));
const total = computed(() => current.value.n * wholes.value);
const view = computed(() =>
  current.value.mode === "line"
    ? "line"
    : current.value.mode === "mixed"
      ? "strip"
      : (["circle", "strip", "set"][(props.seed - 1) % 3] ?? "circle"),
);
function toggle(i: number): void {
  selected.value = selected.value.includes(i) ? selected.value.filter((x) => x !== i) : [...selected.value, i];
  emit("answer", selected.value.length);
}
</script>
<template>
  <div>
    <p>{{ fill(task, { z: current.z, n: current.n }) }}</p>
    <template v-if="view === 'line'"
      ><p>
        <strong>{{ labels.line }}</strong>
      </p>
      <svg viewBox="0 0 320 85" role="img" :aria-label="labels.line">
        <line x1="14" y1="30" x2="306" y2="30" />
        <g v-for="i in current.n + 1" :key="i">
          <line :x1="14 + ((i - 1) * 292) / current.n" y1="24" :x2="14 + ((i - 1) * 292) / current.n" y2="36" />
          <text v-if="(i - 1) % current.n === 0" :x="14 + ((i - 1) * 292) / current.n" y="63" text-anchor="middle">
            {{ (i - 1) / current.n }}
          </text>
        </g>
        <circle :cx="14 + (position * 292) / current.n" cy="30" r="7" /></svg
      ><label
        >{{ cell
        }}<input
          v-model.number="position"
          type="range"
          min="0"
          :max="current.n"
          step="1"
          @input="emit('answer', position)" /></label
    ></template>
    <template v-else-if="view === 'circle'"
      ><p>
        <strong>{{ labels.circle }}</strong>
      </p>
      <svg v-for="whole in wholes" :key="whole" class="circle" viewBox="0 0 120 120" :aria-label="labels.circle">
        <path
          v-for="i in current.n"
          :key="i"
          :d="sector(i - 1, current.n)"
          role="button"
          tabindex="0"
          :aria-pressed="selected.includes((whole - 1) * current.n + i)"
          :aria-label="fill(cell, { i: (whole - 1) * current.n + i, n: current.n })"
          :class="{ on: selected.includes((whole - 1) * current.n + i) }"
          @click="toggle((whole - 1) * current.n + i)"
          @keydown.enter.prevent="toggle((whole - 1) * current.n + i)"
          @keydown.space.prevent="toggle((whole - 1) * current.n + i)"
        /></svg
    ></template>
    <template v-else
      ><p>
        <strong>{{ view === "strip" ? labels.strip : labels.set }}</strong>
      </p>
      <div
        :class="view === 'strip' ? 'strip' : 'objects'"
        :style="view === 'strip' ? { gridTemplateColumns: `repeat(${current.n},1fr)` } : {}"
      >
        <button
          v-for="i in total"
          :key="i"
          type="button"
          :aria-pressed="selected.includes(i)"
          :aria-label="fill(cell, { i, n: current.n })"
          @click="toggle(i)"
        >
          {{ selected.includes(i) ? "✓" : "○" }}
        </button>
      </div></template
    >
    <p v-if="checked" aria-live="polite">{{ fill(counter, { z: count, n: current.n }) }}</p>
  </div>
</template>
<style scoped>
svg {
  width: 100%;
  max-width: 30rem;
  overflow: visible;
}
.circle {
  width: 240px;
  max-width: 100%;
  display: block;
  margin: 1rem auto;
}
path {
  fill: var(--vp-c-bg, #fff);
  stroke: currentColor;
  stroke-width: 1;
  cursor: pointer;
}
path.on {
  fill: #16765d;
}
path:focus-visible {
  stroke: #d39d12;
  stroke-width: 3;
  outline: none;
}
line {
  stroke: currentColor;
  stroke-width: 1.5;
}
text {
  fill: currentColor;
  font-size: 16px;
}
circle {
  fill: #16765d;
}
.strip {
  display: grid;
  gap: 0;
  max-width: 30rem;
}
.objects {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.strip button,
.objects button {
  min-width: 24px;
  min-height: 44px;
  border: 1px solid currentColor;
  background: var(--vp-c-bg, #fff);
  color: inherit;
}
.objects button {
  border-radius: 50%;
  width: 44px;
}
.strip button[aria-pressed="true"],
.objects button[aria-pressed="true"] {
  background: #16765d;
  color: white;
}
button:focus-visible {
  outline: 3px solid #d39d12;
  outline-offset: 2px;
}
label {
  display: block;
}
input {
  display: block;
  width: 100%;
  min-height: 44px;
}
</style>
