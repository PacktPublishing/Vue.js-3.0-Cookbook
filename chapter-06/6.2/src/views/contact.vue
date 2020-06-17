<template>
  <div class="contact">
    <h1>This is a contact page</h1>
  </div>
</template>
<script>
export default {
  name: 'ContactPage',
  mounted() {
    if (Object.keys(this.$route.params).length) {
      alert(`Hey! I've got some parameter! ${JSON.stringify(this.$route.params)}`);
    }
  },
};
</script>
