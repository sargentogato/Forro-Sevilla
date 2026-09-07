<script setup lang="ts">
import { BookOpen, Map, User } from "lucide-vue-next";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { resolveAssetPath } from "../utils/assetPaths";

const { t } = useI18n();
const activeTab = ref("forro");

const tabs = computed(() => [
  { id: "forro", name: t("history.tab_forro"), icon: BookOpen },
  { id: "school", name: t("history.tab_school"), icon: Map },
  { id: "elton", name: t("history.tab_elton"), icon: User },
]);

const galleryImages = [
  {
    id: 1,
    src: resolveAssetPath("/images/elton/gallery-1.jpg"),
    alt: "Elton Forró",
    caption: "Elton en escena",
    variant: "tall",
  },
  {
    id: 2,
    src: resolveAssetPath("/images/elton/gallery-2.jpg"),
    alt: "Elton Forró",
    caption: "Momento de baile",
    variant: "wide",
  },
  {
    id: 3,
    src: resolveAssetPath("/images/elton/gallery-3.jpg"),
    alt: "Elton Forró",
    caption: "Encuentro con la comunidad",
    variant: "default",
  },
  {
    id: 4,
    src: resolveAssetPath("/images/elton/gallery-4.jpg"),
    alt: "Elton Forró",
    caption: "Público disfrutando",
    variant: "tall",
  },
  {
    id: 5,
    src: resolveAssetPath("/images/elton/gallery-5.jpg"),
    alt: "Elton Forró",
    caption: "Música y tradición",
    variant: "default",
  },
  {
    id: 6,
    src: resolveAssetPath("/images/elton/gallery-6.jpg"),
    alt: "Elton Forró",
    caption: "Estilo y energía",
    variant: "wide",
  },
  {
    id: 7,
    src: resolveAssetPath("/images/elton/gallery-7.jpg"),
    alt: "Elton Forró",
    caption: "Celebración del forró",
    variant: "default",
  },
];
</script>

