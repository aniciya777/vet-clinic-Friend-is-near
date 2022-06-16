import {createRouter, createWebHashHistory} from "vue-router";

const routerHistory = createWebHashHistory();

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