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
        path: 'contacts',
        name: 'Contacts',
        component: () => import('pages/Contacts.vue'),
      },
    ],
  },
  {
    path: '/chat/messages',
    component: () => import('layouts/Chat.vue'),
    children: [
      {
        path: ':id/:name',
        name: 'Messages',
        meta: {
          goBack: {
            name: 'Contacts',
          },
        },
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
        meta: {
          goBack: {
            name: 'Contacts',
          },
        },
        component: () => import('pages/Edit.vue'),
      },
    ],
  },
  {
    path: '/register',
    component: () => import('layouts/Base.vue'),
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
