<template>
  <div class="cardBox elevation_2">
    <div
      v-if="$slots.header"
      class="header"
    >
      <slot name="header" />
    </div>
    <div
      v-if="$slots.media"
      class="media"
    >
      <slot name="media" />
    </div>
    <div
      v-if="$slots.default"
      class="section"
      :class="{
        noBottomPadding: $slots.action,
        halfPaddingTop: $slots.media,
      }"
    >
      <slot />
    </div>
    <div
      v-if="$slots.action"
      class="action"
    >
      <slot name="action" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'MaterialCardBox',
};
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
  @import '../style/elevation.css';

  *{
    font-family: 'Roboto', sans-serif;
  }

  .cardBox{
    border-radius: 0.25rem;
    background-color: #fff;
    position: relative;
    display: inline-block;
    box-shadow: 0 1px 5px rgba(0,0,0,0.2),
    0 2px 2px rgba(0,0,0,0.14),
    0 3px 1px -2px rgba(0,0,0,0.12);
  }
  .cardBox > .header {
    padding: 1rem;
    position: relative;
    display: block;
  }
  .cardBox > .media {
    overflow: hidden;
    position: relative;
    display: block;
    max-width: 100%;
  }
  .cardBox > .section {
    padding: 1rem;
    position: relative;
    margin-bottom: 1.5rem;
    display: block;
  }
  .cardBox > .action {
    padding: .5rem;
    position: relative;
    display: block;
  }
  .noBottomPadding{
    padding-bottom: 0 !important;
  }
  .halfPaddingTop{
    padding-top: 0.5rem !important;
  }
</style>
