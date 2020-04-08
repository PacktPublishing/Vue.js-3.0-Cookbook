<template>
  <q-page padding class="flex flex-center bg-grey-1">
    <q-card style="width: 350px">
      <q-card-section>
        <h6 class="no-margin">Validate new account</h6>
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
      try {
        await this.createNewUser(this.code);
        this.$router.replace({ name: 'Index' });
      } catch (e) {
        console.error(e);
        this.$q.dialog({
          message: e.message,
        });
      }
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
