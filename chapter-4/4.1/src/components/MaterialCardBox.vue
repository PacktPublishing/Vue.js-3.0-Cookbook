<template>
  <div class="cardBox elevation_2">
    <div class="section">
      This is a Material Card Box
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
      width: 100%;
  max-width: 300px;
    background-color: #fff;
    position: relative;
    display: inline-block;
    border-radius: 0.25rem;
  }
  .cardBox > .section {
    padding: 1rem;
    position: relative;
  }
</style>
