import Index from '@/views/user/Index.vue';
import List from '@/views/user/List.vue';
import View from '@/views/user/View.vue';
import Edit from '@/views/user/Edit.vue';
import Create from '@/views/user/Create.vue';

export default [
  {
    path: '/user',
    name: 'user',
    component: Index,
    meta: {
      authenticated: true,
    },
    children: [
      {
        path: '',
        name: 'list',
        component: List,
        meta: {
          authenticated: true,
        },
      },
      {
        path: ':id',
        name: 'view',
        component: View,
        meta: {
          authenticated: true,
        },
      },
      {
        path: 'edit/:id',
        name: 'edit',
        component: Edit,
        meta: {
          authenticated: true,
        },
      },
      {
        path: 'create',
        name: 'create',
        component: Create,
        meta: {
          authenticated: true,
        },
      },
    ],
  },
]
