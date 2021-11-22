import { createWebHistory, createRouter } from "vue-router";
// import About from "@/views/About.vue";
import Home from "./pages/Home.vue";
import Buttons from "./pages/Buttons.vue";
import Typography from "./pages/Typography.vue";
import Advanced from "./pages/Advanced.vue";
import Icons from "./pages/Icons.vue";

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
  {
    path: "/advanced",
    name: "Advanced",
    component: Advanced,
  },
  {
    path: "/icons",
    name: "Icons",
    component: Icons,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
