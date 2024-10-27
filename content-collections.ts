import { defineCollection, defineConfig } from '@content-collections/core';
 
const uiLibs = defineCollection({
  name: 'ui',
  directory: 'src/content/ui-libs',
  include: '**/*.json',
  schema: (z) => ({
    name: z.string(),
    website: z.string(),
    type: z.array(z.string()),
    repository: z.string().optional(),
  }),
  parser: 'json',
});
 
export default defineConfig({
  collections: [uiLibs],
});