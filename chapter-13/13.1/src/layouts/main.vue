<template>
  <div>
    <top-menu />
    <slot/>
    <footer-section />
  </div>
</template>
<script>
import FooterSection from '../components/footer.vue';
import TopMenu from '../components/topMenu.vue';

export default {
  name: 'MainLayout',
  components: {
    TopMenu,
    FooterSection,
  },
};
</script>
