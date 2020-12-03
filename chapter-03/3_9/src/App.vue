<template>
  <div id="app">
    <current-time class="col-4" />
    <task-input class="col-6" @add-task="addNewTask" />
    <div class="col-12">
      <div class="cardBox">
        <div class="container">
          <h2>My Tasks</h2>
          <ul class="taskList">
            <li
              v-for="(taskItem, index) in displayList"
              :key="`${index}_${Math.random()}`"
            >
              <input type="checkbox"
                     :checked="!!taskItem.finishedAt"
                     @input="changeStatus(taskItem.id)"
              />
              #{{ taskItem.id }} - {{ taskItem.task }}
              <span v-if="taskItem.finishedAt"> |
                Done at:
                {{ formatDate(taskItem.finishedAt) }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
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
  data: () => ({
    taskList: [],
  }),
  computed: {
    baseList() {
      return [...this.taskList]
        .map((t, index) => ({
          ...t,
          id: index + 1,
        }));
    },
    filteredList() {
      return [...this.baseList]
        .filter((t) => !t.finishedAt);
    },
    sortedList() {
      return [...this.filteredList]
        .sort((a, b) => b.id - a.id);
    },
    displayList() {
      return this.sortedList;
    },
  },
  methods: {
    formatDate(value) {
      if (!value) return '';
      if (typeof value !== 'number') return value;

      const browserLocale = navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language;
      const intlDateTime = new Intl.DateTimeFormat(browserLocale, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });

      return intlDateTime.format(new Date(value));
    },
    addNewTask(task) {
      this.taskList.push({
        task,
        createdAt: Date.now(),
        finishedAt: undefined,
      });
    },
    changeStatus(taskId) {
      const task = this.taskList[taskId - 1];

      if (task.finishedAt) {
        task.finishedAt = undefined;
      } else {
        task.finishedAt = Date.now();
      }
    },
  },
};
</script>
<style scoped>
.taskList li {
  list-style: none;
  text-align: left;
}
</style>
