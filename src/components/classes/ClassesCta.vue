<script setup lang="ts">
import { ChevronRight } from "lucide-vue-next";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <section class="classes-content__cta-section">
    <div
      class="classes-content__cta-banner classes-content__cta-banner--orange"
    >
      <h2 class="classes-content__cta-title">
        {{ t("classes.ready_to_dance") }}
      </h2>
      <p class="classes-content__cta-description">
        {{ t("classes.cta_desc") }}
      </p>
      <a
        href="https://wa.me/603176756"
        target="_blank"
        rel="noopener noreferrer"
        class="classes-content__btn classes-content__btn--primary classes-content__btn--big"
      >
        {{ t("classes.enroll") }}
        <ChevronRight />
      </a>
    </div>
  </section>
</template>

<style scoped>
/* === CTA SECTION START === */
.classes-content__cta-section {
  padding: var(--section-padding) 0;
  text-align: center;
  padding-top: 2rem;
}

.classes-content__cta-banner {
  padding: 5rem 3rem;
  border-radius: 4rem;
  max-width: 900px;
  margin: 0 auto;
  background: var(--card-bg);
  color: var(--card-accent);
  animation: fadeIn 0.8s ease forwards;
}

.classes-content__cta-banner--orange {
  --card-bg: #fff7ed;
  --card-icon: var(--forro-orange);
  --card-accent: var(--forro-earth);
}

.classes-content__cta-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-family: var(--font-serif);
  margin-bottom: 1.5rem;
  font-style: italic;
  color: var(--dark);
}

.classes-content__cta-description {
  margin-bottom: 2rem;
}

.classes-content__btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 32px;
  border-radius: var(--radius-full);
  font-weight: 600;
  cursor: pointer;
  border: none;
  background: none;
  font-family: var(--font-sans);
  font-size: 16px;
  text-decoration: none;
  transition: var(--transition);
}

.classes-content__btn--primary {
  background-color: var(--forro-orange);
  color: var(--white);
  box-shadow: var(--shadow-md);
}

.classes-content__btn--primary:hover {
  background-color: var(--forro-red);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.classes-content__btn--big {
  padding: 1.25rem 3.5rem;
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  .classes-content__cta-banner {
    padding: 3rem 1.5rem;
  }
}
/* === CTA SECTION END === */
</style>
