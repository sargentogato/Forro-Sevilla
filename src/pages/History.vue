<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { BookOpen, Map, User } from 'lucide-vue-next';

const { t } = useI18n();
const activeTab = ref('forro');

const tabs = [
  { id: 'forro', name: 'Historia del Forró', icon: BookOpen },
  { id: 'school', name: 'Forró Arrasta-pé Sevilla', icon: Map },
  { id: 'elton', name: 'Profesor Elton Rodrigues', icon: User },
];
</script>

<template>
  <div class="history-page">
    <header class="page-header flex-center bg-gold text-white">
      <div class="container animate-fade">
        <h1 class="text-white">{{ t('nav.history') }}</h1>
        <div class="title-underline"></div>
      </div>
    </header>

    <div class="container section">
      <!-- Tabs navigation -->
      <div class="tabs-nav animate-fade">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="tab-btn"
          :class="{ 'active': activeTab === tab.id }"
        >
          <component :is="tab.icon" :size="20" />
          <span>{{ tab.name }}</span>
        </button>
      </div>

      <!-- Tab content -->
      <div class="tab-content animate-fade shadow-lg">
        <transition name="fade-slide" mode="out-in">
          <div v-if="activeTab === 'forro'" key="forro" class="content-view">
            <h2 class="serif h2-title">Orígenes y Evolución</h2>
            <p class="text-desc">
              El forró es mucho más que un ritmo; es el alma del Nordeste de Brasil. Nacido en las zonas rurales, evolucionó de bailes tradicionales como el xote, el xaxado y el baião.
            </p>
            <p class="text-desc">
              Su expansión mundial comenzó con el legendario Luiz Gonzaga, el "Rey del Baião", quien llevó el sonido del acordeón, la zabumba y el triángulo a todos los rincones de Brasil. Hoy en día, el forró es una danza de conexión internacional que une a personas de todas las culturas.
            </p>
            <div class="grid grid-2 gap-8 mt-12">
              <div class="media-wrapper">
                 <img src="https://picsum.photos/seed/forro_history/800/600" alt="Old forró" class="shadow-md" referrerpolicy="no-referrer" />
              </div>
              <div class="quote-box glass-orange serif italic text-center">
                "El forró es una fiesta de alegría, donde el único idioma es el abrazo."
              </div>
            </div>
          </div>

          <div v-else-if="activeTab === 'school'" key="school" class="content-view">
            <h2 class="serif h2-title">Nuestra Misión en Sevilla</h2>
            <p class="text-desc">
              Forró Arrasta-pé Sevilla nació con un propósito claro: crear un puente cultural entre el vibrante espíritu de Brasil y la pasión de Andalucía. Sevilla, con su propia tradición de danza y música flamenca, es el lugar perfecto para esta fusión de almas.
            </p>
            <p class="text-desc">
              Somos una comunidad inclusiva donde el respeto y la alegría son los pilares. No solo enseñamos pasos; construimos momentos de felicidad compartida en plazas, muelles y centros culturales de nuestra ciudad.
            </p>
            <div class="media-banner mt-12">
               <img src="https://picsum.photos/seed/seville_forro/1200/500" alt="Students dancing" class="shadow-md" referrerpolicy="no-referrer" />
            </div>
          </div>

          <div v-else-if="activeTab === 'elton'" key="elton" class="content-view">
            <div class="profile-layout flex gap-12 items-center mb-12">
               <div class="profile-pic-wrapper shadow-lg">
                  <img src="https://picsum.photos/seed/elton_profile/400/400" alt="Elton Rodrigues" referrerpolicy="no-referrer" />
               </div>
               <div class="profile-info">
                  <h2 class="serif h2-title profile-name">Elton Rodrigues</h2>
                  <span class="profile-role text-upper">Instructor Principal & Fundador</span>
                  <p class="mt-6 italic text-muted">
                    Con una trayectoria dedicada a la danza y el estudio de las raíces brasileñas, Elton ha llevado el forró a diferentes ciudades de Europa, encontrando en Sevilla su hogar final para difundir esta cultura.
                  </p>
               </div>
            </div>
            <p class="text-desc">
              Su metodología se centra en la conexión con el compañero, la musicalidad y, sobre todo, en disfrutar cada momento. Elton cree firmemente que "todo el mundo puede bailar forró", y sus clases están diseñadas para que desde el minuto uno te sientas parte de la familia.
            </p>
          </div>
        </transition>
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

.title-underline {
  width: 100px;
  height: 6px;
  background: var(--white);
  margin: 1.5rem auto 0;
  border-radius: 99px;
}

.tabs-nav {
  display: flex;
  background: white;
  padding: 0.5rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--gray-100);
  margin-bottom: 4rem;
  gap: 0.5rem;
}

.tab-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.25rem;
  border-radius: var(--radius-md);
  font-weight: 700;
  color: var(--gray-500);
  border: none;
  background: none;
  cursor: pointer;
  transition: var(--transition);
  white-space: nowrap;
}

.tab-btn:hover {
  background: var(--gray-100);
  color: var(--forro-orange);
}

.tab-btn.active {
  background: var(--forro-orange);
  color: white;
  box-shadow: var(--shadow-md);
}

.tab-content {
  background: white;
  padding: 5rem;
  border-radius: 3rem;
  min-height: 500px;
}

.h2-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--forro-earth);
}

.text-desc {
  font-size: 1.125rem;
  color: var(--gray-700);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.media-wrapper img {
  border-radius: 2rem;
  aspect-ratio: 16/9;
}

.media-banner img {
  width: 100%;
  border-radius: 2rem;
  aspect-ratio: 21/9;
}

.quote-box {
  padding: 3rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.glass-orange {
  background: #fff7ed;
  color: var(--forro-earth);
  border: 1px solid #ffedd5;
}

.profile-layout {
  flex-wrap: wrap;
}

.profile-pic-wrapper {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  border: 6px solid var(--forro-orange);
}

.profile-pic-wrapper img {
  width: 100%;
  height: 100%;
}

.profile-role {
  color: var(--forro-orange);
  font-weight: 800;
  font-size: 0.85rem;
}

.text-muted { color: var(--gray-500); }

/* Transitions */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.4s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

@media (max-width: 768px) {
  .tabs-nav { flex-direction: column; }
  .tab-content { padding: 3rem 1.5rem; }
  .grid-2 { grid-template-columns: 1fr; }
  .profile-layout { justify-content: center; text-align: center; }
  .h2-title { font-size: 2rem; }
}
</style>
