export default {
  data: () => ({
    myComputedField: '',
  }),
  computed: {
    field: {
      get() {
        return this.myComputedField;
      },
      set(v) {
        this.myComputedField = v;
      },
    },
  },
};
