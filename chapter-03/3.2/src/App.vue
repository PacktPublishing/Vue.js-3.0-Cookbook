<template>
  <div id='app'>
    <current-time class='col-4' />
    <task-input class='col-6' />
  </div>
</template>

<script>
import CurrentTime from './components/CurrentTime.vue';
import TaskInput from './components/TaskInput';

export default {
  name: 'TodoApp',
  components: {
    CurrentTime,
    TaskInput,
  }
}
</script>