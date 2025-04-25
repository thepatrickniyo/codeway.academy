// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import sanity from '@sanity/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    sanity(
      {
        projectId: 'y0hw9umf',
        dataset: 'courses',
        // Set useCdn to false if you're building statically.
        useCdn: false,
        // Access the Studio on your.url/admin
        studioBasePath: '/admin',
        stega: {
          studioUrl: '/admin'
        }
      }
    ), 
    react()],
    output: 'server',
    adapter: vercel(),
});