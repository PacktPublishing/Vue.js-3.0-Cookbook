<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">{{ $t('menu.home') }}</router-link>
      |
      <router-link to="/about">{{ $t('menu.about') }}</router-link>
    </div>
    <router-view/>
    <language-changer-select/>
  </div>
</template>
<script>
import LanguageChangerSelect from '@/components/languageChanger.vue';

export default {
  components: { LanguageChangerSelect },
};
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
