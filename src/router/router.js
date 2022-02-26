import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: process.env.NODE_ENV === 'global' ? 'history' : 'hash',
    routes: [
      { path: '/', name: 'Home', component: () => import('../views/Home.vue') },
      { path: '/actions', name: 'Actions', component: () => import('../views/Actions/Actions.vue') }
    ]
});

export default router;