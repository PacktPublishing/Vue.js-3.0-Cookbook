<template>
  <a-layout-sider
    v-model="drawer"
    collapsible
  >
    <div class="logo"/>
    <a-menu
      theme="dark"
      :default-selected-keys="['1']"
      mode="inline"
    >
      <a-menu-item
        v-for="(item,index) in menu"
        :key="index"
      >
        <a-icon
          :type="item.icon"
        />
        <span>{{ item.name }}</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script>
export default {
  name: 'Drawer',
  data: () => ({
    drawer: false,
    menu: [
      {
        name: 'Home',
        icon: 'home',
      },
      {
        name: 'Ant Design Vue',
        icon: 'ant-design',
      },
      {
        name: 'Contact',
        icon: 'mail',
      },
    ],
  }),
};
</script>
