import {
  getHttp,
  patchHttp,
  deleteHttp,
  postHttp,
} from '@/http/fetchApi';
import MT from './types';

async function createUser({ commit }, userData) {
  try {
    commit(MT.LOADING);
    await postHttp(`/api/users`, {
      data: {
        ...userData,
      }
    });
    commit(MT.SET_USER_DATA, userData);
  } catch (error) {
    commit(MT.ERROR, error);
  }
}

async function fetchUsersList({ commit }) {
  try {
    commit(MT.LOADING);
    const { data } = await getHttp(`api/users`);
    commit(MT.SET_USER_LIST, data);
  } catch (error) {
    commit(MT.ERROR, error);
  }
}

async function fetchUserData({ commit }, userId) {
  try {
    commit(MT.LOADING);
    const { data } = await getHttp(`api/users/${userId}`);
    commit(MT.SET_USER_DATA, data);
  } catch (error) {
    commit(MT.ERROR, error);
  }
}

async function updateUser({ commit }, payload) {
  try {
    commit(MT.LOADING);
    await patchHttp(`api/users/${payload.id}`, {
      data: {
        ...payload,
      }
    });
    commit(MT.UPDATE_USER, payload);
  } catch (error) {
    commit(MT.ERROR, error);
  }
}

async function removeUser({ commit }, userId) {
  try {
    commit(MT.LOADING);
    await deleteHttp(`api/users/${userId}`);
    commit(MT.REMOVE_USER, userId);
  } catch (error) {
    commit(MT.ERROR, error);
  }
}

export default {
  createUser,
  fetchUsersList,
  fetchUserData,
  updateUser,
  removeUser,
}
