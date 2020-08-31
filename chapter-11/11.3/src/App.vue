<template>
  <div id="app">
    <input
      v-model="inputMask"
      v-input-mask="'###-###-###'"
      type="text"
    >
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    inputMask: '',
  }),
};
</script>
