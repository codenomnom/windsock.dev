import { defineCollection, defineConfig } from '@content-collections/core';
 
const libs = defineCollection({
  name: 'libs',
  directory: 'src/content/libs',
  include: '**/*.json',
  schema: (z) => ({
    name: z.string(),
    website: z.string(),
    logo: z.string().optional(),
    type: z.array(z.string()),
    repository: z.string().optional(),
    tech: z.array(z.enum(['html', 'vanilla', 'react', 'jsx', 'vue', 'next', 'alpine', 'FIXME:check'])),
    cost: z.enum(['free', 'paid', 'freemium']),
  }),
  parser: 'json',
});
 
export default defineConfig({
  collections: [libs],
});