import Vue from 'vue';
import App from './App.vue';
import InputMaskDirective from './directives/formMaskInputDirective';

Vue.config.productionTip = false;

Vue.directive('input-mask', InputMaskDirective);

new Vue({
  render: h => h(App),
}).$mount('#app');
