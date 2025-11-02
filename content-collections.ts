import { z } from 'zod';
import { defineCollection, defineConfig } from '@content-collections/core';
 
const libs = defineCollection({
  name: 'libs',
  directory: 'src/content/libs',
  include: '**/*.json',
  schema: z.object({
    name: z.string(),
    website: z.string(),
    logo: z.string().optional(),
    type: z.array(z.string()),
    description: z.string().optional(),
    repository: z.string().optional(),
    tech: z.array(z.enum(['html', 'vanilla', 'react', 'jsx', 'vue', 'next', 'alpine', 'FIXME:check'])),
    cost: z.enum(['free', 'paid', 'freemium']),
    usage: z.array(z.enum(['npm-package', 'copy-paste'])),
    pros: z.string().optional(),
    cons: z.string().optional(),
  }),
  parser: 'json',
});
 
export default defineConfig({
  collections: [libs],
});
