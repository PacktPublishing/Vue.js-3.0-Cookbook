import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

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

export default new Router({
  routes,
});
