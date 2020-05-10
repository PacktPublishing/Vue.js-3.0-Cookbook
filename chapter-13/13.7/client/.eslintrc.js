module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'plugin:vue/strongly-recommended',
  ],
  plugins: [
    'html',
    'vue',
    'unicorn',
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    },
  },
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
  },
}
