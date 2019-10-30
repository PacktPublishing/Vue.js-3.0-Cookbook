<template>
  <div class="contact">
    <h1>This is a contact page</h1>
    <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link> |
      <router-link to="/contact">
        Contact
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ContactPage',
};
</script>
