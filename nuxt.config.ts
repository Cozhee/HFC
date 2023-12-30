// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Space+Grotesk": {
            wght: [400, 500, 600, 700],
          },
        },
      },
    ],
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
