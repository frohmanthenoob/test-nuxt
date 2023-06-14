export default defineNuxtConfig({
  modules: [
    '../packages/example_one/src/module',
    '../packages/example_two/src/module',
    '../packages/admin/src/module'
  ],
  // modules config
  nextExample: {},
  nextAdmin: {}
})
