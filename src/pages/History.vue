<script setup lang="ts">
import { BookOpen, Map, User, X } from "lucide-vue-next";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const activeTab = ref("forro");
const selectedImage = ref<{
  src: string;
  alt: string;
  caption?: string;
} | null>(null);

const tabs = computed(() => [
  { id: "forro", name: t("history.tab_forro"), icon: BookOpen },
  { id: "school", name: t("history.tab_school"), icon: Map },
  { id: "elton", name: t("history.tab_elton"), icon: User },
]);

const galleryImages = [
  {
    id: 1,
    src: "/images/elton/gallery-1.jpg",
    alt: "Elton Forró",
    caption: "Elton en escena",
    variant: "tall",
  },
  {
    id: 2,
    src: "/images/elton/gallery-2.jpg",
    alt: "Elton Forró",
    caption: "Momento de baile",
    variant: "wide",
  },
  {
    id: 3,
    src: "/images/elton/gallery-3.jpg",
    alt: "Elton Forró",
    caption: "Encuentro con la comunidad",
    variant: "default",
  },
  {
    id: 4,
    src: "/images/elton/gallery-4.jpg",
    alt: "Elton Forró",
    caption: "Público disfrutando",
    variant: "tall",
  },
  {
    id: 5,
    src: "/images/elton/gallery-5.jpg",
    alt: "Elton Forró",
    caption: "Música y tradición",
    variant: "default",
  },
  {
    id: 6,
    src: "/images/elton/gallery-6.jpg",
    alt: "Elton Forró",
    caption: "Estilo y energía",
    variant: "wide",
  },
  {
    id: 7,
    src: "/images/elton/gallery-7.jpg",
    alt: "Elton Forró",
    caption: "Celebración del forró",
    variant: "default",
  },
];

const openImage = (image: { src: string; alt: string; caption?: string }) => {
  selectedImage.value = image;
};

