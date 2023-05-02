const dotenv = require('dotenv');
// Load environment variables from .env file
dotenv.config();

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
// import styleImport from 'vite-plugin-style-import';
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    /* styleImport({
      libs: [{
        libraryName: 'bootstrap',
        esModule: true,
        resolveStyle: (name) => `bootstrap/dist/css/${name}.min.css`,
        resolveComponent: (name) => `bootstrap/dist/js/${name}.min.js`,
      }],
    }), */
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
      ],
    },
  },
})
