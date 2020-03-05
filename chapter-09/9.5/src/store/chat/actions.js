import { API, graphqlOperation } from 'aws-amplify';
import { fetchUserConversations } from 'src/graphql/fragments';
import {
  getCurrentAuthUser,
} from 'driver/auth';
import MT from './types';

async function getMessages({ commit }) {
  try {
    commit(MT.LOADING);

    const AuthUser = await getCurrentAuthUser();

    const messages = await API.graphql(graphqlOperation(
      fetchUserConversations,
      {
        id: AuthUser.id,
      },
    ));

    commit(MT.SET_CONVERSATIONS, messages);

    return Promise.resolve(messages);
  } catch (err) {
    commit(MT.ERROR, err);
    return Promise.reject(err);
  }
}

export default {
  getMessages,
};
