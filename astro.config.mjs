// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel'
import icon from "astro-icon";
import { loadEnv } from "vite";

// const SANITY_PROJECT_ID = import.meta.env.SANITY_PROJECT_ID;
// const SANITY_DATASET = import.meta.env.SANITY_DATASET;

// const { SANITY_PROJECT_ID, SANITY_DATASET } = loadEnv(
//   process.env.NODE_ENV,
//   process.cwd(),
//   ""
// );

export default defineConfig({
  integrations: [
    tailwind(), 
    sanity({
      // projectId: SANITY_PROJECT_ID,
      // dataset: SANITY_DATASET,
      projectId: 'y0hw9umf',
      dataset: 'courses',
      useCdn: false,
      studioBasePath: '/admin',
    }), 
    react()
  ],
  output: 'server',
  adapter: vercel(),
});