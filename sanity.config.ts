import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './src/schemaTypes'

// import dotenv from 'dotenv';
// dotenv.config();

export default defineConfig({
  basePath: '/admin',
  name: 'default',
  title: 'codeway',
  // projectId: process.env.SANITY_PROJECT_ID!,
  // dataset: process.env.SANITY_DATASET!,
  projectId: 'y0hw9umf',
  dataset: 'courses',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});