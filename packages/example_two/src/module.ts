import { defineNuxtModule, createResolver, extendPages } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'example_two',
    configKey: 'example_two'
  },
  defaults: {},
  setup() {
    const resolver = createResolver(import.meta.url)
    extendPages(pages => {
      pages.push({
        name: 'ExampleTwo',
        path: '/example_two',
        file: resolver.resolve('./runtime/pages/example.vue')
      })
    })
  }
})
