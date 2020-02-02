import { API, graphqlOperation } from 'aws-amplify';
import { getUser as GetUser } from 'src/graphql/queries';
import { createUser } from 'src/graphql/mutations';
import {
  singUp,
  validateUser,
  singIn,
  getCurrentAuthUser,
} from 'driver/auth';
import MT from './types';

async function initialLogin({ commit }) {
  try {
    commit(MT.LOADING);

    const userData = await getCurrentAuthUser();

    if (userData.username !== '') {
      await API.graphql(graphqlOperation(GetUser, { id: userData.id }));
    }
    commit(MT.SET_USER_DATA, userData);

    return Promise.resolve(userData);
  } catch (err) {
    commit(MT.ERROR, err);
    return Promise.reject(err);
  }
}

async function singUpNewUser({ commit }, {
  email = '',
  password = '',
}) {
  try {
    commit(MT.LOADING);

    const userData = await singUp({ username: email, password, email });

    commit(MT.CREATE_USER, { email, password });

    return Promise.resolve(userData);
  } catch (err) {
    commit(MT.ERROR, err);
    return Promise.reject(err);
  }
}

async function createNewUser({ commit, dispatch, state }, code) {
  try {
    commit(MT.LOADING);

    const userData = await validateUser(state.email, code);

    await dispatch('singInUser', { username: state.email, password: window.atob(state.password) });

    const user = await getCurrentAuthUser();

    await API.graphql(graphqlOperation(
      createUser,
      {
        input: {
          id: user.username,
          username: user.email,
        },
      },
    ));

    commit(MT.USER_VALIDATED);

    return Promise.resolve(userData);
  } catch (err) {
    commit(MT.ERROR, err);
    return Promise.reject(err);
  }
}

async function singInUser({ commit, dispatch }, { username = '', password = '' }) {
  try {
    commit(MT.LOADING);

    await singIn(username, password);

    await dispatch('initialLogin');
  } catch (err) {
    commit(MT.ERROR);
  }
}

export default {
  initialLogin,
  singUpNewUser,
  createNewUser,
  singInUser,
};
