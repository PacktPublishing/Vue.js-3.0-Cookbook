<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If Ant-Design-Vue is successfully added to this project, you'll see an
        <code v-text="'<a-button>'"></code>
        below
      </p>
      <a-button type="primary">Primary</a-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
