import graphql from 'graphql-tag';

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

const getUserAndConversations = graphql`
  query getUserAndConversations($id:ID!) {
    getUser(id:$id) {
      id
      username
      conversations(limit: 10) {
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
          content
          author {
            name
            avatar {
              bucket
              key
              region
            }
          }
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
    content: $message,
    messageConversationId: $messageConversationId,
    authorId: $authorId
  }) {
    id
    content
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

export {
  getUser,
  listUsers,
  getUserAndConversations,
  getConversation,
  createMessage,
  createConversation,
  createConversationLink,
};
