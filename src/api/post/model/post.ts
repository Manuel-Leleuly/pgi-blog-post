import { z } from 'zod';

export const PostSchema = z.object({
  id: z.string(),
  title: z.string(),
  author: z.string(),
  summary: z.string(),
  category: z.string(),
  content: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string(),
});

export type Post = z.infer<typeof PostSchema>;

export const PostResponseSchema = z.array(PostSchema);

export type PostResponse = z.infer<typeof PostResponseSchema>;

export const CreatePostFormSchema = z.object({
  title: z.string().trim().nonempty({ error: 'Blog Title must not be empty' }),
  author: z.string().trim().nonempty({ error: 'Author must not be empty' }),
  summary: z
    .string()
    .trim()
    .nonempty({ error: 'Blog Summary must not be empty' }),
  category: z.string().trim().nonempty({ error: 'Category must not be empty' }),
  content: z
    .string()
    .trim()
    .nonempty({ error: 'Blog Content must not be empty' }),
});

export type CreatePostForm = z.infer<typeof CreatePostFormSchema>;

export const CreatePostReqBodySchema = PostSchema.omit({
  id: true,
});

export type CreatePostReqBody = z.infer<typeof CreatePostReqBodySchema>;
