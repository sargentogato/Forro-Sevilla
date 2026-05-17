<script setup lang="ts">
import { ChevronDown, Clock, MapPin } from "lucide-vue-next";
import { ref } from "vue";

interface AgendaItemProps {
  time: string;
  title: string;
  location: string;
  details?: string;
  color?: string;
}

const props = withDefaults(defineProps<AgendaItemProps>(), {
  color: "#F27D26",
});

const isOpen = ref(false);
</script>

<template>
  <div
    class="agenda-item calendar-shadow"
    :style="{ borderLeftColor: props.color }"
  >
    <button @click="isOpen = !isOpen" class="item-trigger">
      <div class="item-content">
        <div class="item-meta">
          <Clock :size="14" />
          {{ props.time }}
        </div>
        <h4 class="serif">{{ props.title }}</h4>
        <div class="item-location">
          <MapPin :size="14" />
          {{ props.location }}
        </div>
      </div>
      <div class="chevron-wrapper" :class="{ 'is-open': isOpen }">
        <ChevronDown :size="24" />
      </div>
    </button>

    <transition name="expand">
      <div v-if="isOpen && props.details" class="item-details">
        <div class="details-inner">
          <p>{{ props.details }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.agenda-item {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border-left: 8px solid;
  transition: var(--transition);
  border: 1px solid var(--gray-100);
}

.agenda-item:hover {
  transform: scale(1.01);
  box-shadow: var(--shadow-md);
  background: #fafafa;
}

.item-trigger {
  width: 100%;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  border: none;
  background: none;
  cursor: pointer;
}

.item-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--gray-400);
  margin-bottom: 8px;
}

.item-content h4 {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--dark);
  margin-bottom: 8px;
}

.item-location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--gray-500);
}

.chevron-wrapper {
  color: var(--gray-200);
  transition: var(--transition);
  background: var(--gray-50);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chevron-wrapper.is-open {
  transform: rotate(180deg);
  color: var(--forro-red);
}

.item-details {
  border-top: 1px solid var(--gray-100);
  overflow: hidden;
}

.details-inner {
  padding: 16px 24px 24px;
  color: var(--gray-700);
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Transition */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease-in-out;
  max-height: 200px;
}
.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
