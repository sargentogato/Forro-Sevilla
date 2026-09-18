<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import classesData from "../../data/classes.json";

const { t } = useI18n();

const plans = computed(() => [
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
]);
</script>

<template>
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
              <span class="classes-content__price-label">
                {{ t(`classes.${p.nameKey}`) }}
              </span>
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
</style>
