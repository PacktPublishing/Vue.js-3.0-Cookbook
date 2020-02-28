<template>
  <q-page-container class="bg-grey-1">
    <q-page class="flex flex-center">
      <q-card style="width: 350px">
        <q-card-section>
          <div class="text-h6 no-margin">Validate new account</div>
          <div class="text-subtitle2">{{ getUserEmail }}</div>
        </q-card-section>
        <q-card-section>
          <p>A validation code were sent to you E-mail.</p>
          <p>Please enter it to validate your new account.</p>
        </q-card-section>
        <q-card-section>
          <q-form
            class="q-gutter-md"
          >
            <q-input
              v-model.trim="code"
              :rules="[ val => val && val.length > 0
              || 'Please type the validation code']"
              outlined
              label="Validation Code"
              lazy-rules
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
          />
          <q-btn
            flat
            label="Re-send code"
            color="secondary"
            class="q-ml-sm"
            @click="resendCode"
          />
          <q-btn
            label="Validate"
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
import { resendValidationCode } from 'driver/auth';

export default {
  name: 'Validate',
  data: () => ({
    code: '',
  }),
  computed: {
    ...mapGetters('user', [
      'isLoading',
      'getUserEmail',
    ]),
  },
  methods: {
    ...mapActions('user', [
      'createNewUser',
    ]),
    async onSubmit() {
      await this.createNewUser(this.code);
      this.$router.replace({ name: 'Index' });
    },
    async resendCode() {
      await resendValidationCode(this.getUserEmail);
    },
    onReset() {
      this.code = '';
    },
  },
};
</script>
