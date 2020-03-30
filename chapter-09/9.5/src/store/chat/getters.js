const getConversations = (state) => {
  const { conversations } = state;
  return conversations
    .reduce((acc, curr) => {
      const { conversation } = curr;

      const [user] = conversation.name.split(' and ');

      const users = conversation
        .associated
        .items
        .reduce((a, c) => [...a, { ...c.user, conversation: conversation.id }], [])
        .filter(u => u.id !== user);

      return [...acc, users];
    }, [])
    .flat(Infinity);
};
const getChatMessages = state => convId => state.messages
  .find(m => m.id === convId).messages.items || [];
const isLoading = state => state.loading;
const hasError = state => state.error;

export default {
  getConversations,
  getChatMessages,
  isLoading,
  hasError,
};
