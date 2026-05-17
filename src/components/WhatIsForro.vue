<script setup lang="ts">
import { ChevronRight } from "lucide-vue-next";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <section class="section-forro">
    <div class="forro-intro">
      <div class="forro-intro__content">
        <h2 class="serif forro-intro__title">
          {{ t("home.what_is_forro") }}
        </h2>
        <p class="forro-intro__text">
          {{ t("home.what_is_forro_text") }}
          {{ t("home.what_is_forro_extended") }}
        </p>
        <div class="forro-intro__action">
          <router-link to="/historia" class="btn btn-outline">
            {{ t("home.read_more") }}
            <ChevronRight :size="20" />
          </router-link>
        </div>
      </div>
      <div class="forro-intro__visual">
        <div class="forro-intro__image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1200&auto=format&fit=crop"
            alt="Abrazo forrozeiro"
            class="forro-intro__image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-forro {
  padding: 64px 20px;
}

.forro-intro {
  display: grid;
  gap: 64px;
}

.forro-intro__title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: var(--forro-earth);
  line-height: 1.1;
  margin-bottom: 24px;
}

.forro-intro__text {
  font-size: 1.125rem;
  line-height: 1.625;
  color: var(--gray-700);
  margin-bottom: 32px;
}

.forro-intro__action {
  margin-top: 32px;
  display: flex;
  justify-content: center;
}

.forro-intro__visual {
  display: flex;
  justify-content: center;
}

.forro-intro__image-wrapper {
  border-radius: 64px;
  overflow: hidden;
  border: 12px solid white;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 480px;
}

.forro-intro__image {
  width: 100%;
  height: auto;
  display: block;
}

@media (min-width: 768px) {
  .forro-intro {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
}

@media (min-width: 1024px) {
  .forro-intro__text {
    font-size: 1.25rem;
  }
}
</style>
