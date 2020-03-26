<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="person"
          :to="{name: 'Edit'}"
        />
        <q-toolbar-title>
          Chat App
        </q-toolbar-title>
        <q-btn
          dense
          flat
          round
          icon="cloud_off"
          @click="logOff"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import {
  signOut,
} from 'driver/auth';

export default {
  name: 'ChatLayout',
  methods: {
    async logOff() {
      await signOut();
      window.location.reload();
    },
  },
};
</script>
