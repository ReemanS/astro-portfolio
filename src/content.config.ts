import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().transform((str) => {
      const d = new Date(str);
      return new Intl.DateTimeFormat("en", {
        month: "long",
        year: "numeric",
      }).format(d);
    }),
    technologies: z.array(z.string()),
    link: z.string().url().optional(),
    featured: z.boolean().optional(),
    thumbnail: z.string().optional(),
  }),
});

export const collections = { projects };
