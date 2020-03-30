<template>
  <div class="q-pa-md row justify-center">
    <q-chat-message
      v-for="message in currentMessages"
      :key="message.id"
      :stamp="message.createdAt"
      :text="[message.message]"
      :sent="getUser.id === message.authorId"
      name="me"
      avatar="https://cdn.quasar.dev/img/avatar4.jpg"
      class="col-12"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { date } from 'quasar';

export default {
  name: 'Messages',
  async beforeMount() {
    await this.fetchNewMessages({
      conversationId: this.$route.params.id,
    });
  },
  computed: {
    ...mapGetters('chat', ['getChatMessages']),
    ...mapGetters('user', ['getUser']),
    currentMessages() {
      const messages = this.getChatMessages(this.$route.params.id);
      if (!messages.length) return messages;
      return messages.map(m => ({
        ...m,
        createdAt: date.formatDate(new Date(parseInt(m.createdAt, 10)), 'YYYY/MM/DD HH:mm:ss'),
      }));
    },
  },
  methods: {
    ...mapActions('chat', ['fetchNewMessages']),
  },
};
</script>
