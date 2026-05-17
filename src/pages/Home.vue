<script setup lang="ts">
import { useI18n } from "vue-i18n";
import GallerySection from "../components/GallerySection.vue";
import HeroSection from "../components/HeroSection.vue";
import QuickAcces from "../components/QuickAcces.vue";
import WhatIsForro from "../components/WhatIsForro.vue";

const { t } = useI18n();
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <HeroSection />

    <!-- What is Forró -->
    <WhatIsForro />

    <!-- Quick Access -->
    <QuickAcces />

    <!-- Gallery Section -->
    <GallerySection />

    <!-- Contact Banner -->
    <section class="contact-banner section">
      <div class="container contact-banner__container">
        <div class="contact-banner__content">
          <h2 class="serif contact-banner__title">
            {{ t("home.doubt_title") }}
          </h2>
          <p class="contact-banner__text">{{ t("home.doubt_subtitle") }}</p>
        </div>
        <div class="contact-banner__action">
          <router-link to="/contacto" class="btn btn-white">
            {{ t("home.contact_now") }}
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  overflow-x: hidden;
}

.contact-banner {
  background-color: var(--forro-gold);
  color: var(--white);
}

.contact-banner__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
}

.contact-banner__title {
  color: var(--white);
  margin-bottom: 8px;
}

.btn-white {
  background: white;
  color: var(--forro-gold);
}

@media (max-width: 768px) {
  .contact-banner__container {
    flex-direction: column;
    text-align: center;
  }
}
</style>
