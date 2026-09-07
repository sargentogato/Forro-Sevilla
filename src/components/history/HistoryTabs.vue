<script setup lang="ts">
import type { Component } from "vue";

interface HistoryTab {
  id: string;
  name: string;
  icon: Component;
}

defineProps<{
  tabs: HistoryTab[];
  modelValue: string;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();
</script>

<template>
  <nav class="history-tabs" aria-label="History sections">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      type="button"
      class="history-tabs__tab"
      :class="{ 'history-tabs__tab--active': modelValue === tab.id }"
      @click="emit('update:modelValue', tab.id)"
    >
      <component :is="tab.icon" :size="20" />
      <span>{{ tab.name }}</span>
    </button>
  </nav>
</template>

<style scoped>
.history-tabs {
  display: flex;
  background: var(--bg-surface);
  padding: 0.5rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-light);
  gap: 0.5rem;
  box-shadow: var(--shadow-sm);
}

.history-tabs__tab {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.25rem;
  border-radius: var(--radius-md);
  font-weight: 700;
  color: var(--gray-500);
  border: none;
  background: none;
  cursor: pointer;
  transition: var(--transition);
  white-space: nowrap;
}

.history-tabs__tab:hover {
  background: var(--gray-100);
  color: var(--forro-orange);
}

.history-tabs__tab--active {
  background: var(--forro-orange);
  color: white;
  box-shadow: var(--shadow-md);
}

@media (max-width: 768px) {
  .history-tabs {
    flex-direction: column;
  }
}
</style>
