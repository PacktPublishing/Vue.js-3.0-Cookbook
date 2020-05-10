export default {
  computed: {
    loading() {
      return this.$store.loading;
    },
    error() {
      return this.$store.error;
    },
  },
};
