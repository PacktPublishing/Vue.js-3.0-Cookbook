<template>
  <main-layout>
    <hero-section />
    <user-form />
  </main-layout>
</template>

<script>
import MainLayout from './layouts/main.vue';
import HeroSection from './components/heroSection.vue';
import UserForm from './components/userForm.vue';

export default {
  name: 'App',
  components: {
    UserForm,
    HeroSection,
    MainLayout,
  },
};
</script>
