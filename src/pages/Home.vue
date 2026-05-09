<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ChevronRight, Calendar, Users, Music, Instagram } from 'lucide-vue-next';

const { t } = useI18n();

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=800&auto=format&fit=crop', alt: 'Pareja bailando forró' },
  { id: 2, src: 'https://images.unsplash.com/photo-1593630650942-887e35b71db3?q=80&w=800&auto=format&fit=crop', alt: 'Música en vivo forró' },
  { id: 3, src: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop', alt: 'Clase de baile' },
  { id: 4, src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop', alt: 'Ambiente festivo' },
];
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero flex-center">
      <div class="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1920&auto=format&fit=crop"
          alt="Pareja bailando forró"
          class="hero-img"
        />
        <div class="hero-overlay"></div>
      </div>

      <div class="hero-content animate-fade">
        <h1 class="hero-title">{{ t('home.hero_title') }}</h1>
        <p class="hero-subtitle">{{ t('home.hero_subtitle') }}</p>
        <div class="hero-actions">
          <router-link to="/festival-2026" class="btn btn-primary btn-big shadow-xl scale-hover">
            Festival 2026 · Sevilla
          </router-link>
        </div>
      </div>

      <div class="hero-footer-text">
        <p class="serif">"Tanto si es tu primera clase como si llevas años bailando, aquí tienes tu sitio"</p>
      </div>
    </section>

    <!-- What is Forró -->
    <section class="section container">
      <div class="grid grid-2 gap-16 items-center">
        <div class="intro-content">
          <h2 class="serif text-big-display mb-6">{{ t('home.what_is_forro') }}</h2>
          <p class="section-text text-lg lg:text-xl leading-relaxed text-gray-700">
            {{ t('home.what_is_forro_text') }}
            El forró es un fenómeno cultural vibrante que va más allá del baile; es una forma de vida que celebra la alegría, la conexión y el espíritu del Nordeste brasileño. En nuestras clases en Sevilla, te sumergirás en una comunidad acogedora donde el respeto y la pasión por la música se entrelazan. Una experiencia llena de alegría, música y cultura brasileña que te hará vibrar desde el primer paso.
          </p>
          <div class="mt-8">
            <router-link to="/historia" class="btn btn-outline">
              {{ t('home.read_more') }}
              <ChevronRight :size="20" />
            </router-link>
          </div>
        </div>
        <div class="intro-visual">
          <div class="image-wrapper shadow-2xl">
            <img src="https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1200&auto=format&fit=crop" alt="Abrazo forrozeiro" class="intro-img-short" />
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Access -->
    <section class="section quick-access bg-gray-100">
      <div class="container">
        <div class="section-head">
          <h2 class="serif">{{ t('home.quick_access') }}</h2>
          <div class="title-underline"></div>
        </div>
        
        <div class="grid grid-3 gap-8">
          <router-link to="/clases" class="access-card palette-orange border-orange">
            <div class="card-icon flex-center"><Users :size="28" /></div>
            <div class="card-body">
              <h3 class="serif">{{ t('nav.classes') }}</h3>
              <p>Horarios, lugares y precios para todos los niveles adaptados a ti.</p>
            </div>
            <div class="card-arrow"><ChevronRight /></div>
          </router-link>

          <router-link to="/festival-2026" class="access-card palette-red border-red">
            <div class="card-icon flex-center"><Music :size="28" /></div>
            <div class="card-body">
              <h3 class="serif">Festival 2026</h3>
              <p>Únete al mayor evento de forró en Sevilla. Artistas internacionales y mucha fiesta.</p>
            </div>
            <div class="card-arrow"><ChevronRight /></div>
          </router-link>

          <router-link to="/eventos" class="access-card palette-gold border-gold">
            <div class="card-icon flex-center"><Calendar :size="28" /></div>
            <div class="card-body">
              <h3 class="serif">{{ t('nav.events') }}</h3>
              <p>Sigue nuestras fiestas sociales, cenas y sesiones al aire libre.</p>
            </div>
            <div class="card-arrow"><ChevronRight /></div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="section container">
      <div class="section-head">
        <span class="section-label">{{ t('home.our_classes_gallery') }}</span>
        <h2 class="serif">{{ t('home.gallery_subtitle') }}</h2>
      </div>
      
      <div class="grid grid-4 gap-4 gallery-grid">
        <div v-for="img in galleryImages" :key="img.id" class="gallery-item shadow-sm">
          <img :src="img.src" :alt="img.alt" class="gallery-img" />
        </div>
      </div>
      
      <div class="instagram-cta flex-center flex-col gap-4">
        <div class="insta-handle flex items-center gap-2">
           <Instagram :size="24" class="text-orange" />
           <span class="text-upper">@forrosevilla</span>
        </div>
        <a
          href="https://instagram.com/forrosevilla"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary"
        >
          {{ t('home.view_on_instagram') }}
        </a>
      </div>
    </section>

    <!-- Contact Banner -->
    <section class="contact-banner section bg-gold text-white">
      <div class="container flex-between gap-8 banner-stack">
        <div class="banner-content">
          <h2 class="serif text-white">{{ t('home.doubt_title') }}</h2>
          <p>{{ t('home.doubt_subtitle') }}</p>
        </div>
        <router-link to="/contacto" class="btn btn-white text-gold">
          {{ t('home.contact_now') }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  overflow-x: hidden;
}

.hero {
  position: relative;
  height: 90vh;
  min-height: 600px;
  text-align: center;
  overflow: hidden;
  color: white;
}

.hero-bg {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  z-index: -1;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3), rgba(0,0,0,0.8));
}

