<script setup lang="ts">
// Privacy Policy Page
</script>

<template>
  <div class="policy-page section container">
    <div class="section-head">
      <h2 class="serif">{{ $t('cookies.privacy.title') }}</h2>
    </div>
    
    <div class="policy-content glass">
      <p>
        {{ $t('cookies.privacy.content') }}
      </p>
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
