<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import DayAgenda from "../components/DayAgenda.vue";
import FestivalAboutSection from "../components/FestivalAboutSection.vue";
import FestivalArtistsSection from "../components/FestivalArtistsSection.vue";
import FestivalHeroSection from "../components/FestivalHeroSection.vue";
import FestivalPricesSection from "../components/FestivalPricesSection.vue";
import festivalData from "../data/festival.json";

const { t } = useI18n();

const translateText = (value?: string) => {
  if (!value) return "";
  return value.startsWith("festival.") ? t(value) : value;
};

const translatedFeatures = computed(() =>
  (festivalData.features || []).map((feature: string) =>
    translateText(feature),
  ),
);

const translatedFestivalTitle = computed(() =>
  translateText(festivalData.name),
);
const translatedFestivalDescription = computed(() =>
  translateText(festivalData.description),
);
const translatedFestivalBadge = computed(() =>
  translateText(festivalData.dates),
);
const translatedAboutTitle = computed(() =>
  translateText(festivalData.about_title),
);
const translatedAboutText = computed(() =>
  translateText(festivalData.about_text),
);
const translatedPosterTitle = computed(() =>
  translateText(festivalData.about_poster_title),
);
const translatedPosterText = computed(() =>
  translateText(festivalData.about_poster_text),
);

const translatedSchedule = computed(() =>
  (festivalData.schedule || []).map((day: any) => ({
    ...day,
    day: translateText(day.day),
    events: (day.events || []).map((event: any) => ({
      ...event,
      time: translateText(event.time),
      title: translateText(event.title),
      location: translateText(event.location),
      details: translateText(event.details),
    })),
  })),
);

const formatPriceValue = (
  priceValue: string | number | undefined,
  soldOut = false,
) => {
  if (priceValue == null) return "—";

  const formattedValue =
    typeof priceValue === "number" ? `${priceValue}€` : String(priceValue);

  if (!soldOut)
    return formattedValue.replace(/\s*\((Agotado|Sold out)\)\s*/gi, "");

  const soldOutLabel = t("festival.sold_out");
  return formattedValue.includes("Agotado") ||
    formattedValue.includes("Sold out")
    ? formattedValue.replace(/\s*\((Agotado|Sold out)\)\s*/gi, "") +
        ` (${soldOutLabel})`
    : `${formattedValue} (${soldOutLabel})`;
};

const translatedPrices = computed(() =>
  (festivalData.prices || []).map((price: any) => ({
    ...price,
    type: translateText(price.type),
    lote1: formatPriceValue(price.lote1, Boolean(price.lote1SoldOut)),
    lote2: formatPriceValue(price.lote2, Boolean(price.lote2SoldOut)),
    lote3: formatPriceValue(price.lote3, Boolean(price.lote3SoldOut)),
  })),
);

const festivalArtists = computed(() => [
  {
    name: "Elton Rodrigues",
    role: t("festival.artists"),
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Carol Benigno",
    role: t("festival.instrument_percussion"),
    image:
      "https://images.unsplash.com/photo-1514525253344-f814d072e507?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Sandrinho Dupan",
    role: t("festival.instrument_accordion"),
    image:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=600&auto=format&fit=crop",
  },
]);
</script>

