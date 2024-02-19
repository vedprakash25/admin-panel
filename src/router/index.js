// router.js
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/Home.vue";
import AboutPage from "../views/AboutPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
