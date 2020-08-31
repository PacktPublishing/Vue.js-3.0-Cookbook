<template>
  <v-app>
    <top-bar
      @open-drawer="drawer = !drawer"
    />
    <drawer-menu
      v-model="drawer"
    />
    <v-content>
      <slot/>
    </v-content>
  </v-app>
</template>
<script>
import TopBar from './TopBar.vue';
import DrawerMenu from './DrawerMenu.vue';

export default {
  name: 'Layout',
  components: {
    DrawerMenu,
    TopBar,
  },
  data: () => ({
    drawer: false,
  }),
};
</script>
