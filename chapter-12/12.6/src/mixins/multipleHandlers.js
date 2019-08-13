export default {
  watch: {
    myMultiField: [
      'myFunction',
      {
        handler(newVal, oldVal) {
          console.log('Using Immediate Call, and Deep Watch');
          console.log('New Value', newVal);
          console.log('Old Value', oldVal);
        },
        immediate: true,
      },
    ],
  },
  beforeMount() {
    this.myMultiField = 'Foo Bar';
  },
  data: () => ({
    myMultiField: '',
  }),
  methods: {
    myFunction() {
      console.log('Watcher Using Method Name');
    },
  },
};
