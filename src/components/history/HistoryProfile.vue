<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { resolveAssetPath } from "../../utils/assetPaths";

const { t } = useI18n();
</script>

<template>
  <section class="history-profile">
    <div class="history-profile__intro">
      <div class="history-profile__picture">
        <img
          :src="resolveAssetPath('/images/elton/profile.jpg')"
          alt="Elton Rodrigues"
          class="history-profile__image"
          loading="lazy"
        />
      </div>
      <div class="history-profile__info">
        <h2 class="history-profile__name">Elton Rodrigues</h2>
        <span class="history-profile__role">{{ t("history.elton_role") }}</span>
        <p class="history-profile__bio">{{ t("history.elton_bio") }}</p>
      </div>
    </div>

    <div class="history-profile__body">
      <p>{{ t("history.elton_p1") }}</p>
      <p>{{ t("history.elton_p2") }}</p>
      <p>{{ t("history.elton_p3") }}</p>
      <p>{{ t("history.elton_p4") }}</p>
      <p>{{ t("history.elton_p5") }}</p>
    </div>

    <blockquote class="history-profile__quote">
      {{ t("history.elton_quote") }}
    </blockquote>
  </section>
</template>

<style scoped>
.history-profile {
  color: var(--gray-700);
}

.history-profile__intro {
  display: flex;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.history-profile__picture {
  width: 250px;
  height: 250px;
  overflow: hidden;
  border: 6px solid var(--forro-orange);
  border-radius: 50%;
  flex-shrink: 0;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.history-profile__picture:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.history-profile__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.history-profile__info {
  flex: 1;
}

.history-profile__name {
  margin: 0 0 1.5rem;
  font-family: var(--font-serif);
  font-size: 2.5rem;
  color: var(--forro-earth);
  line-height: 1.2;
}

.history-profile__role {
  color: var(--forro-orange);
  font-weight: 800;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.history-profile__bio {
  margin: 1.5rem 0 0;
  color: var(--gray-500);
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.8;
}

.history-profile__body p {
  margin: 0 0 1.25rem;
  font-size: 1.1rem;
  line-height: 1.8;
}

.history-profile__quote {
  margin: 3rem 0 0;
  padding: 25px 15px;
  border: 1px solid rgba(242, 125, 38, 0.2);
  border-radius: 1.5rem;
  background: var(--bg-base);
  color: var(--forro-orange);
  font-family: var(--font-serif);
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.6;
  text-align: center;
  box-shadow: var(--shadow-sm);
}

@media (max-width: 768px) {
  .history-profile__intro {
    justify-content: center;
    text-align: center;
  }

  .history-profile__name {
    font-size: 2rem;
  }
}
</style>
