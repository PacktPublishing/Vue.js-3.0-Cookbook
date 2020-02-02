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

  [MT.CREATE_USER](state, payload) {
    console.log(payload);
    state.loading = false;
  },

  [MT.SET_USER_DATA](state, { email = '', phone = '' }) {
    state.email = email;
    state.phone = phone;

    state.loading = false;
  },

  [MT.CLEAR_USER](state) {
    const newState = createState();

    Object.keys(state).forEach((key) => {
      state[key] = newState[key];
    });
  },
};
