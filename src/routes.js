import {createRouter, createWebHistory} from "vue-router";

const routerHistory = createWebHistory();

import PageMain from "@/components/pages/PageMain";

const routers = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: PageMain,
        },
    ],
});

export default routers;