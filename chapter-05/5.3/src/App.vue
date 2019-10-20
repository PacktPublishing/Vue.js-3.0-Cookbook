<template>
  <div>
    <div id="app">
      <pre>{{ response }}</pre>
    </div>
    <hr/>
    <h1> Create / Update User </h1>
    <label for="userData">
      <textarea
        id="userData"
        v-model="userData"
        rows="10"
        cols="40"
        style="display: block;"
      ></textarea>
    </label>
    <button
      style="margin: 20px;"
      @click="createUser(userData)"
    >
      Create User
    </button>
    <button
      style="margin: 20px;"
      @click="updateUser(userData)"
    >
      Update User
    </button>
    <hr/>
    <h1> Delete User </h1>
    <label for="userData">
      <input type="number" step="1" v-model="userId">
    </label>
    <button
      style="margin: 20px;"
      @click="deleteUser(userId)"
    >
      Delete User
    </button>
  </div>
</template>

<script>
import {
  getHttp,
  postHttp,
  patchHttp,
  deleteHttp,
} from './http/fetchApi';

export default {
  name: 'app',
  data: () => ({
    response: undefined,
    userData: '',
    userId: undefined,
  }),
  async beforeMount() {
    await this.getAllUsers();
  },
  methods: {
    async getAllUsers() {
      this.response = await getHttp(`${window.location.href}api/users`);
    },
    async createUser(data) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');

      await postHttp(`${window.location.href}api/users`, { data },
        'text',
        { headers });
      await this.getAllUsers();
    },
    async updateUser(data) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');

      await patchHttp(`${window.location.href}api/users/${data.id}`,
        { data },
        'text',
        { headers });
      await this.getAllUsers();
    },
    async deleteUser(id) {
      await deleteHttp(`${window.location.href}api/users/${id}`, {}, 'text');
      await this.getAllUsers();
    },
  },
};
</script>
