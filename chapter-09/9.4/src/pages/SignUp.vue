<template>
  <q-page-container class="bg-grey-1">
    <q-page class="flex flex-center">
      <q-card style="width: 350px">
        <q-card-section>
          <div class="text-h6">Create a new account</div>
        </q-card-section>
        <q-card-section>
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
          >
            <q-input
              v-model="email"
              :rules="[ val => (val && val.length > 0 && validateEmail(val)
              || 'Please type a valida E-mail')]"
              outlined
              label="Your E-mail"
              lazy-rules
            />
            <q-input
              v-model="password"
              :type="isPwd ? 'password' : 'text'"
              :rules="[
                val => val.length >= 8 || 'Your password need to have 8 or more characters',
                val => val !== null && val !== '' || 'Please type your password',
              ]"
              :hint=" password.length < 8 ? 'Your password has a minimum of 8 characters' : ''"
              outlined
              label="Your password"
              lazy-rules
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
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
      'singUpNewUser',
    ]),
    validateEmail(email) {
      // eslint-disable-next-line no-useless-escape
      const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    },
    async onSubmit() {
      await this.singUpNewUser({
        email: this.email,
        password: this.password,
      });
      this.$router.replace({ name: 'Validate' });
    },
    onReset() {
      this.email = '';
      this.password = '';
    },
  },
};
</script>
