<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ChevronRight } from "lucide-vue-next";

const { t } = useI18n();
</script>

<template>
  <section class="section container">
    <div class="grid grid-2 gap-16 items-center">
      <div class="intro-content">
        <h2 class="serif text-big-display mb-6">
          {{ t("home.what_is_forro") }}
        </h2>
        <p
          class="section-text text-lg lg:text-xl leading-relaxed text-gray-700"
        >
          {{ t("home.what_is_forro_text") }}
          {{ t("home.what_is_forro_extended") }}
        </p>
        <div class="mt-8">
          <router-link to="/historia" class="btn btn-outline">
            {{ t("home.read_more") }}
            <ChevronRight :size="20" />
          </router-link>
        </div>
      </div>
      <div class="intro-visual">
        <div class="image-wrapper shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1200&auto=format&fit=crop"
            alt="Abrazo forrozeiro"
            class="intro-img-short"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-big-display {
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: var(--forro-earth);
  line-height: 1.1;
}

.intro-img-short {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
}

.section-text {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  color: var(--gray-700);
}

.image-wrapper {
  border-radius: 4rem;
  overflow: hidden;
  border: 12px solid white;
}
</style>
