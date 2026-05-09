<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Clock, MapPin, ChevronRight, Info } from 'lucide-vue-next';
import classesData from '../data/classes.json';

const { t } = useI18n();

const pricingCards = [
  {
    title: t('classes.group_classes'),
    subtitle: t('classes.group_classes_subtitle'),
    prices: classesData.prices.group,
    color: 'var(--forro-orange)'
  },
  {
    title: t('classes.private_individual'),
    subtitle: t('classes.individual_subtitle'),
    prices: classesData.prices.private_individual,
    color: 'var(--forro-red)'
  },
  {
    title: t('classes.private_couple'),
    subtitle: t('classes.couple_subtitle'),
    prices: classesData.prices.private_couple,
    color: 'var(--forro-gold)'
  }
];
</script>

<template>
  <div class="classes-page">
    <header class="page-header">
      <div class="max-w-7xl">
        <h1 class="page-title">{{ t('classes.title') }}</h1>
        <div class="title-underline"></div>
      </div>
    </header>

    <section class="schedule-section py-24 max-w-7xl">
      <div class="section-header">
        <MapPin class="section-icon" :size="32" />
        <h2 class="section-title">{{ t('classes.hours_locations') }}</h2>
      </div>

      <div class="venue-grid">
        <div v-for="venue in classesData.venues" :key="venue.id" class="venue-card">
          <div class="venue-header">
            <h3 class="venue-name">{{ venue.name }}</h3>
            <p class="venue-address">
              <MapPin :size="16" />
              {{ venue.address }}
            </p>
          </div>
          
          <div class="schedule-list">
            <div v-for="(schedule, idx) in venue.schedules" :key="idx" class="schedule-item">
              <div class="schedule-info">
                <span class="schedule-day">{{ schedule.day }}</span>
                <span class="schedule-time">
                  <Clock :size="14" /> {{ schedule.time }}
                </span>
              </div>
              <span class="level-badge active" v-if="schedule.level.includes('noci')">
                {{ schedule.level }}
              </span>
              <span class="level-badge" v-else>
                {{ schedule.level }}
              </span>
            </div>
          </div>

          <div v-if="venue.note" class="venue-note">
            <Info :size="16" />
            <span>{{ venue.note }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="pricing-section py-24">
      <div class="max-w-7xl">
        <div class="section-header centered">
          <h2 class="section-title">{{ t('classes.prices') }}</h2>
          <p class="section-subtitle">Curso 2024–2025</p>
        </div>

        <div class="prices-grid">
          <div v-for="plan in pricingCards" :key="plan.title" class="plan-card" :style="{ borderTopColor: plan.color }">
            <div class="plan-head">
              <h3 class="plan-title">{{ plan.title }}</h3>
              <p class="plan-subtitle">{{ plan.subtitle }}</p>
            </div>
            <div class="plan-price-box">
              <div v-for="(p, idx) in plan.prices" :key="idx" class="price-row">
                <span class="price-label">{{ p.name }}</span>
                <span class="price-value">{{ p.price }}</span>
              </div>
            </div>
            <div class="plan-footer">
              <p class="plan-info">Clases de 1h 30min</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section py-24 max-w-7xl">
      <div class="cta-box">
        <div class="cta-content">
          <h2 class="cta-title">{{ t('classes.ready_to_dance') }}</h2>
          <p class="cta-text">No necesitas pareja ni experiencia previa. ¡Ven a bailar con nosotros!</p>
        </div>
        <a href="https://forms.gle/X4xaPv1dw6F6ALCt9" target="_blank" class="btn btn-primary btn-large">
          {{ t('classes.enroll') }}
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-header {
  background-color: var(--dark);
  color: white;
  padding: 8rem 0 6rem;
  text-align: center;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .page-title { font-size: 3.5rem; }
}

.title-underline {
  height: 0.375rem;
  width: 6rem;
  background-color: var(--forro-orange);
  margin: 0 auto;
  border-radius: 9999px;
}

.schedule-section {
  padding: 6rem 1.5rem;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 3rem;
}

.section-header.centered {
  flex-direction: column;
  text-align: center;
}

.section-icon {
  color: var(--forro-orange);
}

.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--dark);
  font-family: var(--font-serif);
}

.venue-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

@media (min-width: 768px) {
  .venue-grid { grid-template-columns: repeat(2, 1fr); }
}

.venue-card {
  background: white;
  border-radius: 2rem;
  padding: 2.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  border: 1px solid #FFE8D6;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.venue-card:hover {
  box-shadow: 0 25px 30px -10px rgba(0, 0, 0, 0.08);
  transform: translateY(-8px);
}

.venue-header {
  margin-bottom: 2rem;
}

.venue-name {
  font-size: 1.75rem;
  color: var(--forro-earth);
  margin-bottom: 0.5rem;
  font-family: var(--font-serif);
}

.venue-address {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6B7280;
  font-style: italic;
  font-size: 0.9375rem;
}

.schedule-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  flex: 1;
}

.schedule-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: #FFF7ED;
  border-radius: 1.5rem;
}

.schedule-info {
  display: flex;
  flex-direction: column;
}

.schedule-day {
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--forro-red);
}

.schedule-time {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.9375rem;
  color: #4B5563;
}

.level-badge {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background-color: white;
  color: var(--text-primary);
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
}

.level-badge.active {
  background-color: var(--forro-orange);
  color: white;
}

.venue-note {
  margin-top: 2rem;
  padding: 1.25rem;
  background-color: #FEFCE8;
  border-left: 5px solid #FACC15;
  border-radius: 0 1rem 1rem 0;
  font-size: 0.875rem;
  color: #854D0E;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.pricing-section {
  background-color: #F9FAFB;
  padding: 6rem 1.5rem;
}

.section-subtitle {
  color: var(--text-secondary);
  font-weight: 600;
  margin-top: 0.5rem;
  font-size: 1.125rem;
}

.prices-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

@media (min-width: 1024px) {
  .prices-grid { grid-template-columns: repeat(3, 1fr); }
}

.plan-card {
  background: white;
  padding: 3rem;
  border-radius: 3rem;
  border-top-width: 10px;
  border-top-style: solid;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.plan-card:hover {
  shadow: 0 25px 30px -10px rgba(0, 0, 0, 0.1);
}

.plan-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.25rem;
  font-family: var(--font-serif);
}

.plan-subtitle {
  font-size: 0.8125rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #9CA3AF;
  margin-bottom: 2.5rem;
}

.plan-price-box {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  flex: 1;
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.25rem;
  border-bottom: 2px solid #F9FAFB;
}

.price-row:last-child {
  border-bottom: none;
}

.price-label {
  color: #4B5563;
  font-weight: 600;
  font-size: 1.0625rem;
}

.price-value {
  font-size: 1.75rem;
  font-weight: 900;
  color: var(--forro-earth);
}

.plan-footer {
  margin-top: 2.5rem;
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px dashed #E5E7EB;
}

.plan-info {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  font-style: italic;
  font-weight: 500;
}

.cta-box {
  background-color: var(--forro-orange);
  border-radius: 3rem;
  padding: 4rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  text-align: center;
}

@media (min-width: 1024px) {
  .cta-box {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.cta-title { font-size: 2.5rem; margin-bottom: 0.75rem; font-family: var(--font-serif); }
.cta-text { opacity: 0.9; font-size: 1.25rem; line-height: 1.4; }

.btn-large {
  padding: 1.25rem 3.5rem;
  font-size: 1.25rem;
  white-space: nowrap;
}

.btn-primary {
  background-color: white;
  color: var(--forro-orange);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  background-color: #FFF7ED;
  transform: translateY(-2px);
}
</style>
