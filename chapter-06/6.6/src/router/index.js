import Vue from 'vue';
import VueRouter from 'vue-router';
import UserRoutes from './user';

Vue.use(VueRouter);

const routes = [
  ...UserRoutes,
  {
    path: '*',
    redirect: '/user',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
