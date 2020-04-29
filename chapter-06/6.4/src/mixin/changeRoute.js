export default {
  methods: {
    async changeRoute(name, id = 0) {
      await this.$router.push({
        name,
        params: {
          id,
        },
      });
    },
  }
}
