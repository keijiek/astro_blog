// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a schema for each collection you'd like to validate.
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    publishDate: z.date(),
    updateDate: z.date().optional(),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  blog: blogCollection,
};
