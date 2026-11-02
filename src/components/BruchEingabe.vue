<script setup lang="ts">
import { computed } from "vue";
import { parse } from "./BruchMath.ts";
const props = defineProps<{ value: string; label: string }>();
const fraction = computed(() => (props.value.includes("/") ? parse(props.value) : undefined));
</script>
<template>
  <p v-if="fraction" class="fraction-preview" aria-live="polite">
    {{ label }}:
    <component is="math">
      <component is="mfrac">
        <component is="mn">{{ fraction.z }}</component>
        <component is="mn">{{ fraction.n }}</component>
      </component>
    </component>
  </p>
</template>
<style scoped>
.fraction-preview {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  min-height: 2.5rem;
}
math {
  font-size: 1.5em;
}
</style>
