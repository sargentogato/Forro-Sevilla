<script setup lang="ts">
import { Calendar, ChevronRight, Music, Users } from "lucide-vue-next";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const data = [
  {
    title: "nav.classes",
    description: "home.classes_card_desc",
    icon: Users,
    arrow: ChevronRight,
    to: "/clases",
    colorClass: "access-card--orange",
  },
  {
    title: "Festival 2026",
    description: "home.festival_card_desc",
    icon: Music,
    arrow: ChevronRight,
    to: "/festival-2026",
    colorClass: "access-card--red",
  },
  {
    title: "nav.events",
    description: "home.events_card_desc",
    icon: Calendar,
    arrow: ChevronRight,
    to: "/eventos",
    colorClass: "access-card--gold",
  },
];
</script>

<template>
  <section class="quick-access">
    <div class="quick-access__head">
      <h2 class="serif quick-access__title">{{ t("home.quick_access") }}</h2>
      <div class="quick-access__underline"></div>
    </div>

    <div class="quick-access__grid">
      <router-link
        v-for="item in data"
        :key="item.title"
        :to="item.to"
        class="access-card"
        :class="item.colorClass"
      >
        <div class="access-card__icon">
          <component :is="item.icon" :size="28" />
        </div>
        <div class="access-card__body">
          <h3 class="serif access-card__title">{{ t(item.title) }}</h3>
          <p class="access-card__text">{{ t(item.description) }}</p>
        </div>
        <div class="access-card__arrow"><component :is="item.arrow" /></div>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.quick-access {
  background-color: var(--gray-100);
  padding: 64px 20px;
}

.quick-access__head {
  margin-bottom: 64px;
  text-align: center;
}

.quick-access__underline {
  width: 80px;
  height: 4px;
  background: var(--forro-orange);
  margin: 16px auto 0;
  border-radius: 99px;
}

.quick-access__grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 768px) {
  .quick-access__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.access-card {
  position: relative;
  padding: 64px 48px;
  border-radius: 64px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 380px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 2px solid transparent;
  text-decoration: none;
}

.access-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
}

/* Modifiers for colors */
.access-card--orange {
  background-color: #fff7ed;
  --card-icon: var(--forro-orange);
  --card-accent: var(--forro-earth);
  border-color: rgba(242, 125, 38, 0.1);
}

.access-card--orange:hover {
  border-color: var(--forro-orange);
}

.access-card--red {
  background-color: #fef2f2;
  --card-icon: var(--forro-red);
  --card-accent: #991b1b;
  border-color: rgba(217, 68, 54, 0.1);
}

.access-card--red:hover {
  border-color: var(--forro-red);
}

.access-card--gold {
  background-color: #fffbeb;
  --card-icon: var(--forro-gold);
  --card-accent: #92400e;
  border-color: rgba(242, 169, 34, 0.1);
}

.access-card--gold:hover {
  border-color: var(--forro-gold);
}

.access-card__icon {
  width: 72px;
  height: 72px;
  border-radius: 24px;
  background: white;
  color: var(--card-icon);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
  margin-bottom: 40px;
}

.access-card__title {
  font-size: 2rem;
  margin-bottom: 12px;
  color: var(--card-accent);
}

.access-card__text {
  color: var(--gray-700);
  font-weight: 500;
  opacity: 0.8;
}

.access-card__arrow {
  margin-top: 32px;
  align-self: flex-end;
  color: var(--card-icon);
  transition: var(--transition);
}

.access-card:hover .access-card__arrow {
  transform: translateX(10px);
}
</style>
