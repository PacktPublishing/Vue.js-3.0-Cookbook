const toCamel = (s) => s.replace(/([-_][a-z])/ig, (c) => c.toUpperCase()
  .replace(/[-_]/g, ''));
const requireModule = require.context('./modules/', false, /^(?!.*test).*\.js$/is);
const modules = {};

requireModule.keys().forEach((fileName) => {
  const moduleName = toCamel(fileName.replace(/(\.\/|\.js)/g, ''));

  modules[moduleName] = {
    namespaced: true,
    ...requireModule(fileName).default,
  };
});

export default modules;
