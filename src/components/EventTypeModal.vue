<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import type { EventTypeData } from "../data/event-types";

const { t } = useI18n();

const props = defineProps<{
  visible: boolean;
  typeData: EventTypeData | null;
}>();
const emit = defineEmits<{
  (event: "close"): void;
}>();

const typeImage = computed(() => props.typeData?.image || "");

function closeModal() {
  emit("close");
}
</script>

<template>
  <div
    v-if="visible && typeData"
    class="event-type-modal"
    role="dialog"
    aria-modal="true"
  >
    <div class="event-type-modal__overlay" @click="closeModal"></div>
    <div class="event-type-modal__dialog">
      <button
        type="button"
        class="event-type-modal__close"
        @click="closeModal"
        aria-label="Cerrar modal"
      >
        ×
      </button>
      <div class="event-type-modal__header">
        <div class="event-type-modal__meta">
          <span class="event-type-modal__status">{{
            typeData.status === "activo" ? t('events.modal_status_active') : t('events.modal_status_inactive')
          }}</span>
          <h2 class="event-type-modal__title">{{ t(typeData.title) }}</h2>
          <p class="event-type-modal__subtitle">{{ t(typeData.subtitle) }}</p>
        </div>
        <img
          v-if="typeImage"
          :src="typeImage"
          :alt="typeData.title"
          class="event-type-modal__image"
        />
      </div>

      <div class="event-type-modal__content">
        <p class="event-type-modal__description">{{ t(typeData.description) }}</p>

        <div class="event-type-modal__details">
          <div class="event-type-modal__detail-item" v-if="typeData.when">
            <span class="event-type-modal__detail-label">{{ t('events.modal_when') }}</span>
            <p>{{ t(typeData.when) }}</p>
          </div>
          <div class="event-type-modal__detail-item" v-if="typeData.where">
            <span class="event-type-modal__detail-label">{{ t('events.modal_where') }}</span>
            <p>{{ t(typeData.where) }}</p>
          </div>
        </div>

        <ul
          class="event-type-modal__highlights"
          v-if="typeData.highlights?.length"
        >
          <li v-for="(item, index) in typeData.highlights" :key="index">
            {{ t(item) }}
          </li>
        </ul>

        <a
          v-if="typeData.instagram"
          :href="typeData.instagram"
          target="_blank"
          rel="noopener noreferrer"
          class="event-type-modal__link"
          >{{ t('events.modal_link') }}</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-type-modal {
  position: fixed;
  inset: 0;
  z-index: 110;
  display: grid;
  place-items: center;
  padding: 1.5rem;
}

.event-type-modal__overlay {
  position: absolute;
  inset: 0;
  background: rgba(12, 12, 12, 0.55);
  backdrop-filter: blur(4px);
}

.event-type-modal__dialog {
  position: relative;
  width: min(900px, 100%);
  max-height: min(95vh, 100%);
  overflow-y: auto;
  padding: 2rem;
  border-radius: 2rem;
  background: white;
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.2);
}

.event-type-modal__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  background: #f4f1ee;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c2c2c;
  cursor: pointer;
}

.event-type-modal__header {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.event-type-modal__meta {
  display: grid;
  gap: 0.75rem;
}

.event-type-modal__status {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  background: #f0efe7;
  color: #5d4b3b;
  font-size: 0.9rem;
  font-weight: 700;
  width: fit-content;
}

.event-type-modal__title {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-family: var(--font-serif);
  color: var(--dark);
}

.event-type-modal__subtitle {
  margin: 0;
  color: var(--gray-600);
  line-height: 1.7;
}

.event-type-modal__image {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 1.5rem;
}

.event-type-modal__content {
  display: grid;
  gap: 1.25rem;
}

.event-type-modal__description {
  margin: 0;
  color: var(--gray-700);
  line-height: 1.8;
}

.event-type-modal__details {
  display: grid;
  gap: 1rem;
}

.event-type-modal__detail-item {
  padding: 1rem;
  border-radius: var(--radius-lg);
  background: #f9f6f0;
}

.event-type-modal__detail-label {
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--forro-orange);
}

.event-type-modal__highlights {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.75rem;
}

.event-type-modal__highlights li {
  padding: 1rem 1.2rem;
  border-radius: var(--radius-md);
  background: #fff7ed;
  color: var(--dark);
}

.event-type-modal__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.95rem 1.25rem;
  border-radius: 999px;
  background: var(--forro-orange);
  color: white;
  font-weight: 700;
  text-decoration: none;
}

@media (min-width: 720px) {
  .event-type-modal__header {
    grid-template-columns: 1fr 380px;
  }
}
</style>
