import Vue from 'vue';
import Vuex from 'vuex';
import UserStore from './user';

Vue.use(Vuex);

export const store = new Vuex.Store({
  ...UserStore,
});

if (module.hot) {
  const hmr = [
    './user',
    './user/getters',
    './user/actions',
    './user/mutations',
  ];

  const reloadCallback = () => {
    const getters = require('./user/getters').default;
    const actions = require('./user/actions').default;
    const mutations =  require('./user/mutations').default;

    store.hotUpdate({
      getters,
      actions,
      mutations,
    })
  };

  module.hot.accept(hmr, reloadCallback);
}

export default store;
