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
            View User
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
              :value="userData"
              disabled
            />
          </vs-col>
        </vs-row>
        <div slot="footer">
          <vs-row vs-justify="flex-start">
            <vs-button
              color="primary"
              type="filled"
              icon="arrow_back"
              size="small"
              style="margin-left: 5px"
              @click="changeRoute('list')"
            >
              Back
            </vs-button>
            <vs-button
              color="success"
              type="filled"
              icon="edit"
              size="small"
              style="margin-left: 5px"
              @click="changeRoute('edit', userId)"
            >
              Edit User
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

  export default {
    name: 'ViewUser',
    mixins: [changeRouteMixin],
    components: {
      UserForm,
    },
    async beforeMount() {
      await this.getUserById();
    },
    computed: {
      userId() {
        return this.$route.params.id;
      },
      userData() {
        return this.$store.getters.getUserData;
      },
    },
    methods: {
      async getUserById() {
        await this.$store.dispatch('fetchUserData', this.userId);
      },
    }
  };
</script>
