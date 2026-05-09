<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Phone, Mail, Instagram, MapPin, Send } from 'lucide-vue-next';

const { t } = useI18n();

const handleSubmit = (e: Event) => {
  e.preventDefault();
  // Form logic...
};
</script>

<template>
  <div class="contact-page">
    <header class="page-header flex-center bg-gold text-white">
      <div class="container animate-fade">
        <h1 class="text-white">{{ t('nav.contact') }}</h1>
        <p class="hero-subtitle italic">¡Estamos encantados de escucharte!</p>
      </div>
    </header>

    <div class="container section">
      <div class="contact-layout grid grid-2 gap-12">
        <div class="contact-info-panel animate-fade">
          <h2 class="serif mb-8 text-big">Información de contacto</h2>
          <div class="contact-grid">
            <a href="tel:+34603176756" class="contact-card group palette-orange">
              <div class="card-icon">
                <Phone />
              </div>
              <div class="card-text">
                <span class="label text-upper">Teléfono / WhatsApp</span>
                <p class="value">+34 603 176 756</p>
              </div>
            </a>
            <a href="mailto:forroarrastapesevilla@gmail.com" class="contact-card group palette-red">
              <div class="card-icon">
                <Mail />
              </div>
              <div class="card-text">
                <span class="label text-upper">Email</span>
                <p class="value">forroarrastapesevilla@gmail.com</p>
              </div>
            </a>
            <a href="https://instagram.com/forrosevilla" target="_blank" class="contact-card group palette-gold">
              <div class="card-icon">
                <Instagram />
              </div>
              <div class="card-text">
                <span class="label text-upper">Instagram</span>
                <p class="value">@forrosevilla</p>
              </div>
            </a>
            <div class="contact-card palette-1">
              <div class="card-icon">
                <MapPin />
              </div>
              <div class="card-text">
                <span class="label text-upper">Dirección de la Escuela</span>
                <p class="value">Calle Don Fadrique, 59 · 41009 Sevilla</p>
              </div>
            </div>
          </div>
        </div>

        <div class="map-panel shadow-lg animate-fade min-h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m17!1m8!1m3!1d3169.3621531206124!2d-5.9926868!3d37.40487!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c04f986422f%3A0xc3f58e663a7f80db!2sCalle%20Don%20Fadrique%2C%2059%2C%20Casco%20Antiguo%2C%2041009%20Sevilla!5e0!3m2!1ses!2ses!4v1715124000000!5m2!1ses!2ses"
            width="100%"
            height="100%"
            style="border: 0; min-height: 500px; display: block;"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  height: 40vh;
  min-height: 300px;
  text-align: center;
}

.bg-gold { background-color: var(--forro-gold); }

.hero-subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-top: 1rem;
}

.text-big { font-size: 3rem; color: var(--forro-earth); }

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2.5rem;
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(0,0,0,0.05);
  transition: var(--transition);
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.card-icon {
  width: 64px;
  height: 64px;
  border-radius: 20px;
  background: white;
  color: var(--card-icon);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: var(--shadow-sm);
}

.label {
  display: block;
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--gray-400);
  margin-bottom: 0.25rem;
}

.value {
  font-weight: 700;
  color: var(--dark);
  font-size: 1rem;
}

.map-panel {
  border-radius: 3rem;
  overflow: hidden;
  border: 8px solid white;
}

@media (max-width: 1024px) {
  .contact-layout { grid-template-columns: 1fr; }
  .text-big { font-size: 2.25rem; }
}
</style>
