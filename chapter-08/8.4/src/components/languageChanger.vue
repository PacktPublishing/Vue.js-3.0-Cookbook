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
import axios from 'axios';
import { defineNewLanguage, getLoadedLanguage } from '@/i18n';

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
        {
          name: 'Spanish',
          i18n: 'es',
        },
      ];
    },
  },
  methods: {
    async changeLanguage({ target: { value } }) {
      const languages = getLoadedLanguage();

      if (languages.includes(value)) return false;

      const { data: newLang } = await axios.get(`/api/language/${value}`);
      defineNewLanguage(value, newLang);
      return true;
    },
  },
};
</script>
