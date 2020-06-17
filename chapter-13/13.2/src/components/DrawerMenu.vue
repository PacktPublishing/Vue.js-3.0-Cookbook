<template>
  <v-navigation-drawer
    :value="value"
    app
    @input="$emit('input', $event)"
  >
    <v-list dense>
      <v-list-item
        v-for="(item, index) in menu"
        :key="index"
        link>
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: 'DrawerMenu',
  props: {
    value: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data: () => ({
    menu: [
      {
        name: 'Home',
        link: '#',
        icon: 'mdi-home',
      },
      {
        name: 'Contact',
        link: '#',
        icon: 'mdi-email',
      },
      {
        name: 'Vuetify',
        link: '#',
        icon: 'mdi-vuetify',
      },
    ],
  }),
};
</script>
