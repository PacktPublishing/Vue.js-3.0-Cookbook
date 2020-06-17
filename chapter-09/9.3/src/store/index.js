import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {},
    strict: process.env.DEV,
  });

  return Store;
}
