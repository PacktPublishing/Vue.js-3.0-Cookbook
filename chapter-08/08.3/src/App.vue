<template>
  <div id="app">
    <transition
      enter-active-class="animated rotateIn"
      leave-active-class="animated rotateOut"
      @after-enter="onEnter"
      @after-leave="onLeave"
    >
      <img
        v-if="display"
        alt="Vue logo" src="./assets/logo.png">
    </transition>
    <h1>The image {{ status }}</h1>
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
    status: 'appeared',
  }),
  methods: {
    onEnter() {
      this.status = 'appeared';
    },
    onLeave() {
      this.status = 'disappeared';
    },
  },
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
