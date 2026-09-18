<script setup lang="ts">
import { Clock, Info, MapPin } from "lucide-vue-next";
import { useI18n } from "vue-i18n";
import classesData from "../../data/classes.json";

const { t } = useI18n();
</script>

<template>
  <section class="classes-content__section">
    <div class="classes-content__section-head-alt">
      <div class="classes-content__icon-blob">
        <MapPin :size="32" />
      </div>
      <h2 class="classes-content__section-title">
        {{ t("classes.hours_locations") }}
      </h2>
    </div>

    <div class="classes-content__venues-grid">
      <div
        v-for="venue in classesData.venues"
        :key="venue.id"
        class="classes-content__venue-card"
      >
        <div class="classes-content__venue-header">
          <h3 class="classes-content__venue-title">
            {{ t(`classes.${venue.nameKey}`) }}
          </h3>
          <p class="classes-content__venue-address">
            <MapPin :size="16" />
            {{ t(`classes.${venue.addressKey}`) }}
          </p>
        </div>

        <div class="classes-content__schedule-list">
          <div
            v-for="(schedule, idx) in venue.schedules"
            :key="idx"
            class="classes-content__schedule-item"
          >
            <div class="classes-content__schedule-info">
              <span class="classes-content__schedule-day">
                {{ t(`classes.${schedule.dayKey}`) }}
              </span>
              <span class="classes-content__schedule-time">
                <Clock :size="14" /> {{ schedule.time }}
              </span>
            </div>
            <span
              class="classes-content__level-badge"
              :class="{
                'classes-content__level-badge--active':
                  schedule.levelKey === 'levels.beginner',
              }"
            >
              {{ t(`classes.${schedule.levelKey}`) }}
            </span>
          </div>
        </div>

        <div v-if="venue.noteKey" class="classes-content__venue-note">
          <Info :size="18" />
          <span>{{ t(`classes.${venue.noteKey}`) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.classes-content__section {
  padding: var(--section-padding) 0;
  padding-left: 20px;
  padding-right: 20px;
}

.classes-content__section-head-alt {
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  gap: 16px;
}

.classes-content__section-title {
  font-family: var(--font-serif);
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  color: var(--gray-900);
}

.classes-content__icon-blob {
  width: 64px;
  height: 64px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  background: var(--forro-orange);
}

.classes-content__venues-grid {
  display: grid;
  gap: 32px;
}

@media (min-width: 768px) {
  .classes-content__venues-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.classes-content__venue-card {
  box-sizing: border-box;
  min-width: 0;
  background: var(--white);
  border-radius: var(--radius-lg);
  border: 1px solid var(--gray-100);
  box-shadow: var(--shadow-md);
  animation: fadeIn 0.8s ease forwards;
  padding: 24px;
}

.classes-content__venue-header {
  margin-bottom: 2.5rem;
}

.classes-content__venue-title {
  font-size: 2rem;
  font-family: var(--font-serif);
  color: var(--forro-earth);
  margin-bottom: 0.5rem;
}

.classes-content__venue-address {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--gray-500);
  font-style: italic;
}

.classes-content__schedule-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.classes-content__schedule-item {
  padding: 1.25rem;
  background: var(--gray-100);
  border-radius: var(--radius-md);
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.classes-content__schedule-item:hover {
  background: #fff7ed;
  transform: translateX(5px);
}

:global(html.dark) .classes-content__schedule-item:hover {
  background: rgba(242, 125, 38, 0.1);
}

.classes-content__schedule-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.classes-content__schedule-day {
  font-weight: 800;
  color: var(--forro-red);
  font-size: 1.1rem;
}

.classes-content__schedule-time {
  font-size: 0.9rem;
  color: var(--gray-500);
  display: flex;
  align-items: center;
  gap: 4px;
}

:global(html.dark) .classes-content__schedule-day,
:global(html.dark) .classes-content__schedule-time {
  color: #ffffff;
}

.classes-content__level-badge {
  font-size: 0.75rem;
  font-weight: 900;
  padding: 0.5rem 1rem;
  background: var(--white);
  color: var(--dark);
  border-radius: var(--radius-full);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: var(--shadow-sm);
}

.classes-content__level-badge--active {
  background: var(--forro-orange);
  color: var(--white);
}

.classes-content__venue-note {
  margin-top: 2rem;
  padding: 1rem;
  background: #fefce8;
  border-left: 4px solid #facc15;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  font-size: 0.85rem;
  color: #854d0e;
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
