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
            Users
          </h3>
        </div>
        <vs-row>
          <vs-col
            vs-type="flex"
            vs-justify="left"
            vs-align="left"
            vs-w="12">
            <user-table-list />
          </vs-col>
        </vs-row>
        <div slot="footer">
          <vs-row vs-justify="flex-start">
            <vs-button
              color="primary"
              type="filled"
              icon="fiber_new"
              size="small"
              @click="changeRoute('create')"
            >
              Create User
            </vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
</template>
<script>
  import changeRouteMixin from '@/mixin/changeRoute';
  import UserTableList from '@/components/userList';

  export default {
    name: 'ListUsers',
    components: { UserTableList },
    mixins: [changeRouteMixin],
    async beforeMount() {
      await this.getAllUsers();
    },
    methods: {
      async getAllUsers() {
        this.$store.dispatch('fetchUsersList');
      },
      async deleteUser(id) {
        this.$store.dispatch('removeUser', id);
        await this.getAllUsers();
      },
    }
  };
</script>
<style scoped>
  .vs-button {
    margin-left: 5px;
  }
</style>
