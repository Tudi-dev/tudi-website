import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      client: z.string().optional(),
      caseLabel: z.string().optional(),
      concept: z.string().optional(),
      designer: z.string().optional(),
      challengeHeading: z.string().optional(),
      image: image().optional(),
      logo: image().optional(),
      logoBackground: z.string().optional(),
      gallery: z.array(z.object({ image: image(), caption: z.string() })).default([]),
      tags: z.array(z.string()).default([]),
      date: z.coerce.date(),
      url: z.string().url().optional(),
      featured: z.boolean().default(false),
      lang: z.enum(['en', 'es']),
    }),
})

export const collections = { projects }
