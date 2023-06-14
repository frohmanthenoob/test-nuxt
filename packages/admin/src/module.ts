import {
  defineNuxtModule,
  createResolver,
  addServerPlugin,
  extendPages,
  addServerHandler,
  addLayout
} from '@nuxt/kit'
import importAntdv from './runtime/server-utils/antdv'

export default defineNuxtModule({
  meta: {
    name: '@text-nuxt/admin',
    configKey: 'nextAdmin',
    compatibility: { nuxt: '^3.0.0' }
  },
  defaults: {},
  hooks: {},
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // pages
    extendPages(pages => {
      pages.push({
        name: 'Admin',
        path: '/admin',
        file: resolver.resolve('./runtime/pages/admin.vue')
      })
    })

    // layouts
    addLayout(
      {
        src: resolver.resolve('./runtime/layouts/admin.vue')
      },
      'admin'
    )

    const menuInfo = { name: 'Admin', path: '/admin' }
    const menu = [menuInfo]
    if (Array.isArray(nuxt.options.appConfig?.menu)) {
      nuxt.options.appConfig.menu.push(menuInfo)
    } else {
      // eslint-disable-next-line no-param-reassign
      nuxt.options.appConfig.menu = menu
    }

    await importAntdv(nuxt)
  }
})
