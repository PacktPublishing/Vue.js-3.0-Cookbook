<template>
  <div class="box">
    <div class="field has-addons">
      <div class="control is-expanded">
        <input
          v-model="task"
          class="input"
          type="text"
          placeholder="ToDo Task"
          @keypress.enter="save"
        >
      </div>
      <div class="control">
        <a
          class="button is-info"
          @click="save"
        >
          Save Task
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TodoForm',
  data: () => ({
    task: '',
  }),
  methods: {
    async save() {
      try {
        const { status } = await this.$axios.$post('http://localhost:5000/', {
          task: this.task,
        });
        if (status) {
          this.$emit('new-task', this.task);
          this.task = '';
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
};

</script>
