import Vue from 'vue';
import VueRouter from 'vue-router';
import List from '@/views/List.vue';
import View from '@/views/View.vue';
import Edit from '@/views/Edit.vue';
import Create from '@/views/Create.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/user',
    name: 'list',
    alias: '/',
    component: List,
  },
  {
    path: '/user/:id',
    name: 'view',
    alias: '/view/:id',
    component: View,
  },
  {
    path: '/user/edit/:id',
    name: 'edit',
    alias: '/edit/:id',
    component: Edit,
  },
  {
    path: '/user/create',
    name: 'create',
    alias: '/create',
    component: Create,
  },
  {
    path: '/create-new-user',
    redirect: '/user/create',
  },
  {
    path: '/users',
    redirect: {
      name: 'list',
    },
  },
  {
    path: '/my-user/:id?',
    redirect(to) {
      if (to.params.id) {
        return '/user/:id';
      }
      return '/user';
    },
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
