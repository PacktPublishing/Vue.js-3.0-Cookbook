<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import methodsNames from './mixins/methodsNames';
import deepImmediate from './mixins/deepImmediate';
import multipleHandlers from './mixins/multipleHandlers';
import gettersAndSetters from './mixins/gettersAndSetters';
import noCache from './mixins/noCache';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  mixins: [methodsNames, deepImmediate, multipleHandlers, gettersAndSetters, noCache],
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
