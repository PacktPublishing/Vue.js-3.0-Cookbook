import { API, graphqlOperation, Auth } from 'aws-amplify';
import { getUser as GetUser } from 'src/graphql/queries';
import { createUser } from 'src/graphql/mutations';
import MT from './types';

async function initialLogin({ commit, dispatch }) {
  try {
    commit(MT.LOADING);
    const user = await Auth.currentAuthenticatedUser();

    const userData = {
      username: user.username,
      phone: user.signInUserSession.idToken.payload.phone,
    };

    if (userData.username !== '') {
      return dispatch('checkUserInDB', userData.username);
    }
    commit(MT.SET_USER_DATA, userData);

    return Promise.resolve(userData);
  } catch (err) {
    commit(MT.ERROR, err);
    return Promise.reject(err);
  }
}

async function checkUserInDB({ commit, dispatch }, username) {
  try {
    commit(MT.LOADING);
    const user = await API.graphql(graphqlOperation(GetUser, { id: username }));

    const { getUser } = user.data;

    if (!getUser) {
      return dispatch('createNewUser', { username });
    }

    return Promise.resolve(user);
  } catch (err) {
    commit(MT.ERROR, err);
    return Promise.reject(err);
  }
}

async function createNewUser({ commit }, {
  email = '',
  username = '',
  password = '',
  phone = '',
}) {
  try {
    commit(MT.LOADING);

    const userData = await Auth.signUp({
      email,
      username,
      password,
      attributes: {
        phone_number: phone,
        email,
      },
    });

    await API.graphql(graphqlOperation(createUser, { username }));

    commit(MT.CREATE_USER, userData);

    return Promise.resolve(userData);
  } catch (err) {
    commit(MT.ERROR, err);
    return Promise.reject(err);
  }
}

export default {
  initialLogin,
  checkUserInDB,
  createNewUser,
};
