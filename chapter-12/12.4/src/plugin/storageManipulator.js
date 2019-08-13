/* eslint no-param-reassign: 0 */

const generateStorageObject = (windowStorage, options) => ({
  set(key, value) {
    windowStorage.setItem(
      key,
      options.useSaveFunction
        ? options.onSave(value)
        : value,
    );
  },

  get(key) {
    const item = windowStorage.getItem(key);
    return options.useRetrieveFunction ? options.onRetrieve(item) : item;
  },

  remove(key) {
    windowStorage.removeItem(key);
  },

  clear() {
    windowStorage.clear();
  },
});

const defaultOption = {
  useSaveFunction: true,
  useRetrieveFunction: true,
  onSave: value => JSON.stringify(value),
  onRetrieve: value => JSON.parse(value),
};

export default {
  install(Vue, option) {
    const baseOptions = {
      ...defaultOption,
      ...option,
    };

    Vue.prototype
      .$localStorage = generateStorageObject(
        window.localStorage,
        baseOptions,
      ); // We will add later this code

    Vue.prototype
      .$sessionStorage = generateStorageObject(
        window.localStorage,
        baseOptions,
      ); // We will add later this code
  },
};
