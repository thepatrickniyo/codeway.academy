// sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './src/schemaTypes'

export default defineConfig({
  basePath: '/admin',
  name: 'default',
  title: 'codeway',
  projectId: 'y0hw9umf',
  dataset: 'courses',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
  
})