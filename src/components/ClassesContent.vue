<script setup lang="ts">
import { ChevronRight, Clock, Info, MapPin } from "lucide-vue-next";
import { useI18n } from "vue-i18n";
import classesData from "../data/classes.json";

const { t } = useI18n();

const plans = [
  {
    key: "group",
    title: t("classes.group_classes"),
    subtitle: t("classes.group_classes_subtitle"),
    color: "var(--forro-orange)",
    prices: classesData.prices.group,
  },
  {
    key: "private_individual",
    title: t("classes.private_individual"),
    subtitle: t("classes.individual_subtitle"),
    color: "var(--forro-red)",
    prices: classesData.prices.private_individual,
  },
  {
    key: "private_couple",
    title: t("classes.private_couple"),
    subtitle: t("classes.couple_subtitle"),
    color: "var(--forro-gold)",
    prices: classesData.prices.private_couple,
  },
];
</script>

<template>
  <header class="classes-content__header classes-content__header--dark">
    <img
      src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1920&auto=format&fit=crop"
      class="classes-content__bg-img"
      alt="Background"
      fetchpriority="high"
      decoding="async"
    />
    <div class="classes-content__overlay"></div>
    <div class="classes-content__header-inner">
      <h1 class="classes-content__hero-title">
        {{ t("classes.hero_title") }}
      </h1>
      <p class="classes-content__hero-subtitle">
        {{ t("classes.hero_subtitle") }}
      </p>
      <div class="classes-content__title-underline"></div>
    </div>
  </header>

  <!-- Venues & Schedules -->
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
          <h3 class="classes-content__venue-title">{{ venue.name }}</h3>
          <p class="classes-content__venue-address">
            <MapPin :size="16" />
            {{ venue.address }}
          </p>
        </div>

        <div class="classes-content__schedule-list">
          <div
            v-for="(schedule, idx) in venue.schedules"
            :key="idx"
            class="classes-content__schedule-item"
          >
            <div class="classes-content__schedule-info">
              <span class="classes-content__schedule-day">{{
                schedule.day
              }}</span>
              <span class="classes-content__schedule-time">
                <Clock :size="14" /> {{ schedule.time }}
              </span>
            </div>
            <span
              class="classes-content__level-badge"
              :class="{
                'classes-content__level-badge--active': schedule.level
                  .toLowerCase()
                  .includes('inici'),
              }"
            >
              {{ schedule.level }}
            </span>
          </div>
        </div>

        <div v-if="venue.note" class="classes-content__venue-note">
          <Info :size="18" />
          <span>{{ venue.note }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Prices -->
  <section class="classes-content__prices-section">
    <div class="classes-content__prices-container">
      <div class="classes-content__section-head">
        <h2 class="classes-content__section-title">
          {{ t("classes.prices") }}
        </h2>
        <p class="classes-content__section-subtitle">
          {{ t("classes.cycle") }}
        </p>
      </div>

      <div class="classes-content__prices-grid">
        <div
          v-for="plan in plans"
          :key="plan.key"
          class="classes-content__price-card"
          :style="{ '--accent': plan.color }"
        >
          <div class="classes-content__price-header">
            <h3 class="classes-content__price-title">{{ plan.title }}</h3>
            <span class="classes-content__price-subtitle">{{
              plan.subtitle
            }}</span>
          </div>

          <div class="classes-content__price-body">
            <div
              v-for="(p, idx) in plan.prices"
              :key="idx"
              class="classes-content__price-row"
            >
              <span class="classes-content__price-label">{{ p.name }}</span>
              <span class="classes-content__price-value">{{ p.price }}</span>
            </div>
          </div>

          <div class="classes-content__price-footer">
            <p>{{ t("classes.duration") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="classes-content__cta-section">
    <div
      class="classes-content__cta-banner classes-content__cta-banner--orange"
    >
      <h2 class="classes-content__cta-title">
        {{ t("classes.ready_to_dance") }}
      </h2>
      <p class="classes-content__cta-description">
        {{ t("classes.cta_desc") }}
      </p>
      <a
        href="https://forms.gle/X4xaPv1dw6F6ALCt9"
        target="_blank"
        rel="noopener noreferrer"
        class="classes-content__btn classes-content__btn--primary classes-content__btn--big"
      >
        {{ t("classes.enroll") }}
        <ChevronRight />
      </a>
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

/* === HEADER SECTION START === */
.classes-content__header {
  height: 60vh;
  min-height: 400px;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: var(--white);
}

.classes-content__bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.classes-content__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(242, 125, 38, 0.8),
    rgba(217, 68, 54, 0.6)
  );
  z-index: 2;
}

.classes-content__header-inner {
  position: relative;
  z-index: 10;
  animation: fadeIn 0.8s ease forwards;
}

.classes-content__hero-title {
  font-size: clamp(3rem, 8vw, 5rem);
  margin-bottom: 1rem;
  font-weight: 900;
  font-family: var(--font-serif);
  line-height: 1.1;
  color: var(--white);
}

.classes-content__hero-subtitle {
  font-size: 1.5rem;
  font-style: italic;
  opacity: 0.9;
}

.classes-content__header--dark {
  background-color: var(--dark);
}

.classes-content__title-underline {
  width: 100px;
  height: 6px;
  background: var(--forro-orange);
  margin: 1.5rem auto 0;
  border-radius: 99px;
}
/* === HEADER SECTION END === */

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

/* === VENUES & SCHEDULES SECTION START === */

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

/* === VENUES & SCHEDULES SECTION END === */

/* === PRICES SECTION START === */
.classes-content__prices-section {
  padding: var(--section-padding) 0;
  background-color: var(--gray-100);
  padding-bottom: 2rem;
}

.classes-content__prices-container {
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 24px;
}

.classes-content__section-head {
  margin-bottom: 64px;
  text-align: center;
}

.classes-content__section-subtitle {
  font-size: 1.125rem;
  color: var(--gray-500);
  max-width: 600px;
  margin: 16px auto 0;
}

.classes-content__prices-grid {
  display: grid;
  gap: 32px;
}

@media (min-width: 768px) {
  .classes-content__prices-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.classes-content__price-card {
  background: var(--white);
  padding: 3.5rem 2.5rem;
  border-radius: var(--radius-lg);
  border-top: 10px solid var(--accent);
  box-shadow: var(--shadow-md);
  transition: var(--transition);
  animation: fadeIn 0.8s ease forwards;
}

.classes-content__price-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.classes-content__price-header {
  margin-bottom: 2.5rem;
  text-align: center;
}

.classes-content__price-title {
  font-size: 1.75rem;
  font-family: var(--font-serif);
  margin-bottom: 0.5rem;
  color: var(--dark);
}

.classes-content__price-subtitle {
  font-size: 0.75rem;
  color: var(--gray-400);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.classes-content__price-body {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.classes-content__price-row {
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--gray-100);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.classes-content__price-label {
  font-weight: 600;
  color: var(--gray-500);
}

.classes-content__price-value {
  font-size: 1.75rem;
  font-weight: 900;
  color: var(--forro-earth);
}

.classes-content__price-footer {
  margin-top: 3rem;
  text-align: center;
  font-size: 0.9rem;
  color: var(--gray-400);
  font-style: italic;
}
/* === PRICES SECTION END === */

/* === CTA SECTION START === */
.classes-content__cta-section {
  padding: var(--section-padding) 0;
  text-align: center;
  padding-top: 2rem;
}

.classes-content__cta-banner {
  padding: 5rem 3rem;
  border-radius: 4rem;
  max-width: 900px;
  margin: 0 auto;
  background: var(--card-bg);
  color: var(--card-accent);
  animation: fadeIn 0.8s ease forwards;
}

.classes-content__cta-banner--orange {
  --card-bg: #fff7ed;
  --card-icon: var(--forro-orange);
  --card-accent: var(--forro-earth);
}

.classes-content__cta-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-family: var(--font-serif);
  margin-bottom: 1.5rem;
  font-style: italic;
  color: var(--dark);
}

.classes-content__cta-description {
  margin-bottom: 2rem;
}

.classes-content__btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 32px;
  border-radius: var(--radius-full);
  font-weight: 600;
  cursor: pointer;
  border: none;
  background: none;
  font-family: var(--font-sans);
  font-size: 16px;
  text-decoration: none;
  transition: var(--transition);
}

.classes-content__btn--primary {
  background-color: var(--forro-orange);
  color: var(--white);
  box-shadow: var(--shadow-md);
}

.classes-content__btn--primary:hover {
  background-color: var(--forro-red);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.classes-content__btn--big {
  padding: 1.25rem 3.5rem;
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  .classes-content__cta-banner {
    padding: 3rem 1.5rem;
  }
}
/* === CTA SECTION END === */
</style>
