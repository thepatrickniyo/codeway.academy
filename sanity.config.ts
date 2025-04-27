import dotenv from 'dotenv';
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './src/schemaTypes'

dotenv.config();

export default defineConfig({
  basePath: '/admin',
  name: 'default',
  title: 'codeway',
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});