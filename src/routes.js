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
import PageRegister from "@/components/pages/register/PageRegister";
import PageAuthorization from "@/components/pages/authorization/PageAuthorization";
import PageServices from "@/components/pages/services/PageServices";
import PageAppointment from "@/components/pages/appointment/PageAppointment";

const routers = createRouter({
  history: routerHistory,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  },
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
      path: '/services',
      name: 'services',
      component: PageServices,
      meta: {
        breadcrumb: 'Услуги',
      },
    },
    {
      path: '/services/appointment/:idServices',
      name: 'appointment',
      component: PageAppointment,
      meta: {
        breadcrumb: 'Запись на приём',
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
      path: '/register',
      name: 'register',
      component: PageRegister,
      meta: {
        breadcrumb: 'Регистрация',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: PageAuthorization,
      meta: {
        breadcrumb: 'Вход в личный кабинет',
      },
    },
    {
      path: '/404',
      name: 'error_404',
      component: PageError_404,
      meta: {
        breadcrumb: false,
      },
    },
    {
      path: '/:CatchAll(.*)',
      redirect: {
        name: 'error_404',
      }
    },
  ],
});

export default routers;
