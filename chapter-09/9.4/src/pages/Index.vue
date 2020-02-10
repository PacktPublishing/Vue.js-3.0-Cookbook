<template>
  <q-page-container class="bg-grey-1">
    <q-page class="flex flex-center">
      <q-card style="width: 350px">
        <q-card-section>
          <h6 class="text-h6">Chat Application</h6>
        </q-card-section>
        <q-card-section>
          <q-form
            class="q-gutter-md"
          >
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
            label="Create new account"
            color="primary"
            flat
            class="q-ml-sm"
            @click="createAccount"
          />
          <q-btn
            label="Login"
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
  name: 'Index',
  components: {
    PasswordInput: () => import('components/PasswordInput'),
    EmailInput: () => import('components/EmailInput'),
  },
  data: () => ({
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
      'signInUser',
    ]),
    async onSubmit() {
      await this.signInUser({
        username: this.email,
        password: this.password,
      });
      this.$router.push({ name: 'Chat' });
    },
    createAccount() {
      this.$router.push({ name: 'SignUp' });
    },
  },
};
</script>
