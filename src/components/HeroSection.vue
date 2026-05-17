<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <section class="hero flex-center">
    <div class="hero-bg">
      <img
        src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1920&auto=format&fit=crop"
        alt="Pareja bailando forró"
        class="hero-img"
        fetchpriority="high"
        decoding="async"
      />
      <div class="hero-overlay"></div>
    </div>

    <div class="hero-content animate-fade">
      <h1 class="hero-title">{{ t("home.hero_title") }}</h1>
      <p class="hero-subtitle">{{ t("home.hero_subtitle") }}</p>
      <div class="hero-actions">
        <router-link
          to="/festival-2026"
          class="btn btn-primary btn-big shadow-xl scale-hover"
        >
          Festival 2026 · Sevilla
        </router-link>
      </div>
    </div>

    <div class="hero-footer-text">
      <p class="serif">
        "Tanto si es tu primera clase como si llevas años bailando, aquí tienes
        tu sitio"
      </p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 90vh;
  min-height: 600px;
  text-align: center;
  overflow: hidden;
  color: white;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.8)
  );
}

.hero-content {
  max-width: 800px;
  padding: 0 24px;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  color: white;
  margin-bottom: 24px;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.hero-subtitle {
  font-size: clamp(1.2rem, 3vw, 1.75rem);
  color: #fef3c7;
  margin-bottom: 3rem;
  font-style: italic;
  font-weight: 300;
}

.hero-actions {
  justify-content: center;
}

.hero-footer-text {
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  text-align: center;
  opacity: 0.8;
  font-size: 0.9rem;
  padding: 0 1.5rem;
}

.scale-hover {
  transition: transform 0.3s ease;
}

.scale-hover:hover {
  transform: scale(1.05);
}

@media (max-width: 640px) {
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>
