<script setup lang="ts">
import { Check, ChevronRight, Info } from "lucide-vue-next";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const features = [
  "4 días de talleres intensivos",
  "Profesores internacionales",
  "Vibe brasileña única en Sevilla",
  "Fiestas sociales cada noche",
];
</script>

<template>
  <div class="festival-page">
    <header class="festival-hero">
      <div class="festival-hero-bg">
        <img
          src="https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1920&auto=format&fit=crop"
          alt="Festival de Forró Sevilla"
          class="hero-img"
        />
        <div class="hero-overlay"></div>
      </div>
      <div class="festival-hero-content max-w-7xl">
        <span class="festival-date">{{ t("festival.dates") }}</span>
        <h1 class="festival-title">Festival Forró Sevilla 2026</h1>
        <p class="festival-subtitle">
          Arrasta-pé: Donde la pasión por el forró se encuentra con el duende de
          Sevilla.
        </p>
        <a
          href="https://forms.gle/X4xaPv1dw6F6ALCt9"
          target="_blank"
          class="btn btn-primary btn-large"
        >
          {{ t("festival.buy_tickets") }}
          <ChevronRight :size="20" />
        </a>
      </div>
    </header>

    <section class="festival-info py-24 max-w-7xl">
      <div class="info-grid">
        <div class="info-text">
          <h2 class="section-title">
            La mayor cita de Forró del sur de España
          </h2>
          <p class="section-text">
            Prepárate para una experiencia inolvidable. Cuatro días llenos de
            danza, música en vivo y una comunidad vibrante te esperan.
          </p>
          <ul class="feature-list">
            <li v-for="feat in features" :key="feat">
              <div class="check-circle"><Check :size="16" /></div>
              <span>{{ feat }}</span>
            </li>
          </ul>
        </div>
        <div class="info-poster">
          <div class="poster-card">
            <div class="poster-inner">
              <h3 class="poster-title">Sevilla 2026</h3>
              <div class="poster-accent"></div>
              <p class="poster-save">SAVE THE DATE</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="passes py-24">
      <div class="max-w-7xl">
        <h2 class="section-title text-center">
          {{ t("festival.passes_title") }}
        </h2>
        <div class="passes-grid">
          <!-- Full Pass Card -->
          <div class="pass-card featured">
            <div class="pass-tag">Más popular</div>
            <h3 class="pass-name">Full Pass</h3>
            <div class="pass-price">85€</div>
            <p class="pass-desc">
              Acceso total a todos los talleres, fiestas y conciertos durante
              los 4 días.
            </p>
            <a href="#" class="btn btn-dark w-full">{{
              t("festival.buy_tickets")
            }}</a>
          </div>

          <!-- Party Pass Card -->
          <div class="pass-card">
            <h3 class="pass-name">Party Pass</h3>
            <div class="pass-price">45€</div>
            <p class="pass-desc">
              Acceso a todas las fiestas sociales nocturnas y conciertos. No
              incluye talleres.
            </p>
            <a href="#" class="btn btn-outline-dark w-full">{{
              t("festival.buy_tickets")
            }}</a>
          </div>
        </div>

        <div class="notice-box mt-4">
          <Info :size="20" class="info-icon" />
          <p>{{ t("festival.external_notice") }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.festival-hero {
  position: relative;
  height: 70vh;
  min-height: 30rem;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.festival-hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.4),
    transparent
  );
}

.festival-hero-content {
  position: relative;
  z-index: 10;
  color: white;
}

.festival-date {
  background-color: var(--forro-orange);
  padding: 8px 16px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.875rem;
  border-radius: 4px;
}

.festival-title {
  font-size: 3rem;
  margin: 24px 0;
  font-weight: 900;
  line-height: 1.1;
}

@media (min-width: 768px) {
  .festival-title {
    font-size: 4.5rem;
  }
}

.festival-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 32rem;
  margin-bottom: 40px;
}

.btn-large {
  padding: 20px 48px;
  font-size: 1.125rem;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}

@media (min-width: 768px) {
  .info-grid {
    grid-template-columns: 3fr 2fr;
  }
}

.section-title {
  font-size: 2.25rem;
  margin-bottom: 1.5rem;
  color: var(--dark);
}

.section-text {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.feature-list {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 640px) {
  .feature-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.check-circle {
  width: 2rem;
  height: 2rem;
  background-color: #ecfdf5;
  color: var(--forro-green);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.poster-card {
  aspect-ratio: 1;
  background-color: var(--forro-earth);
  border-radius: 2rem;
  padding: 1.5rem;
  transform: rotate(3deg);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.poster-inner {
  height: 100%;
  border: 4px solid white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}

.poster-title {
  font-family: var(--font-serif);
  font-size: 3rem;
}

.poster-accent {
  width: 4rem;
  height: 4px;
  background-color: var(--forro-orange);
  margin: 1.5rem 0;
}

.poster-save {
  letter-spacing: 0.5em;
  font-weight: 800;
  font-size: 0.75rem;
}

.passes {
  background-color: #f9fafb;
}

.passes-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 4rem;
}

@media (min-width: 768px) {
  .passes-grid {
    grid-template-columns: repeat(2, 1fr);
    max-width: 60rem;
    margin-inline: auto;
  }
}

.pass-card {
  background-color: white;
  padding: 3rem;
  border-radius: 2rem;
  text-align: center;
  position: relative;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.pass-card.featured {
  border: 3px solid var(--forro-orange);
  transform: scale(1.05);
}

.pass-tag {
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--forro-orange);
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
}

.pass-name {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}
.pass-price {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--dark);
}
.pass-desc {
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  min-height: 4.5rem;
}

.btn-outline-dark {
  border: 2px solid var(--dark);
  color: var(--dark);
  border-radius: 9999px;
  padding: 1rem 2rem;
  font-weight: 700;
}

.btn-outline-dark:hover {
  background-color: var(--dark);
  color: white;
}

.w-full {
  width: 100%;
}

.notice-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.info-icon {
  color: var(--forro-orange);
}
</style>
