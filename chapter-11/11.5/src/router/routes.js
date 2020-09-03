const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue') },
      { path: 'about', name: 'about', component: () => import('pages/About.vue') },
    ],
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
