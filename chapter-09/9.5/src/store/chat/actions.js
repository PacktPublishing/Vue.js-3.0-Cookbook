import { API, graphqlOperation } from 'aws-amplify';
import {
  getUserAndConversations,
  createConversation,
  createConversationLink,
} from 'src/graphql/fragments';
import {
  getCurrentAuthUser,
} from 'driver/auth';
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

export default {
  getMessages,
  newConversation,
};
