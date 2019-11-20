<template>
  <vs-card
    style="margin: 20px;"
  >
    <template slot="header">
      <h3>
        View User
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
          disabled
        />
      </vs-col>
    </vs-row>
    <template slot="footer">
      <vs-row vs-justify="flex-start">
        <vs-button
          color="primary"
          type="filled"
          icon="arrow_back"
          size="small"
          @click="changeComponent('list', 0)"
        >
          Back
        </vs-button>
        <vs-button
          color="success"
          type="filled"
          icon="edit"
          size="small"
          style="margin-left: 5px"
          @click="changeComponent('edit', userId)"
        >
          Edit User
        </vs-button>
      </vs-row>
    </template>
  </vs-card>
</template>
<script>
  import {
    getHttp,
  } from '../http/fetchApi';
  import userForm from './userForm';
  import changeComponent from '../mixin/changeComponent';

  export default {
    name: 'ViewUser',
    mixins: [changeComponent],
    components: {
      userForm,
    },
    inject: ['userId'],
    data: () => ({
      userData: {
        name: '',
        email: '',
        birthday: '',
        country: '',
        phone: '',
      },
    }),
    async beforeMount() {
      await this.getUserById();
    },
    methods: {
      async getUserById() {
        const { data } = await getHttp(`${window.location.href}api/users/${this.userId}`);
        this.userData = data;
      },
    }
  };
</script>
