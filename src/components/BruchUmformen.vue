<script setup lang="ts">
import { computed, ref } from "vue";
import { generate, params } from "./BruchAufgaben.ts";
import { fill, parse } from "./BruchMath.ts";
import BruchBild from "./BruchBild.vue";
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
const input = ref("");
const split = ref(6);
const marked = ref<number[]>([]);
const mine = computed(() => parse(input.value));
function update(value: string): void {
  input.value = value;
  emit("answer", value);
}
function toggle(i: number): void {
  marked.value = marked.value.includes(i) ? marked.value.filter((x) => x !== i) : [...marked.value, i];
}
function partition(): void {
  marked.value = [];
  update("");
}
</script>
<template>
  <div>
    <p>{{ fill(task, params(taskNow)) }}</p>
    <p>
      <strong>{{ givenLabel }}</strong>
    </p>
    <BruchBild view="strip" :z="taskNow.z" :n="taskNow.n" :labels="labels" />
    <template v-if="kind === 'compare'"
      ><BruchBild view="strip" :z="taskNow.b" :n="taskNow.d" :labels="labels" />
      <div class="signs">
        <button
          v-for="s in ['<', '=', '>']"
          :key="s"
          type="button"
          :aria-pressed="input === s"
          :aria-label="`${inputLabel}: ${s}`"
          @click="update(s)"
        >
          {{ s }}
        </button>
      </div></template
    >
    <div v-else class="tools">
      <p>{{ toolLabel }}</p>
      <label
        >{{ stepLabel }}: {{ split }}<input v-model.number="split" type="range" min="1" max="12" @input="partition"
      /></label>
      <div class="cells">
        <button
          v-for="i in split"
          :key="i"
          type="button"
          :aria-label="`${pieceLabel} ${i}/${split}`"
          :aria-pressed="marked.includes(i)"
          @click="toggle(i)"
        >
          {{ marked.includes(i) ? "✓" : "○" }}
        </button>
      </div>
      <label
        >{{ inputLabel
        }}<input :value="input" inputmode="text" @input="update(($event.target as HTMLInputElement).value)" /></label
      ><template v-if="mine && mine.n <= 24 && mine.z <= mine.n * 3"
        ><p>{{ ownLabel }}</p>
        <BruchBild view="strip" :z="mine.z" :n="mine.n" :labels="labels"
      /></template>
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
.cells {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin: 0.75rem 0;
}
.cells button,
.signs button,
.pieces button {
  min-width: 44px;
  min-height: 44px;
  border: 1px solid currentColor;
  background: var(--vp-c-bg, #fff);
  color: inherit;
  border-radius: 4px;
}
.cells button[aria-pressed="true"],
.signs button[aria-pressed="true"] {
  background: #16765d;
  color: white;
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
  display: flex;
  min-height: 40px;
  margin: 0.5rem 0;
}
.strip span {
  flex: 1;
  border: 1px solid currentColor;
  text-align: center;
}
.strip .on {
  background: #16765d;
  color: white;
}
.signs,
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
