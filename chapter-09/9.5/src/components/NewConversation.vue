<template>
  <q-dialog
    :value="value"
    @input="$emit('input', $event)"
  >
    <q-card
      style="min-width: 400px; min-height: 100px"
    >
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">New Conversation</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section>
        <q-list>
          <q-item
            v-for="contact in userList"
            :key="contact.id"
            class="q-my-sm"
            clickable
            v-ripple
            @click="createConversation(contact.id)"
          >
            <q-item-section avatar>
              <q-avatar>
                <q-img
                  :src="getAvatar(contact.avatar)"
                  spinner-color="primary"
                >
                  <template v-slot:error>
                    <div class="absolute-full flex flex-center bg-negative text-white">
                      Cannot load image
                    </div>
                  </template>
                </q-img>
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ contact.name }}</q-item-label>
              <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-icon name="add_comment" color="green"/>
            </q-item-section>
          </q-item>
        </q-list>
        <q-inner-loading
          :showing="pending">
          <q-spinner
            size="50px"
            color="primary" />
        </q-inner-loading>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import getAvatar from 'src/mixins/getAvatar';

export default {
  name: 'NewConversation',
  mixins: [getAvatar],
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    userList: [],
    pending: false,
  }),
  watch: {
    async value(newVal) {
      if (newVal) {
        await this.fetchUsers();
      }
    },
  },
  computed: {
    ...mapGetters('user', ['getUser']),
  },
  methods: {
    ...mapActions('user', ['listAllUsers']),
    ...mapActions('chat', [
      'newConversation',
    ]),
    async fetchUsers() {
      this.pending = true;
      try {
        const users = await this.listAllUsers();
        this.userList = users.filter(u => u.id !== this.getUser.id);
      } catch (e) {
        this.$q.dialog({
          message: e.message,
        });
      } finally {
        this.pending = false;
      }
    },
    async createConversation(otherUserName) {
      try {
        await this.newConversation({
          username: this.getUser.id,
          otherUserName,
        });
        this.$router.push({
          name: 'Messages',
          params: {
            id: '',
            name: '',
          },
        });
      } catch (e) {
        this.$q.dialog({
          message: e.message,
        });
      }
    },
  },
};
</script>

<style scoped>

</style>
