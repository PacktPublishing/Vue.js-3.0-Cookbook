<template>
  <div id="app">
    <my-component 
      style="width: 33%"
    />
  </div>
</template>

<script>
import myComponent from './components/myComponent.vue'

export default {
  name: 'app',
  components: {
    myComponent
  }
}
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
