<template>
  <q-input
    v-model="text"
    bottom-slots
    label="Mesage"
    @keypress.enter="sendMessage"
  >
    <template v-slot:after>
      <q-btn
        round
        flat
        icon="send"
        @click="sendMessage"
      />
    </template>
  </q-input>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ChatInput',
  data: () => ({
    text: '',
  }),
  methods: {
    ...mapActions('chat', ['newMessage', 'fetchNewMessages']),
    async sendMessage() {
      await this.newMessage({
        message: this.text,
        conversationId: this.$route.params.id,
      });

      await this.fetchNewMessages({
        conversationId: this.$route.params.id,
      });

      this.text = '';
    },
  },
};
</script>

<style scoped>

</style>
