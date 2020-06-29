<template>
  <div id="app">
    <transition name="image">
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

  .image-enter-active {
    animation: bounce-in .5s;
  }
  .image-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
