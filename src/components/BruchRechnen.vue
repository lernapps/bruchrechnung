<script setup lang="ts">
import { computed, ref } from "vue";
import BruchEingabe from "./BruchEingabe.vue";
import { generate, params } from "./BruchAufgaben.ts";
import { fill } from "./BruchMath.ts";
const props = defineProps<{
  kind: string;
  task: string;
  mistakes: string[];
  seed: number;
  checked: boolean;
  inputLabel: string;
  givenLabel: string;
  ownLabel: string;
  toolLabel: string;
  pieceLabel: string;
  stepLabel: string;
  columnLabel?: string;
  rowLabel?: string;
  cellLabel?: string;
  totalLabel?: string;
  markedLabel?: string;
  labels: { circle: string; strip: string; line: string; set: string; whole: string; selected: string };
}>();
const emit = defineEmits<{ answer: [string] }>();
const taskNow = computed(() => generate(props.seed, props));
const givenStrips = computed(() => [
  { n: taskNow.value.n, z: taskNow.value.z },
  { n: taskNow.value.d, z: taskNow.value.b },
]);
const input = ref("");
const split = ref(taskNow.value.n);
const marked = ref<number[]>([]);
const pieces = ref(0);
function update(value: string): void {
  input.value = value;
  emit("answer", value);
}
function toggle(i: number): void {
  marked.value = marked.value.includes(i) ? marked.value.filter((x) => x !== i) : [...marked.value, i];
}
</script>
<template>
  <div>
    <p>{{ fill(task, params(taskNow)) }}</p>
    <p>{{ givenLabel }}</p>
    <template v-for="(strip, index) in givenStrips" :key="index">
      <p
        v-if="kind === 'multiply'"
        class="factor-caption"
        :class="index === 0 ? 'column-caption-color' : 'row-caption-color'"
      >
        {{ fill((index === 0 ? columnLabel : rowLabel) ?? "", params(taskNow)) }}
      </p>
      <div
        class="strip"
        :class="{
          'column-factor': kind === 'multiply' && index === 0,
          'row-factor': kind === 'multiply' && index === 1,
        }"
      >
        <span v-for="i in strip.n" :key="i" :class="{ on: i <= strip.z }">{{
          i <= strip.z ? (kind === "multiply" ? (index === 0 ? "│" : "─") : "✓") : "·"
        }}</span>
      </div>
    </template>
    <div class="tools">
      <p>{{ toolLabel }}</p>
      <template v-if="kind === 'multiply'">
        <div class="product-model">
          <p class="column-caption">{{ fill(columnLabel ?? "", params(taskNow)) }}</p>
          <p class="row-caption">{{ fill(rowLabel ?? "", params(taskNow)) }}</p>
          <div class="matrix" :style="{ gridTemplateColumns: `28px repeat(${taskNow.n}, minmax(0, 1fr))` }">
            <span aria-hidden="true"></span>
            <span
              v-for="column in taskNow.n"
              :key="`column-${column}`"
              class="column-part"
              :class="{ active: column <= taskNow.z }"
              aria-hidden="true"
            >
              {{ column <= taskNow.z ? "│" : "·" }}
            </span>
            <template v-for="row in taskNow.d" :key="row">
              <span class="row-part" :class="{ active: row <= taskNow.b }" aria-hidden="true">{{
                row <= taskNow.b ? "─" : "·"
              }}</span>
              <button
                v-for="column in taskNow.n"
                :key="column"
                type="button"
                :aria-label="fill(cellLabel ?? pieceLabel, { row, column })"
                :aria-pressed="marked.includes((row - 1) * taskNow.n + column)"
                @click="toggle((row - 1) * taskNow.n + column)"
              >
                {{ marked.includes((row - 1) * taskNow.n + column) ? "✓" : "·" }}
              </button>
            </template>
          </div>
        </div>
        <p class="area-count" aria-live="polite">
          {{ totalLabel }}: {{ taskNow.n * taskNow.d }} · {{ markedLabel }}: {{ marked.length }}
        </p>
      </template>
      <template v-else-if="kind === 'divide'"
        ><div class="pieces">
          <button type="button" :aria-label="`${pieceLabel} −`" @click="pieces = Math.max(0, pieces - 1)">−</button
          ><span>{{ pieceLabel }}: {{ pieces }}</span
          ><button type="button" :aria-label="`${pieceLabel} +`" @click="pieces = Math.min(taskNow.d, pieces + 1)">
            +
          </button>
        </div>
        <div class="strip">
          <span v-for="i in taskNow.d" :key="i" :class="{ on: i <= pieces }">{{ i <= pieces ? "✓" : "·" }}</span>
          <span
            class="fit-boundary"
            :style="{ left: `${(taskNow.z / taskNow.n) * 100}%` }"
            aria-hidden="true"
          ></span></div
      ></template>
      <template v-else
        ><label>{{ stepLabel }}: {{ split }}<input v-model.number="split" type="range" min="2" max="24" /></label>
        <div v-for="(strip, index) in givenStrips" :key="index" class="strip">
          <span v-for="i in strip.n" :key="i" :class="{ on: i <= strip.z }">{{ i <= strip.z ? "✓" : "·" }}</span>
          <svg
            v-if="kind === 'add' || kind === 'subtract'"
            class="partition-guides"
            viewBox="0 0 1000 40"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <g v-for="i in split - 1" :key="i">
              <line :x1="(i * 1000) / split" y1="0" :x2="(i * 1000) / split" y2="40" class="guide-halo" />
              <line :x1="(i * 1000) / split" y1="0" :x2="(i * 1000) / split" y2="40" class="guide" />
            </g>
          </svg>
        </div>
      </template>
      <label
        >{{ inputLabel
        }}<input :value="input" inputmode="text" @input="update(($event.target as HTMLInputElement).value)"
      /></label>
      <BruchEingabe :value="input" :label="ownLabel" />
    </div>
  </div>
