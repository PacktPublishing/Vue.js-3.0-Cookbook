<template>
  <vs-card
    style="margin: 20px;"
  >
    <template slot="header">
      <h3>
        Create User
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
          @click="createUser"
        >
          Create User
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
  import userForm from './userForm';
  import changeComponent from '../mixin/changeComponent';
  import { postHttp } from '../http/fetchApi';

  export default {
    name: 'CreateUser',
    mixins: [changeComponent],
    components: {
      userForm,
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
    methods: {
      async createUser() {
        await postHttp(`${window.location.href}api/users`, {
          data: {
            ...this.userData,
          }
        });
        this.changeComponent('list', 0);
      },
    },
  };
</script>
