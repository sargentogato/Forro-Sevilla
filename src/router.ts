import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Classes from './pages/Classes.vue';
import Festival2026 from './pages/Festival2026.vue';
import Events from './pages/Events.vue';
import History from './pages/History.vue';
import Contact from './pages/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/clases', component: Classes },
  { path: '/festival-2026', component: Festival2026 },
  { path: '/eventos', component: Events },
  { path: '/historia', component: History },
  { path: '/contacto', component: Contact },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
