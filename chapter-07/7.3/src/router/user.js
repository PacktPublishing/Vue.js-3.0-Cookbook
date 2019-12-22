export default [
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user/Index.vue'),
    meta: {
      authenticated: true,
    },
    children: [
      {
        path: '',
        name: 'list',
        component: () => import('@/views/user/List.vue'),
        meta: {
          authenticated: true,
        },
      },
      {
        path: ':id',
        name: 'view',
        component: () => import('@/views/user/View.vue'),
        meta: {
          authenticated: true,
        },
      },
      {
        path: 'edit/:id',
        name: 'edit',
        component: () => import('@/views/user/Edit.vue'),
        meta: {
          authenticated: true,
        },
      },
      {
        path: 'create',
        name: 'create',
        component: () => import('@/views/user/Create.vue'),
        meta: {
          authenticated: true,
        },
      },
    ],
  },
]
