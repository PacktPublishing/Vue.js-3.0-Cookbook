import { API, graphqlOperation } from 'aws-amplify';
import {
  getUserAndConversations,
  createConversation,
  createConversationLink,
  createMessage,
  getConversation,
} from 'src/graphql/fragments';
import {
  getCurrentAuthUser,
} from 'driver/auth';
import { uid } from 'quasar';
import MT from './types';

async function getMessages({ commit }) {
  try {
    commit(MT.LOADING);

    const AuthUser = await getCurrentAuthUser();

    const { data: { getUser: { conversations } } } = await API.graphql(graphqlOperation(
      getUserAndConversations,
      {
        id: AuthUser.username,
      },
    ));

    commit(MT.SET_CONVERSATIONS, conversations);

    return Promise.resolve(conversations);
  } catch (err) {
    commit(MT.ERROR, err);
    return Promise.reject(err);
  }
}

// eslint-disable-next-line no-empty-pattern
async function newConversation({}, { username, otherUserName }) {
  try {
    const members = [username, otherUserName].sort();
    const conversationName = members.join(' and ');
    const conversation = await API.graphql(graphqlOperation(createConversation, {
      name: conversationName,
      members,
    }));
    const { data: { createConversation: { id: conversationLinkConversationId } } } = conversation;

    const relation1 = { conversationLinkUserId: username, conversationLinkConversationId };
    const relation2 = { conversationLinkUserId: otherUserName, conversationLinkConversationId };

    await API.graphql(graphqlOperation(createConversationLink, relation1));
    await API.graphql(graphqlOperation(createConversationLink, relation2));

    return Promise.resolve({
      id: conversationLinkConversationId,
      name: conversationName,
    });
  } catch (e) {
    return Promise.reject(e);
  }
}

async function newMessage({ commit }, { message, conversationId }) {
  try {
    commit(MT.LOADING);

    const AuthUser = await getCurrentAuthUser();

    await API.graphql(graphqlOperation(
      createMessage,
      {
        id: uid(),
        authorId: AuthUser.username,
        message,
        messageConversationId: conversationId,
        createdAt: Date.now(),
      },
    ));

    return Promise.resolve(true);
  } catch (e) {
    return Promise.reject(e);
  } finally {
    commit(MT.LOADING);
  }
}

async function fetchNewMessages({ commit }, { conversationId }) {
  try {
    commit(MT.LOADING);

    const { data } = await API.graphql(graphqlOperation(
      getConversation,
      {
        id: conversationId,
      },
    ));

    commit(MT.SET_MESSAGES, data.getConversation);

    return Promise.resolve(true);
  } catch (e) {
    return Promise.reject(e);
  }
}

export default {
  getMessages,
  newConversation,
  newMessage,
  fetchNewMessages,
};
