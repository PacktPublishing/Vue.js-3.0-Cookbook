import { graphqlOperation } from 'aws-amplify';
import { getUser, listUsers } from 'src/graphql/queries';
import { createUser, updateUser } from 'src/graphql/mutations';
import { AuthAPI } from 'driver/appsync';
import {
  signUp,
  validateUser,
  signIn,
  getCurrentAuthUser,
  changePassword,
} from 'driver/auth';
import MT from './types';

async function initialLogin({ commit }) {
  try {
    commit(MT.LOADING);

    const AuthUser = await getCurrentAuthUser();

    const { data } = await AuthAPI.graphql(graphqlOperation(getUser, {
      id: AuthUser.username,
    }));

    commit(MT.SET_USER_DATA, data.getUser);

    return Promise.resolve(AuthUser);
  } catch (err) {
    commit(MT.ERROR, err);
    return Promise.reject(err);
  }
}

async function signUpNewUser({ commit }, {
  email = '',
  name = '',
  password = '',
}) {
  try {
    commit(MT.LOADING);

    const userData = await signUp(email, password);

    commit(MT.CREATE_USER, {
      id: userData.userSub,
      email,
      password,
      name,
      username: userData.userSub,
    });

    return Promise.resolve(userData);
  } catch (err) {
    commit(MT.ERROR, err);
    return Promise.reject(err);
  }
}

async function createNewUser({ commit, state }, code) {
  try {
    commit(MT.LOADING);
    const {
      email,
      name,
      password,
    } = state;
    const userData = await validateUser(email, code);

    await signIn(`${email}`, `${window.atob(password)}`);

    const AuthUser = await getCurrentAuthUser();

    await AuthAPI.graphql(graphqlOperation(
      createUser,
      {
        input: {
          username: AuthUser.username,
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

async function signInUser({ commit, dispatch }, { email = '', password = '' }) {
  try {
    commit(MT.LOADING);

    await signIn(`${email}`, `${password}`);

    await dispatch('initialLogin');

    return Promise.resolve(true);
  } catch (err) {
    commit(MT.ERROR);
    return Promise.reject(err);
  }
}

async function editUser({ commit, state }, {
  username = '',
  name = '',
  avatar = {
    key: '',
    bucket: '',
    region: '',
  },
  password = '',
  newPassword = '',
}) {
  try {
    commit(MT.LOADING);

    const updateObject = Object.assign({
      name: state.name,
      username: state.username,
      avatar: state.avatar,
    }, { name, username, avatar });

    const { data } = await AuthAPI.graphql(graphqlOperation(updateUser,
      { input: { id: state.id, ...updateObject } }));

    if (password && newPassword) {
      await changePassword(password, newPassword);
    }

    commit(MT.SET_USER_DATA, data.updateUser);

    return Promise.resolve(data.updateUser);
  } catch (err) {
    return Promise.reject(err);
  }
}

async function listAllUsers() {
  try {
    const {
      data: {
        listUsers: {
          items: usersList,
        },
      },
    } = await AuthAPI.graphql(graphqlOperation(
      listUsers,
    ));

    return Promise.resolve(usersList);
  } catch (e) {
    return Promise.reject(e);
  }
}

export default {
  initialLogin,
  signUpNewUser,
  createNewUser,
  signInUser,
  editUser,
  listAllUsers,
};
