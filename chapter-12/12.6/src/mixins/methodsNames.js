export default {
  watch: {
    myField: 'myFunction',
  },
  data: () => ({
    myField: '',
  }),
  methods: {
    myFunction() {
      console.log('Watcher Using Method Name');
    },
  },
};
