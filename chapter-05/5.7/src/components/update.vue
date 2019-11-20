<template>
  <vs-card
    style="margin: 20px;"
  >
    <template slot="header">
      <h3>
        Update User
      </h3>
    </template>
    <vs-row>
      <vs-col
        vs-type="flex"
        vs-justify="left"
        vs-align="left"
        vs-w="12"
        style="margin: 20px"
      >
        <user-form
          v-model="userData"
        />
      </vs-col>
    </vs-row>
    <template slot="footer">
      <vs-row vs-justify="flex-start">
        <vs-button
          color="success"
          type="filled"
          icon="save"
          size="small"
          @click="updateUser"
        >
          Update User
        </vs-button>
        <vs-button
          color="danger"
          type="filled"
          icon="cancel"
          size="small"
          style="margin-left: 5px"
          @click="changeComponent('list', 0)"
        >
          Cancel
        </vs-button>
      </vs-row>
    </template>
  </vs-card>
</template>
<script>
  import UserForm from './userForm';
  import changeComponent from '../mixin/changeComponent';
  import {
    getHttp,
    patchHttp,
  } from '../http/fetchApi';

  export default {
    name: 'UpdateUser',
    mixins: [changeComponent],
    inject: ['userId'],
    components: {
      UserForm,
    },
    data: () => ({
      userData: {
        name: '',
        email: '',
        birthday: '',
        country: '',
        phone: '',
      },
    }),
    async created() {
      await this.getUserById();
    },
    methods: {
      async getUserById() {
        const { data } = await getHttp(`${window.location.href}api/users/${this.userId}`);
        this.userData = data;
      },
      async updateUser() {
        await patchHttp(`${window.location.href}api/users/${this.userData.id}`, {
          data: {
            ...this.userData,
          }
        });
        this.changeComponent('list', 0);
      },
    },
  };
</script>
