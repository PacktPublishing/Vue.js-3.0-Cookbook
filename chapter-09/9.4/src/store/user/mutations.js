import MT from './types';
import { createState } from './state';

export default {
  [MT.LOADING](state) {
    state.loading = true;
  },

  [MT.ERROR](state, error = new Error()) {
    state.error = error;
    state.loading = false;
  },

  [MT.CREATE_USER](state, {
    email = '',
    password = '',
    name = '',
    username = '',
  }) {
    state.username = username;
    state.email = email;
    state.name = name;
    state.password = window.btoa(password);
    state.loading = false;
  },

  [MT.USER_VALIDATED](state) {
    state.validated = true;
    delete state.password;
    state.loading = false;
  },

  [MT.SET_USER_DATA](state, {
    id = '',
    email = '',
    name = '',
    username = '',
    avatar = '',
  }) {
    state.id = id;
    state.email = email;
    state.name = name;
    state.username = username;
    state.avatar = avatar || '';

    delete state.password;

    state.validated = true;
    state.loading = false;
  },

  [MT.CLEAR_USER](state) {
    const newState = createState();

    Object.keys(state).forEach((key) => {
      state[key] = newState[key];
    });
  },
};
