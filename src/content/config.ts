import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        tags: z.array(z.string()),
        category: z.string(),
    }),
});

const notesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        tags: z.array(z.string()),
        category: z.string(),
    }),
});

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.enum(['Content', 'Programming', 'Design', 'Entrepreneurship']),
        image: z.string(),
        websiteUrl: z.string().url().optional(),
        githubUrl: z.string().url().optional(),
        projectPageUrl: z.string(),
    }),
});

export const collections = {
    'blog': blogCollection,
    'notes': notesCollection,
    'projects': projectsCollection,
};
