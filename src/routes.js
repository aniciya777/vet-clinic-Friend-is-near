import {createRouter, createWebHashHistory} from "vue-router";

const routerHistory = createWebHashHistory();

import PageMain from "@/components/pages/main/PageMain";
import PageDiscounts from "@/components/pages/discounts/PageDiscounts";
import PageError_404 from "@/components/pages/_errors/PageError_404";

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'main',
      component: PageMain,
    },
    {
      path: '/discounts',
      name: 'discounts',
      component: PageDiscounts,
    },
    {
      path: '/:CatchAll(.*)',
      name: 'error_404',
      component: PageError_404,
    },
  ],
});

export default routers;
