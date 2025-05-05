import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './src/schemaTypes'

// import dotenv from 'dotenv';
// dotenv.config();
const SANITY_PROJECT_ID = import.meta.env.SANITY_PROJECT_ID;
const SANITY_DATASET = import.meta.env.SANITY_DATASET;

export default defineConfig({
  basePath: '/admin',
  name: 'default',
  title: 'codeway',
  // projectId: SANITY_PROJECT_ID,
  // dataset: SANITY_DATASET,
  projectId: 'y0hw9umf',
  dataset: 'courses',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});