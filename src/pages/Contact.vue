<script setup lang="ts">
import { Instagram, Mail, MapPin, Phone } from "lucide-vue-next";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="contact-page">
    <header class="contact-page__hero">
      <div class="contact-page__hero-content">
        <h1 class="contact-page__title">{{ t("nav.contact") }}</h1>
        <p class="contact-page__subtitle">{{ t("contact.page_subtitle") }}</p>
      </div>
    </header>

    <section class="contact-page__content">
      <div class="contact-page__layout">
        <div class="contact-page__info">
          <h2 class="contact-page__section-title">
            {{ t("contact.info_title") }}
          </h2>
          <div class="contact-page__grid">
            <a
              href="tel:+34603176756"
              class="contact-page__card contact-page__card--orange"
            >
              <div class="contact-page__icon">
                <Phone />
              </div>
              <div class="contact-page__card-text">
                <span class="contact-page__label">{{
                  t("contact.label_phone")
                }}</span>
                <p class="contact-page__value">+34 603 176 756</p>
              </div>
            </a>

            <a
              href="mailto:forroarrastapesevilla@gmail.com"
              class="contact-page__card contact-page__card--red"
            >
              <div class="contact-page__icon">
                <Mail />
              </div>
              <div class="contact-page__card-text">
                <span class="contact-page__label">{{
                  t("contact.label_email")
                }}</span>
                <p class="contact-page__value">
                  forroarrastapesevilla@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://instagram.com/forrosevilla"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-page__card contact-page__card--gold"
            >
              <div class="contact-page__icon">
                <Instagram />
              </div>
              <div class="contact-page__card-text">
                <span class="contact-page__label">{{
                  t("contact.label_instagram")
                }}</span>
                <p class="contact-page__value">@forrosevilla</p>
              </div>
            </a>

            <div class="contact-page__card contact-page__card--soft">
              <div class="contact-page__icon">
                <MapPin />
              </div>
              <div class="contact-page__card-text">
                <span class="contact-page__label">{{
                  t("contact.label_address")
                }}</span>
                <p class="contact-page__value">
                  Calle Don Fadrique, 59 · 41009 Sevilla
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-page__map">
          <iframe
            src="https://www.google.com/maps?q=Calle%20Don%20Fadrique,%2059,%2041009%20Sevilla&z=16&output=embed"
            title="Ubicación de Forró Sevilla"
            loading="lazy"
            allowfullscreen="true"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-page {
  width: 100%;
}

.contact-page__hero {
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 1.5rem 3rem;
  background: linear-gradient(135deg, var(--forro-gold), #9e6b1a);
  color: white;
}

.contact-page__hero-content {
  max-width: 760px;
  width: 100%;
}

.contact-page__title {
  margin: 0 0 1rem;
  font-size: clamp(2rem, 5vw, 3rem);
  font-family: var(--font-serif);
  font-weight: 800;
}

.contact-page__subtitle {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.7;
  opacity: 0.95;
}

.contact-page__content {
  padding: 4rem 1.25rem 5rem;
}

.contact-page__layout {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 2rem;
  align-items: start;
}

.contact-page__info {
  background: white;
  border-radius: 2rem;
  padding: 2rem;
  box-shadow: var(--shadow-md);
}

.contact-page__section-title {
  margin: 0 0 1.5rem;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-family: var(--font-serif);
  color: var(--forro-earth);
}

.contact-page__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.contact-page__card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(0, 0, 0, 0.05);
  text-decoration: none;
  transition: var(--transition);
  min-width: 0;
  box-sizing: border-box;
}

.contact-page__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.contact-page__card--orange {
  border-left: 4px solid var(--forro-orange);
}

.contact-page__card--red {
  border-left: 4px solid var(--forro-red);
}

.contact-page__card--gold {
  border-left: 4px solid var(--forro-gold);
}

.contact-page__card--soft {
  border-left: 4px solid #d9a76a;
}

.contact-page__icon {
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  background: white;
  color: var(--forro-orange);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: var(--shadow-sm);
}

.contact-page__card-text {
  min-width: 0;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.contact-page__label {
  display: block;
  margin-bottom: 0.3rem;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gray-400);
}

.contact-page__value {
  margin: 0;
  font-weight: 700;
  color: var(--dark);
  line-height: 1.4;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.contact-page__map {
  height: 500px;
  min-height: 500px;
  border-radius: 2rem;
  overflow: hidden;
  border: 8px solid white;
  box-shadow: var(--shadow-md);
  background-color: #f3f4f6;
}

.contact-page__map iframe {
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: block;
  border: 0;
}

@media (max-width: 1024px) {
  .contact-page__layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .contact-page__content {
    padding: 3rem 1rem 4rem;
  }

  .contact-page__info {
    padding: 1.5rem;
  }

  .contact-page__grid {
    grid-template-columns: 1fr;
  }

  .contact-page__map {
    height: 360px;
    min-height: 360px;
  }

  .contact-page__map iframe {
    min-height: 100%;
  }
}
</style>
