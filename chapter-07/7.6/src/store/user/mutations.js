import MT from './types';

const setLoading = state => {
  state.loading = true;
};

const setError = (state, payload) => {
  state.loading = false;
  state.error = payload;
};

const setUserList = (state, payload) => {
  state.data.usersList = payload;
  state.loading = false;
  state.error = null;
};

const updateUser = (state, payload) => {
  const userIndex = state.data.usersList.findIndex(u => u.id === payload.id);
  if (userIndex > -1) {
    state.data.usersList[userIndex] = payload;
  }
  state.loading = false;
  state.error = null;
};

const removeUser = (state, payload) => {
  const userIndex = state.data.usersList.findIndex(u => u.id === payload);
  if (userIndex > -1) {
    state.data.usersList.splice(userIndex, 1);
  }
  state.loading = false;
  state.error = null;
};

export default {
  [MT.LOADING]: setLoading,
  [MT.ERROR]: setError,
  [MT.SET_USER_LIST]: setUserList,
  [MT.UPDATE_USER]: updateUser,
  [MT.REMOVE_USER]: removeUser,
}
