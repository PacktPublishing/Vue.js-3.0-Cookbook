<template>
  <v-app-bar
    color="primary"
    app
    dark
    dense
  >
    <v-app-bar-nav-icon
      @click="$emit('open-drawer')"
    />
    <v-toolbar-title>Vue.JS 3 Cookbook - Packt</v-toolbar-title>
  </v-app-bar>
</template>
<script>
export default {
  name: 'TopBar',
};
</script>
