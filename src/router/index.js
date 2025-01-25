import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import GamesView from "../views/GamesView.vue";
import CartView from "../views/CartView.vue";
import ConvertPrice from "../components/PriceConverter.vue";
import NotFound from "../components/NotFound.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/Games",
    name: "gamesview",
    component: GamesView,
  },
  {
    path: "/Cart",
    name: "cart",
    component: CartView,
  },
  {
    path: "/Convert",
    name: "convert",
    component: ConvertPrice,
  },
  {
    path: "/:catchAll(.*)",
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
