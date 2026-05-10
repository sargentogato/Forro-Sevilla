<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Ticket, CreditCard, ExternalLink, Info, MapPin, Calendar as CalendarIcon, ChevronRight } from 'lucide-vue-next';
import DayAgenda from '../components/DayAgenda.vue';
import festivalData from '../data/festival.json';

const { t } = useI18n();
</script>

<template>
  <div class="festival-page">
    <header class="festival-hero bg-red text-white flex-center relative">
      <div class="hero-overlay"></div>
      <div class="container relative z-10 text-center animate-fade">
        <div class="festival-badge text-upper">{{ t('festival.dates') }}</div>
        <h1 class="hero-title text-white">{{ festivalData.name }}</h1>
        <p class="hero-desc italic">{{ festivalData.description }}</p>
      </div>
    </header>

    <!-- Program / Agenda -->
    <section class="section container">
      <div class="section-head text-center">
        <h2 class="serif">{{ t('festival.title_section') }}</h2>
        <div class="line red mx-auto"></div>
      </div>

      <div class="agenda-wrapper max-w-xl mx-auto">
        <DayAgenda v-for="(day, idx) in festivalData.schedule" :key="idx" v-bind="day" />
      </div>
    </section>

    <!-- Artists -->
    <section class="section bg-white">
      <div class="container text-center">
        <h2 class="serif mb-24 h2-big">{{ t('festival.artists_title') }}</h2>
        <div class="grid grid-3 gap-12">
          <div class="artist-card animate-fade">
            <div class="artist-image-wrapper">
              <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop" alt="Elton Rodrigues" class="bw-img" referrerpolicy="no-referrer" loading="lazy" decoding="async" />
            </div>
            <h3 class="artist-name serif">Elton Rodrigues</h3>
            <p class="artist-role text-upper">{{ t('festival.artists') }}</p>
          </div>

          <div class="artist-card animate-fade">
            <div class="artist-image-wrapper">
              <img src="https://images.unsplash.com/photo-1514525253344-f814d072e507?q=80&w=600&auto=format&fit=crop" alt="Carol Benigno" class="bw-img" referrerpolicy="no-referrer" loading="lazy" decoding="async" />
            </div>
            <h3 class="artist-name serif">Carol Benigno</h3>
            <p class="artist-role text-upper">{{ t('festival.instrument_percussion') }}</p>
          </div>

          <div class="artist-card animate-fade">
            <div class="artist-image-wrapper">
              <img src="https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=600&auto=format&fit=crop" alt="Sandrinho Dupan" class="bw-img" referrerpolicy="no-referrer" loading="lazy" decoding="async" />
            </div>
            <h3 class="artist-name serif">Sandrinho Dupan</h3>
            <p class="artist-role text-upper">{{ t('festival.instrument_accordion') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tickets / Prices -->
    <section id="tickets" class="section bg-light-orange flex flex-col items-center">
      <div class="container text-center">
        <div class="flex-center flex-col gap-4 mb-16">
          <Ticket class="text-red" :size="48" />
          <h2 class="serif h2-big">{{ t('festival.passes_title') }}</h2>
        </div>

        <div class="table-container shadow-lg animate-fade mx-auto max-w-4xl">
          <table class="festival-table">
            <thead>
              <tr>
                <th>{{ t('festival.table_pass') }}</th>
                <th>{{ t('festival.table_lot1') }}</th>
                <th>{{ t('festival.table_lot2') }}</th>
                <th>{{ t('festival.table_lot3') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(price, idx) in festivalData.prices" :key="idx">
                <td class="serif font-bold text-lg">{{ price.type }}</td>
                <td class="font-bold text-orange">{{ price.lote1 }}</td>
                <td class="text-muted">{{ price.lote2 }}</td>
                <td class="text-muted">{{ price.lote3 }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="cta-actions max-w-4xl mx-auto flex gap-12 flex-col items-center">
          <div class="text-center">
            <a
              href="https://entradas.forrosevilla.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-red btn-big"
            >
              {{ t('festival.buy_tickets') }}
              <ExternalLink :size="24" />
            </a>
            <p class="note mt-6">
              <Info :size="18" class="text-red" />
              {{ t('festival.external_notice') }}
            </p>
          </div>

          <div class="grid grid-2 gap-8 pt-12 w-full">
            <div class="info-card animate-fade">
              <h3 class="serif flex items-center justify-center gap-2 mb-6">
                <CreditCard class="text-gold" />
                {{ t('festival.alternative_payment') }}
              </h3>
              <div class="info-list text-sm text-center">
                <p><strong>{{ t('festival.bank_holder') }}:</strong> Elton Rodrigues Da Silva Moreira</p>
                <p><strong>IBAN:</strong> ES27 1583 0001 1590 9968 6526</p>
                <p><strong>BIC:</strong> REVOESM2</p>
                <p><strong>Banco:</strong> Revolut Bank UAB (Madrid)</p>
                <p><strong>{{ t('festival.bank_concept') }}:</strong> Festival Forró Sevilla 2026</p>
              </div>
            </div>
            <div class="info-card animate-fade">
              <h3 class="serif flex items-center justify-center gap-2 mb-6">
                <CalendarIcon class="text-orange" />
                {{ t('festival.pre_register') }}
              </h3>
              <div class="link-stack flex flex-col gap-4">
                <a href="https://forms.gle/X4xaPv1dw6F6ALCt9" target="_blank" rel="noopener noreferrer" class="link-item flex-between">
                  Español <ChevronRight />
                </a>
                <a href="https://forms.gle/Tn7jqu8rkBHCZJs7A" target="_blank" rel="noopener noreferrer" class="link-item flex-between">
                  English <ChevronRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.festival-hero {
  min-height: 70vh;
  padding: 8rem 0;
  background-image: url('https://picsum.photos/seed/festival_forro/1200/800');
  background-size: cover;
  background-position: center;
}

.bg-red { background-color: var(--forro-red); }

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(217, 68, 54, 0.9), rgba(140, 91, 63, 0.8));
}

.festival-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  padding: 0.5rem 1.5rem;
  border-radius: var(--radius-full);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 2rem;
  font-weight: 700;
  font-size: 0.85rem;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  margin-bottom: 2rem;
}

.hero-desc {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.5rem;
  opacity: 0.9;
}

.line {
  height: 6px;
  width: 100px;
  border-radius: 99px;
  margin-top: 1rem;
}

.line.red { background: var(--forro-red); }

.max-w-xl { max-width: 900px; }

.h2-big { font-size: 3rem; }

.bw-img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  transition: var(--transition);
}

.artist-card:hover .bw-img {
  filter: grayscale(0);
}

.bg-light-orange { background-color: #fdf5f0; }

.text-red { color: var(--forro-red); }
.text-orange { color: var(--forro-orange); }
.text-gold { color: var(--forro-gold); }
.text-muted { color: var(--gray-500); }

.table-container {
  border-radius: var(--radius-lg);
  overflow-x: auto;
  margin-bottom: 5rem;
}

.btn-red {
  background-color: var(--forro-red);
  color: white;
}

.btn-red:hover {
  background-color: var(--forro-earth);
}

.btn-big {
  padding: 1.5rem 4rem;
  font-size: 1.5rem;
}

.note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--gray-500);
}

.info-card {
  background: white;
  padding: 2.5rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--gray-100);
}

.info-list p { margin-bottom: 0.5rem; }
.info-list p strong { color: var(--dark); }

.link-item {
  padding: 1rem 1.5rem;
  background: var(--gray-100);
  border-radius: var(--radius-md);
  color: var(--forro-orange);
  font-weight: 700;
  transition: var(--transition);
}

.link-item:hover {
  background: #fff7ed;
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
  .info-card { padding: 1.5rem; }
}
</style>
