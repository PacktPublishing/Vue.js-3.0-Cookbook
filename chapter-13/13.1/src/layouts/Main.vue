<template>
  <div>
    <top-menu />
    <slot/>
    <footer-section />
  </div>
</template>
<script>
import FooterSection from '../components/Footer.vue';
import TopMenu from '../components/TopMenu.vue';

export default {
  name: 'MainLayout',
  components: {
    TopMenu,
    FooterSection,
  },
};
</script>
