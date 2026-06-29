<script setup lang="ts">
import { Check } from "lucide-vue-next";

defineProps<{
  title: string;
  text: string;
  features: string[];
  posterTitle: string;
  posterText: string;
}>();
</script>

<template>
  <section class="festival__about">
    <div class="festival__about-container">
      <div class="festival__about-grid">
        <div class="festival__about-content">
          <h2 class="festival__section-title">{{ title }}</h2>
          <p class="festival__section-text">{{ text }}</p>
          <ul class="festival__features-list">
            <li
              v-for="feat in features"
              :key="feat"
              class="festival__feature-item"
            >
              <div class="festival__check-icon">
                <Check :size="16" />
              </div>
              <span>{{ feat }}</span>
            </li>
          </ul>
        </div>
        <div class="festival__about-poster">
          <div class="festival__poster-card">
            <div class="festival__poster-inner">
              <h3 class="festival__poster-title">{{ posterTitle }}</h3>
              <div class="festival__poster-accent"></div>
              <p class="festival__poster-text">{{ posterText }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.festival__about {
  padding: 96px 24px;
  background: white;
}

.festival__about-container {
  max-width: 1280px;
  margin: 0 auto;
}

.festival__about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 64px;
  align-items: center;
}

@media (min-width: 768px) {
  .festival__about-grid {
    grid-template-columns: 3fr 2fr;
  }
}

.festival__section-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 24px;
  color: var(--dark);
  font-family: var(--font-serif);
  line-height: 1.2;
}

.festival__section-text {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 40px;
  line-height: 1.7;
}

.festival__features-list {
  list-style: none;
  display: grid;
  gap: 20px;
}

@media (min-width: 640px) {
  .festival__features-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

.festival__feature-item {
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 600;
  color: var(--text-primary);
}

.festival__check-icon {
  width: 48px;
  height: 48px;
  background-color: #ecfdf5;
  color: var(--forro-green);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.festival__about-poster {
  display: flex;
  align-items: center;
  justify-content: center;
}

.festival__poster-card {
  aspect-ratio: 1;
  background-color: var(--forro-earth);
  border-radius: 32px;
  padding: 24px;
  transform: rotate(3deg);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.festival__poster-inner {
  height: 100%;
  border: 4px solid white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  gap: 16px;
}

.festival__poster-title {
  font-family: var(--font-serif);
  font-size: 3.5rem;
  font-weight: 900;
  margin: 0;
}

.festival__poster-accent {
  width: 64px;
  height: 4px;
  background-color: var(--forro-orange);
  border-radius: 2px;
}

.festival__poster-text {
  letter-spacing: 0.15em;
  font-weight: 900;
  font-size: 0.875rem;
  margin: 0;
}

@media (max-width: 768px) {
  .festival__about {
    padding: 64px 16px;
  }

  .festival__about-grid {
    gap: 48px;
  }

  .festival__poster-card {
    width: 100%;
    max-width: 300px;
  }

  .festival__poster-title {
    font-size: 2.5rem;
  }
}
</style>
