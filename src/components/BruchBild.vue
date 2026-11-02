<script setup lang="ts">
import { computed } from "vue";
import { sector } from "./BruchMath.ts";
const props = defineProps<{
  z: number;
  n: number;
  total?: number;
  view?: string;
  labels: { circle: string; strip: string; line: string; set: string; whole: string; selected: string };
}>();
const wholes = computed(() => Math.max(1, Math.ceil(props.z / props.n)));
const objects = computed(() => props.total ?? props.n);
</script>
<template>
  <div class="models">
    <div v-if="!view || view.includes('circle')" class="model">
      <strong>{{ labels.circle }}</strong>
      <div class="circles">
        <svg
          v-for="whole in wholes"
          :key="whole"
          viewBox="0 0 120 120"
          role="img"
          :aria-label="`${labels.selected}: ${Math.min(n, Math.max(0, z - (whole - 1) * n))}/${n}`"
        >
          <path v-for="i in n" :key="i" :d="sector(i - 1, n)" :class="{ on: (whole - 1) * n + i <= z }" />
        </svg>
      </div>
      <span>{{ labels.whole }}: 1</span>
    </div>
    <div v-if="!view || view.includes('strip')" class="model">
      <strong>{{ labels.strip }}</strong>
      <div
        v-for="whole in wholes"
        :key="whole"
        class="strip"
        role="img"
        :aria-label="`${labels.selected}: ${Math.min(n, Math.max(0, z - (whole - 1) * n))}/${n}`"
        :style="{ gridTemplateColumns: `repeat(${n},1fr)` }"
      >
        <span v-for="i in n" :key="i" :class="{ on: (whole - 1) * n + i <= z }" aria-hidden="true"></span>
      </div>
      <span>{{ labels.selected }}: {{ z }}/{{ n }}</span>
    </div>
    <div v-if="!view || view.includes('line')" class="model">
      <strong>{{ labels.line }}</strong
      ><svg viewBox="0 0 300 76" role="img" :aria-label="`${labels.line}: ${z}/${n}`">
        <line x1="12" y1="26" x2="288" y2="26" />
        <g v-for="i in wholes * n + 1" :key="i">
          <line :x1="12 + ((i - 1) * 276) / (wholes * n)" y1="20" :x2="12 + ((i - 1) * 276) / (wholes * n)" y2="32" />
          <text v-if="(i - 1) % n === 0" :x="12 + ((i - 1) * 276) / (wholes * n)" y="56" text-anchor="middle">
            {{ (i - 1) / n }}
          </text>
        </g>
        <circle :cx="12 + (z * 276) / (wholes * n)" cy="26" r="6" /></svg
      ><span>{{ labels.selected }}: {{ z }}/{{ n }}</span>
    </div>
    <div v-if="(!view || view.includes('set')) && z <= n && (objects * z) % n === 0" class="model">
      <strong>{{ labels.set }}</strong>
      <div class="objects">
        <span v-for="i in objects" :key="i" :class="{ on: i <= (objects * z) / n }">{{
          i <= (objects * z) / n ? "●" : "○"
        }}</span>
      </div>
      <span>{{ labels.whole }}: {{ objects }}</span>
    </div>
  </div>
</template>
<style scoped>
.models {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
  gap: 1rem;
}
.model {
  border: 1px solid var(--page-border);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  min-width: 0;
}
.circles {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}
.circles svg {
  width: 100px;
  height: 100px;
}
svg {
  width: 100%;
  overflow: visible;
}
path {
  fill: var(--page-background);
  stroke: currentColor;
  stroke-width: 1.5;
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
  fill: #238b68;
  stroke: currentColor;
}
.strip {
  display: grid;
  min-height: 2rem;
}
.strip .on {
  background-image:
    repeating-linear-gradient(45deg, transparent 0 7px, rgb(255 255 255 / 0.24) 7px 8px),
    repeating-linear-gradient(135deg, transparent 0 7px, rgb(255 255 255 / 0.24) 7px 8px);
}
.strip span {
  border: 1px solid currentColor;
  text-align: center;
}
.on {
  background: #16765d;
  color: white;
  fill: #16765d;
}
.objects {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.objects span {
  font-size: 1.4rem;
  padding: 0.15rem;
  border-radius: 50%;
}
</style>
