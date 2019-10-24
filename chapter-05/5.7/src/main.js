import './server/server';
import Vue from 'vue';
import App from './App.vue';
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/build/css/mdb.css'
import mdbVue from 'mdbvue';

Vue.use(mdbVue);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
