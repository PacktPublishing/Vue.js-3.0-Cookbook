const getConversations = state => state.conversations;
const isLoading = state => state.loading;
const hasError = state => state.error;

export default {
  getConversations,
  isLoading,
  hasError,
};
