import path from 'path'
import fs from 'fs'

export default {

  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'config' , 'server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'config' ,'server.crt'))
    }
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'static/main.css'
  ],

  plugins: [
    { src: '~/plugins/axios', ssr: true },
  ],

  components: true,

  buildModules: [
    
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  auth: {
    strategies: {
      jwt: {
        provider: 'laravel/jwt',
        url: 'https://api.quwi.com/v2/',
      },
    },
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/'
    },
    plugins: ['~/plugins/auth']
  },

  build: {

  },

  router: {
    middleware: ['auth'],
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  },

  axios: {
    baseURL: 'https://api.quwi.com/v2/',
    mode: 'no-cors',
  },
}
