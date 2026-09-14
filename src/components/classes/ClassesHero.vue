<script setup lang="ts">
import { useI18n } from "vue-i18n";
import AppImages from "../AppImages.vue";

const { t } = useI18n();
</script>

<template>
  <header class="classes-content__header classes-content__header--dark">
    <app-images
      name="clases/clases-forro-sevilla.jpg"
      class="classes-content__bg-img"
    />
    <!-- <img
      src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1920&auto=format&fit=crop"
      class="classes-content__bg-img"
      alt="Background"
      fetchpriority="high"
      decoding="async"
    /> -->
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

.classes-content__bg-img :deep(img) {
  height: 100%;
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
  font-weight: 700;
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
</style>
