import {
  getHttp,
  patchHttp,
  deleteHttp,
} from '@/http/fetchApi';
import MT from './types';

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
  fetchUsersList,
  fetchUserData,
  updateUser,
  removeUser,
}
