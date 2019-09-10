<template>
  <div class="box shadow">
    <div class="container">
      <h1>Today is:</h1>
      <h2>{{ getCurrentDate }}</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "CurrentTime",
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