<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  async created() {
    try {
      await this.$store.dispatch('user/initialLogin');
      this.$router.replace({ name: 'Contacts' });
    } catch (err) {
      this.$router.replace({ name: 'Index' });
    }
  },
};
</script>
