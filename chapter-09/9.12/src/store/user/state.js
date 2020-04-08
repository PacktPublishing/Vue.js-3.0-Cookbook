export function createState() {
  return {
    id: '',
    username: '',
    email: '',
    name: '',
    avatar: {
      key: '',
      bucket: '',
      region: '',
    },
    password: '',
    loading: false,
    validated: false,
    error: undefined,
  };
}

export default createState();
