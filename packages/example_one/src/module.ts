import { defineNuxtModule, createResolver, extendPages } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'example_one',
    configKey: 'example_one'
  },
  defaults: {},
  setup() {
    const resolver = createResolver(import.meta.url)
    extendPages(pages => {
      pages.push({
        name: 'ExampleOne',
        path: '/example_one',
        file: resolver.resolve('./runtime/pages/example.vue')
      })
    })
  }
})
