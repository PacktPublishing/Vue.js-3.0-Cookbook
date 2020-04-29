<template>
  <label>
    {{ $t('label.languageSelect') }}
    <select
      v-model="lang"
    >
      <option
        v-for="(lang, index) in languages"
        :key="index + Math.random()"
        :value="lang.i18n"
        :selected="$i18n.lolcale === lang.i18n"
      >
        {{ lang.name }}
      </option>
    </select>
  </label>
</template>
<script>
export default {
  name: 'LanguageChangerSelect',
  data: () => ({
    lang: 'en',
  }),
  computed: {
    languages() {
      return [
        {
          name: 'English',
          i18n: 'en',
        },
        {
          name: 'Português (Brasil)',
          i18n: 'pt-BR',
        },
      ];
    },
  },
  watch: {
    lang(lang) {
      this.changeLanguage(lang);
    },
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>
