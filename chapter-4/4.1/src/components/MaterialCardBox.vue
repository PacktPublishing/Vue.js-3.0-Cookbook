<template>
  <div class="cardBox">
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
  .cardBox{
    border-radius: 0.25rem;
    box-shadow: 0 1px 5px rgba(0,0,0,0.2),
    0 2px 2px rgba(0,0,0,0.14),
    0 3px 1px -2px rgba(0,0,0,0.12);
    background-color: #fff;
    position: relative;
  }
  .cardBox > .section {
    padding: 1rem;
    position: relative;
  }
</style>
