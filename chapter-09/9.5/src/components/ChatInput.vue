<template>
  <q-input
    bottom-slots
    v-model="text"
    label="Mesage"
  >
    <template v-slot:after>
      <q-btn
        round
        flat
        icon="send"/>
    </template>
  </q-input>
</template>

<script>
export default {
  name: 'ChatInput',
  data: () => ({
    text: '',
  }),
};
</script>

<style scoped>

</style>
