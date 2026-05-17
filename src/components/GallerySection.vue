<script setup lang="ts">
import { Instagram } from "lucide-vue-next";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=800&auto=format&fit=crop",
    alt: "Pareja bailando forró",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=800&auto=format&fit=crop",
    alt: "Música en vivo forró",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop",
    alt: "Clase de baile",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
    alt: "Ambiente festivo",
  },
];
</script>

<template>
  <section class="gallery-section">
    <div class="gallery-section__head">
      <span class="gallery-section__label">{{
        t("home.our_classes_gallery")
      }}</span>
      <h2 class="gallery-section__title">
        {{ t("home.gallery_subtitle") }}
      </h2>
    </div>

    <div class="gallery-section__grid">
      <div v-for="img in galleryImages" :key="img.id" class="gallery-item">
        <img
          :src="img.src"
          :alt="img.alt"
          class="gallery-item__image"
          loading="lazy"
        />
      </div>
    </div>

    <div class="instagram-cta">
      <div class="instagram-cta__handle">
        <Instagram :size="24" class="instagram-cta__icon" />
        <span class="instagram-cta__text">@forrosevilla</span>
      </div>
      <a
        href="https://instagram.com/forrosevilla"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-primary"
      >
        {{ t("home.view_on_instagram") }}
      </a>
    </div>
  </section>
</template>

<style scoped>
.gallery-section {
  padding: 64px 20px;
}

.gallery-section__head {
  text-align: center;
  margin-bottom: 64px;
}

.gallery-section__label {
  display: block;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 800;
  color: var(--forro-orange);
  margin-bottom: 16px;
}

.gallery-section__title {
  font-size: clamp(2.2rem, 8vw - 1.75rem, 3.5rem);
}

.gallery-section__grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;
  margin-top: 64px;
}

@media (min-width: 1024px) {
  .gallery-section__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.gallery-item {
  aspect-ratio: 1;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.gallery-item__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
  display: block;
}

.gallery-item:hover .gallery-item__image {
  transform: scale(1.1);
}

.instagram-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 80px;
}

.instagram-cta__handle {
  display: flex;
  align-items: center;
  gap: 8px;
}

.instagram-cta__icon {
  color: var(--forro-orange);
}

.instagram-cta__text {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
}
</style>
