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
</style>
