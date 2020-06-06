<template>
  <a-layout
    style="min-height: 100vh"
  >
    <drawer />
    <a-layout>
      <top-bar />
      <a-layout-content style="margin: 0 16px">
        <div :style="{ padding: '24px', background: '#fff', minHeight: 'auto' }">
          <slot />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Vue.js 3 Cookbook | Ant Design ©2020 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import Drawer from './Drawer.vue';
import TopBar from './TopBar.vue';

export default {
  components: { TopBar, Drawer },
};
</script>
