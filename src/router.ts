import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('./pages/Home.vue') },
  { path: '/clases', component: () => import('./pages/Classes.vue') },
  { path: '/festival-2026', component: () => import('./pages/Festival2026.vue') },
  { path: '/eventos', component: () => import('./pages/Events.vue') },
  { path: '/historia', component: () => import('./pages/History.vue') },
  { path: '/contacto', component: () => import('./pages/Contact.vue') },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
