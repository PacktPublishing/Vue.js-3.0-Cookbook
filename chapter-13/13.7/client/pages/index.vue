<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Todo App
          </h1>
        </div>
      </div>
    </section>
    <section
      class="section"
      style="padding: 1rem"
    >
      <div class="container">
        <todo-list
          ref="list"
        />
      </div>
    </section>
    <section
      class="section"
      style="padding: 1rem"
    >
      <div class="container">
        <todo-form
          @new-task="$refs.list.getTasks()"
        />
      </div>
    </section>
  </div>
</template>

<script>
import TodoForm from '../components/TodoForm.vue';
import TodoList from '../components/TodoList.vue';

export default {
  components: { TodoForm, TodoList },
};
</script>
