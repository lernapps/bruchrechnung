<script setup lang="ts">
import { ref, computed } from "vue";
import BruchBild from "./BruchBild.vue";
const props = defineProps<{
  numerator: string;
  denominator: string;
  note: string;
  labels: { circle: string; strip: string; line: string; set: string; whole: string; selected: string };
}>();
const z = ref(3);
const n = ref(4);
const total = computed(() => n.value * 2);
</script>
<template>
  <div class="explore">
    <p>{{ note }}</p>
    <label>{{ numerator }}: {{ z }} <input v-model.number="z" type="range" min="0" :max="n * 3" /></label
    ><label
      >{{ denominator }}: {{ n }}
      <input v-model.number="n" type="range" min="1" max="12" @input="z = Math.min(z, n * 3)"
    /></label>
    <p>
      <strong>{{ Math.min(z, n * 3) }}/{{ n }}</strong>
    </p>
    <BruchBild :z="Math.min(z, n * 3)" :n="n" :total="total" :labels="props.labels" />
  </div>
</template>
<style scoped>
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
