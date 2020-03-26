/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      username
      avatar {
        bucket
        region
        key
      }
      name
      conversations {
        items {
          id
          conversationLinkUserId
          conversationLinkConversationId
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          authorId
          message
          messageConversationId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      username
      avatar {
        bucket
        region
        key
      }
      name
      conversations {
        items {
          id
          conversationLinkUserId
          conversationLinkConversationId
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          authorId
          message
          messageConversationId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      username
      avatar {
        bucket
        region
        key
      }
      name
      conversations {
        items {
          id
          conversationLinkUserId
          conversationLinkConversationId
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          authorId
          message
          messageConversationId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
      id
      messages {
        items {
          id
          authorId
          message
          messageConversationId
          createdAt
          updatedAt
        }
        nextToken
      }
      associated {
        items {
          id
          conversationLinkUserId
          conversationLinkConversationId
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      members
      createdAt
      updatedAt
    }
  }
`;
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
      id
      messages {
        items {
          id
          authorId
          message
          messageConversationId
          createdAt
          updatedAt
        }
        nextToken
      }
      associated {
        items {
          id
          conversationLinkUserId
          conversationLinkConversationId
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      members
      createdAt
      updatedAt
    }
  }
`;
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
      id
      messages {
        items {
          id
          authorId
          message
          messageConversationId
          createdAt
          updatedAt
        }
        nextToken
      }
      associated {
        items {
          id
          conversationLinkUserId
          conversationLinkConversationId
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      members
      createdAt
      updatedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      author {
        id
        email
        username
        avatar {
          bucket
          region
          key
        }
        name
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      authorId
      message
      image {
        bucket
        region
        key
      }
      conversation {
        id
        messages {
          nextToken
        }
        associated {
          nextToken
        }
        name
        members
        createdAt
        updatedAt
      }
      messageConversationId
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      author {
        id
        email
        username
        avatar {
          bucket
          region
          key
        }
        name
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      authorId
      message
      image {
        bucket
        region
        key
      }
      conversation {
        id
        messages {
          nextToken
        }
        associated {
          nextToken
        }
        name
        members
        createdAt
        updatedAt
      }
      messageConversationId
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      author {
        id
        email
        username
        avatar {
          bucket
          region
          key
        }
        name
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      authorId
      message
      image {
        bucket
        region
        key
      }
      conversation {
        id
        messages {
          nextToken
        }
        associated {
          nextToken
        }
        name
        members
        createdAt
        updatedAt
      }
      messageConversationId
      createdAt
      updatedAt
    }
  }
`;
export const createConversationLink = /* GraphQL */ `
  mutation CreateConversationLink(
    $input: CreateConversationLinkInput!
    $condition: ModelConversationLinkConditionInput
  ) {
    createConversationLink(input: $input, condition: $condition) {
      id
      user {
        id
        email
        username
        avatar {
          bucket
          region
          key
        }
        name
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      conversationLinkUserId
      conversation {
        id
        messages {
          nextToken
        }
        associated {
          nextToken
        }
        name
        members
        createdAt
        updatedAt
      }
      conversationLinkConversationId
      createdAt
      updatedAt
    }
  }
`;
export const updateConversationLink = /* GraphQL */ `
  mutation UpdateConversationLink(
    $input: UpdateConversationLinkInput!
    $condition: ModelConversationLinkConditionInput
  ) {
    updateConversationLink(input: $input, condition: $condition) {
      id
      user {
        id
        email
        username
        avatar {
          bucket
          region
          key
        }
        name
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      conversationLinkUserId
      conversation {
        id
        messages {
          nextToken
        }
        associated {
          nextToken
        }
        name
        members
        createdAt
        updatedAt
      }
      conversationLinkConversationId
      createdAt
      updatedAt
    }
  }
`;
