<script setup lang="ts">
defineProps<{
  artists: Array<{
    name: string;
    role: string;
    image: string;
  }>;
}>();
</script>

<template>
  <section class="festival__artists">
    <div class="festival__artists-container">
      <h2 class="festival__section-title festival__section-title--center">
        {{ $t("festival.artists_title") }}
      </h2>
      <div class="festival__artists-grid">
        <div
          v-for="artist in artists"
          :key="artist.name"
          class="festival__artist-card"
        >
          <div class="festival__artist-image-wrapper">
            <img
              :src="artist.image"
              :alt="artist.name"
              class="festival__artist-image"
              referrerpolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
          </div>
          <h3 class="festival__artist-name">{{ artist.name }}</h3>
          <p class="festival__artist-role">{{ artist.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.festival__artists {
  padding: 96px 24px;
  background-color: var(--bg-surface);
}

.festival__artists-container {
  max-width: 1280px;
  margin: 0 auto;
}

.festival__section-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 24px;
  color: var(--gray-900);
  font-family: var(--font-serif);
  line-height: 1.2;
}

.festival__section-title--center {
  text-align: center;
}

.festival__artists-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  margin-top: 64px;
}

@media (min-width: 768px) {
  .festival__artists-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.festival__artist-card {
  text-align: center;
}

.festival__artist-image-wrapper {
  width: 100%;
  aspect-ratio: 1;
  margin-bottom: 24px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.festival__artist-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.4s ease;
}

.festival__artist-card:hover .festival__artist-image {
  filter: grayscale(0%);
}

.festival__artist-name {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: var(--font-serif);
  margin-bottom: 8px;
  color: var(--gray-900);
}

.festival__artist-role {
  font-size: 0.875rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .festival__artists {
    padding: 64px 16px;
  }

  .festival__artists-grid {
    gap: 32px;
  }
}
</style>
