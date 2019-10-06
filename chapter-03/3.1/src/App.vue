<template>
  <div id='app'>
    <current-time class='col-4' />
  </div>
</template>

<script>
import CurrentTime from './components/CurrentTime.vue';

export default {
  name: 'TodoApp',
  components: {
    CurrentTime
  }
}
</script>