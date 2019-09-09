<template>
  <div class="box shadow">
    <div class="container">
      <h1>{{ getCurrentDate }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyComponent",
  computed: {
    getCurrentDate() {
      const browserLocale =
        navigator.languages && navigator.languages.length
          ? navigator.languages[0]
          : navigator.language;
      const intlDateTime = new Intl.DateTimeFormat(browserLocale, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      });

      return intlDateTime.format(new Date());
    }
  }
};
</script>
<style scoped>
.box {
  box-shadow: 0 5px 10px 0 rgba(0,0,0,0.2);
  transition: 0.3s linear;
}

.box:hover {
  box-shadow: 0 10px 20px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 4px 18px;
}
</style>