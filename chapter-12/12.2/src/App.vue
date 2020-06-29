<template>
  <div id="app">
    <transition
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutLeft"
    >
      <img
        v-if="display"
        alt="Vue logo" src="./assets/logo.png">
    </transition>
    <button
      @click="display = !display"
    >
      Toggle
    </button>
  </div>
</template>

<script>
export default {
  name: 'App',
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
