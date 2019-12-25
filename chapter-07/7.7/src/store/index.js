import Vue from 'vue';
import Vuex from 'vuex';
import UserStore from './user';

Vue.use(Vuex)

export default new Vuex.Store({
  ...UserStore,
})
