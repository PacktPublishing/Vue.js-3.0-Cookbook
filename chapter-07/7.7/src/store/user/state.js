const generateState = () => ({
  data: {
    usersList: [],
    userData: {
      name: '',
      email: '',
      birthday: '',
      country: '',
      phone: '',
    },
  },
  loading: false,
  error: null,
});

export default { ...generateState() };
