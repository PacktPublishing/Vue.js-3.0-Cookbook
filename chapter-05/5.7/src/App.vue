<template>
  <div id="app">
    <mdb-container fluid>
      asd
    </mdb-container>
  </div>
</template>

<script>
import {
  getHttp,
  postHttp,
  patchHttp,
  deleteHttp,
  getTodos,
} from './http/fetchApi';

export default {
  name: 'app',
  data: () => ({
    response: undefined,
    userData: '',
    userId: undefined,
    userTodo: [],
  }),
  async beforeMount() {
    await this.getAllUsers();
  },
  methods: {
    async getAllUsers() {
      const { data } = await getHttp(`${window.location.href}api/users`);
      this.response = data;
    },
    async createUser(data) {
      await postHttp(`${window.location.href}api/users`, { data });
      await this.getAllUsers();
    },
    async updateUser(data) {
      await patchHttp(`${window.location.href}api/users/${data.id}`, { data });
      await this.getAllUsers();
    },
    async deleteUser(id) {
      await deleteHttp(`${window.location.href}api/users/${id}`);
      await this.getAllUsers();
    },
    async getUserTodo(userId) {
      this.userTodo = await getTodos(userId);
    },
  },
};
</script>
