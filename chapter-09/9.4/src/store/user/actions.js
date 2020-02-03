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

    const AuthUser = await getCurrentAuthUser();

    const { data } = await API.graphql(graphqlOperation(GetUser, { id: AuthUser.id }));
    commit(MT.SET_USER_DATA, data.getUser);

    return Promise.resolve(AuthUser);
  } catch (err) {
    commit(MT.ERROR, err);
    return Promise.reject(err);
  }
}

async function singUpNewUser({ commit }, {
  email = '',
  username = '',
  name = '',
  password = '',
}) {
  try {
    commit(MT.LOADING);

    const userData = await singUp({ username, password, email });

    commit(MT.CREATE_USER, {
      email,
      password,
      name,
      username,
    });

    return Promise.resolve(userData);
  } catch (err) {
    commit(MT.ERROR, err);
    return Promise.reject(err);
  }
}

async function createNewUser({ commit, dispatch, state }, code) {
  try {
    commit(MT.LOADING);
    const {
      email,
      username,
      name,
      password,
    } = state;
    const userData = await validateUser(email, code);

    await dispatch('singInUser', {
      email,
      password: window.atob(password),
    });

    const AuthUser = await getCurrentAuthUser();

    await API.graphql(graphqlOperation(
      createUser,
      {
        input: {
          id: AuthUser.username,
          username,
          email,
          name,
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

async function singInUser({ commit, dispatch }, { email = '', password = '' }) {
  try {
    commit(MT.LOADING);

    await singIn(email, password);

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
