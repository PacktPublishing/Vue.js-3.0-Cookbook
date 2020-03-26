<template>
  <div>
    <q-list bordered>
      <q-item
        v-for="conversation in getConversations"
        :key="conversation.id"
        class="q-my-sm"
        clickable
        v-ripple
        @click="createConversation(conversation.id)"
      >
        <q-item-section avatar>
          <q-avatar>
            <q-img
              :src="getAvatar(conversation.avatar)"
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
          <q-icon name="chat_bubble" color="green"/>
        </q-item-section>
      </q-item>
    </q-list>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        fab
        icon="chat"
        color="accent"
        @click="dialogNewConversation = !dialogNewConversation"
      />
      <new-conversation
        v-model="dialogNewConversation"
      />
    </q-page-sticky>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import NewConversation from 'components/NewConversation';
import getAvatar from 'src/mixins/getAvatar';

export default {
  name: 'Chat',
  mixins: [getAvatar],
  components: { NewConversation },
  data: () => ({
    dialogNewConversation: false,
  }),
  async mounted() {
    this.getMessages();
  },
  computed: {
    ...mapGetters('user', ['getUser']),
    ...mapGetters('chat', ['getConversations']),
  },
  methods: {
    ...mapActions('chat', [
      'getMessages',
    ]),
  },
};
</script>
