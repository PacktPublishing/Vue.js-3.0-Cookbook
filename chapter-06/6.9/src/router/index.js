import Vue from 'vue';
import VueRouter from 'vue-router';
import UserRoutes from './user';
import AuthenticationMiddleware from './middleware/authentication';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/user'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login'),
    meta: {
      authenticated: false,
    },
  },
  ...UserRoutes,
  {
    path: '*',
    component: () => import('@/views/NotFound'),
    meta: {
      authenticated: false,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(AuthenticationMiddleware);

export default router;
