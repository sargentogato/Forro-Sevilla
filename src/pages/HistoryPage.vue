<script setup lang="ts">
import { BookOpen, Map, User } from "lucide-vue-next";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import HistoryForro from "../components/history/HistoryForro.vue";
import HistoryGallery from "../components/history/HistoryGallery.vue";
import HistoryProfile from "../components/history/HistoryProfile.vue";
import HistorySchool from "../components/history/HistorySchool.vue";
import HistoryTabs from "../components/history/HistoryTabs.vue";

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
            <HistoryForro />
          </div>

          <!-- SCHOOL TAB -->
          <div
            v-else-if="activeTab === 'school'"
            key="school"
            class="history__view"
          >
            <HistorySchool />
          </div>

          <!-- ELTON TAB -->
          <div
            v-else-if="activeTab === 'elton'"
            key="elton"
            class="history__view"
          >
            <HistoryProfile />

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
}
</style>
