<template>
  <div id='app'>
    <current-time class='col-4' />
    <task-input
      class='col-6'
      @add-task='addNewTask'
    />
  </div>
</template>

<script>
import CurrentTime from './components/CurrentTime.vue';
import TaskInput from './components/TaskInput.vue';

export default {
  name: 'TodoApp',
  components: {
    CurrentTime,
    TaskInput,
  },
  methods: {
    addNewTask(task) {
      alert(`New task added: ${task}`);
    },
  },
};
</script>
