<template>
  <div class="starRating">
    <span class="rateThis">
      <slot />
    </span>
    <ul>
      <li
        v-for="rate in maxRating"
        :key="rate"
        @mouseenter="updateRating(rate)"
        @click="emitFinalVote(rate)"
        @focus="updateRating(rate)"
      >
        <i class="material-icons">
          {{ getStarName(rate) }}
        </i>
      </li>
    </ul>
  </div>
</template>

<script>
import StarRatingBaseMixin from '../mixins/starRatingBase';
import StarRatingChildMixin from '../mixins/starRatingChild';

export default {
  name: 'StartRatingInput',
  mixins: [
    StarRatingBaseMixin,
    StarRatingChildMixin,
  ],
  data: () => ({
    rank: 0,
  }),
  methods: {
    updateRating(value) {
      this.rank = value;
    },
    emitFinalVote(value) {
      this.updateRating(value);
      this.$emit('final-vote', this.rank);
    },
    getStarName(rate) {
      const rating = (this.rating || this.rank);
      if (rate <= rating) {
        return 'star';
      }
      if (Math.fround((rate - rating)) < 1) {
        return 'star_half';
      }
      return 'star_border';
    },
  },
};
</script>

<style scoped>
  @import '../style/starRating.css';

  .starRating {
    justify-content: space-between;
  }

  .starRating * {
    line-height: 1.7rem;
  }

  .starRating .material-icons {
    font-size: 1.6rem !important;
  }

  .rateThis {
    display: inline-block;
    color: rgba(0, 0, 0, .65);
    font-size: 1rem;
  }
</style>
