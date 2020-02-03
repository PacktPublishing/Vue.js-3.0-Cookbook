export default {
  getUserId: state => state.id,
  getUserEmail: state => state.email,
  getUserUsername: state => state.username,
  getUserAvatar: state => state.avatar,
  getUser: state => ({
    name: state.name,
    username: state.username,
    avatar: state.avatar,
    email: state.email,
  }),
  isLoading: state => state.loading,
  hasError: state => state.error,
};
