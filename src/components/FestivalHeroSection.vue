<script setup lang="ts">
import { ChevronRight } from "lucide-vue-next";

withDefaults(
  defineProps<{
    badge: string;
    title: string;
    subtitle: string;
    ctaLabel: string;
    heroImage?: string;
    heroAlt?: string;
  }>(),
  {
    heroImage:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1920&auto=format&fit",
    heroAlt: "Festival de Forró Sevilla",
    /* 
      // PARA CUANDO TENGAS LAS IMÁGENES EN LOCAL (e.g. en public/images/festival/), 
      // puedes usar estas props en su lugar (y cambiar el HTML de abajo):
      heroImageDesktop: "/images/festival/hero-desktop.jpg",
      heroImageMobile: "/images/festival/hero-mobile.jpg",
    */
  },
);
</script>

<template>
  <header class="festival__hero">
    <div class="festival__hero-bg">
      <!-- IMAGEN ACTUAL (Externa Unsplash) -->
      <img
        :src="heroImage"
        :alt="heroAlt"
        class="festival__hero-img"
        fetchpriority="high"
        decoding="async"
      />
      <!-- 
        // PARA IMÁGENES LOCALES (Comenta la etiqueta <img> de arriba y descomenta este bloque <picture>):
        // Esto permite tener una imagen panorámica para PC y una más cuadrada para móviles.
        
        <picture>
          <source media="(max-width: 768px)" srcset="/images/festival/hero-mobile.jpg" />
          <img
            src="/images/festival/hero-desktop.jpg"
            :alt="heroAlt"
            class="festival__hero-img"
            fetchpriority="high"
            decoding="async"
          />
        </picture>
      -->
      <div class="festival__hero-overlay"></div>
    </div>
    <div class="festival__hero-content">
      <span class="festival__badge">{{ badge }}</span>
      <h1 class="festival__title">{{ title }}</h1>
      <p class="festival__subtitle">{{ subtitle }}</p>
      <a
        href="https://entradas.forrosevilla.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="festival__btn festival__btn--primary festival__btn--large"
      >
        {{ ctaLabel }}
        <ChevronRight :size="20" />
      </a>
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

.festival__hero {
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 15px;
  min-height: 500px;
}

@media (min-width: 768px) {
  .festival__hero {
    aspect-ratio: 16 / 9;
  }
}

.festival__hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.festival__hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.festival__hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.85),
    rgba(0, 0, 0, 0.5),
    transparent
  );
  z-index: 1;
}

.festival__hero-content {
  position: relative;
  z-index: 10;
  color: white;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
}

.festival__badge {
  display: inline-block;
  background-color: var(--forro-orange);
  padding: 8px 16px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.875rem;
  border-radius: 4px;
  margin-bottom: 24px;
  animation: fadeIn 0.8s ease forwards;
}

.festival__title {
  font-size: clamp(2.5rem, 6vw, 5rem);
  margin: 24px 0;
  font-weight: 900;
  line-height: 1.1;
  font-family: var(--font-serif);
  animation: fadeIn 0.8s ease 0.1s forwards;
  opacity: 0;
  color: white;
}

.festival__subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  max-width: 600px;
  margin-bottom: 40px;
  line-height: 1.4;
  animation: fadeIn 0.8s ease 0.2s forwards;
  opacity: 0;
}

.festival__btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 32px;
  border-radius: 9999px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  text-decoration: none;
  font-family: var(--font-sans);
  transition: all 0.3s ease;
  font-size: 1rem;
}

.festival__btn--primary {
  background-color: var(--forro-orange);
  color: white;
  box-shadow: 0 10px 25px rgba(242, 125, 38, 0.3);
  animation: fadeIn 0.8s ease 0.3s forwards;
  opacity: 0;
}

.festival__btn--primary:hover {
  background-color: var(--forro-red);
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(217, 68, 54, 0.4);
}

.festival__btn--large {
  padding: 18px 48px;
  font-size: 1.125rem;
}

@media (max-width: 768px) {
  .festival__hero {
    min-height: 400px;
  }

  .festival__hero-content {
    padding: 0 16px;
  }

  .festival__subtitle {
    font-size: 1.1rem;
  }

  .festival__btn--large {
    padding: 14px 32px;
    font-size: 1rem;
  }
}
</style>
