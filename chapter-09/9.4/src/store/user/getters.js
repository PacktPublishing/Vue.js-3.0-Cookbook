export default {
  getUserId: state => state.id,
  getUserEmail: state => state.email,
  getUserUsername: state => state.username,
  getUserAvatar: state => state.avatar,
  isLoading: state => state.loading,
  hasError: state => state.error,
};
