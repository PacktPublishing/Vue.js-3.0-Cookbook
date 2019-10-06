<template>
  <component
    :is="starComponent"
    :max-rating="maxRating"
    :rating="rating || rank"
    :votes="votes"
    @final-vote="vote"
  >
    Rate this Place
  </component>
</template>

<script>
import StarRatingInput from './StarRatingInput.vue';
import StarRatingDisplay from './StarRatingDisplay.vue';

export default {
  name: 'StarRating',
  components: { StarRatingDisplay, StarRatingInput },
  provide: {
    starRating: true,
  },
  props: {
    maxRating: {
      type: Number,
      required: false,
      default: 5,
    },
    rating: {
      type: Number,
      required: false,
      default: 0,
    },
    votes: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data: () => ({
    rank: 0,
    voted: false,
  }),
  computed: {
    starComponent() {
      if (!this.voted) return StarRatingInput;
      return StarRatingDisplay;
    },
  },
  methods: {
    vote(rank) {
      this.rank = rank;
      this.voted = true;
    },
  },
};
</script>
