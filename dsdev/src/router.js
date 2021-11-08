import { createWebHistory, createRouter } from "vue-router";
// import About from "@/views/About.vue";
import Home from "./pages/Home.vue";
import Buttons from "./pages/Buttons.vue";
import Typography from "./pages/Typography.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/buttons",
    name: "Knapper",
    component: Buttons,
  },
  {
    path: "/typography",
    name: "Typography",
    component: Typography,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
