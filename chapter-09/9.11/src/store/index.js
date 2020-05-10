import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';
import chat from './chat';

Vue.use(Vuex);

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      user,
      chat,
    },
    strict: process.env.DEV,
  });

  return Store;
}
