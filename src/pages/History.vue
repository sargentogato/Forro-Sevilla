<script setup lang="ts">
import { BookOpen, Map, User } from "lucide-vue-next";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import HistoryGallery from "../components/history/HistoryGallery.vue";
import HistoryRhythms from "../components/history/HistoryRhythms.vue";
import HistoryTabs from "../components/history/HistoryTabs.vue";
import { resolveAssetPath } from "../utils/assetPaths";

const { t } = useI18n();
const activeTab = ref("forro");

const tabs = computed(() => [
  { id: "forro", name: t("history.tab_forro"), icon: BookOpen },
  { id: "school", name: t("history.tab_school"), icon: Map },
  { id: "elton", name: t("history.tab_elton"), icon: User },
]);
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
      <div class="history__navigation">
        <HistoryTabs v-model="activeTab" class="animate-fade" :tabs="tabs" />
      </div>

      <div class="history__content animate-fade">
        <transition name="fade-slide" mode="out-in">
          <div v-if="activeTab === 'forro'" key="forro" class="history__view">
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
            <HistoryRhythms class="history__section" />

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

            <HistoryGallery />
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

.history__content {
  background: var(--bg-surface);
  padding: 4rem 5rem;
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
  padding: 25px 15px;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  font-style: italic;
  line-height: 1.6;
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
.history__panel {
  border: 1px solid var(--border-light);
  padding: 2rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.history__banner--instrument {
  margin-bottom: 16px;
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

@media (max-width: 768px) {
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
