const generateState = () => ({
  data: {
    usersList: [],
  },
  loading: false,
  error: null,
});

export default { ...generateState() };
