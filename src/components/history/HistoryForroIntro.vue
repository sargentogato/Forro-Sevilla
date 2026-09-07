<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { resolveAssetPath } from "../../utils/assetPaths";

const { t } = useI18n();
</script>

<template>
  <section class="history-forro-intro">
    <div class="history-forro-intro__layout">
      <div class="history-forro-intro__content">
        <h2 class="history-forro-intro__heading">
          {{ t("history.forro_subtitle") }}
        </h2>
        <p>{{ t("history.forro_p1") }}</p>
        <p>{{ t("history.forro_p2") }}</p>
      </div>
      <figure class="history-forro-intro__media">
        <img
          :src="resolveAssetPath('/images/history/forro-couple.jpg')"
          alt="Old forró"
          class="history-forro-intro__image"
          loading="lazy"
        />
      </figure>
    </div>

    <blockquote class="history-forro-intro__quote">
      {{ t("history.forro_quote") }}
    </blockquote>
  </section>
</template>

<style scoped>
.history-forro-intro {
  margin-bottom: 4rem;
}

.history-forro-intro__layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;
}

.history-forro-intro__heading {
  margin: 0 0 1.5rem;
  font-family: var(--font-serif);
  font-size: 2.5rem;
  color: var(--forro-earth);
  line-height: 1.2;
}

.history-forro-intro__content p {
  margin: 0 0 1.25rem;
  font-size: 1.1rem;
  color: var(--gray-700);
  line-height: 1.8;
}

.history-forro-intro__media {
  margin: 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.history-forro-intro__media:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.history-forro-intro__image {
  display: block;
  width: 100%;
  object-fit: cover;
}

.history-forro-intro__quote {
  margin: 0;
  padding: 25px 15px;
  border: 1px solid rgba(242, 125, 38, 0.2);
  border-radius: 1.5rem;
  background: var(--bg-base);
  color: var(--forro-orange);
  font-family: var(--font-serif);
  font-size: 1.35rem;
  font-style: italic;
  line-height: 1.6;
  text-align: center;
  box-shadow: var(--shadow-sm);
}

@media (max-width: 768px) {
  .history-forro-intro__layout {
    grid-template-columns: 1fr;
  }

  .history-forro-intro__heading {
    font-size: 2rem;
  }
}
</style>