const closeImage = () => {
  selectedImage.value = null;
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    closeImage();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <div class="history-page">
    <header class="page-header flex-center bg-gold text-white">
      <div class="container animate-fade">
        <h1 class="text-white">{{ t("nav.history") }}</h1>
        <div class="title-underline"></div>
      </div>
    </header>

    <div class="container section">
      <!-- Tabs navigation -->
      <div class="tabs-nav animate-fade">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="tab-btn"
          :class="{ active: activeTab === tab.id }"
        >
          <component :is="tab.icon" :size="20" />
          <span>{{ tab.name }}</span>
        </button>
      </div>

      <!-- Tab content -->
      <div class="tab-content animate-fade shadow-lg">
        <transition name="fade-slide" mode="out-in">
          <!-- FORRO HISTORY TAB -->
          <div v-if="activeTab === 'forro'" key="forro" class="content-view">
            <!-- Original Intro Section -->
            <div class="grid grid-2 gap-8 items-center mb-16">
              <div>
                <h2 class="serif h2-title mb-6">
                  {{ t("history.forro_subtitle") }}
                </h2>
                <p class="text-desc">{{ t("history.forro_p1") }}</p>
                <p class="text-desc">{{ t("history.forro_p2") }}</p>
              </div>
              <div class="media-wrapper hover-lift">
                <img
                  src="/images/history/forro-couple.jpg"
                  alt="Old forró"
                  class="shadow-lg object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>

            <div
              class="quote-box glass-orange serif italic text-center mb-16 shadow-sm"
            >
              {{ t("history.forro_quote") }}
            </div>

            <!-- Section 1: Intro -->
            <div class="grid grid-2 gap-8 items-center mb-16">
              <div>
                <h2 class="serif h2-title">
                  {{ t("history.forro_what_title") }}
                </h2>
                <p class="text-desc">{{ t("history.forro_what_p1") }}</p>
              </div>
              <div class="media-wrapper hover-lift">
                <img
                  src="/images/history/forro-festival.jpg"
                  alt="¿Qué es el Forró?"
                  class="shadow-lg object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>

            <!-- Section 2: Origin of Term -->
            <div class="glass p-8 rounded-2xl mb-16 shadow-md border-light">
              <h2 class="serif h2-title text-center mb-8">
                {{ t("history.forro_origin_title") }}
              </h2>
              <p class="text-desc">{{ t("history.forro_origin_p1") }}</p>
              <p class="text-desc">{{ t("history.forro_origin_p2") }}</p>
              <p class="text-desc">{{ t("history.forro_origin_p3") }}</p>
              <div
                class="quote-box glass-orange serif italic text-center mt-8 shadow-sm"
              >
                {{ t("history.forro_origin_p4") }}
              </div>
            </div>

            <!-- Section 3: How to dance -->
            <div class="grid grid-2 gap-8 items-center mb-16">
              <div class="media-wrapper hover-lift order-2-mobile">
                <img
                  src="/images/history/forro-couple.jpg"
                  alt="Bailando Forró"
                  class="shadow-lg object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div class="order-1-mobile">
                <h2 class="serif h2-title">
                  {{ t("history.forro_how_title") }}
                </h2>
                <p class="text-desc">{{ t("history.forro_how_p1") }}</p>
                <p class="text-desc">
                  <strong
                    >{{ t("history.forro_how_p2").split(":")[0] }}:</strong
                  >
                  {{
                    t("history.forro_how_p2").split(":").slice(1).join(":") ||
                    t("history.forro_how_p2")
                  }}
                </p>
                <p class="text-desc">
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
            <div class="mb-16">
              <h2 class="serif h2-title text-center mb-8">
                {{ t("history.forro_rhythms_title") }}
              </h2>
              <p class="text-desc text-center mb-12 max-w-3xl mx-auto">
                {{ t("history.forro_rhythms_p1") }}
              </p>

              <div class="grid grid-2 gap-6">
                <div class="glass p-6 rounded-xl border-light hover-lift">
                  <h3 class="serif text-2xl text-accent mb-3 font-bold">
                    Baião
                  </h3>
                  <p class="text-desc mb-0 font-sm">
                    {{ t("history.forro_rhythms_p2") }}
                  </p>
                </div>
                <div class="glass p-6 rounded-xl border-light hover-lift">
                  <h3 class="serif text-2xl text-accent mb-3 font-bold">
                    Xote
                  </h3>
                  <p class="text-desc mb-0 font-sm">
                    {{ t("history.forro_rhythms_p3") }}
                  </p>
                </div>
                <div class="glass p-6 rounded-xl border-light hover-lift">
                  <h3 class="serif text-2xl text-accent mb-3 font-bold">
                    Xaxado
                  </h3>
                  <p class="text-desc mb-0 font-sm">
                    {{ t("history.forro_rhythms_p4") }}
                  </p>
                </div>
                <div class="glass p-6 rounded-xl border-light hover-lift">
                  <h3 class="serif text-2xl text-accent mb-3 font-bold">
                    Coco
                  </h3>
                  <p class="text-desc mb-0 font-sm">
                    {{ t("history.forro_rhythms_p5") }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Section 5: Diffusion & Instruments -->
            <div class="grid grid-2 gap-8 items-stretch">
              <div
                class="glass p-8 rounded-2xl border-light flex flex-col justify-between"
              >
                <div>
                  <h2 class="serif h2-title mb-6">
                    {{ t("history.forro_diffusion_title") }}
                  </h2>
                  <p class="text-desc">{{ t("history.forro_diffusion_p1") }}</p>
                  <p class="text-desc">{{ t("history.forro_diffusion_p2") }}</p>
                </div>
              </div>
              <div
                class="glass p-8 rounded-2xl border-light flex flex-col justify-between"
              >
                <div>
                  <h2 class="serif h2-title mb-6">
                    {{ t("history.forro_instruments_title") }}
                  </h2>
                  <div class="media-banner mb-6 overflow-hidden rounded-xl">
                    <img
                      src="/images/history/forro-instruments.jpg"
                      alt="Instrumentos"
                      class="shadow-md object-cover w-full h-48 hover-scale"
                      loading="lazy"
                    />
                  </div>
                  <p class="text-desc">
                    {{ t("history.forro_instruments_p1") }}
                  </p>
                  <p class="text-desc">
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
            class="content-view"
          >
            <h2 class="serif h2-title">{{ t("history.school_subtitle") }}</h2>
            <p class="text-desc">{{ t("history.school_p1") }}</p>
            <p class="text-desc">{{ t("history.school_p2") }}</p>
            <p class="text-desc">{{ t("history.school_p3") }}</p>
            <div
              class="media-banner mt-12 overflow-hidden rounded-2xl hover-lift"
            >
              <img
                src="/images/history/forro-festival.jpg"
                alt="Students dancing"
                class="shadow-md object-cover w-full hover-scale"
                loading="lazy"
              />
            </div>
          </div>

          <!-- ELTON TAB -->
          <div
            v-else-if="activeTab === 'elton'"
            key="elton"
            class="content-view"
          >
            <div class="profile-layout flex gap-12 items-center mb-12">
              <div class="profile-pic-wrapper shadow-lg hover-lift">
                <img
                  src="/images/elton/profile.jpg"
                  alt="Elton Rodrigues"
                  class="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div class="profile-info">
                <h2 class="serif h2-title profile-name mb-2">
                  Elton Rodrigues
                </h2>
                <span class="profile-role text-upper">{{
                  t("history.elton_role")
                }}</span>
                <p class="mt-6 italic text-muted text-lg">
                  {{ t("history.elton_bio") }}
                </p>
              </div>
            </div>
            <p class="text-desc">{{ t("history.elton_p1") }}</p>
            <p class="text-desc">{{ t("history.elton_p2") }}</p>
            <p class="text-desc">{{ t("history.elton_p3") }}</p>
            <p class="text-desc">{{ t("history.elton_p4") }}</p>
            <p class="text-desc">{{ t("history.elton_p5") }}</p>
            <div
              class="quote-box glass-orange serif italic text-center mt-12 shadow-sm text-lg"
            >
              {{ t("history.elton_quote") }}
            </div>

            <div class="mt-16 mb-4">
              <h3 class="serif h3-title text-primary text-center mb-10">
                {{ t("history.elton_gallery_title") }}
              </h3>
              <div class="masonry-gallery">
                <button
                  v-for="image in galleryImages"
                  :key="image.id"
                  type="button"
                  class="masonry-card"
                  :class="`masonry-card--${image.variant}`"
                  @click="openImage(image)"
                  aria-label="Ampliar imagen"
                >
                  <img :src="image.src" :alt="image.alt" loading="lazy" />
                </button>
              </div>
            </div>

            <div
              v-if="selectedImage"
              class="lightbox-backdrop"
              @click.self="closeImage"
            >
              <div class="lightbox-modal">
                <button
                  type="button"
                  class="lightbox-close"
                  @click="closeImage"
                  aria-label="Cerrar imagen"
                >
                  <X :size="24" />
                </button>
                <img
                  :src="selectedImage.src"
                  :alt="selectedImage.alt"
                  class="lightbox-image"
                />
                <p v-if="selectedImage.caption" class="lightbox-caption">
                  {{ selectedImage.caption }}
                </p>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  height: 40vh;
  min-height: 300px;
  text-align: center;
}

.bg-gold {
  background-color: var(--forro-gold);
}

.title-underline {
  width: 100px;
  height: 6px;
  background: var(--white);
  margin: 1.5rem auto 0;
  border-radius: 99px;
}

.tabs-nav {
  display: flex;
  background: var(--bg-surface);
  padding: 0.5rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-light);
  margin-bottom: 4rem;
  gap: 0.5rem;
  box-shadow: var(--shadow-sm);
}

