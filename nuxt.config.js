export default {
  target: 'static',
  
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Zeni Konağı - Doğa Seni Çağırıyor',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: 'zeni Konağı, ayder yaylası, ardeşen, rize, karadeniz, fırtına vadisi, çamlıhemşin, konaklama, rize Konaklama' },
      { hid: 'description', name: 'description', content: 'Zeni Konağı Ayder yolu üzerinde Fırtına Vadisi nin en güzel manzaralarından birini konuklarına sunan şık ve samimi bir tesis. Bölgenin mimari yapısıyla uyum içinde inşa edilmiş olan Dere Evi ahşap stiliyle lüks ve geleneği birbiriyle buluşturuyor.' },
      { name: 'google-site-verification', content:"4h62bC8npNR1yew0o7OQf257eSUHc8EO7cAUKETkMDM"},
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  googleAnalytics: {
    id: 'UA-226876835-1'
  },
}
