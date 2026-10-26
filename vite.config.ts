import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), 'index.html'),
        accessibility: resolve(process.cwd(), 'accessibility/index.html'),
        notFound: resolve(process.cwd(), '404.html'),
        wassalni: resolve(process.cwd(), 'projects/wassalni/index.html'),
        sanou: resolve(process.cwd(), 'projects/sanou-va-bien/index.html'),
        fds: resolve(process.cwd(), 'projects/fds-institut/index.html'),
      },
    },
  },
});
