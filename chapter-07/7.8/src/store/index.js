import Vue from 'vue';
import Vuex from 'vuex';
import UserStore from './user';
import Authentication from './authentication';

Vue.use(Vuex)

export default new Vuex.Store({
  ...UserStore,
  modules: {
    Authentication,
  }
})
