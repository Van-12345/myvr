import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  base: '/myvr/', // Đường dẫn gốc của repository GitHub Pages
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        login: './login.html',
        trangchu: './trangchu.html'
      }
    }
  },
  server: {
    https: true,
    host: true
  },
  plugins: [mkcert()]
});
