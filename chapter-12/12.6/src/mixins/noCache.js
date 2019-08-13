export default {
  data: () => ({
    noCacheField: '',
  }),
  computed: {
    noCache: {
      get() {
        return this.noCacheField;
      },
      cache: false,
    },
  },
};
