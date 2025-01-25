import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import NotFound from "../components/NotFound.vue";
import GamesView from "../views/GamesView";
import CartView from "../views/CartView";
import ConvertPrice from "../components/PriceConverter";

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
