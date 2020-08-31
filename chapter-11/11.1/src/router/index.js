import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [];
const requireRoutes = require.context(
  './routes',
  true,
  /^(?!.*test).*\.js$/is,
);

requireRoutes.keys().forEach((fileName) => {
  routes.push({
    ...requireRoutes(fileName).default,
  });
});

const router = new VueRouter({
  routes,
});

export default router;
