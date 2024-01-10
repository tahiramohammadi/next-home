import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
  },
    resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
  plugins: [vue(),
    vuetify(),
],
css: {
  preprocessorOptions: {
    scss: {
      // Additional SCSS options go here
    },
  },
}
})