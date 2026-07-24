<script setup lang="ts">
import { onMounted, ref } from 'vue';

const STORAGE_KEY = 'cookie_consent_given';
const isVisible = ref(false);

onMounted(() => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    isVisible.value = true;
  }
});

const acceptCookies = () => {
  localStorage.setItem(STORAGE_KEY, 'true');
  
  isVisible.value = false;
};
</script>

<template>
  <div v-if="isVisible" class="cookie-banner">
    <p class="cookie-text">
      {{ $t('cookies.banner.text') }}
    </p>

    <div class="cookie-actions">
      <button @click="acceptCookies" class="cookie-button">
        {{ $t('cookies.banner.accept') }}
      </button>
      <RouterLink
        :to="{ name: 'CookiesPage' }"
        class="cookie-link"
      >
        {{ $t('cookies.banner.moreInfo') }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.cookie-banner {
  background-color: hsl(0, 0%, 18%, 0.95);
  bottom: 0;
  color: white;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  left: 0;
  padding-bottom: 25px;
  padding-top: 25px;
  position: fixed;
  width: 100%;
  z-index: 50;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.3);
}

.cookie-text {
  flex-basis: 100%;
  flex-grow: 1;
  font-weight: 500;
  margin: 0;
  margin-bottom: 10px;
  min-width: 300px;
  padding: 0 20px;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: 0.95rem;
}

.cookie-actions {
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  gap: 12px;
}

.cookie-link {
  color: #a0c4ff;
  text-decoration: underline;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.cookie-link:hover {
  color: #cddcf7;
}

.cookie-button {
  background-color: #2b7a0b;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  padding: 8px 24px;
  font-size: 1rem;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.cookie-button:hover {
  background-color: #3b9c14;
}

.cookie-button:active {
  transform: scale(0.98);
}

@media (min-width: 768px) {
  .cookie-banner {
    flex-wrap: nowrap;
    align-items: center;
    padding: 15px 30px;
  }
  .cookie-text {
    flex-basis: auto;
    margin-bottom: 0;
    text-align: left;
  }
  .cookie-actions {
    flex-basis: auto;
    flex-direction: row;
    margin-bottom: 0;
    gap: 20px;
    margin-left: auto;
  }
}
</style>
