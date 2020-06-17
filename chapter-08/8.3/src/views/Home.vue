<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ $t('title.application') }}</h1>
    <hr/>
    <h3>
      {{
        $t('text.userRepository', {repo: $tc('text.repository', repositories, {n: repositories})})
      }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    repositories() {
      return Math.floor(Math.random() * 10);
    },
  },
};
</script>
