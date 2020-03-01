const getUserId = state => state.id;
const getUserEmail = state => state.email;
const getUserUsername = state => state.username;
const getUserAvatar = state => state.avatar;
const getUser = state => ({
  name: state.name,
  username: state.username,
  avatar: state.avatar,
  email: state.email,
});
const isLoading = state => state.loading;
const hasError = state => state.error;

export default {
  getUserId,
  getUserEmail,
  getUserUsername,
  getUserAvatar,
  getUser,
  isLoading,
  hasError,
};