<template>
  <div class="history">
    <header class="history__header history__header--gold">
      <div class="container animate-fade">
        <h1 class="history__title">{{ t("nav.history") }}</h1>
        <div class="history__title-underline"></div>
      </div>
    </header>

    <div class="container section">
      <!-- Tabs navigation -->
      <div class="history__tabs animate-fade">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="history__tab"
          :class="{ 'history__tab--active': activeTab === tab.id }"
        >
          <component :is="tab.icon" :size="20" />
          <span>{{ tab.name }}</span>
        </button>
      </div>

      <!-- Tab content -->
      <div class="history__content animate-fade">
        <transition name="fade-slide" mode="out-in">
          <!-- FORRO HISTORY TAB -->
          <div v-if="activeTab === 'forro'" key="forro" class="history__view">
            <!-- Original Intro Section -->
            <div class="grid grid-2 gap-8 history__split history__section">
              <div>
                <h2 class="history__heading">
                  {{ t("history.forro_subtitle") }}
                </h2>
                <p class="history__text">{{ t("history.forro_p1") }}</p>
                <p class="history__text">{{ t("history.forro_p2") }}</p>
              </div>
              <div class="history__media history__hover-lift">
                <img
                  :src="resolveAssetPath('/images/history/forro-couple.jpg')"
                  alt="Old forró"
                  class="history__image"
                  loading="lazy"
                />
              </div>
            </div>

            <div
              class="history__quote history__quote--orange history__quote--section-end"
            >
              {{ t("history.forro_quote") }}
            </div>

            <!-- Section 1: Intro -->
            <div class="grid grid-2 gap-8 history__split history__section">
              <div>
                <h2 class="history__heading">
                  {{ t("history.forro_what_title") }}
                </h2>
                <p class="history__text">{{ t("history.forro_what_p1") }}</p>
              </div>
              <div class="history__media history__hover-lift">
                <img
                  :src="resolveAssetPath('/images/history/forro-festival.jpg')"
                  alt="¿Qué es el Forró?"
                  class="history__image"
                  loading="lazy"
                />
              </div>
            </div>

            <!-- Section 2: Origin of Term -->
            <div class="history__panel history__section glass">
              <h2 class="history__heading history__heading--centered">
                {{ t("history.forro_origin_title") }}
              </h2>
              <p class="history__text">{{ t("history.forro_origin_p1") }}</p>
              <p class="history__text">{{ t("history.forro_origin_p2") }}</p>
              <p class="history__text">{{ t("history.forro_origin_p3") }}</p>
              <div
                class="history__quote history__quote--orange history__quote--nested"
              >
                {{ t("history.forro_origin_p4") }}
              </div>
            </div>

            <!-- Section 3: How to dance -->
            <div class="grid grid-2 gap-8 history__split history__section">
              <div class="history__media history__hover-lift order-2-mobile">
                <img
                  :src="resolveAssetPath('/images/history/forro-couple.jpg')"
                  alt="Bailando Forró"
                  class="history__image"
                  loading="lazy"
                />
              </div>
              <div class="history__text-column order-1-mobile">
                <h2 class="history__heading">
                  {{ t("history.forro_how_title") }}
                </h2>
                <p class="history__text">{{ t("history.forro_how_p1") }}</p>
                <p class="history__text">
                  <strong
                    >{{ t("history.forro_how_p2").split(":")[0] }}:</strong
                  >
                  {{
                    t("history.forro_how_p2").split(":").slice(1).join(":") ||
                    t("history.forro_how_p2")
                  }}
                </p>
                <p class="history__text">
                  <strong
                    >{{ t("history.forro_how_p3").split(":")[0] }}:</strong
                  >
                  {{
                    t("history.forro_how_p3").split(":").slice(1).join(":") ||
                    t("history.forro_how_p3")
                  }}
                </p>
              </div>
            </div>

            <!-- Section 4: Rhythms -->
            <div class="history__section">
              <h2 class="history__heading history__heading--centered">
                {{ t("history.forro_rhythms_title") }}
              </h2>
              <p class="history__intro-text history__text">
                {{ t("history.forro_rhythms_p1") }}
              </p>

              <div class="history__rhythms-grid grid grid-2">
                <div class="history__rhythm glass history__hover-lift">
                  <h3 class="history__rhythm-title">Baião</h3>
                  <p class="history__rhythm-text history__text">
                    {{ t("history.forro_rhythms_p2") }}
                  </p>
                </div>
                <div class="history__rhythm glass history__hover-lift">
                  <h3 class="history__rhythm-title">Xote</h3>
                  <p class="history__rhythm-text history__text">
                    {{ t("history.forro_rhythms_p3") }}
                  </p>
                </div>
                <div class="history__rhythm glass history__hover-lift">
                  <h3 class="history__rhythm-title">Xaxado</h3>
                  <p class="history__rhythm-text history__text">
                    {{ t("history.forro_rhythms_p4") }}
                  </p>
                </div>
                <div class="history__rhythm glass history__hover-lift">
                  <h3 class="history__rhythm-title">Coco</h3>
                  <p class="history__rhythm-text history__text">
                    {{ t("history.forro_rhythms_p5") }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Section 5: Diffusion & Instruments -->
            <div class="grid grid-2 gap-8 history__panels">
              <div class="history__panel glass">
                <div>
                  <h2 class="history__heading">
                    {{ t("history.forro_diffusion_title") }}
                  </h2>
                  <p class="history__text">
                    {{ t("history.forro_diffusion_p1") }}
                  </p>
                  <p class="history__text">
                    {{ t("history.forro_diffusion_p2") }}
                  </p>
                </div>
              </div>
              <div class="history__panel glass">
                <div>
                  <h2 class="history__heading">
                    {{ t("history.forro_instruments_title") }}
                  </h2>
                  <div class="history__banner history__banner--instrument">
                    <img
                      :src="
                        resolveAssetPath(
                          '/images/history/forro-instruments.jpg',
                        )
                      "
                      alt="Instrumentos"
                      class="history__image history__image--zoom"
                      loading="lazy"
                    />
                  </div>
                  <p class="history__text">
                    {{ t("history.forro_instruments_p1") }}
                  </p>
                  <p class="history__text">
                    {{ t("history.forro_instruments_p2") }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- SCHOOL TAB -->
          <div
            v-else-if="activeTab === 'school'"
            key="school"
            class="history__view"
          >
            <h2 class="history__heading">
              {{ t("history.school_subtitle") }}
            </h2>
            <p class="history__text">{{ t("history.school_p1") }}</p>
            <p class="history__text">{{ t("history.school_p2") }}</p>
            <p class="history__text">{{ t("history.school_p3") }}</p>
            <div
              class="history__banner history__banner--spaced history__hover-lift"
            >
              <img
                :src="resolveAssetPath('/images/history/forro-festival.jpg')"
                alt="Students dancing"
                class="history__image history__image--zoom"
                loading="lazy"
              />
            </div>
          </div>

          <!-- ELTON TAB -->
          <div
            v-else-if="activeTab === 'elton'"
            key="elton"
            class="history__view"
          >
            <div class="history__profile history__profile--spaced">
              <div class="history__profile-picture history__hover-lift">
                <img
                  :src="resolveAssetPath('/images/elton/profile.jpg')"
                  alt="Elton Rodrigues"
                  class="history__image"
                  loading="lazy"
                />
              </div>
              <div class="history__profile-info">
                <h2 class="history__heading history__profile-name">
                  Elton Rodrigues
                </h2>
                <span class="history__profile-role">{{
                  t("history.elton_role")
                }}</span>
                <p class="history__profile-bio">
                  {{ t("history.elton_bio") }}
                </p>
              </div>
            </div>
            <p class="history__text">{{ t("history.elton_p1") }}</p>
            <p class="history__text">{{ t("history.elton_p2") }}</p>
            <p class="history__text">{{ t("history.elton_p3") }}</p>
            <p class="history__text">{{ t("history.elton_p4") }}</p>
            <p class="history__text">{{ t("history.elton_p5") }}</p>
            <div
              class="history__quote history__quote--orange history__quote--closing"
            >
              {{ t("history.elton_quote") }}
            </div>

            <div class="history__gallery-section">
              <h3 class="history__gallery-title">
                {{ t("history.elton_gallery_title") }}
              </h3>
              <div class="history__gallery">
                <div
                  v-for="image in galleryImages"
                  :key="image.id"
                  type="button"
                  class="history__gallery-card"
                  :class="`history__gallery-card--${image.variant}`"
                  aria-label="Ver imagen"
                >
                  <img :src="image.src" :alt="image.alt" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.history__header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
  min-height: 300px;
  text-align: center;
  color: var(--white);
}

.history__header--gold {
  background-color: var(--forro-gold);
}

.history__title-underline {
  width: 100px;
  height: 6px;
  background: var(--white);
  margin: 1.5rem auto 0;
  border-radius: 99px;
}

.history__title {
  color: var(--white);
}

.history__tabs {
  display: flex;
  background: var(--bg-surface);
  padding: 0.5rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-light);
  margin-bottom: 4rem;
  gap: 0.5rem;
  box-shadow: var(--shadow-sm);
}

