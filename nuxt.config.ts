import glsl from 'vite-plugin-glsl'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    rootId: 'Atlas-Squad',
    head: {
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/fav/favicon.ico', sizes: '16x16 24x24 32x32 48x48 64x64' },
        { rel: 'apple-touch-icon', href: '/fav/apple-touch-icon-57x57.png', sizes: '57x57' },
        { rel: 'apple-touch-icon-precomposed', href: '/fav/apple-touch-icon-57x57.png', sizes: '57x57' },
        { rel: 'apple-touch-icon', href: '/fav/apple-touch-icon-72x72.png', sizes: '72x72' },
        { rel: 'apple-touch-icon', href: '/fav/apple-touch-icon-114x114.png', sizes: '114x114' },
        { rel: 'apple-touch-icon', href: '/fav/apple-touch-icon-120x120.png', sizes: '120x120' },
        { rel: 'apple-touch-icon', href: '/fav/apple-touch-icon-144x144.png', sizes: '144x144' },
        { rel: 'apple-touch-icon', href: '/fav/apple-touch-icon-152x152.png', sizes: '152x152' },
        { rel: 'msapplication-TileImage', href: '/fav/mstile-144x144.png' }
      ],
      bodyAttrs: {
        class: '-atlas-squad'
      }
    },
    pageTransition: { name: '-t-page' }
  },
  css: [
    '~/node_modules/lite-youtube-embed/src/lite-yt-embed.css'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  plugins: [
    '~/plugins/globalClass.plugin.ts',
  ],
  modules: [
    'nuxt-gtag',
    '@nuxtjs/apollo',
    'nuxt-lazy-load',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore'],
      },
    ]
  ],
  lazyLoad: {
    images: true,

    loadingClass: '-loading',
    loadedClass: '-loaded',

    directiveOnly: true,

    observerConfig: {
      rootMargin: "0% 0% 100% 0%",
    }
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://1abd10-4e.myshopify.com/api/2024-01/graphql.json',
        httpLinkOptions: {
          headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token":
              "5b5b7b1ace0134d44ca9a8311ff32acd"
          }
        },
      }
    },
  },

  experimental: {
    watcher: 'chokidar'
  },

  vite: {
    plugins: [
      glsl(),
    ],
  },
  router: {
    options: {
      linkActiveClass: '-active',
      linkExactActiveClass: '-exact-active'
    }
  },
  hooks: {
    'pages:extend'(pages) {
      pages.push({
        name: 'user-page',
        path: '/user/:id',
        file: '~/pages/user.vue',
      })
      pages.push({
        name: 'user-tc',
        path: '/user-tc',
        file: '~/pages/user-tc.vue',
      }),
        pages.push({
          name: 'influencer-tc',
          path: '/influencer-tc',
          file: '~/pages/influencer-tc.vue',
        }),

        pages.push({
          name: 'invite-page',
          path: '/invite/:slug',
          file: '~/pages/invite.vue',
        })
      pages.push({
        name: 'landing-page',
        path: '/:slug',
        file: '~/pages/landing.vue',
      })

      pages.push({
        name: 'recruiter-page',
        path: '/recruiter/:slug',
        file: '~/pages/recruiter.vue',
      })

    },
  },
})
