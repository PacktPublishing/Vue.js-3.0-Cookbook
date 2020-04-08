<template>
  <div class="q-pa-md row justify-center">
    <q-chat-message
      v-for="message in currentMessages"
      :ref="`${message.id}`"
      :key="message.id"
      :stamp="message.createdAt"
      :text="[message.content]"
      :sent="getUser.id === message.authorId"
      :name="message.author.name"
      :avatar="getAvatar(message.author.avatar, message.author.name)"
      class="col-12"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { date } from 'quasar';
import getAvatar from 'src/mixins/getAvatar';

export default {
  name: 'Messages',
  mixins: [getAvatar],
  data: () => ({
    timeout: null,
  }),
  async beforeMount() {
    this.timeout = setInterval(async () => {
      await this.fetchNewMessages({
        conversationId: this.$route.params.id,
      });
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timeout);
    this.timeout = null;
  },
  watch: {
    currentMessages: {
      handler(newValue, oldValue) {
        if (newValue.length > oldValue.length) {
          setTimeout(() => {
            const lastMessage = [...newValue].pop();
            const [{ $el: el }] = this.$refs[`${lastMessage.id}`];
            el.scrollIntoView();
          }, 250);
        }
      },
      deep: true,
      immediate: false,
    },
  },
  computed: {
    ...mapGetters('chat', ['getChatMessages']),
    ...mapGetters('user', ['getUser']),
    currentMessages() {
      const messages = this.getChatMessages(this.$route.params.id);
      if (!messages.length) return [];
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
