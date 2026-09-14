import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("./pages/HomePage.vue") },
  { path: "/clases", component: () => import("./pages/ClassesPage.vue") },
  { path: "/festival", component: () => import("./pages/FestivalPage.vue") },
  { path: "/eventos", component: () => import("./pages/Events.vue") },
  { path: "/historia", component: () => import("./pages/History.vue") },
  { path: "/contacto", component: () => import("./pages/Contact.vue") },
  {
    path: "/cookies",
    name: "CookiesPage",
    component: () => import("./pages/CookiesPage.vue"),
  },
  {
    path: "/privacidad",
    name: "PrivacyPage",
    component: () => import("./pages/PrivacyPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
