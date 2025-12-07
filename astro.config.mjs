// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel'
import icon from "astro-icon";
import { loadEnv } from "vite";

const { SANITY_PROJECT_ID, SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV || 'development',
  process.cwd(),
  ""
);

export default defineConfig({
  integrations: [
    tailwind(), 
    sanity({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
      useCdn: false,
      studioBasePath: '/admin',
    }), 
    react(),
    icon()
  ],
  output: 'server',
  adapter: vercel(),
  vite: {
    build: {
      chunkSizeWarningLimit: 1000, // Increase warning limit for SSR builds
    },
  },
});