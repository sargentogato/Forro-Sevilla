<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { Menu, X, Instagram } from 'lucide-vue-next';

const { t, locale } = useI18n();
const route = useRoute();

const isMenuOpen = ref(false);

const navLinks = [
  { name: t('nav.home'), path: '/' },
  { name: t('nav.classes'), path: '/clases' },
  { name: t('nav.festival'), path: '/festival-2026' },
  { name: t('nav.events'), path: '/eventos' },
  { name: t('nav.history'), path: '/historia' },
  { name: t('nav.contact'), path: '/contacto' },
];

const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es';
};

watch(() => route.path, () => {
  isMenuOpen.value = false;
});
</script>

<template>
  <header id="header" class="header">
    <div class="header-container container">
      <router-link to="/" class="logo">
        <div class="logo-icon">A</div>
        <span class="logo-text">
          Forró Arrasta-pé<br/><span class="logo-accent">Sevilla</span>
        </span>
      </router-link>

      <!-- Desktop Nav -->
      <nav class="nav-desktop">
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="nav-link"
          :class="{ active: route.path === link.path }"
        >
          {{ link.name }}
        </router-link>
        <button
          @click="toggleLanguage"
          class="lang-toggle"
        >
          {{ locale === 'es' ? 'EN' : 'ES' }}
        </button>
        <a
          href="https://instagram.com/forrosevilla"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
        >
          <Instagram :size="20" />
        </a>
      </nav>

      <!-- Mobile Nav Toggle -->
      <div class="nav-mobile-controls">
        <button
          @click="toggleLanguage"
          class="lang-toggle"
        >
          {{ locale === 'es' ? 'EN' : 'ES' }}
        </button>
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="menu-toggle"
        >
          <X v-if="isMenuOpen" :size="28" />
          <Menu v-else :size="28" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="mobile-menu">
      <div v-if="isMenuOpen" class="mobile-menu">
        <div class="mobile-menu-content">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="mobile-nav-link"
            :class="{ active: route.path === link.path }"
          >
            {{ link.name }}
          </router-link>
          <div class="mobile-menu-footer">
            <a
              href="https://instagram.com/forrosevilla"
              target="_blank"
              rel="noopener noreferrer"
              class="mobile-social-link"
            >
              <Instagram :size="20" />
              <span>@forrosevilla</span>
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>

  <main class="main-content">
    <slot />
  </main>

  <footer id="footer" class="footer">
    <div class="footer-container container">
      <div class="footer-col">
        <h3 class="serif footer-logo">Forró Arrasta-pé Sevilla</h3>
        <p class="footer-text">
          {{ t('home.what_is_forro_text') }}
        </p>
        <div class="footer-social">
          <a href="https://instagram.com/forrosevilla" class="footer-social-link" target="_blank"><Instagram /></a>
        </div>
      </div>
      <div class="footer-col">
        <h4 class="text-upper footer-subtitle">{{ t('home.quick_access') }}</h4>
        <div class="footer-links">
          <router-link to="/" class="f-link">{{ t('nav.home') }}</router-link>
          <router-link to="/clases" class="f-link">{{ t('nav.classes') }}</router-link>
          <router-link to="/festival-2026" class="f-link">{{ t('nav.festival') }}</router-link>
          <router-link to="/eventos" class="f-link">{{ t('nav.events') }}</router-link>
          <router-link to="/historia" class="f-link">{{ t('nav.history') }}</router-link>
          <router-link to="/contacto" class="f-link">{{ t('nav.contact') }}</router-link>
        </div>
      </div>
      <div class="footer-col">
        <h4 class="text-upper footer-subtitle">{{ t('nav.contact') }}</h4>
        <div class="footer-info-stack">
          <p><strong>Tel:</strong> +34 603 176 756</p>
          <p><strong>Email:</strong> forroarrastapesevilla@gmail.com</p>
          <p><strong>Escuela:</strong> C. Don Fadrique, 59 · Sevilla</p>
        </div>
      </div>
    </div>
    <div class="footer-bottom container">
      <p>© {{ new Date().getFullYear() }} Forró Arrasta-pé Sevilla. {{ t('common.footer_love') }}.</p>
    </div>
  </footer>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.header-container {
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-icon {
  width: 3rem;
  height: 3rem;
  background-color: var(--forro-orange);
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-serif);
  font-weight: 900;
  font-size: 1.5rem;
}

.logo-text {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1;
}

.logo-accent {
  color: var(--forro-orange);
  font-weight: 900;
}

.nav-desktop {
  display: none;
  align-items: center;
  gap: 2.5rem;
}

@media (min-width: 1024px) {
  .nav-desktop {
    display: flex;
  }
}

.nav-link {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--gray-700);
}

.nav-link.active, .nav-link:hover {
  color: var(--forro-orange);
}

.lang-toggle {
  font-size: 0.75rem;
  font-weight: 800;
  background: var(--gray-100);
  padding: 0.4rem 0.8rem;
  border-radius: var(--radius-sm);
  color: var(--dark);
  border: 1px solid var(--gray-200);
  cursor: pointer;
}

.social-link {
  color: var(--gray-700);
  transition: var(--transition);
}

.social-link:hover {
  color: var(--forro-orange);
  transform: translateY(-2px);
}

.nav-mobile-controls {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .nav-mobile-controls {
    display: none;
  }
}

.menu-toggle {
  background: none;
  border: none;
  color: var(--dark);
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-menu {
  position: absolute;
  top: 6rem;
  left: 0;
  right: 0;
  background-color: white;
  border-bottom: 1px solid var(--gray-100);
  box-shadow: var(--shadow-lg);
}

.mobile-menu-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-nav-link {
  font-size: 1.5rem;
  font-family: var(--font-serif);
  font-weight: 700;
  color: var(--dark);
}

.mobile-nav-link.active {
  color: var(--forro-orange);
}

.mobile-menu-footer {
  margin-top: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--gray-100);
}

.mobile-social-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--gray-700);
  font-weight: 600;
}

.footer {
  background-color: var(--dark);
  color: white;
  padding: 6rem 0 2rem;
}

.footer-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
}

@media (min-width: 768px) {
  .footer-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

.footer-logo {
  font-size: 1.75rem;
  margin-bottom: 2rem;
  color: white;
}

.footer-text {
  color: var(--gray-500);
  margin-bottom: 2rem;
  font-size: 0.9rem;
  line-height: 1.7;
}

.footer-social-link {
  color: white;
  transition: var(--transition);
}

.footer-social-link:hover {
  color: var(--forro-orange);
}

.footer-subtitle {
  font-size: 0.8rem;
  font-weight: 900;
  margin-bottom: 2rem;
  color: var(--gray-300);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.f-link {
  color: var(--gray-500);
  font-size: 0.9rem;
  transition: var(--transition);
}

.f-link:hover {
  color: white;
}

.footer-info-stack p {
  color: var(--gray-500);
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
}

.footer-info-stack strong {
  color: var(--gray-300);
}

.footer-bottom {
  margin-top: 6rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
  font-size: 0.8rem;
  color: var(--gray-700);
}

.main-content {
  padding-top: 6rem;
  min-height: 100vh;
}

/* Animations */
.mobile-menu-enter-active, .mobile-menu-leave-active {
  transition: all 0.3s ease;
}
.mobile-menu-enter-from, .mobile-menu-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
