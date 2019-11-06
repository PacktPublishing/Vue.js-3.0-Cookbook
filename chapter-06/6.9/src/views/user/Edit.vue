<template>
  <vs-row>
    <vs-col
      vs-type="flex"
      vs-justify="left"
      vs-align="left"
      vs-w="12">
      <vs-card
        style="margin: 20px;"
      >
        <div slot="header">
          <h3>
            Update User
          </h3>
        </div>
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
        <div slot="footer">
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
              @click="changeRoute('list')"
            >
              Cancel
            </vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
</template>
<script>
  import UserForm from '@/components/userForm';
  import changeRouteMixin from '@/mixin/changeRoute';
  import {
    getHttp,
    patchHttp,
  } from '../../http/fetchApi';

  export default {
    name: 'UpdateView',
    mixins: [changeRouteMixin],
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
    computed: {
      userId() {
        return this.$route.params.id;
      },
    },
    async created() {
      await this.getUserById();
    },
    methods: {
      async getUserById() {
        const { data } = await getHttp(`api/users/${this.userId}`);
        this.userData = data;
      },
      async updateUser() {
        await patchHttp(`api/users/${this.userData.id}`, {
          data: {
            ...this.userData,
          }
        });
        this.changeRoute('list');
      },
    },
  }
</script>
