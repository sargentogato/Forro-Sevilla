<script setup lang="ts">
// Cookie Policy Page
</script>

<template>
  <div class="policy-page section container">
    <div class="section-head">
      <h2 class="serif">{{ $t('cookies.policy.title') }}</h2>
    </div>
    
    <div class="policy-content glass">
      <p>
        {{ $t('cookies.policy.content') }}
      </p>

      <h3 class="serif policy-subtitle">{{ $t('cookies.policy.howToDisableTitle') }}</h3>
      <p>
        {{ $t('cookies.policy.howToDisableContent') }}
      </p>
      
      <ul class="browser-links">
        <li>
          <strong>Google Chrome:</strong>
          <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
            {{ $t('cookies.policy.browserLinks.chrome') }}
          </a>
        </li>
        <li>
          <strong>Mozilla Firefox:</strong>
          <a href="https://support.mozilla.org/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer">
            {{ $t('cookies.policy.browserLinks.firefox') }}
          </a>
        </li>
        <li>
          <strong>Apple Safari:</strong>
          <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">
            {{ $t('cookies.policy.browserLinks.safari') }}
          </a>
        </li>
        <li>
          <strong>Microsoft Edge:</strong>
          <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">
            {{ $t('cookies.policy.browserLinks.edge') }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.policy-page {
  padding-top: 140px;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 0.6s ease-out;
}

.policy-content {
  max-width: 800px;
  width: 100%;
  padding: 40px;
  border-radius: var(--radius-lg);
  margin: 0 auto;
  box-shadow: var(--shadow-lg);
}

.policy-content p {
  margin-bottom: 24px;
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color);
  text-align: left;
}

.policy-subtitle {
  font-size: 1.75rem;
  margin-top: 40px;
  margin-bottom: 16px;
  color: var(--forro-orange);
}

.browser-links {
  list-style: none;
  padding: 0;
  margin-bottom: 16px;
}

.browser-links li {
  margin-bottom: 16px;
  padding-left: 24px;
  position: relative;
  font-size: 1.05rem;
  color: var(--text-color);
}

.browser-links li::before {
  content: '•';
  color: var(--forro-orange);
  position: absolute;
  left: 0;
  font-size: 1.5rem;
  line-height: 1.2;
}

.browser-links a {
  color: var(--forro-orange);
  text-decoration: none;
  margin-left: 6px;
  font-weight: 600;
  transition: var(--transition);
}

.browser-links a:hover {
  color: var(--forro-red);
  text-decoration: underline;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .policy-content {
    padding: 24px;
  }
}
</style>
