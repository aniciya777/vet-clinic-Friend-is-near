import {createRouter, createWebHashHistory} from "vue-router";

const routerHistory = createWebHashHistory();

import PageMain from "@/components/pages/main/PageMain";
import PageDiscounts from "@/components/pages/discounts/PageDiscounts";

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