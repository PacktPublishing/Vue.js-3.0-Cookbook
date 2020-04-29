<template>
  <label>
    {{ $t('label.languageSelect') }}
    <select
      @change="changeLanguage"
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
  methods: {
    changeLanguage({ target: { value } }) {
      this.$i18n.locale = value;
    },
  },
};
</script>
