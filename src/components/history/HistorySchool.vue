<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { resolveAssetPath } from "../../utils/assetPaths";

const { t } = useI18n();
</script>

<template>
  <section class="history-school">
    <h2 class="history-school__heading">
      {{ t("history.school_subtitle") }}
    </h2>
    <div class="history-school__content">
      <p>{{ t("history.school_p1") }}</p>
      <p>{{ t("history.school_p2") }}</p>
      <p>{{ t("history.school_p3") }}</p>
    </div>
    <figure class="history-school__banner">
      <img
        :src="resolveAssetPath('/images/history/forro-festival.jpg')"
        alt="Students dancing"
        class="history-school__image"
        loading="lazy"
      />
    </figure>
  </section>
</template>

<style scoped>
.history-school {
  color: var(--gray-700);
}

.history-school__heading {
  margin: 0 0 1.5rem;
  font-family: var(--font-serif);
  font-size: 2.5rem;
  color: var(--forro-earth);
  line-height: 1.2;
}

.history-school__content p {
  margin: 0 0 1.25rem;
  font-size: 1.1rem;
  line-height: 1.8;
}

.history-school__banner {
  margin: 3rem 0 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.history-school__banner:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.history-school__image {
  display: block;
  width: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.history-school__banner:hover .history-school__image {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .history-school__heading {
    font-size: 2rem;
  }
}
</style>
