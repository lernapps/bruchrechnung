<script setup lang="ts">
import { computed, ref } from "vue";
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
    <div v-for="(strip, index) in givenStrips" :key="index" class="strip">
      <span v-for="i in strip.n" :key="i" :class="{ on: i <= strip.z }">{{ i <= strip.z ? "✓" : "·" }}</span>
    </div>
    <div class="tools">
      <p>{{ toolLabel }}</p>
      <template v-if="kind === 'multiply'"
        ><div class="matrix" :style="{ gridTemplateColumns: `repeat(${taskNow.n},1fr)` }">
          <button
            v-for="i in taskNow.n * taskNow.d"
            :key="i"
            type="button"
            :class="{ given: (i - 1) % taskNow.n < taskNow.z }"
            :aria-label="`${pieceLabel} ${i}`"
            :aria-pressed="marked.includes(i)"
            @click="toggle(i)"
          >
            {{ marked.includes(i) ? "✓" : "·" }}
          </button>
        </div></template
      >
      <template v-else-if="kind === 'divide'"
        ><div class="pieces">
          <button type="button" :aria-label="`${pieceLabel} −`" @click="pieces = Math.max(0, pieces - 1)">−</button
          ><span>{{ pieceLabel }}: {{ pieces }}</span
          ><button type="button" :aria-label="`${pieceLabel} +`" @click="pieces += 1">+</button>
        </div>
        <div class="strip">
          <span v-for="i in taskNow.d" :key="i" :class="{ on: i <= pieces }">{{ i <= pieces ? "✓" : "·" }}</span>
        </div></template
      >
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
      <p aria-live="polite">{{ ownLabel }}: {{ input }}</p>
    </div>
  </div>
</template>
<style scoped>
.tools {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid var(--vp-c-divider, #777);
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
  background: var(--vp-c-bg, #fff);
}
.pieces button {
  min-width: 44px;
  min-height: 44px;
  border: 1px solid currentColor;
  background: var(--vp-c-bg, #fff);
  color: inherit;
  border-radius: 4px;
}
.matrix {
  display: grid;
  gap: 2px;
  max-width: 25rem;
  margin: 0.75rem 0;
}
.matrix button {
  min-width: 24px;
  min-height: 32px;
  border: 1px solid currentColor;
  background: var(--vp-c-bg, #fff);
  color: inherit;
}
.matrix button.given {
  background: #d9eee4;
  color: #20332e;
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
  outline: 3px solid #d39d12;
  outline-offset: 2px;
}
</style>
