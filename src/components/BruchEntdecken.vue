<script setup lang="ts">
import { ref, computed } from "vue";
import BruchBild from "./BruchBild.vue";
const props = defineProps<{
  stage?: string;
  numerator: string;
  denominator: string;
  note: string;
  labels: { circle: string; strip: string; line: string; set: string; whole: string; selected: string };
}>();
defineOptions({ nojs: "caption" });
const z = ref(props.stage === "mixed" ? 5 : 3);
const n = ref(4);
const total = computed(() => n.value * 2);
</script>
<template>
  <div class="explore">
    <p>{{ note }}</p>
    <label
      >{{ numerator }}: {{ z }}
      <input v-model.number="z" type="range" min="0" :max="stage === 'mixed' ? n * 3 : n" /></label
    ><label
      >{{ denominator }}: {{ n }}
      <input v-model.number="n" type="range" min="1" max="12" @input="z = Math.min(z, stage === 'mixed' ? n * 3 : n)"
    /></label>
    <p>
      <strong>{{ Math.min(z, stage === "mixed" ? n * 3 : n) }}/{{ n }}</strong>
    </p>
    <BruchBild
      :view="stage === 'mixed' ? 'strip' : stage === 'line' ? 'line' : 'circle,strip,set'"
      :z="Math.min(z, stage === 'mixed' ? n * 3 : n)"
      :n="n"
      :total="total"
      :labels="props.labels"
    />
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

label {
  display: block;
  margin: 1rem 0;
}
input {
  display: block;
  width: 100%;
  max-width: 30rem;
}
</style>
