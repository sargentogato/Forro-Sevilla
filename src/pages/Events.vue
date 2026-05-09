<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Calendar, Instagram } from 'lucide-vue-next';
import DayAgenda from '../components/DayAgenda.vue';
import eventsData from '../data/events.json';

const { t } = useI18n();
</script>

<template>
  <div class="events-page">
    <header class="page-header flex-center bg-earth text-white">
      <div class="container animate-fade">
        <h1 class="text-white">{{ t('nav.events') }}</h1>
        <p class="hero-quote italic mt-4">"{{ t('events.intro_title') }}"</p>
      </div>
    </header>

    <section class="section container">
      <div class="max-w-xl mx-auto flex flex-col items-center">
        <div v-if="eventsData.length === 1 && eventsData[0].id === 'intro'" class="empty-state text-center bg-white p-12 rounded-lg shadow-lg animate-fade w-full">
          <Calendar :size="80" class="mx-auto text-orange mb-8 opacity-20" />
          <h2 class="serif mb-4 text-3xl">{{ eventsData[0].title }}</h2>
          <p class="text-muted text-lg mb-10">{{ eventsData[0].description }}</p>
          <a
            href="https://instagram.com/forrosevilla"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary"
          >
            <Instagram />
            {{ t('home.follow_us') }}
          </a>
        </div>
        <div v-else class="events-list w-full">
          <DayAgenda day="Próximos" color="var(--forro-orange)" :events="eventsData" />
        </div>

        <div class="event-types-card mt-24 bg-light-orange animate-fade w-full">
          <h3 class="serif text-center mb-12 text-3xl">{{ t('events.types_title') }}</h3>
          <div class="grid grid-2 gap-8 max-w-lg mx-auto">
            <div class="type-card palette-orange">
               <span class="type-icon">✨</span>
               <span class="type-label">{{ t('events.type_parties') }}</span>
            </div>
            <div class="type-card palette-red">
               <span class="type-icon">🌳</span>
               <span class="type-label">{{ t('events.type_outdoor') }}</span>
            </div>
            <div class="type-card palette-gold">
               <span class="type-icon">🎷</span>
               <span class="type-label">{{ t('events.type_concerts') }}</span>
            </div>
            <div class="type-card palette-1">
               <span class="type-icon">🤝</span>
               <span class="type-label">{{ t('events.type_collab') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-header {
  height: 40vh;
  min-height: 300px;
  text-align: center;
}

.bg-earth { background-color: var(--forro-earth); }

.hero-quote {
  font-size: 1.25rem;
  opacity: 0.8;
}

.max-w-xl { max-width: 900px; }
.max-w-lg { max-width: 600px; }

.empty-state {
  padding: 5rem 3rem;
  border-radius: var(--radius-lg);
}

.text-orange { color: var(--forro-orange); }
.text-muted { color: var(--gray-500); }

.event-types-card {
  padding: 4rem;
  border-radius: 3rem;
  border: 1px solid var(--gray-200);
}

.type-card {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.5rem;
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  transition: var(--transition);
}

.type-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-sm);
}

.type-icon {
  font-size: 1.5rem;
}

.type-label {
  font-weight: 700;
  color: var(--card-accent);
}

.bg-light-orange { background-color: #fdf5f0; }

@media (max-width: 768px) {
  .grid-2 { grid-template-columns: 1fr; }
  .event-types-card { padding: 2rem 1.5rem; }
}
</style>
