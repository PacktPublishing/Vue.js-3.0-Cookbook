import Vue from 'vue';
import App from './App.vue';
import StorageManipulatorPlugin from './plugin/storageManipulator';

Vue.config.productionTip = false;

Vue.use(StorageManipulatorPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app');
