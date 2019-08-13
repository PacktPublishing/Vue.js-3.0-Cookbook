<template>
  <div class="box">
    <div class="content">
      <ol type="1">
        <li
          v-for="(task, i) in taskObject"
          :key="i"
        >
          {{ task }}
          <button
            class="delete is-small"
            @click="deleteTask(i)"
          />
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TodoList',
  data: () => ({
    taskList: [],
  }),
  computed: {
    taskObject() {
      return Object.fromEntries(new Map(this.taskList));
    },
  },
  async beforeMount() {
    await this.getTasks();
  },
  methods: {
    async getTasks() {
      try {
        const { tasks } = await this.$axios.$get('http://localhost:5000');
        this.taskList = tasks;
      } catch (err) {
        console.error(err);
      }
    },
    async deleteTask(i) {
      try {
        const { status } = await this.$axios.$delete(`http://localhost:5000/${i}`);
        if (status) {
          await this.getTasks();
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
};

</script>
