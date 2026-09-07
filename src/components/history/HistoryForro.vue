<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { resolveAssetPath } from "../../utils/assetPaths";
import HistoryRhythms from "./HistoryRhythms.vue";

const { t } = useI18n();
</script>

<template>
  <section class="history-forro">
    <div class="history-forro__intro">
      <div class="history-forro__intro-layout">
        <div class="history-forro__intro-content">
          <h2 class="history-forro__heading">
            {{ t("history.forro_subtitle") }}
          </h2>
          <p>{{ t("history.forro_p1") }}</p>
          <p>{{ t("history.forro_p2") }}</p>
        </div>
        <figure class="history-forro__media">
          <img
            :src="resolveAssetPath('/images/history/forro-couple.jpg')"
            alt="Old forró"
            class="history-forro__image"
            loading="lazy"
          />
        </figure>
      </div>
      <blockquote class="history-forro__quote">
        {{ t("history.forro_quote") }}
      </blockquote>
    </div>

    <div class="history-forro__section history-forro__what">
      <div class="history-forro__what-content">
        <h2 class="history-forro__heading">
          {{ t("history.forro_what_title") }}
        </h2>
        <p>{{ t("history.forro_what_p1") }}</p>
      </div>
      <figure class="history-forro__media">
        <img
          :src="resolveAssetPath('/images/history/forro-festival.jpg')"
          alt="¿Qué es el Forró?"
          class="history-forro__image"
          loading="lazy"
        />
      </figure>
    </div>

    <section class="history-forro__panel glass">
      <h2 class="history-forro__heading history-forro__heading--centered">
        {{ t("history.forro_origin_title") }}
      </h2>
      <p>{{ t("history.forro_origin_p1") }}</p>
      <p>{{ t("history.forro_origin_p2") }}</p>
      <p>{{ t("history.forro_origin_p3") }}</p>
      <blockquote class="history-forro__quote history-forro__quote--nested">
        {{ t("history.forro_origin_p4") }}
      </blockquote>
    </section>

    <div class="history-forro__section history-forro__dance">
      <figure class="history-forro__media history-forro__dance-media">
        <img
          :src="resolveAssetPath('/images/history/forro-couple.jpg')"
          alt="Bailando Forró"
          class="history-forro__image"
          loading="lazy"
        />
      </figure>
      <div class="history-forro__dance-content">
        <h2 class="history-forro__heading">
          {{ t("history.forro_how_title") }}
        </h2>
        <p>{{ t("history.forro_how_p1") }}</p>
        <p>
          <strong>{{ t("history.forro_how_p2").split(":")[0] }}:</strong>
          {{
            t("history.forro_how_p2").split(":").slice(1).join(":") ||
            t("history.forro_how_p2")
          }}
        </p>
        <p>
          <strong>{{ t("history.forro_how_p3").split(":")[0] }}:</strong>
          {{
            t("history.forro_how_p3").split(":").slice(1).join(":") ||
            t("history.forro_how_p3")
          }}
        </p>
      </div>
    </div>

    <HistoryRhythms class="history-forro__section" />

    <div class="history-forro__final-grid">
      <section class="history-forro__panel glass">
        <h2 class="history-forro__heading">
          {{ t("history.forro_diffusion_title") }}
        </h2>
        <p>{{ t("history.forro_diffusion_p1") }}</p>
        <p>{{ t("history.forro_diffusion_p2") }}</p>
      </section>
      <section class="history-forro__panel glass">
        <h2 class="history-forro__heading">
          {{ t("history.forro_instruments_title") }}
        </h2>
        <figure class="history-forro__banner">
          <img
            :src="resolveAssetPath('/images/history/forro-instruments.jpg')"
            alt="Instrumentos"
            class="history-forro__image history-forro__image--zoom"
            loading="lazy"
          />
        </figure>
        <p>{{ t("history.forro_instruments_p1") }}</p>
        <p>{{ t("history.forro_instruments_p2") }}</p>
      </section>
    </div>
  </section>
</template>

<style scoped>
.history-forro {
  color: var(--gray-700);
}

.history-forro__intro,
.history-forro__section,
.history-forro__panel {
  margin-bottom: 4rem;
}

.history-forro__intro-layout,
.history-forro__what,
.history-forro__dance,
.history-forro__final-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
}

.history-forro__intro-layout,
.history-forro__what,
.history-forro__dance {
  align-items: center;
}

.history-forro__intro-layout {
  margin-bottom: 4rem;
}

.history-forro__heading {
  margin: 0 0 1.5rem;
  font-family: var(--font-serif);
  font-size: 2.5rem;
  color: var(--forro-earth);
  line-height: 1.2;
}

.history-forro__heading--centered {
  text-align: center;
}

.history-forro p {
  margin: 0 0 1.25rem;
  font-size: 1.1rem;
  line-height: 1.8;
}

.history-forro__media,
.history-forro__banner {
  margin: 0;
  overflow: hidden;
  border-radius: var(--radius-lg);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.history-forro__media:hover,
.history-forro__banner:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.history-forro__image {
  display: block;
  width: 100%;
  object-fit: cover;
}

.history-forro__image--zoom {
  transition: transform 0.5s ease;
}

.history-forro__banner:hover .history-forro__image--zoom {
  transform: scale(1.05);
}

.history-forro__quote {
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
  box-shadow: var(--shadow-sm);
}

.history-forro__quote--nested {
  margin-top: 2rem;
}

.history-forro__panel {
  padding: 2rem;
  border: 1px solid var(--border-light);
  border-radius: 1.5rem;
}

.history-forro__banner img {
  height: 12rem;
}

@media (max-width: 768px) {
  .history-forro__intro-layout,
  .history-forro__what,
  .history-forro__dance,
  .history-forro__final-grid {
    grid-template-columns: 1fr;
  }

  .history-forro__heading {
    font-size: 2rem;
  }

  .history-forro__dance-media {
    order: 2;
  }
}
</style>
