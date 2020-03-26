export default {
  methods: {
    getAvatar(object) {
      if (object === null) return 'http://placehold.jp/9c27b0/003366/600x600.png?text=%20';
      return object.key;
    },
  },
};
