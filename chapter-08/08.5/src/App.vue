<template>
  <div id="app">
    <transition-group
      tag="ul"
      enter-active-class="animated zoomIn"
    >
      <li
        v-for="i in count"
        :key="i"
        style="float: left"
      >
        <img src="https://picsum.photos/100"/>
      </li>
    </transition-group>
    <hr style="clear: both"/>
    <button
      @click="count = count + 1"
    >
      Increase
    </button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    count: 0,
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
