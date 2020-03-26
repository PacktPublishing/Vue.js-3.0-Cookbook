import MT from './types';

function setLoading(state) {
  state.loading = true;
}

function setError(state, error = new Error()) {
  state.error = error;
  state.loading = false;
}

function setConversations(state, payload) {
  state.conversations = payload.items;
  state.loading = false;
}

export default {
  [MT.LOADING]: setLoading,
  [MT.ERROR]: setError,
  [MT.SET_CONVERSATIONS]: setConversations,
};
