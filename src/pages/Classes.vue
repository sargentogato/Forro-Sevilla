<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { MapPin, Clock, ChevronRight, Info } from 'lucide-vue-next';
import classesData from '../data/classes.json';

const { t } = useI18n();

const plans = [
  {
    key: 'group',
    title: t('classes.group_classes'),
    subtitle: t('classes.group_classes_subtitle'),
    color: 'var(--forro-orange)',
    prices: classesData.prices.group
  },
  {
    key: 'private_individual',
    title: t('classes.private_individual'),
    subtitle: t('classes.individual_subtitle'),
    color: 'var(--forro-red)',
    prices: classesData.prices.private_individual
  },
  {
    key: 'private_couple',
    title: t('classes.private_couple'),
    subtitle: t('classes.couple_subtitle'),
    color: 'var(--forro-gold)',
    prices: classesData.prices.private_couple
  }
];
</script>

<template>
  <div class="classes-page">
    <header class="page-header flex-center bg-dark text-white relative overflow-hidden">
      <img src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1920&auto=format&fit=crop" class="header-bg-img" alt="Background" fetchpriority="high" decoding="async" />
      <div class="header-overlay"></div>
      <div class="container animate-fade relative z-10">
        <h1 class="text-white hero-title">{{ t('classes.hero_title') }}</h1>
        <p class="hero-subtitle">{{ t('classes.hero_subtitle') }}</p>
        <div class="title-underline"></div>
      </div>
    </header>

    <!-- Venues & Schedules -->
    <section class="section container">
      <div class="section-head-alt flex items-center gap-4">
        <div class="icon-blob orange"><MapPin :size="32" /></div>
        <h2 class="serif">{{ t('classes.hours_locations') }}</h2>
      </div>

      <div class="grid grid-2 gap-8">
        <div v-for="venue in classesData.venues" :key="venue.id" class="venue-card shadow-md animate-fade">
          <div class="venue-header">
            <h3 class="serif">{{ venue.name }}</h3>
            <p class="venue-address">
              <MapPin :size="16" />
              {{ venue.address }}
            </p>
          </div>
          
          <div class="schedule-list flex gap-4" style="flex-direction: column;">
            <div v-for="(schedule, idx) in venue.schedules" :key="idx" class="schedule-item flex-between">
              <div class="schedule-info">
                <span class="day">{{ schedule.day }}</span>
                <span class="time flex items-center gap-1">
                  <Clock :size="14" /> {{ schedule.time }}
                </span>
              </div>
              <span class="level-badge" :class="{ 'level-active': schedule.level.toLowerCase().includes('inici') }">
                {{ schedule.level }}
              </span>
            </div>
          </div>

          <div v-if="venue.note" class="venue-note flex items-center gap-2">
            <Info :size="18" />
            <span>{{ venue.note }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Prices -->
    <section class="section bg-gray-100" style="padding-bottom: 2rem;">
      <div class="container">
        <div class="section-head">
          <h2 class="serif">{{ t('classes.prices') }}</h2>
          <p>{{ t('classes.cycle') }}</p>
        </div>

        <div class="grid grid-3 gap-8">
          <div v-for="plan in plans" :key="plan.key" class="price-card animate-fade" :style="{ '--accent': plan.color }">
            <div class="price-header">
              <h3 class="serif">{{ plan.title }}</h3>
              <span class="price-subtitle text-upper">{{ plan.subtitle }}</span>
            </div>
            
            <div class="price-body flex gap-6" style="flex-direction: column;">
              <div v-for="(p, idx) in plan.prices" :key="idx" class="price-row flex-between">
                <span class="p-label">{{ p.name }}</span>
                <span class="p-value">{{ p.price }}</span>
              </div>
            </div>
            
            <div class="price-footer">
              <p>{{ t('classes.duration') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section container text-center" style="padding-top: 2rem;">
      <div class="cta-banner palette-orange animate-fade">
        <h2 class="serif italic">{{ t('classes.ready_to_dance') }}</h2>
        <p class="mb-8">{{ t('classes.cta_desc') }}</p>
        <a
          href="https://forms.gle/X4xaPv1dw6F6ALCt9"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary btn-big"
        >
          {{ t('classes.enroll') }}
          <ChevronRight />
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-header {
  height: 60vh;
  min-height: 400px;
  text-align: center;
  position: relative;
}

.header-bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.header-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(242, 125, 38, 0.8), rgba(217, 68, 54, 0.6));
  z-index: 2;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 5rem);
  margin-bottom: 1rem;
  font-weight: 900;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-style: italic;
  opacity: 0.9;
}

.bg-dark {
  background-color: var(--dark);
}

.title-underline {
  width: 100px;
  height: 6px;
  background: var(--forro-orange);
  margin: 1.5rem auto 0;
  border-radius: 99px;
}

.section-head-alt {
  margin-bottom: 3rem;
}

.icon-blob {
  width: 64px;
  height: 64px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.icon-blob.orange { background: var(--forro-orange); }

.venue-card {
  background: white;
  padding: 3rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--gray-100);
}

.venue-header {
  margin-bottom: 2.5rem;
}

.venue-header h3 {
  font-size: 2rem;
  color: var(--forro-earth);
  margin-bottom: 0.5rem;
}

.venue-address {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--gray-500);
  font-style: italic;
}

.schedule-item {
  padding: 1.25rem;
  background: var(--gray-100);
  border-radius: var(--radius-md);
  transition: var(--transition);
}

.schedule-item:hover {
  background: #fff7ed;
  transform: translateX(5px);
}

.day {
  font-weight: 800;
  color: var(--forro-red);
  font-size: 1.1rem;
}

.time {
  font-size: 0.9rem;
  color: var(--gray-500);
}

.level-badge {
  font-size: 0.75rem;
  font-weight: 900;
  padding: 0.5rem 1rem;
  background: white;
  border-radius: var(--radius-full);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: var(--shadow-sm);
}

.level-active {
  background: var(--forro-orange);
  color: white;
}

.venue-note {
  margin-top: 2rem;
  padding: 1rem;
  background: #fefce8;
  border-left: 4px solid #facc15;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  font-size: 0.85rem;
  color: #854d0e;
}

.price-card {
  background: white;
  padding: 3.5rem 2.5rem;
  border-radius: var(--radius-lg);
  border-top: 10px solid var(--accent);
  box-shadow: var(--shadow-md);
  transition: var(--transition);
}

.price-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.price-header {
  margin-bottom: 2.5rem;
  text-align: center;
}

.price-header h3 {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
}

.price-subtitle {
  font-size: 0.75rem;
  color: var(--gray-400);
  font-weight: 800;
}

.price-row {
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--gray-100);
}

.p-label {
  font-weight: 600;
  color: var(--gray-700);
}

.p-value {
  font-size: 1.75rem;
  font-weight: 900;
  color: var(--forro-earth);
}

.price-footer {
  margin-top: 3rem;
  text-align: center;
  font-size: 0.9rem;
  color: var(--gray-400);
  font-style: italic;
}

.cta-banner {
  padding: 5rem 3rem;
  border-radius: 4rem;
  max-width: 900px;
  margin: 0 auto;
  background: var(--card-bg);
  color: var(--card-accent);
}

.cta-banner h2 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
}

.btn-big {
  padding: 1.25rem 3.5rem;
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
  .cta-banner { padding: 3rem 1.5rem; }
}
</style>
