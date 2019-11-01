import Vue from 'vue';
import VueRouter from 'vue-router';
import List from '../views/List.vue';
import View from '../views/View.vue';
import Edit from '../views/Edit.vue';
import Create from '../views/Create.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'list',
    component: List,
  },
  {
    path: '/view/:id',
    name: 'view',
    component: View,
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: Edit,
  },
  {
    path: '/create',
    name: 'create',
    component: Create,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
