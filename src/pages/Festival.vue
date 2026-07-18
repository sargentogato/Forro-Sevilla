<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import FestivalAboutSection from "../components/FestivalAboutSection.vue";
import FestivalAgendaSection from "../components/FestivalAgendaSection.vue";
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

const translatedPrices = computed(() =>
  (festivalData.prices || []).map((price: any) => ({
    ...price,
    type: translateText(price.type),
    lote1: translateText(price.lote1),
    lote2: translateText(price.lote2),
    lote3: translateText(price.lote3),
  })),
);

const festivalArtists = computed(() => [
  /* 
    INSTRUCCIONES PARA IMÁGENES LOCALES (ARTISTAS):
    1. Guarda las fotos de los artistas en public/images/festival/ (e.g. artista-1.jpg)
    2. Recomendación: que las fotos sean cuadradas (ej: 600x600px) para que el círculo quede perfecto y pesen poco.
    3. Cambia la URL de Unsplash por la ruta local: image: "/images/festival/artista-1.jpg"
  */
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

/* 
// ============================================================================
// PARA CAMBIAR A IMÁGENES LOCALES DE ARTISTAS:
// 1. Mete las fotos (ej. artista-1.jpg) en la carpeta public/images/festival/
// 2. Comenta el bloque 'const festivalArtists = computed...' de arriba.
// 3. Descomenta el bloque de abajo y ajusta los nombres de las imágenes.
// ============================================================================

const festivalArtists = computed(() => [
  {
    name: "Elton Rodrigues",
    role: t("festival.artists"),
    image: "/images/festival/artista-1.jpg",
  },
  {
    name: "Carol Benigno",
    role: t("festival.instrument_percussion"),
    image: "/images/festival/artista-2.jpg",
  },
  {
    name: "Sandrinho Dupan",
    role: t("festival.instrument_accordion"),
    image: "/images/festival/artista-3.jpg",
  },
]);
*/
</script>

<template>
  <div class="festival-page">
    <!-- === HERO SECTION START === -->
    <FestivalHeroSection
      :badge="translatedFestivalBadge"
      :title="translatedFestivalTitle"
      :subtitle="translatedFestivalDescription"
      :ctaLabel="t('festival.buy_tickets')"
    />
    <!-- ============================================= HERO SECTION END === -->

    <!-- === ABOUT SECTION START === -->
    <FestivalAboutSection
      :title="translatedAboutTitle"
      :text="translatedAboutText"
      :features="translatedFeatures"
      :posterTitle="translatedPosterTitle"
      :posterText="translatedPosterText"
    />
    <!-- ============================================= ABOUT SECTION END === -->

    <!-- === AGENDA SECTION START === -->
    <FestivalAgendaSection
      :title="t('festival.title_section')"
      :schedule="translatedSchedule"
    />
    <!-- ============================================= AGENDA SECTION END === -->

    <!-- === ARTISTS SECTION START === -->
    <FestivalArtistsSection :artists="festivalArtists" />
    <!-- ============================================= ARTISTS SECTION END === -->

    <!-- === PRICES SECTION START === -->
    <FestivalPricesSection
      :prices="translatedPrices"
      :buyTicketsLabel="t('festival.buy_tickets')"
      :externalNotice="t('festival.external_notice')"
      :alternativePaymentTitle="t('festival.alternative_payment')"
      :bankHolderLabel="t('festival.bank_holder')"
      :bankConceptLabel="t('festival.bank_concept')"
      :preRegisterTitle="t('festival.pre_register')"
    />
    <!-- =============================================  PRICES SECTION END === -->
  </div>
</template>
