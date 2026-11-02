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
  labels: { circle: string; strip: string; line: string; set: string; whole: string; selected: string };
}>();
const emit = defineEmits<{ answer: [string] }>();
const taskNow = computed(() => generate(props.seed, props));
const input = ref("");
const marked = ref<number[]>([]);
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
    <template v-if="kind !== 'whole'"
      ><div class="cells">
        <button
          v-for="i in taskNow.G"
          :key="i"
          type="button"
          :aria-label="`${pieceLabel} ${i}`"
          :aria-pressed="marked.includes(i)"
          @click="toggle(i)"
        >
          {{ marked.includes(i) ? "●" : "○" }}
        </button>
      </div></template
    ><template v-else
      ><div class="strip" role="img" :aria-label="`${givenLabel}: ${taskNow.z}/${taskNow.n}`">
        <span v-for="i in taskNow.n" :key="i" :class="{ on: i <= taskNow.z }">{{ i <= taskNow.z ? "" : "?" }}</span>
      </div></template
    >
    <div class="tools">
      <p>{{ toolLabel }}</p>
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

.tools {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid var(--page-border);
  border-radius: 8px;
}
.tools label {
  display: grid;
  gap: 0.5rem;
  justify-items: start;
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
  background: var(--page-background);
  color: inherit;
  border-radius: 4px;
}
.cells button[aria-pressed="true"],
.signs button[aria-pressed="true"] {
  background-color: #16765d;
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
  background: var(--page-background);
  color: inherit;
}
.matrix button.given {
  background: #d9eee4;
  color: #20332e;
}
.matrix button[aria-pressed="true"] {
  background-color: #16765d;
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
  background-image:
    repeating-linear-gradient(45deg, transparent 0 7px, rgb(255 255 255 / 0.24) 7px 8px),
    repeating-linear-gradient(135deg, transparent 0 7px, rgb(255 255 255 / 0.24) 7px 8px);
  background-color: #16765d;
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
  outline: 3px solid var(--page-text);
  outline-offset: 2px;
}
</style>
