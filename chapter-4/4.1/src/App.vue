<template>
  <div id="app">
    <MaterialCardBox />
  </div>
</template>

<script>
import MaterialCardBox from './components/MaterialCardBox.vue';

export default {
  name: 'app',
  components: {
    MaterialCardBox,
  },
};
</script>
<style>
  body{
    font-size: 14px;
  }
</style>
