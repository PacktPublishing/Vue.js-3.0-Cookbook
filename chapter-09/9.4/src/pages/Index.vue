<template>
  <q-page-container class="bg-grey-1">
    <q-page class="flex flex-center">
      <q-card style="width: 350px">
        <q-card-section>
          <div class="text-h6">Chat Application</div>
        </q-card-section>
        <q-card-section>
          <q-form
            @submit="onSubmit"
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
    isPwd: true,
  }),
  computed: {
    ...mapGetters('user', [
      'isLoading',
    ]),
  },
  methods: {
    ...mapActions('user', [
      'singInUser',
    ]),
    async onSubmit() {
      await this.singInUser({
        username: this.email,
        password: this.password,
      });
    },
    createAccount() {
      this.$router.push({ name: 'SignUp' });
    },
  },
};
</script>
