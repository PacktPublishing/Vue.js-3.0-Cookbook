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
      {
        path: 'sign-up',
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
