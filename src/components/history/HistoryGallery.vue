<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { resolveAssetPath } from "../../utils/assetPaths";

const { t } = useI18n();

const galleryImages = [
  {
    id: 1,
    src: resolveAssetPath("/images/elton/gallery-1.jpg"),
    alt: "Elton Forró",
    variant: "tall",
  },
  {
    id: 2,
    src: resolveAssetPath("/images/elton/gallery-2.jpg"),
    alt: "Elton Forró",
    variant: "wide",
  },
  {
    id: 3,
    src: resolveAssetPath("/images/elton/gallery-3.jpg"),
    alt: "Elton Forró",
    variant: "default",
  },
  {
    id: 4,
    src: resolveAssetPath("/images/elton/gallery-4.jpg"),
    alt: "Elton Forró",
    variant: "tall",
  },
  {
    id: 5,
    src: resolveAssetPath("/images/elton/gallery-5.jpg"),
    alt: "Elton Forró",
    variant: "default",
  },
  {
    id: 6,
    src: resolveAssetPath("/images/elton/gallery-6.jpg"),
    alt: "Elton Forró",
    variant: "wide",
  },
  {
    id: 7,
    src: resolveAssetPath("/images/elton/gallery-7.jpg"),
    alt: "Elton Forró",
    variant: "default",
  },
];
</script>

<template>
  <section class="history-gallery">
    <h3 class="history-gallery__title">
      {{ t("history.elton_gallery_title") }}
    </h3>
    <div class="history-gallery__grid">
      <figure
        v-for="image in galleryImages"
        :key="image.id"
        class="history-gallery__card"
        :class="`history-gallery__card--${image.variant}`"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="history-gallery__image"
          loading="lazy"
        />
      </figure>
    </div>
  </section>
</template>

<style scoped>
.history-gallery {
  margin-top: 4rem;
  margin-bottom: 1rem;
}

.history-gallery__title {
  padding-bottom: 15px;
  color: var(--forro-orange);
  font-family: var(--font-serif);
  text-align: center;
}

.history-gallery__grid {
  column-count: 1;
  column-gap: 1.25rem;
}

.history-gallery__card {
  display: inline-block;
  width: 100%;
  margin: 0 0 1rem;
  padding: 0;
  border: none;
  border-radius: 1.5rem;
  overflow: hidden;
  background: var(--bg-surface);
  box-shadow: var(--shadow-md);
  break-inside: avoid;
}

.history-gallery__image {
  display: block;
  width: 100%;
  height: auto;
  transition:
    transform 0.35s ease,
    filter 0.35s ease;
}

.history-gallery__card:hover .history-gallery__image {
  transform: scale(1.03);
  filter: brightness(1.02);
}

.history-gallery__card--tall .history-gallery__image {
  min-height: 22rem;
  object-fit: cover;
}

.history-gallery__card--wide .history-gallery__image {
  min-height: 16rem;
  object-fit: cover;
}

@media (min-width: 640px) {
  .history-gallery__grid {
    column-count: 2;
  }
}

@media (min-width: 768px) {
  .history-gallery__grid {
    column-count: 3;
  }
}
</style>