.hero-content {
  max-width: 800px;
  padding: 0 1.5rem;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  color: white;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 12px rgba(0,0,0,0.4);
}

.hero-subtitle {
  font-size: clamp(1.2rem, 3vw, 1.75rem);
  color: #fef3c7;
  margin-bottom: 3rem;
  font-style: italic;
  font-weight: 300;
}

.hero-actions {
  justify-content: center;
}

.hero-footer-text {
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  text-align: center;
  opacity: 0.8;
  font-size: 0.9rem;
  padding: 0 1.5rem;
}

.text-big-display {
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: var(--forro-earth);
  line-height: 1.1;
}

.intro-img-short {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
}

.scale-hover {
  transition: transform 0.3s ease;
}

.scale-hover:hover {
  transform: scale(1.05);
}

@media (max-width: 640px) {
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
}

.section-label {
  display: block;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 800;
  color: var(--forro-orange);
  margin-bottom: 1rem;
}

.section-text {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  color: var(--gray-700);
}

.image-wrapper {
  border-radius: 4rem;
  overflow: hidden;
  border: 12px solid white;
}

.title-underline {
  width: 80px;
  height: 4px;
  background: var(--forro-orange);
  margin: 1rem auto 0;
  border-radius: 99px;
}

.access-card {
  position: relative;
  background: var(--card-bg);
  padding: 4rem 3rem;
  border-radius: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 380px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 2px solid transparent;
}

.access-card.border-orange { border-color: rgba(242, 125, 38, 0.1); }
.access-card.border-red { border-color: rgba(217, 68, 54, 0.1); }
.access-card.border-gold { border-color: rgba(242, 169, 34, 0.1); }

.access-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
}

.access-card.border-orange:hover { border-color: var(--forro-orange); }
.access-card.border-red:hover { border-color: var(--forro-red); }
.access-card.border-gold:hover { border-color: var(--forro-gold); }

.card-icon {
  width: 72px;
  height: 72px;
  border-radius: 24px;
  background: white !important;
  color: var(--card-icon) !important;
  box-shadow: var(--shadow-md);
  margin-bottom: 2.5rem;
}

.card-body h3 {
  font-size: 2rem;
  margin-bottom: 0.75rem;
  color: var(--card-accent);
}

.card-body p {
  color: var(--gray-700);
  font-weight: 500;
  opacity: 0.8;
}

.card-arrow {
  margin-top: 2rem;
  align-self: flex-end;
  color: var(--card-icon);
  transition: var(--transition);
}

.access-card:hover .card-arrow {
  transform: translateX(10px);
}

.gallery-grid {
  margin-top: 4rem;
}

@media (max-width: 640px) {
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
}

.gallery-item {
  aspect-ratio: 1;
  border-radius: var(--radius-md);
  overflow: hidden;
}

.gallery-img {
  width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s;
}

.gallery-item:hover .gallery-img {
  transform: scale(1.1);
}

.instagram-cta {
  margin-top: 5rem;
}

.bg-gold {
  background-color: var(--forro-gold);
}

.text-gold {
  color: var(--forro-gold);
}

.btn-white {
  background: white;
  color: var(--forro-gold);
}

@media (max-width: 768px) {
  .banner-stack {
    flex-direction: column;
    text-align: center;
  }
  .grid-3 { grid-template-columns: 1fr; }
}
</style>
