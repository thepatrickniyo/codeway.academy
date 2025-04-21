// sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

export default defineConfig({
  name: 'project-name',
  title: 'Project Name',
  projectId: 'y0hw9umf',
  dataset: 'courses',
  plugins: [structureTool()],
  schema: {
    types: [
      /* your content types here*/
    ],
  },
})