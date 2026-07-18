<script setup lang="ts">
import DayAgenda from "./DayAgenda.vue";

defineProps<{
  title: string;
  schedule: any[];
}>();
</script>

<template>
  <section class="festival__agenda">
    <div class="festival__agenda-container">
      <div class="festival__section-header">
        <h2 class="festival__section-title">{{ title }}</h2>
        <div class="festival__section-line"></div>
      </div>
      <div class="festival__agenda-wrapper">
        <DayAgenda
          v-for="(day, idx) in schedule"
          :key="idx"
          v-bind="day"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.festival__agenda {
  padding: 96px 24px;
  background: white;
}

.festival__agenda-container {
  max-width: 1280px;
  margin: 0 auto;
}

.festival__section-header {
  margin-bottom: 64px;
  text-align: center;
}

.festival__section-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 24px;
  color: var(--dark);
  font-family: var(--font-serif);
  line-height: 1.2;
}

.festival__section-line {
  height: 6px;
  width: 100px;
  background: var(--forro-red);
  border-radius: 99px;
  margin: 16px auto 0;
}

.festival__agenda-wrapper {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  gap: 24px;
}

@media (max-width: 768px) {
  .festival__agenda {
    padding: 64px 16px;
  }

  .festival__section-header {
    margin-bottom: 48px;
  }
}
</style>
