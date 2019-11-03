import Vue from 'vue';
import VueRouter from 'vue-router';
import UserRoutes from './user';
import NotFound from '@/views/NotFound';
import Login from '@/views/Login';
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
    component: Login,
    meta: {
      authenticated: false,
    },
  },
  ...UserRoutes,
  {
    path: '*',
    component: NotFound,
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
