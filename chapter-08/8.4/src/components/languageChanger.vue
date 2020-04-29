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
import axios from 'axios';
import { defineNewLanguage, getLoadedLanguage } from '@/i18n';

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
        {
          name: 'Spanish',
          i18n: 'es',
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
    async changeLanguage(lang) {
      const languages = getLoadedLanguage();

      if (languages.includes(lang)) {
        defineNewLanguage(lang);
        return false;
      }

      const { data: newLang } = await axios.get(`/api/language/${lang}`);
      defineNewLanguage(lang, newLang);
      return true;
    },
  },
};
</script>
