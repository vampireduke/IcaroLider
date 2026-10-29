import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';




export default defineConfig({
  base: '/IcaroLider/',
  plugins: [
    react({
      // Tell Babel's parser to enable JSX syntax for all parsed files
      babel: {
        parserOpts: {
          plugins: ['jsx'],
        },
      },
    }),
  ],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
    include: ['vanta','three'],
  },
});
