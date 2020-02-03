const routes = [
  {
    path: '/',
    component: () => import('layouts/Base.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('pages/Index.vue'),
      },
    ],
  },
  {
    path: '/chat',
    component: () => import('layouts/Chat.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('pages/Chat.vue'),
      },
      {
        path: 'messages/:id',
        name: 'Messages',
        component: () => import('pages/Messages.vue'),
      },
    ],
  },
  {
    path: '/user',
    component: () => import('layouts/Chat.vue'),
    children: [
      {
        path: '',
        alias: 'edit',
        name: 'Edit',
        component: () => import('pages/Edit.vue'),
      },
    ],
  },
  {
    path: '/register',
    component: () => import('layouts/Chat.vue'),
    children: [
      {
        path: '',
        alias: 'sign-up',
        name: 'SignUp',
        component: () => import('pages/SignUp.vue'),
      },
      {
        path: 'validate',
        name: 'Validate',
        component: () => import('pages/Validate.vue'),
      },
    ],
  },
];
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
