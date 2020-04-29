import './server/server';
import Vue from 'vue';
import App from './App.vue';
import Vuesax from 'vuesax';
import './style.css';
import router from './router'

Vue.use(Vuesax);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
