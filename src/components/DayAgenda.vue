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
  <div class="day-agenda animate-fade">
    <div class="day-header flex-center gap-4">
      <div class="h-line"></div>
      <h3
        class="day-title text-upper"
        :style="{ backgroundColor: props.color }"
      >
        {{ props.day }}
      </h3>
      <div class="h-line"></div>
    </div>
    <div class="agenda-items">
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

.day-header {
  margin-bottom: 24px;
}

.h-line {
  height: 1px;
  flex: 1;
  background: var(--gray-200);
}

.day-title {
  padding: 8px 24px;
  border-radius: var(--radius-sm);
  color: white;
  font-weight: 800;
  font-size: 1.25rem;
}

.agenda-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
