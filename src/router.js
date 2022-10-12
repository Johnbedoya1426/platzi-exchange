import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About";
import Error from "@/views/Error";
import coinDetail from "@/views/coinDetail";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "abuot",
    component: About,
  },
  {
    path: "/coin/:id(.*)",
    name: "coin-detail",
    component: coinDetail,
  },
  {
    path: "/:catchAll(.*)",
    name: "error",
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
