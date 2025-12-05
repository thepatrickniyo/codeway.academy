// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel'
import icon from "astro-icon";
import { loadEnv } from "vite";

const { SANITY_PROJECT_ID, SANITY_DATASET, ENV } = loadEnv(
  process.env.NODE_ENV || 'development',
  process.cwd(),
  ""
);

const isDevelopment = (ENV || 'development') === 'development';

const integrations = [
  tailwind(), 
  react(),
  icon()
];

// Only include Sanity Studio in development
if (isDevelopment) {
  integrations.push(
    sanity({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
      useCdn: false,
      studioBasePath: '/admin',
    })
  );
}

export default defineConfig({
  integrations,
  output: 'server',
  adapter: vercel(),
});