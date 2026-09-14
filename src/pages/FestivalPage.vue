<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import FestivalAboutSection from "../components/festival/FestivalAboutSection.vue";
import FestivalAgendaSection from "../components/festival/FestivalAgendaSection.vue";
import FestivalArtistsSection from "../components/festival/FestivalArtistsSection.vue";
import FestivalHeroSection from "../components/festival/FestivalHeroSection.vue";
import FestivalPricesSection from "../components/festival/FestivalPricesSection.vue";
import { useFestivalPeople } from "../composables/useFestivalTeachers";
import festivalData from "../data/festival.json";

const { t } = useI18n();
const { musicians, teachers } = useFestivalPeople();

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
    <FestivalArtistsSection :musicians="musicians" :teachers="teachers" />
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