</template>
<style scoped>
button,
input {
  font: inherit;
}

input[type="range"] {
  accent-color: var(--page-accent);
}

.tools {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid var(--page-border);
  border-radius: 8px;
}
.tools label {
  display: block;
  margin: 0.6rem 0;
}
.tools input {
  max-width: 100%;
  min-height: 44px;
  padding: 0.4rem;
  border: 1px solid currentColor;
  border-radius: 4px;
  color: inherit;
  background: var(--page-background);
}
.pieces button {
  min-width: 44px;
  min-height: 44px;
  border: 1px solid currentColor;
  background: var(--page-background);
  color: inherit;
  border-radius: 4px;
}
.matrix {
  display: grid;
  gap: 2px;
  min-width: 0;
  margin: 0;
}
.matrix button {
  min-width: 0;
  min-height: 44px;
  border: 1px solid currentColor;
  background: var(--page-background);
  color: inherit;
}
.product-model {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.4rem;
  max-width: 28rem;
  margin: 0.75rem 0;
}
.column-caption {
  grid-column: 2;
  margin: 0 0 0 28px;
  text-align: center;
}
.row-caption {
  grid-row: 2;
  margin: 0;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-align: center;
}
.column-part,
.row-part {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid currentColor;
  min-height: 28px;
}
.column-part.active {
  background: #1b5c9e;
  color: white;
}
.row-part.active {
  background: #f6ce78;
  color: #322508;
}
.matrix button[aria-pressed="true"] {
  background: #16765d;
  color: white;
}
.strip {
  position: relative;
  display: flex;
  min-height: 40px;
  margin: 0.5rem 0;
}
.strip span {
  flex: 1;
  border: 1px solid currentColor;
  text-align: center;
}
.strip .fit-boundary {
  position: absolute;
  top: -5px;
  bottom: -5px;
  width: 0;
  border: 0;
  border-left: 3px dashed #174d83;
  box-shadow: -2px 0 white;
  pointer-events: none;
}
.partition-guides {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.partition-guides line {
  vector-effect: non-scaling-stroke;
  stroke-dasharray: 4 4;
}
.guide-halo {
  stroke: white;
  stroke-width: 4px;
}
.guide {
  stroke: #17212b;
  stroke-width: 2px;
}
.factor-caption {
  margin-bottom: 0;
  font-weight: 600;
}
.column-caption-color {
  text-decoration: underline #1b5c9e 3px;
  text-underline-offset: 4px;
}
.row-caption-color {
  text-decoration: underline #c88b1c 3px;
  text-underline-offset: 4px;
}
.strip.column-factor .on {
  background: #1b5c9e;
  color: white;
}
.strip.row-factor .on {
  background: #f6ce78;
  color: #322508;
}
.area-count {
  font-weight: 600;
}
.strip .on {
  background: #16765d;
  color: white;
}
.pieces {
  display: flex;
  gap: 0.7rem;
  align-items: center;
  flex-wrap: wrap;
}
button:focus-visible,
input:focus-visible {
  outline: 3px solid var(--page-text);
  outline-offset: 2px;
}
</style>
