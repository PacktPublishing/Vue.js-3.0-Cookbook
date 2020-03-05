<template>
  <div class="q-pa-md row justify-center">
    <q-chat-message
      name="me"
      avatar="https://cdn.quasar.dev/img/avatar4.jpg"
      :text="['hey, how are you?']"
      sent
      stamp="7 minutes ago"
      class="col-12"
    />
    <q-chat-message
      name="Jane"
      avatar="https://cdn.quasar.dev/img/avatar3.jpg"
      :text="[`doing fine, how r you?`]"
      stamp="4 minutes ago"
      class="col-12"
    />
  </div>
</template>

<script>
export default {
  name: 'Chat',
};
</script>
