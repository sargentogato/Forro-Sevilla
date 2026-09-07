<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const rhythms = [
  { name: "Baião", description: "history.forro_rhythms_p2" },
  { name: "Xote", description: "history.forro_rhythms_p3" },
  { name: "Xaxado", description: "history.forro_rhythms_p4" },
  { name: "Coco", description: "history.forro_rhythms_p5" },
];
</script>

<template>
  <section class="history-rhythms">
    <h2 class="history-rhythms__heading">
      {{ t("history.forro_rhythms_title") }}
    </h2>
    <p class="history-rhythms__intro">
      {{ t("history.forro_rhythms_p1") }}
    </p>

    <div class="history-rhythms__grid">
      <article
        v-for="rhythm in rhythms"
        :key="rhythm.name"
        class="history-rhythms__card glass"
      >
        <h3 class="history-rhythms__title">{{ rhythm.name }}</h3>
        <p class="history-rhythms__text">{{ t(rhythm.description) }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.history-rhythms__heading {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--forro-earth);
  line-height: 1.2;
  text-align: center;
}

.history-rhythms__intro {
  max-width: 48rem;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
  color: var(--gray-700);
  line-height: 1.8;
}

.history-rhythms__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}

.history-rhythms__card {
  padding: 1.5rem;
  border: 1px solid var(--border-light);
  border-radius: 1rem;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.history-rhythms__card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.history-rhythms__title {
  margin-bottom: 0.75rem;
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--forro-orange);
}

.history-rhythms__text {
  margin: 0;
  font-size: 0.95rem;
  color: var(--gray-700);
  line-height: 1.8;
}

@media (max-width: 767px) {
  .history-rhythms__grid {
    grid-template-columns: 1fr;
  }

  .history-rhythms__heading {
    font-size: 2rem;
  }
}
</style>
