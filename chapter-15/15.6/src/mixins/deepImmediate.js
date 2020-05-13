export default {
  watch: {
    myDeepField: {
      handler(newVal, oldVal) {
        console.log('Using Immediate Call, and Deep Watch');
        console.log('New Value', newVal);
        console.log('Old Value', oldVal);
      },
      deep: true,
      immediate: true,
    },
  },
  beforeMount() {
    this.myDeepField = {
      foo: 'bar',
      buz: {
        biz: false,
      },
    };
  },
  mounted() {
    this.myDeepField.buz.biz = true;
  },
  data: () => ({
    myDeepField: '',
  }),
};
