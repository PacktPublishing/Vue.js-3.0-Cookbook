<template>
  <div id="app">
    <MaterialCardBox>
      <template v-slot:header>
        <strong>Card Title</strong><br>
        <span>Card Sub-Title</span>
      </template>
      <template v-slot:media>
        <img src="https://via.placeholder.com/350x150">
      </template>
      <p>Main Section</p>
      <template v-slot:action>
        <button>Action Button</button>
        <button>Action Button</button>
      </template>
    </MaterialCardBox>
  </div>
</template>

<script>
import MaterialCardBox from './components/MaterialCardBox.vue';

export default {
  name: 'App',
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
