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
    },
    {
      path: '/discounts',
      name: 'discounts',
      component: PageDiscounts,
    },
    {
      path: '/doctors',
      name: 'doctors',
      component: PageDoctors,
    },
    {
      path: '/about',
      name: 'about',
      component: PageAbout,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: PageContacts,
    },
    {
      path: '/info',
      name: 'info',
      component: PageInfo,
    },
    {
      path: '/privacy_policy',
      name: 'privacy_policy',
      component: PagePrivacyPolicy,
    },
    {
      path: '/:CatchAll(.*)',
      name: 'error_404',
      component: PageError_404,
    },
  ],
});

export default routers;
