export default {
  methods: {
    getStarName(rate) {
      if (rate <= this.rating) {
        return 'star';
      }
      if (Math.fround((rate - this.rating)) < 1) {
        return 'star_half';
      }
      return 'star_border';
    },
  },
};
