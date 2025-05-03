// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import sanity from '@sanity/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel'

// import dotenv from 'dotenv';
// dotenv.config();

export default defineConfig({
  integrations: [
    tailwind(), 
    sanity({
      // projectId: process.env.SANITY_PROJECT_ID,
      // dataset: process.env.SANITY_DATASET,
      projectId: 'y0hw9umf',
      dataset: 'courses',
      useCdn: false,
      studioBasePath: '/admin',
      stega: {
        studioUrl: '/admin'
      }
    }), 
    react()
  ],
  output: 'server',
  adapter: vercel(),
});