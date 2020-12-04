export default {
  inject: {
    starRating: {
      default() {
        console.error('StarRatingDisplay need to be a child of StartRating');
      },
    },
  },
};
