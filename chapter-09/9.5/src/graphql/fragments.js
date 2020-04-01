import graphql from 'graphql-tag';

const createMessage = graphql`mutation CreateMessage(
  $id: ID,
  $authorId: String,
  $message: String!,
  $messageConversationId: ID!
  $createdAt: String,
) {
  createMessage(input: {
    createdAt: $createdAt, 
    id: $id,
    message: $message,
    messageConversationId: $messageConversationId,
    authorId: $authorId
  }) {
    id
    message
    authorId
    messageConversationId
    createdAt
  }
}
`;


const createConversation = graphql`mutation CreateConversation($name: String!, $members: [String!]!) {
  createConversation(input: {
    name: $name, members: $members
  }) {
    id
    name
    members
  }
}
`;

const createConversationLink = graphql`mutation CreateConversationLink(
    $conversationLinkConversationId: ID!,
    $conversationLinkUserId: ID
  ) {
  createConversationLink(input: {
    conversationLinkConversationId: $conversationLinkConversationId, 
    conversationLinkUserId: $conversationLinkUserId
  }) {
    id
    conversationLinkUserId
    conversationLinkConversationId
    conversation {
      id
      name
    }
  }
}
`;

const getUser = graphql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      avatar {
        bucket
        key
        region
      }
      email
      name
    }
  }
`;

const getUserAndConversations = graphql`
  query getUserAndConversations($id:ID!) {
    getUser(id:$id) {
      id
      username
      conversations(limit: 100) {
        items {
          id
          conversation {
            id
            name
            associated {
              items {
                user {
                  id
                  name
                  email
                  avatar {
                    bucket
                    key
                    region
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const getConversation = graphql`
  query GetConversation($id: ID!) {
    getConversation(id:$id) {
      id
      name
      members
      messages(limit: 1000) {
        items {
          id
          message
          authorId
          messageConversationId
          createdAt
        }
      }
      createdAt
      updatedAt
    }
  }
`;

const listUsers = graphql`
  query listUsers {
    listUsers {
      items {
        id
        username
        name
        createdAt
        avatar {
          bucket
          region
          key
        }
      }
    }
  }
`;

const onCreateMessage = graphql`
  subscription onCreateMessage($messageConversationId: ID!) {
    onCreateMessage(messageConversationId: $messageConversationId) {
      id
      message
      authorId
      messageConversationId
      createdAt
    }
  }
`;


export {
  createMessage,
  createConversation,
  createConversationLink,
  getConversation,
  getUser,
  getUserAndConversations,
  listUsers,
  onCreateMessage,
};
