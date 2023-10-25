import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomeVue from '@/pages/Home.vue';

const routes = [
    {
        path: '/',
        component: HomeVue
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;