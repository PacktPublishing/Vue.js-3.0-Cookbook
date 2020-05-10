<template>
  <div id="app">
    <random-cat />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    RandomCat: () => import('./components/RandomCat'),
  },
};
</script>
