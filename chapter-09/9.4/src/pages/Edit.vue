<template>
  <q-page-container class="bg-grey-1">
    <q-page class="flex flex-center">
      <q-card style="width: 350px">
        <q-card-section>
          <div class="text-h6">Edit user account</div>
        </q-card-section>
        <q-card-section>
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
          >
            <avatar-input
              v-model="avatar"
              ref="avatar"
            />
            <name-input
              v-model.trim="name"
            />
            <username-input
              v-model.trim="username"
            />
            <q-separator/>
            <password-input
              v-model.trim="password"
              label="Your old password"
            />
            <password-input
              v-model.trim="newPassword"
              label="Your new password"
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
            label="Update"
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
import AvatarInput from '../components/AvatarInput';

export default {
  name: 'EditUser',
  components: {
    AvatarInput,
    PasswordInput: () => import('components/PasswordInput'),
    UsernameInput: () => import('components/UsernameInput'),
    NameInput: () => import('components/NameInput'),
  },
  created() {
    this.name = this.getUser.name;
    this.username = this.getUser.username;
    this.avatar = this.getUser.avatar;
  },
  data: () => ({
    name: '',
    username: '',
    avatar: '',
    password: '',
    newPassword: '',
  }),
  computed: {
    ...mapGetters('user', [
      'getUser',
      'isLoading',
    ]),
  },
  methods: {
    ...mapActions('user', [
      'editUser',
    ]),
    async onSubmit() {
      try {
        await this.$refs.avatar.uploadFile();

        await this.editUser({
          name: this.name,
          avatar: this.$refs.avatar.s3file,
          username: this.username,
          password: this.password,
          newPassword: this.newPassword,
        });

        this.$router.replace({ name: 'Chat' });
      } catch (err) {
        console.error(err);
      }
    },
    onReset() {
      this.name = this.getUser.name;
      this.username = this.getUser.username;
      this.email = this.getUser.email;
      this.password = '';
      this.newPassword = '';
    },
  },
};
</script>