.history__tab {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.25rem;
  border-radius: var(--radius-md);
  font-weight: 700;
  color: var(--gray-500);
  border: none;
  background: none;
  cursor: pointer;
  transition: var(--transition);
  white-space: nowrap;
}

.history__tab:hover {
  background: var(--gray-100);
  color: var(--forro-orange);
}

.history__tab--active {
  background: var(--forro-orange);
  color: white;
  box-shadow: var(--shadow-md);
}

.history__content {
  background: var(--bg-surface);
  padding: 4rem 5rem;
  border-radius: 2.5rem;
  min-height: 500px;
  box-shadow: var(--shadow-lg);
}

.history__section {
  margin-bottom: 4rem;
}

.history__split {
  align-items: center;
}

.history__heading {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--forro-earth);
  line-height: 1.2;
}

.history__heading--centered {
  text-align: center;
}

.history__text {
  font-size: 1.1rem;
  color: var(--gray-700);
  line-height: 1.8;
  margin-bottom: 1.25rem;
}

.history__rhythm-title {
  font-family: var(--font-serif);
  color: var(--forro-orange);
}

.history__media img,
.history__banner img {
  width: 100%;
  object-fit: cover;
  border-radius: var(--radius-lg);
}

.history__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.history__media {
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.history__banner {
  border-radius: var(--radius-lg);
}

.history__quote {
  font-family: var(--font-serif);
  padding: 2.5rem 3rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  font-style: italic;
  line-height: 1.6;
  text-align: center;
  box-shadow: var(--shadow-sm);
}

.history__quote--orange {
  background: var(--bg-base);
  color: var(--forro-orange);
  border: 1px solid rgba(242, 125, 38, 0.2);
}

.history__quote--section-end {
  margin-bottom: 4rem;
}

.history__quote--nested {
  margin-top: 2rem;
}

.history__quote--closing {
  margin-top: 3rem;
  font-size: 1.125rem;
}
.history__rhythm {
  border: 1px solid var(--border-light);
  padding: 1.5rem;
  border-radius: 1rem;
}

.history__panel {
  border: 1px solid var(--border-light);
  padding: 2rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.history__rhythm-title {
  margin-bottom: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.history__rhythm-text {
  font-size: 0.95rem;
  margin-bottom: 0;
}

.history__rhythms-grid {
  gap: 1.5rem;
}

.history__gallery-section {
  margin-top: 4rem;
  margin-bottom: 1rem;
}

.history__gallery-section {
  margin-top: 4rem;
  margin-bottom: 1rem;
}

.history__intro-text {
  max-width: 48rem;
  margin: 0 auto 3rem;
  text-align: center;
}

.history__banner--instrument img {
  height: 12rem;
}

.history__banner--spaced {
  margin-top: 3rem;
}

.history__profile {
  display: flex;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.history__profile--spaced {
  margin-bottom: 3rem;
}

.history__hover-lift {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.history__hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.history__image--zoom {
  transition: transform 0.5s ease;
}

.history__hover-lift:hover .history__image--zoom {
  transform: scale(1.05);
}

.history__profile-picture {
  width: 250px;
  height: 250px;
  overflow: hidden;
  border: 6px solid var(--forro-orange);
  flex-shrink: 0;
}

.history__profile-picture .history__image {
  height: 100%;
}

.history__profile-role {
  color: var(--forro-orange);
  font-weight: 800;
  font-size: 0.85rem;
}

.history__profile-bio {
  color: var(--gray-500);
  font-size: 1.125rem;
  margin-top: 1.5rem;
}

.history__gallery-title {
  color: var(--forro-orange);
  padding-bottom: 15px;
  text-align: center;
}

/* Transitions */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.history__gallery {
  column-count: 1;
  column-gap: 1.25rem;
}

.history__gallery-card {
  display: inline-block;
  width: 100%;
  margin: 0 0 1rem;
  padding: 0;
  border: none;
  border-radius: 1.5rem;
  overflow: hidden;
  background: var(--bg-surface);
  box-shadow: var(--shadow-md);
  break-inside: avoid;
}

.history__gallery-card img {
  display: block;
  width: 100%;
  height: auto;
  transition:
    transform 0.35s ease,
    filter 0.35s ease;
}

.history__gallery-card:hover img {
  transform: scale(1.03);
  filter: brightness(1.02);
}

.history__gallery-card--tall img {
  min-height: 22rem;
  object-fit: cover;
}

.history__gallery-card--wide img {
  min-height: 16rem;
  object-fit: cover;
}

@media (min-width: 640px) {
  .history__gallery {
    column-count: 2;
  }
}

@media (min-width: 768px) {
  .history__gallery {
    column-count: 3;
  }
}

@media (max-width: 768px) {
  .history__tabs {
    flex-direction: column;
  }
  .history__content {
    padding: 3rem 1.5rem;
  }
  .grid-2 {
    grid-template-columns: 1fr;
  }
  .order-2-mobile {
    order: 2;
  }
  .order-1-mobile {
    order: 1;
  }
  .history__profile {
    justify-content: center;
    text-align: center;
  }
  .history__heading {
    font-size: 2rem;
  }
}
</style>
