<script setup lang="ts">
defineOptions({ nojs: "caption" });
import { ref, computed } from "vue";
import { count, WHOLE, GROUPS } from "./BruchteilEntdecken.ts";
import { fill } from "./BruchMath.ts";
const props = defineProps<{
  start: string;
  splitLabel: string;
  groupLabel: string;
  selectLabel: string;
  resultLabel: string;
  resetLabel: string;
}>();
const divided = ref(false);
const selected = ref<number[]>([]);
const result = computed(() => count(selected.value));
function toggle(i: number): void {
  selected.value = selected.value.includes(i) ? selected.value.filter((x) => x !== i) : [...selected.value, i];
}
</script>
<template>
  <div class="part-lab">
    <p>{{ start }}</p>
    <template v-if="!divided"
      ><div class="loose" aria-hidden="true"><span v-for="i in WHOLE" :key="i">●</span></div>
      <button type="button" @click="divided = true">{{ splitLabel }}</button></template
    ><template v-else
      ><p>{{ selectLabel }}</p>
      <div class="groups">
        <button
          v-for="i in GROUPS"
          :key="i"
          type="button"
          :aria-pressed="selected.includes(i)"
          :aria-label="fill(groupLabel, { i })"
          @click="toggle(i)"
        >
          <span>{{ fill(groupLabel, { i }) }}</span
          ><span class="dots" aria-hidden="true">● ● ●</span><span v-if="selected.includes(i)">✓</span>
        </button>
      </div>
      <p v-if="selected.length" aria-live="polite">
        {{ fill(resultLabel, { groups: selected.length, part: result }) }}
      </p>
      <button
        type="button"
        @click="
          divided = false;
          selected = [];
        "
      >
        {{ resetLabel }}
      </button></template
    >
  </div>
</template>
<style scoped>
.part-lab {
  border: 1px solid var(--vp-c-divider, #777);
  border-radius: 8px;
  padding: 1rem;
}
.loose {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 1rem 0;
}
.groups {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
  margin: 1rem 0;
}
.groups button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.part-lab button {
  min-height: 44px;
  padding: 0.6rem;
  border: 1px solid currentColor;
  border-radius: 6px;
  background: var(--vp-c-bg, #fff);
  color: inherit;
}
.groups button[aria-pressed="true"] {
  background: #16765d;
  color: white;
}
.dots {
  font-size: 1.3rem;
  white-space: nowrap;
}
button:focus-visible {
  outline: 3px solid #d39d12;
  outline-offset: 2px;
}
</style>
