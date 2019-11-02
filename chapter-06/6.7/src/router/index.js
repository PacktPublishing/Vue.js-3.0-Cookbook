import Vue from 'vue';
import VueRouter from 'vue-router';
import UserRoutes from './user';
import NotFound from '@/views/NotFound';

Vue.use(VueRouter);

const routes = [
  ...UserRoutes,
  {
    path: '/',
    redirect: '/user'
  },
  {
    path: '*',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
