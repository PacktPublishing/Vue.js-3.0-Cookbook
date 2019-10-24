<template>
  <div>
    <div id="app">
      <h3>Response</h3>
      <pre>{{ response }}</pre>
    </div>
    <hr/>
    <h1> Create / Update User </h1>
    <label for="userData">
      User JSON:
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
      @click="createUser(JSON.parse(userData))"
    >
      Create User
    </button>
    <button
      style="margin: 20px;"
      @click="updateUser(JSON.parse(userData))"
    >
      Update User
    </button>
    <hr/>
    <h1> Delete User </h1>
    <label for="userData">
      User Id:
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
  },
};
</script>
