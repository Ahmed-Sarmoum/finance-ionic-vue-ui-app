import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/tabs/home",
  },
  {
    path: "/tabs/",
    component: () => import("@/pages/tabs/TabsPage.vue"),
    children: [
      {
        path: "",
        redirect: "/tabs/home",
      },
      {
        path: "home",
        component: () => import("@/pages/tabs/home/HomePage.vue"),
      },
      {
        path: "transactions",
        component: () =>
          import("@/pages/tabs/transactions/TransactionsPage.vue"),
      },
      {
        path: "card",
        component: () => import("@/pages/tabs/card/CardPage.vue"),
      },
      {
        path: "settings",
        component: () => import("@/pages/tabs/settings/SettingsPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
