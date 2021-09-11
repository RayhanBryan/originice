module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: 'vuetify',
  rules: {
    'vue/html-indent': 'off',
    'vue/script-indent': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren' : 'off',
    'key-spacing': 'off',
    'comma-dangle' : 'off',
    'no-trailing-spaces' : 'off',
    semi : 'off',
    'vue/attributes-order' : 'off',
    'keyword-spacing' : 'off',
    quotes : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
