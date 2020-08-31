<template>
  <a-layout-header class="header-bread">
    <a-breadcrumb class="bread-menu">
      <a-breadcrumb-item>User</a-breadcrumb-item>
      <a-breadcrumb-item>Registration Form</a-breadcrumb-item>
    </a-breadcrumb>
  </a-layout-header>
</template>
<script>
export default {
  name: 'TopBar',
};
</script>
<style scoped>
  .header-bread {
    background-color: #f0f2f5;
  }

  .bread-menu {
    margin: 16px 0;
  }
</style>
