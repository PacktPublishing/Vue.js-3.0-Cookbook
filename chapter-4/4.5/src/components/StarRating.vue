<template>
  <div>
    <StarRatingInput
      v-if="!rating"
      :max-rating="maxRating"
      @final-vote="rating = $event"
    >
      Rate this Place
    </StarRatingInput>
    <StarRatingDisplay
      v-else
      :max-rating="maxRating"
      :rating="rating"
      :votes="votes"
    />
  </div>
</template>

<script>
import StarRatingInput from './StarRatingInput.vue';
import StarRatingDisplay from './StarRatingDisplay.vue';

export default {
  name: 'StarRating',
  components: { StarRatingDisplay, StarRatingInput },
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
    rating: 0,
  }),
};
</script>

<style scoped>
  .starRating {
    user-select: none;
    display: flex;
    flex-direction: row;
  }

  .starRating * {
    line-height: 0.9rem;
  }

  .starRating .material-icons {
    font-size: .9rem !important;
    color: orange;
  }

  ul {
    display: inline-block;
    padding: 0;
    margin: 0;
  }

  ul > li {
    list-style: none;
    float: left;
  }

  .rating, .votes {
    display: inline-block;
    color: rgba(0, 0, 0, .65);
    font-size: .75rem;
    margin-left: .4rem;
  }
</style>
