<template>
  <div id="app">
    <transition
      name="rotate"
      mode="out-in"
    >
      <img
        v-if="display"
        key="up"
        alt="Vue logo" src="./assets/logo.png">
      <img
        v-else
        alt="Vue logo"
        key="down"
        src="./assets/logo.png"
        style="transform: rotate(180deg)"
      >
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
.rotate-enter-active,
.rotate-leave-active {
  transition: transform .8s ease-in-out;
}
.rotate-enter,
.rotate-leave-active {
  transform: rotate( -180deg );
  transition: transform .8s ease-in-out;
}
</style>
