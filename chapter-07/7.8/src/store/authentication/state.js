const generateState = () => ({
  data: {
    username: '',
    token: '',
    expiresAt: null,
  },
  loading: false,
  error: null,
});

export default { ...generateState() };
