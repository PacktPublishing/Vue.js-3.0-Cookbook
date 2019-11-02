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
    children: [
      {
        path: '',
        name: 'list',
        component: List,
      },
      {
        path: ':id',
        name: 'view',
        component: View,
      },
      {
        path: 'edit/:id',
        name: 'edit',
        component: Edit,
      },
      {
        path: 'create',
        name: 'create',
        component: Create,
      },
    ],
  },
]
