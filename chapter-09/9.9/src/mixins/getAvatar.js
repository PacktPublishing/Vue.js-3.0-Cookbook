export default {
  methods: {
    getAvatar(object, name) {
      const baseUrl = 'http://placehold.jp/350/9c27b0/FFFFFF/600x600.png?text=';
      if (object === null && !name) return `${baseUrl}%20`;
      if (name) return `${baseUrl}${name.split('').shift()}`;
      return object.key;
    },
  },
};
