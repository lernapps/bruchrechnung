<script setup lang="ts">
import { computed, ref } from "vue";
import { grouping, fitsPartition } from "./TeilerVielfacheEntdecken.ts";
import { fill } from "./BruchMath.ts";
defineOptions({ nojs: "caption" });
const props = defineProps<{
  mode: string;
  instruction: string;
  controlLabel: string;
  imageLabel: string;
  rowLabel: string;
  groupStatus: string;
  fitsLabel: string;
  missesLabel: string;
}>();
const value = ref(5);
const rows = computed(() => (props.mode === "groups" ? [12, 18] : [4, 6]));
</script>
<template>
  <div class="partition-lab">
    <p>{{ instruction }}</p>
    <label
      >{{ controlLabel }}: {{ value
      }}<input v-model.number="value" type="range" min="1" :max="mode === 'groups' ? 12 : 24"
    /></label>
    <div v-for="n in rows" :key="n" class="partition-row">
      <p>{{ fill(rowLabel, { n }) }}</p>
      <svg viewBox="0 0 400 48" role="img" :aria-label="fill(imageLabel, { n, value })">
        <template v-if="mode === 'groups'">
          <rect
            v-for="i in n"
            :key="i"
            :x="16 + (i - 1) * 20"
            y="8"
            width="20"
            height="32"
            class="unit"
            :class="{ remainder: i > grouping(n, value).groups * value }"
          />
          <rect
            v-for="i in grouping(n, value).groups"
            :key="`group-${i}`"
            :x="16 + (i - 1) * value * 20"
            y="6"
            :width="value * 20"
            height="36"
            class="group-outline"
          />
        </template>
        <template v-else>
          <rect x="16" y="8" width="360" height="32" class="unit" />
          <line
            v-for="i in n - 1"
            :key="`original-${i}`"
            :x1="16 + (i * 360) / n"
            y1="8"
            :x2="16 + (i * 360) / n"
            y2="40"
            class="original"
          />
          <line
            v-for="i in value - 1"
            :key="`new-${i}`"
            :x1="16 + (i * 360) / value"
            y1="4"
            :x2="16 + (i * 360) / value"
            y2="44"
            class="new-partition"
          />
        </template>
      </svg>
      <p aria-live="polite">
        {{
          mode === "groups"
            ? fill(groupStatus, { n, size: value, groups: grouping(n, value).groups, rest: grouping(n, value).rest })
            : fill(fitsPartition(n, value) ? fitsLabel : missesLabel, { n, value })
        }}
      </p>
    </div>
  </div>
</template>
<style scoped>
.partition-lab {
  border: 1px solid var(--page-border);
  border-radius: 0.375rem;
  padding: 1rem;
}
label {
  display: block;
}
input {
  display: block;
  width: 100%;
  min-height: 44px;
  accent-color: var(--page-accent);
}
svg {
  display: block;
  width: 100%;
}
.unit {
  fill: var(--page-surface);
  stroke: var(--page-text);
  stroke-width: 1;
}
.remainder {
  fill: var(--page-wrong-background);
  stroke: var(--page-wrong);
}
.group-outline {
  fill: none;
  stroke: var(--page-accent);
  stroke-width: 3;
  stroke-dasharray: 5 3;
}
.original {
  stroke: var(--page-text);
  stroke-width: 2;
}
.new-partition {
  stroke: var(--page-accent);
  stroke-width: 2;
  stroke-dasharray: 4 3;
}
</style>