.tab-btn {
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

.tab-btn:hover {
  background: var(--gray-100);
  color: var(--forro-orange);
}

.tab-btn.active {
  background: var(--forro-orange);
  color: white;
  box-shadow: var(--shadow-md);
}

.tab-content {
  background: var(--bg-surface);
  padding: 4rem 5rem;
  border-radius: 2.5rem;
  min-height: 500px;
}

.h2-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--forro-earth);
  line-height: 1.2;
}

.text-desc {
  font-size: 1.1rem;
  color: var(--gray-700);
  line-height: 1.8;
  margin-bottom: 1.25rem;
}

.text-accent {
  color: var(--forro-orange);
}

.media-wrapper img,
.media-banner img {
  border-radius: var(--radius-lg);
}

.media-wrapper {
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.media-banner {
  border-radius: var(--radius-lg);
}

.quote-box {
  padding: 2.5rem 3rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  line-height: 1.6;
}

.glass-orange {
  background: var(--bg-base);
  color: var(--forro-orange);
  border: 1px solid rgba(242, 125, 38, 0.2);
}

.border-light {
  border: 1px solid var(--border-light);
}

.p-8 {
  padding: 2rem;
}
.p-6 {
  padding: 1.5rem;
}
.mb-16 {
  margin-bottom: 4rem;
}
.mb-12 {
  margin-bottom: 3rem;
}
.mb-8 {
  margin-bottom: 2rem;
}
.mb-6 {
  margin-bottom: 1.5rem;
}
.mb-3 {
  margin-bottom: 0.75rem;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.mb-0 {
  margin-bottom: 0;
}
.mt-8 {
  margin-top: 2rem;
}
.mt-12 {
  margin-top: 3rem;
}
.font-sm {
  font-size: 0.95rem;
}
.max-w-3xl {
  max-width: 48rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.rounded-2xl {
  border-radius: 1.5rem;
}
.rounded-xl {
  border-radius: 1rem;
}
.object-cover {
  object-fit: cover;
}
.w-full {
  width: 100%;
}
.h-full {
  height: 100%;
}
.h-48 {
  height: 12rem;
}
.flex {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.justify-between {
  justify-content: space-between;
}
.items-center {
  align-items: center;
}
.items-stretch {
  align-items: stretch;
}

.hover-lift {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.hover-scale {
  transition: transform 0.5s ease;
}
.hover-lift:hover .hover-scale {
  transform: scale(1.05);
}

.profile-layout {
  flex-wrap: wrap;
}

.profile-pic-wrapper {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  border: 6px solid var(--forro-orange);
  flex-shrink: 0;
}

.profile-role {
  color: var(--forro-orange);
  font-weight: 800;
  font-size: 0.85rem;
}

.text-muted {
  color: var(--gray-500);
}
.text-lg {
  font-size: 1.125rem;
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

.masonry-gallery {
  column-count: 1;
  column-gap: 1.25rem;
}

.masonry-card {
  display: inline-block;
  width: 100%;
  margin: 0 0 1rem;
  padding: 0;
  border: none;
  border-radius: 1.5rem;
  overflow: hidden;
  background: var(--bg-surface);
  box-shadow: var(--shadow-md);
  cursor: pointer;
  break-inside: avoid;
}

.masonry-card img {
  display: block;
  width: 100%;
  height: auto;
  transition:
    transform 0.35s ease,
    filter 0.35s ease;
}

.masonry-card:hover img {
  transform: scale(1.03);
  filter: brightness(1.02);
}

.masonry-card--tall img {
  min-height: 22rem;
  object-fit: cover;
}

.masonry-card--wide img {
  min-height: 16rem;
  object-fit: cover;
}

.lightbox-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: rgba(12, 12, 12, 0.8);
  backdrop-filter: blur(6px);
}

.lightbox-modal {
  position: relative;
  width: min(100%, 900px);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.lightbox-image {
  max-width: 100%;
  max-height: 78vh;
  object-fit: contain;
  border-radius: 1.25rem;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
}

.lightbox-caption {
  color: white;
  font-size: 1rem;
  text-align: center;
}

.lightbox-close {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  width: 2.75rem;
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  color: var(--forro-earth);
  cursor: pointer;
  box-shadow: var(--shadow-sm);
}

@media (min-width: 640px) {
  .masonry-gallery {
    column-count: 2;
  }
}

@media (min-width: 768px) {
  .masonry-gallery {
    column-count: 3;
  }
}

@media (max-width: 768px) {
  .tabs-nav {
    flex-direction: column;
  }
  .tab-content {
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
  .profile-layout {
    justify-content: center;
    text-align: center;
  }
  .h2-title {
    font-size: 2rem;
  }
}
</style>
