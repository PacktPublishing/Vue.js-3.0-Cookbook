<template>
  <pre>
    {{ jsonData }}
  </pre>
</template>
<script>
export default {
  name: 'AsyncComponent',
  data: () => ({
    jsonData: {},
  }),
  async mounted() {
    this.jsonData = await this.fetchJson();
  },
  methods: {
    async fetchJson() {
      const userId = Math.round(Math.random());
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

      return response.json();
    },
  },
};
</script>
