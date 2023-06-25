// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    devProxy: {
      '/proxy/rust': {
        target: 'egn.ddns.net:1080',
        prependPath: true,
        changeOrigin: true,
      },
    }
  }

})
