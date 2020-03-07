<template>
  <q-page class="flex flex-center bg-grey-1">
    <q-card style="width: 350px">
      <q-card-section>
        <h6 class="no-margin">Create a new account</h6>
      </q-card-section>
      <q-card-section>
        <q-form
          class="q-gutter-md"
        >
          <name-input
            v-model.trim="name"
          />
          <username-input
            v-model.trim="username"
          />
          <email-input
            v-model.trim="email"
          />
          <password-input
            v-model.trim="password"
          />
        </q-form>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
          @click="onReset"
        />
        <q-btn
          label="Create"
          type="submit"
          color="primary"
          @click="onSubmit"
        />
      </q-card-actions>
      <q-inner-loading :showing="isLoading">
        <q-spinner size="50px" color="primary"/>
      </q-inner-loading>
    </q-card>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SignUp',
  components: {
    PasswordInput: () => import('components/PasswordInput'),
    EmailInput: () => import('components/EmailInput'),
    UsernameInput: () => import('components/UsernameInput'),
    NameInput: () => import('components/NameInput'),
  },
  data: () => ({
    name: '',
    username: '',
    email: '',
    password: '',
  }),
  computed: {
    ...mapGetters('user', [
      'isLoading',
    ]),
  },
  methods: {
    ...mapActions('user', [
      'signUpNewUser',
    ]),
    async onSubmit() {
      try {
        await this.signUpNewUser({
          name: this.name,
          username: this.username,
          email: this.email,
          password: this.password,
        });
        this.$router.replace({ name: 'Validate' });
      } catch (e) {
        this.$q.dialog({
          message: e.message,
        });
      }
    },
    onReset() {
      this.email = '';
      this.password = '';
    },
  },
};
</script>
