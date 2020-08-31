<template>
  <div id="app">
    <custom-transition>
      <img
        v-if="display"
        alt="Vue logo" src="./assets/logo.png">
    </custom-transition>
    <button
      @click="display = !display"
    >
      Toggle
    </button>
  </div>
</template>

<script>
import CustomTransition from './components/CustomTransition.vue';

export default {
  name: 'App',
  components: {
    CustomTransition,
  },
  data: () => ({
    display: true,
  }),
};
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
