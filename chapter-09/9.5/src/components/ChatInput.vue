<template>
  <q-input
    bottom-slots
    v-model="text"
    :disable="isLoading"
    label="Mesage"
    @keypress.enter="sendMessage"
  >
    <template v-slot:after>
      <q-btn
        :disable="isLoading"
        round
        flat
        icon="send"
        @click="sendMessage"
      />
    </template>
  </q-input>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ChatInput',
  data: () => ({
    text: '',
  }),
  computed: {
    ...mapGetters('chat', ['isLoading']),
  },
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
