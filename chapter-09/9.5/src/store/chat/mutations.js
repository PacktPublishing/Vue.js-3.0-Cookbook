import MT from './types';
import { createState } from './state';

function setLoading(state) {
  state.loading = true;
}

function setError(state, error = new Error()) {
  state.error = error;
  state.loading = false;
}

function setConversations(state, payload) {
  state.conversations = payload;
  state.loading = false;
}

export default {
  [MT.LOADING]: setLoading,
  [MT.ERROR]: setError,
  [MT.SET_CONVERSATIONS]: setConversations,
};
