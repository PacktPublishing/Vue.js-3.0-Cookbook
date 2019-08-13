<template>
  <div id="app">
    <input
      type="text"
      v-input-mask="'###-###-###'"
      v-model="inputMask"
    />
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    inputMask: '',
  }),
};
</script>
