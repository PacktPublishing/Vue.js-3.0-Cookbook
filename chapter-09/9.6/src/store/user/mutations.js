import MT from './types';
import { createState } from './state';

function setLoading(state) {
  state.loading = true;
}

function setError(state, error = new Error()) {
  state.error = error;
  state.loading = false;
}

function createUser(state, {
  id = '',
  email = '',
  password = '',
  name = '',
  username = '',
}) {
  state.username = username;
  state.email = email;
  state.name = name;
  state.id = id;
  state.password = window.btoa(password);
  state.loading = false;
}

function validateUser(state) {
  state.validated = true;
  delete state.password;
  state.loading = false;
}

function setUserData(state, {
  id = '',
  email = '',
  name = '',
  username = '',
  avatar = {
    key: '',
    bucket: '',
    region: '',
  },
}) {
  state.id = id;
  state.email = email;
  state.name = name;
  state.username = username;
  state.avatar = avatar || {
    key: '',
    bucket: '',
    region: '',
  };

  delete state.password;

  state.validated = true;
  state.loading = false;
}

function clearUser(state) {
  const newState = createState();

  Object.keys(state).forEach((key) => {
    state[key] = newState[key];
  });
}

export default {
  [MT.LOADING]: setLoading,
  [MT.ERROR]: setError,
  [MT.CREATE_USER]: createUser,
  [MT.USER_VALIDATED]: validateUser,
  [MT.SET_USER_DATA]: setUserData,
  [MT.CLEAR_USER]: clearUser,
};
