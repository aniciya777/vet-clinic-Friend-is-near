import {createRouter, createWebHashHistory} from "vue-router";

const routerHistory = createWebHashHistory();

import PageMain from "@/components/pages/PageMain";
import PageDiscounts from "@/components/pages/PageDiscounts";

const routers = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: PageMain,
        },
        {
            path: '/discounts',
            component: PageDiscounts,
        }
    ],
});

export default routers;