<template>
  <div class="festival-page">
    <FestivalHeroSection
      :badge="translatedFestivalBadge"
      :title="translatedFestivalTitle"
      :subtitle="translatedFestivalDescription"
      :cta-label="t('festival.buy_tickets')"
    />

    <FestivalAboutSection
      :title="translatedAboutTitle"
      :text="translatedAboutText"
      :features="translatedFeatures"
      :poster-title="translatedPosterTitle"
      :poster-text="translatedPosterText"
    />

    <section class="festival__agenda">
      <div class="festival__agenda-container">
        <div class="festival__section-header">
          <h2 class="festival__section-title">
            {{ t("festival.title_section") }}
          </h2>
          <div class="festival__section-line"></div>
        </div>
        <div class="festival__agenda-wrapper">
          <DayAgenda
            v-for="(day, idx) in translatedSchedule"
            :key="idx"
            v-bind="day"
          />
        </div>
      </div>
    </section>

    <!-- === AGENDA SECTION END === -->

    <!-- === ARTISTS SECTION START === -->
    <section class="festival__artists">
      <div class="festival__artists-container">
        <h2 class="festival__section-title festival__section-title--center">
          {{ t("festival.artists_title") }}
        </h2>
        <div class="festival__artists-grid">
          <div
            v-for="artist in [
              {
                name: 'Elton Rodrigues',
                role: t('festival.artists'),
                image:
                  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop',
              },
              {
                name: 'Carol Benigno',
                role: t('festival.instrument_percussion'),
                image:
                  'https://images.unsplash.com/photo-1514525253344-f814d072e507?q=80&w=600&auto=format&fit=crop',
              },
              {
                name: 'Sandrinho Dupan',
                role: t('festival.instrument_accordion'),
                image:
                  'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=600&auto=format&fit=crop',
              },
            ]"
            :key="artist.name"
            class="festival__artist-card"
          >
            <div class="festival__artist-image-wrapper">
              <img
                :src="artist.image"
                :alt="artist.name"
                class="festival__artist-image"
                referrerpolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3 class="festival__artist-name">{{ artist.name }}</h3>
            <p class="festival__artist-role">{{ artist.role }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- === ARTISTS SECTION END === -->

    <!-- === PRICES SECTION START === -->
    <section class="festival__prices">
      <div class="festival__prices-container">
        <div class="festival__section-header">
          <Ticket class="festival__section-icon" :size="48" />
          <h2 class="festival__section-title">
            {{ t("festival.passes_title") }}
          </h2>
        </div>

        <div class="festival__prices-table-wrapper">
          <table class="festival__prices-table">
            <thead>
              <tr>
                <th class="festival__main-title-pase">
                  {{ t("festival.table_pass") }}
                </th>
                <th class="festival__main-title-lote">
                  {{ t("festival.table_lot1") }}
                </th>
                <th class="festival__main-title-lote">
                  {{ t("festival.table_lot2") }}
                </th>
                <th class="festival__main-title-lote">
                  {{ t("festival.table_lot3") }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(price, idx) in translatedPrices" :key="idx">
                <td class="festival__table-pass-name">{{ price.type }}</td>
                <td
                  class="festival__table-price festival__table-price--highlight"
                >
                  {{ price.lote1 }}
                </td>
                <td class="festival__table-price">{{ price.lote2 }}</td>
                <td class="festival__table-price">{{ price.lote3 }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="festival__notice">
          <Info :size="20" class="festival__notice-icon" />
          <p>{{ t("festival.external_notice") }}</p>
        </div>

        <div class="festival__cta-actions">
          <div class="festival__cta-primary">
            <a
              href="https://entradas.forrosevilla.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="festival__btn festival__btn--red festival__btn--large"
            >
              {{ t("festival.buy_tickets") }}
              <ExternalLink :size="24" />
            </a>
          </div>

          <div class="festival__info-cards-grid">
            <div class="festival__info-card">
              <h3 class="festival__info-card-title">
                <CreditCard
                  class="festival__info-card-icon festival__info-card-icon--gold"
                  :size="24"
                />
                {{ t("festival.alternative_payment") }}
              </h3>
              <div class="festival__info-card-content">
                <p>
                  <strong>{{ t("festival.bank_holder") }}:</strong> Elton
                  Rodrigues Da Silva Moreira
                </p>
                <p><strong>IBAN:</strong> ES27 1583 0001 1590 9968 6526</p>
                <p><strong>BIC:</strong> REVOESM2</p>
                <p><strong>Banco:</strong> Revolut Bank UAB (Madrid)</p>
                <p>
                  <strong>{{ t("festival.bank_concept") }}:</strong> Festival
                  Forró Sevilla 2026
                </p>
              </div>
            </div>
          </div>
    <FestivalArtistsSection :artists="festivalArtists" />

    <FestivalPricesSection
      :prices="translatedPrices"
      :buy-tickets-label="t('festival.buy_tickets')"
      :external-notice="t('festival.external_notice')"
      :alternative-payment-title="t('festival.alternative_payment')"
      :bank-holder-label="t('festival.bank_holder')"
      :bank-concept-label="t('festival.bank_concept')"
      :pre-register-title="t('festival.pre_register')"
    />
  </div>
</template>

<style scoped>
.festival-page {
  width: 100%;
}

.festival__agenda {
  padding: 96px 24px;
  background: white;
}

.festival__agenda-container {
  max-width: 1280px;
  margin: 0 auto;
}

.festival__section-header {
  margin-bottom: 64px;
  text-align: center;
}

.festival__section-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 24px;
  color: var(--dark);
  font-family: var(--font-serif);
  line-height: 1.2;
}

<<<<<<< Updated upstream
=======
.festival__section-text {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 40px;
  line-height: 1.7;
  color: var(--text-color);
}

.festival__features-list {
  list-style: none;
  display: grid;
  gap: 20px;
  color: var(--gray-250);
}

@media (min-width: 640px) {
  .festival__features-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

.festival__feature-item {
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 600;
  color: var(--text-primary);
  animation: fadeIn 0.6s ease forwards;
}

.festival__check-icon {
  width: 48px;
  height: 48px;
  background-color: #ecfdf5;
  color: var(--forro-green);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.festival__about-poster {
  display: flex;
  align-items: center;
  justify-content: center;
  rotate: 10deg;
}

.festival__poster-card {
  aspect-ratio: 1;
  background-color: var(--forro-earth);
  border-radius: 32px;
  padding: 24px;
  transform: rotate(3deg);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation: fadeIn 0.8s ease forwards;
}

.festival__poster-inner {
  height: 100%;
  border: 4px solid white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  gap: 16px;
}

.festival__poster-title {
  font-family: var(--font-serif);
  font-size: 3.5rem;
  font-weight: 900;
  margin: 0;
}

.festival__poster-accent {
  width: 64px;
  height: 4px;
  background-color: var(--forro-orange);
  border-radius: 2px;
}

.festival__poster-text {
  letter-spacing: 0.15em;
  font-weight: 900;
  font-size: 0.875rem;
  margin: 0;
}

@media (max-width: 768px) {
  .festival__about {
    padding: 64px 16px;
  }

  .festival__about-grid {
    gap: 48px;
  }

  .festival__poster-card {
    width: 100%;
    max-width: 300px;
  }

  .festival__poster-title {
    font-size: 2.5rem;
  }
}
/* === ABOUT SECTION END === */

/* === AGENDA SECTION START === */
.festival__agenda {
  padding: 96px 24px;
  background: white;
}

.festival__agenda-container {
  max-width: 1280px;
  margin: 0 auto;
}

.festival__section-header {
  margin-bottom: 64px;
  text-align: center;
}

.festival__section-title--center {
  text-align: center;
}

>>>>>>> Stashed changes
.festival__section-line {
  height: 6px;
  width: 100px;
  background: var(--forro-red);
  border-radius: 99px;
  margin: 16px auto 0;
}

.festival__agenda-wrapper {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  gap: 24px;
}

@media (max-width: 768px) {
  .festival__agenda {
    padding: 64px 16px;
  }

  .festival__section-header {
    margin-bottom: 48px;
  }
}
<<<<<<< Updated upstream
=======
/* === AGENDA SECTION END === */

/* === ARTISTS SECTION START === */
.festival__artists {
  padding: 96px 24px;
  background-color: #f9fafb;
}

.festival__artists-container {
  max-width: 1280px;
  margin: 0 auto;
}

.festival__artists-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  margin-top: 64px;
}

@media (min-width: 768px) {
  .festival__artists-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.festival__artist-card {
  text-align: center;
  animation: fadeIn 0.6s ease forwards;
}

.festival__artist-image-wrapper {
  width: 100%;
  aspect-ratio: 1;
  margin-bottom: 24px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.festival__artist-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.4s ease;
}

.festival__artist-card:hover .festival__artist-image {
  filter: grayscale(0%);
}

.festival__artist-name {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: var(--font-serif);
  margin-bottom: 8px;
  color: var(--dark);
}

.festival__artist-role {
  font-size: 0.875rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .festival__artists {
    padding: 64px 16px;
  }

  .festival__artists-grid {
    gap: 32px;
  }
}
/* === ARTISTS SECTION END === */

/* === PRICES SECTION START === */
.festival__prices {
  padding: 96px 24px;
  background-color: #fdf5f0;
}

.festival__prices-container {
  max-width: 1280px;
  margin: 0 auto;
}

.festival__section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 64px;
  text-align: center;
}

.festival__section-icon {
  color: var(--forro-red);
}

.festival__prices-table-wrapper {
  max-width: 1000px;
  margin: 0 auto 48px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  animation: fadeIn 0.6s ease forwards;
}

.festival__prices-table {
  width: 100%;
  border-collapse: collapse;
}

.festival__prices-table thead {
  background: linear-gradient(135deg, var(--forro-orange), var(--forro-red));
  color: white;
}

.festival__prices-table th {
  padding: 20px 16px;
  font-weight: 700;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.festival__prices-table tbody tr {
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.3s ease;
}

.festival__prices-table tbody tr:hover {
  background-color: #fff7ed;
}

.festival__prices-table tbody tr:last-child {
  border-bottom: none;
}

.festival__prices-table td {
  padding: 20px 16px;
  font-size: 1rem;
}

.festival__main-title-pase {
  text-align: left;
}

.festival__main-title-lote {
  text-align: center;
}

.festival__table-pass-name {
  font-weight: 700;
  font-family: var(--font-serif);
  font-size: 1.1rem;
  color: var(--forro-earth);
}

.festival__table-price {
  text-align: center;
  color: var(--text-secondary);
}

.festival__table-price--highlight {
  color: var(--forro-orange);
  font-weight: 700;
  font-size: 1.1rem;
}

.festival__notice {
  max-width: 1000px;
  margin: 0 auto 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 16px 24px;
  background: white;
  border-left: 4px solid var(--forro-orange);
  border-radius: 8px;
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.festival__notice-icon {
  color: var(--forro-orange);
  flex-shrink: 0;
}

.festival__notice p {
  margin: 0;
}

.festival__cta-actions {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.festival__cta-primary {
  text-align: center;
}

.festival__info-cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}

@media (min-width: 768px) {
  .festival__info-cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.festival__info-card {
  background: white;
  padding: 40px 32px;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  animation: fadeIn 0.6s ease forwards;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.festival__info-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.festival__info-card-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 1.25rem;
  font-weight: 700;
  font-family: var(--font-serif);
  margin-bottom: 24px;
  text-align: center;
  color: var(--dark);
}

.festival__info-card-icon {
  flex-shrink: 0;
}

.festival__info-card-icon--gold {
  color: var(--forro-gold);
}

.festival__info-card-icon--orange {
  color: var(--forro-orange);
}

.festival__info-card-content {
  font-size: 0.95rem;
  text-align: center;
  color: var(--text-secondary);
  line-height: 1.8;
}

.festival__info-card-content p {
  margin-bottom: 8px;
}

.festival__info-card-content p:last-child {
  margin-bottom: 0;
}

.festival__info-card-content strong {
  color: var(--dark);
  font-weight: 700;
}

.festival__info-card-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.festival__info-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 20px;
  background: #f3f4f6;
  border-radius: 12px;
  color: var(--forro-orange);
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.festival__info-link:hover {
  background: #fff7ed;
  border-color: var(--forro-orange);
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .festival__prices {
    padding: 64px 16px;
  }

  .festival__section-header {
    margin-bottom: 48px;
  }

  .festival__prices-table-wrapper {
    overflow-x: auto;
  }

  .festival__prices-table th,
  .festival__prices-table td {
    padding: 12px 8px;
    font-size: 0.85rem;
  }

  .festival__info-card {
    padding: 24px 20px;
  }

  .festival__info-card-title {
    font-size: 1.1rem;
  }
}
/* === PRICES SECTION END === */
>>>>>>> Stashed changes
</style>
