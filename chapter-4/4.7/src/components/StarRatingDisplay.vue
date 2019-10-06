<template>
  <div class="starRating">
    <ul>
      <li
        v-for="rate in maxRating"
        :key="rate"
      >
        <i class="material-icons">
          {{ getStarName(rate) }}
        </i>
      </li>
    </ul>
    <span class="rating">
      {{ rating }}
    </span>
    <span
      v-if="votes"
      class="votes"
    >
      ({{ votes }})
    </span>
  </div>
</template>

<script>
export default {
  name: 'StartRatingDisplay',
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
  inject: {
    starRating: {
      default() {
        console.error('StarRatingDisplay need to be a child of StartRating');
      },
    },
  },
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
</script>

<style scoped>
  @import '../style/starRating.css';

  .rating, .votes {
    display: inline-block;
    color: rgba(0,0,0, .65);
    font-size: .75rem;
    margin-left: .4rem;
  }
</style>
