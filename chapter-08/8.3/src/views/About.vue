<template>
  <div class="about">
    <h1>{{ $d(new Date(), 'short') }}</h1>
    <h2>{{ $d(new Date(), 'long') }}</h2>
    <hr/>
    <h3>{{ $n(random * 1000, 'currency') }}</h3>
    <h3>{{ $n(random * 1000000, 'numbers') }}</h3>
  </div>
</template>
<script>
export default {
  computed: {
    random() {
      return Math.random();
    },
  },
};
</script>
