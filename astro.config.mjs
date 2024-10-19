// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind()],

  env: {
    schema: {
      BACKEND_URL: envField.string({ default: 'http://localhost:3000', context: 'server', access: 'public' }),
    }
  },

  // adapter: vercel()
});