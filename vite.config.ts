/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const runtimeEnv = loadEnv(mode, process.cwd(), '');

  return {
    base: './',
    envPrefix: ['VITE_APP_', 'DEFAULT_PRIVATE_KEY_'],
    plugins: [react(), svgr(), viteTsconfigPaths()],
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    },
    optimizeDeps: { exclude: ['fsevents'] },
    build: {
      rollupOptions: {
        external: ['fs/promises'],
        output: {
          experimentalMinChunkSize: 3500,
        },
      },
    },
  };
});
