<template>
  <div class="cardBox">
    <div class="container">
      <h3>My task is:</h3>
      <p>{{ task }}</p>
      <hr />
      <input type="text" v-model="task" />
      <button
        v-on:click="addTask"
      >
        Add Task
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TaskInput',
  data: () => ({
    task: '',
  }),
  methods: {
    addTask(){
      this.$emit('add-task', this.task);
    },
  }
};
</script>