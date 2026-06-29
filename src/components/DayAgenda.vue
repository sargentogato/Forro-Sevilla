<script setup lang="ts">
import AgendaItem from "./AgendaItem.vue";

interface DayAgendaProps {
  day: string;
  color: string;
  events: any[];
}

const props = defineProps<DayAgendaProps>();
</script>

<template>
  <div class="day-agenda">
    <div class="day-agenda__header">
      <div class="day-agenda__line"></div>
      <h3 class="day-agenda__title" :style="{ backgroundColor: props.color }">
        {{ props.day }}
      </h3>
      <div class="day-agenda__line"></div>
    </div>
    <div class="day-agenda__items">
      <AgendaItem
        v-for="(event, idx) in props.events"
        :key="idx"
        v-bind="event"
        :color="props.color"
      />
    </div>
  </div>
</template>

<style scoped>
.day-agenda {
  margin-bottom: 48px;
}

.day-agenda__header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.day-agenda__line {
  height: 1px;
  flex: 1 1 auto;
  min-width: 0;
  background: var(--gray-200);
}

.day-agenda__title {
  padding: 0.5rem 1.5rem;
  border-radius: var(--radius-sm);
  color: white;
  font-weight: 800;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-align: center;
  white-space: nowrap;
}

.day-agenda__items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (max-width: 640px) {
  .day-agenda__header {
    flex-wrap: wrap;
    justify-content: center;
  }

  .day-agenda__line {
    display: none;
  }

  .day-agenda__title {
    width: 100%;
  }
}
</style>
