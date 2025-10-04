import type {RouteRecordRaw} from "vue-router";

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@layouts/main-layout/main-layout.vue'),
        children: [
            {
                path: '',
                name: 'index',
                component: () => import('@pages/index/index-page.vue'),
            },
        ],
    }
];