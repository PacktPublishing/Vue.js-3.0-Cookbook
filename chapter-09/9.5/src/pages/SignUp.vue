<template>
  <q-page-container class="bg-grey-1">
    <q-page class="flex flex-center">
      <q-card style="width: 350px">
        <q-card-section>
          <div class="text-h6">Create a new account</div>
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
  </q-page-container>
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
      'singUpNewUser',
    ]),
    async onSubmit() {
      await this.singUpNewUser({
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password,
      });
      this.$router.replace({ name: 'Validate' });
    },
    onReset() {
      this.email = '';
      this.password = '';
      this.name = '';
      this.username = '';
    },
  },
};
</script>
