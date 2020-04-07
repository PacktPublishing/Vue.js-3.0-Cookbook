import MT from './types';

function setLoading(state) {
  state.loading = !state.loading;
}

function setError(state, error = new Error()) {
  state.error = error;
  state.loading = false;
}

function setConversations(state, payload) {
  state.conversations = payload.items;
  state.loading = false;
}

function setMessages(state, payload) {
  const messageIndex = state.messages.findIndex(m => m.id === payload.id);

  if (messageIndex === -1) {
    state.messages.push(payload);
  } else {
    state.messages[messageIndex].messages.items = payload.messages.items;
  }
  state.loading = false;
}

export default {
  [MT.LOADING]: setLoading,
  [MT.ERROR]: setError,
  [MT.SET_CONVERSATIONS]: setConversations,
  [MT.SET_MESSAGES]: setMessages,
};
