import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssImport from 'postcss-import';
import postcssNesting from 'postcss-nesting';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        postcssImport(),
        postcssNesting(),
      ],
    },
  },
  server: {
    hmr: {
      overlay: false, // Disable error overlay in the browser
    },
  },
});
