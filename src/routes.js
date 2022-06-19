import {createRouter, createWebHashHistory} from "vue-router";

const routerHistory = createWebHashHistory();

import PageMain from "@/components/pages/main/PageMain";
import PageDiscounts from "@/components/pages/discounts/PageDiscounts";
import PageDoctors from "@/components/pages/doctors/PageDoctors";
import PageAbout from "@/components/pages/about/PageAbout";
import PageContacts from "@/components/pages/contacts/PageContacts";
import PageError_404 from "@/components/pages/_errors/PageError_404";
import PageInfo from "@/components/pages/info/PageInfo";
import PagePrivacyPolicy from "@/components/pages/privacy_policy/PagePrivacyPolicy";

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'main',
      component: PageMain,
      meta: {
        breadcrumb: 'Главная',
      },
    },
    {
      path: '/discounts',
      name: 'discounts',
      component: PageDiscounts,
      meta: {
        breadcrumb: 'Акции',
      },
    },
    {
      path: '/doctors',
      name: 'doctors',
      component: PageDoctors,
      meta: {
        breadcrumb: 'Врачи',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: PageAbout,
      meta: {
        breadcrumb: 'О клинике',
      },
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: PageContacts,
      meta: {
        breadcrumb: 'Контакты',
      },
    },
    {
      path: '/info',
      name: 'info',
      component: PageInfo,
      meta: {
        breadcrumb: 'Информация для владельцев',
      },
    },
    {
      path: '/privacy_policy',
      name: 'privacy_policy',
      component: PagePrivacyPolicy,
      meta: {
        breadcrumb: 'Политика конфиденциальности',
      },
    },
    {
      path: '/:CatchAll(.*)',
      name: 'error_404',
      component: PageError_404,
      meta: {
        breadcrumb: false,
      },
    },
  ],
});

export default routers;
