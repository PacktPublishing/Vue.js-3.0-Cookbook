<template>
  <div id="app">
    <MaterialCardBox
      header="Material Card Header"
      sub-header="Card Sub Header"
      show-media
      show-actions
      img-src="https://picsum.photos/300/200"
    >
      <p>
        <StarRating
          ref="starRating"
        />
      </p>
      <p>
        The path of the righteous man is beset on all sides by the iniquities
        of the selfish and the tyranny of evil men.
      </p>
      <template v-slot:action>
        <MaterialButton
          background-color="#027be3"
          text-color="#fff"
          @click="resetVote"
        >
          Reset
        </MaterialButton>
        <MaterialButton
          background-color="#26a69a"
          text-color="#fff"
          is-flat
          @click="forceVote"
        >
          Rate 5 Stars
        </MaterialButton>
      </template>
    </MaterialCardBox>
  </div>
</template>

<script>
import MaterialCardBox from './components/MaterialCardBox.vue';
import MaterialButton from './components/MaterialButton.vue';
import StarRating from './components/StarRating.vue';

export default {
  name: 'App',
  components: {
    StarRating,
    MaterialButton,
    MaterialCardBox,
  },
  methods: {
    resetVote() {
      this.$refs.starRating.rank = 0;
      this.$refs.starRating.voted = false;
    },
    forceVote() {
      this.$refs.starRating.rank = 5;
      this.$refs.starRating.voted = true;
    },
  },
};
</script>
<style>
  body {
    font-size: 14px;
  }
</style>
