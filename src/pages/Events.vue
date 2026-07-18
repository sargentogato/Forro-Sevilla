<script setup lang="ts">
import { Calendar, Instagram } from "lucide-vue-next";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import DayAgenda from "../components/DayAgenda.vue";
import EventTypeModal from "../components/EventTypeModal.vue";
import { eventTypeOptions, type EventTypeData } from "../data/event-types";
import eventsData from "../data/events.json";

const { t } = useI18n();
const selectedEventType = ref<EventTypeData | null>(null);
const isModalOpen = ref(false);

const hasIntroState = computed(
  () => eventsData.length === 1 && eventsData[0].id === "intro",
);

const typeIcons: Record<string, string> = {
  "social-parties": "✨",
  "open-air": "🌳",
  concerts: "🎷",
  collab: "🤝",
};

function cardStyleClass(id: string) {
  switch (id) {
    case "social-parties":
      return "events-page__type-card--orange";
    case "open-air":
      return "events-page__type-card--red";
    case "concerts":
      return "events-page__type-card--gold";
    case "collab":
      return "events-page__type-card--soft";
    default:
      return "";
  }
}

function openEventType(type: EventTypeData) {
  if (type.status !== "activo") {
    return;
  }

  selectedEventType.value = type;
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
  selectedEventType.value = null;
}
</script>

<template>
  <div class="events-page">
    <header class="events-page__hero">
      <div class="events-page__hero-content">
        <h1 class="events-page__title">{{ t("nav.events") }}</h1>
        <p class="events-page__quote">"{{ t("events.intro_title") }}"</p>
      </div>
    </header>

    <section class="events-page__content">
      <div class="events-page__inner">
        <div v-if="hasIntroState" class="events-page__empty-state">
          <Calendar :size="80" class="events-page__empty-icon" />
          <h2 class="events-page__empty-title">{{ t(eventsData[0].title) }}</h2>
          <p class="events-page__empty-description">
            {{ t(eventsData[0].description) }}
          </p>
          <a
            href="https://instagram.com/forrosevilla"
            target="_blank"
            rel="noopener noreferrer"
            class="events-page__cta"
          >
            <Instagram :size="18" />
            {{ t("home.follow_us") }}
          </a>
        </div>

        <div v-else class="events-page__agenda">
          <DayAgenda
            :day="t('events.upcoming')"
            color="var(--forro-orange)"
            :events="eventsData"
          />
        </div>

        <div class="events-page__types-card">
          <h3 class="events-page__types-title">
            {{ t("events.types_title") }}
          </h3>
          <div class="events-page__types-grid">
            <button
              v-for="type in eventTypeOptions"
              :key="type.id"
              type="button"
              class="events-page__type-card"
              :class="[
                cardStyleClass(type.id),
                {
                  'events-page__type-card--disabled': type.status !== 'activo',
                },
              ]"
              :disabled="type.status !== 'activo'"
              @click="openEventType(type)"
            >
              <span class="events-page__type-icon">{{
                typeIcons[type.id] ?? "❖"
              }}</span>
              <div>
                <span class="events-page__type-label">{{ t(type.title) }}</span>
                <p class="events-page__type-summary">{{ t(type.subtitle) }}</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>

    <EventTypeModal
      :visible="isModalOpen"
      :typeData="selectedEventType"
      @close="closeModal"
    />
  </div>
</template>

<style scoped>
.events-page {
  width: 100%;
}

.events-page__hero {
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 1.5rem 3rem;
  background: linear-gradient(135deg, var(--forro-earth), #7a4f2e);
  color: white;
}

.events-page__hero-content {
  max-width: 760px;
  width: 100%;
}

.events-page__title {
  margin: 0 0 1rem;
  font-size: clamp(2rem, 5vw, 3rem);
  font-family: var(--font-serif);
  font-weight: 800;
}

.events-page__quote {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.7;
  opacity: 0.9;
}

.events-page__content {
  padding: 4rem 1.25rem 5rem;
}

.events-page__inner {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}

.events-page__empty-state {
  width: 100%;
  padding: 3rem 1.5rem;
  border-radius: var(--radius-lg);
  background: var(--bg-surface);
  box-shadow: var(--shadow-md);
  text-align: center;
}

.events-page__empty-icon {
  margin: 0 auto 1.5rem;
  color: var(--forro-orange);
  opacity: 0.25;
}

.events-page__empty-title {
  margin: 0 0 1rem;
  font-size: 1.8rem;
  font-family: var(--font-serif);
  color: var(--gray-900);
}

.events-page__empty-description {
  margin: 0 0 2rem;
  color: var(--gray-500);
  font-size: 1rem;
  line-height: 1.7;
}

.events-page__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.9rem 1.4rem;
  border-radius: 999px;
  background: var(--forro-orange);
  color: white;
  font-weight: 700;
  text-decoration: none;
  transition: var(--transition);
}

.events-page__cta:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
}

.events-page__agenda {
  width: 100%;
}

.events-page__types-card {
  width: 100%;
  padding: 2.5rem 1.5rem;
  border-radius: 2rem;
  border: 1px solid var(--gray-200);
  background: var(--bg-base);
}

.events-page__types-title {
  margin: 0 0 2rem;
  text-align: center;
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  font-family: var(--font-serif);
  color: var(--gray-900);
}

.events-page__types-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  max-width: 700px;
  margin: 0 auto;
}

.events-page__type-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  padding: 1.2rem;
  background: var(--bg-surface);
  border: none;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  cursor: pointer;
  text-align: left;
}

.events-page__type-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.events-page__type-card--disabled {
  opacity: 0.55;
  cursor: not-allowed;
  transform: none;
}

.events-page__type-card--disabled:hover {
  transform: none;
  box-shadow: var(--shadow-sm);
}

.events-page__type-card--orange {
  border-left: 4px solid var(--forro-orange);
}

.events-page__type-card--red {
  border-left: 4px solid var(--forro-red);
}

.events-page__type-card--gold {
  border-left: 4px solid var(--forro-gold);
}

.events-page__type-card--soft {
  border-left: 4px solid #d9a76a;
}

.events-page__type-icon {
  font-size: 1.4rem;
  line-height: 1;
}

.events-page__type-label {
  display: block;
  font-weight: 700;
  color: var(--gray-900);
}

.events-page__type-summary {
  margin: 0.35rem 0 0;
  color: var(--gray-600);
  font-size: 0.95rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .events-page__content {
    padding: 3rem 1rem 4rem;
  }

  .events-page__types-card {
    padding: 2rem 1rem;
  }

  .events-page__types-grid {
    grid-template-columns: 1fr;
  }
}
</style>
