<template>
  <div class="cardBox">
    <div class="container">
      <h3>My task is:</h3>
      <p>{{ task }}</p>
      <hr />
      <input type="text" v-model="task" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'TaskInput',
  data: () => ({
    task: '',
  }),
};
</script>