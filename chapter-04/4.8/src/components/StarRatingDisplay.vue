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
import StarRatingDisplayMixin from '../mixins/starRatingDisplay';
import StarRatingNameMixin from '../mixins/starRatingName';
import StarRatingChildMixin from '../mixins/starRatingChild';

export default {
  name: 'StarRatingDisplay',
  mixins: [
    StarRatingDisplayMixin,
    StarRatingNameMixin,
    StarRatingChildMixin,
  ],
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
